'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { Sparkles, Search, Loader2, Square } from 'lucide-react'
import Markdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism'
import { cn } from '../../lib/cn'
import { buttonVariants } from '../ui/button'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import { useAiSearch } from './ai-search-context'

export interface VectorStoreSearchResultsPage {
  object: 'vector_store.search_results.page'
  search_query: string
  response: string
  data: VectorStoreSearchResult[]
  has_more: boolean
  next_page: string | null
}

export interface VectorStoreSearchResult {
  file_id: string
  filename: string
  score: number
  attributes: VectorStoreSearchResultAttributes
  content: VectorStoreSearchContent[]
}

export interface VectorStoreSearchResultAttributes {
  timestamp: number
  folder: string
  filename: string
}

export interface VectorStoreSearchContent {
  id: string
  type: 'text'
  text: string
}

export function AiSearchOverlay() {
  const { open, setOpen, query, setQuery, response, setResponse, isLoading, setIsLoading } = useAiSearch()
  const bottomRef = useRef<HTMLDivElement>(null)
  const scrollContainerRef = useRef<HTMLDivElement>(null)
  const [shouldAutoScroll, setShouldAutoScroll] = useState(true)
  const abortControllerRef = useRef<AbortController | null>(null)

  const handleOpenChange = (open: boolean) => {
    setOpen(open)
    if (!open) {
      setQuery('')
      setResponse('')
      handleStop()
    }
  }

  const handleStop = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
      abortControllerRef.current = null
      setIsLoading(false)
    }
  }

  const handleScroll = () => {
    if (!scrollContainerRef.current) return
    const { scrollTop, scrollHeight, clientHeight } = scrollContainerRef.current
    const isAtBottom = scrollHeight - scrollTop - clientHeight <= 100
    setShouldAutoScroll(isAtBottom)
  }

  useEffect(() => {
    if ((response || isLoading) && shouldAutoScroll) {
      bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [response, isLoading, shouldAutoScroll])

  const runSearch = async (searchQuery: string) => {
    if (!searchQuery.trim()) return

    if (abortControllerRef.current) {
      abortControllerRef.current.abort()
    }

    const controller = new AbortController()
    abortControllerRef.current = controller

    setIsLoading(true)
    setResponse('') // Clear previous response
    setShouldAutoScroll(true)

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: searchQuery }),
        signal: controller.signal,
      })

      if (!res.ok) {
        throw new Error(res.statusText)
      }

      const reader = res.body?.getReader()
      if (!reader) return

      const decoder = new TextDecoder()
      let buffer = ''

      while (true) {
        const { done, value } = await reader.read()
        if (done) break

        const text = decoder.decode(value, { stream: true })
        buffer += text

        const lines = buffer.split('\n')
        // Keep the last line in the buffer as it might be incomplete
        buffer = lines.pop() || ''

        for (const line of lines) {
          const trimmed = line.trim()
          if (!trimmed || !trimmed.startsWith('data: ')) continue

          try {
            const jsonStr = trimmed.slice(6) // Remove "data: " prefix
            const data = JSON.parse(jsonStr)
            if (data.response) {
              setResponse((prev) => prev + data.response)
            }
          } catch (e) {
            console.error('Failed to parse stream line:', line, e)
          }
        }
      }
    } catch (error: any) {
      if (error.name === 'AbortError') {
        console.log('AI search aborted by user')
      } else {
        console.error('Failed to fetch AI response', error)
        setResponse('Sorry, something went wrong.')
      }
    } finally {
      if (abortControllerRef.current === controller) {
        setIsLoading(false)
        abortControllerRef.current = null
      }
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    runSearch(query)
  }

  const handleSuggestionClick = (suggestion: string) => {
    setQuery(suggestion)
    runSearch(suggestion)
  }

  return (
    <Sheet open={open} onOpenChange={handleOpenChange} modal={false}>
      <SheetContent
        side="right"
        className="flex h-full w-[85%] flex-col p-0 md:max-w-100"
        aria-describedby={undefined}
        overlayClassName="bg-transparent backdrop-blur-none"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Ask Blutui AI</SheetTitle>
        </SheetHeader>

        <div ref={scrollContainerRef} onScroll={handleScroll} className="flex-1 overflow-y-auto px-4 pt-6">
          {response ? (
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <Markdown
                remarkPlugins={[remarkGfm]}
                components={{
                  a({ node, href, children, ...props }: any) {
                    if (!href) return children
                    if (href.startsWith('http')) {
                      return (
                        <a href={href} target="_blank" rel="noopener noreferrer" {...props}>
                          {children}
                        </a>
                      )
                    }
                    return (
                      <Link href={href.startsWith('/') || href.startsWith('#') ? href : `/${href}`} {...props}>
                        {children}
                      </Link>
                    )
                  },
                  code({ node, inline, className, children, ...props }: any) {
                    const match = /language-(\w+)/.exec(className || '')
                    return !inline && match ? (
                      <SyntaxHighlighter
                        className="not-prose rounded-md"
                        {...props}
                        style={vscDarkPlus}
                        language={match[1] === 'canvas' ? 'twig' : match[1]}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    ) : (
                      <code {...props} className={className}>
                        {children}
                      </code>
                    )
                  },
                }}
              >
                {response}
              </Markdown>
            </div>
          ) : !isLoading ? (
            <div className="flex h-[99%] flex-col items-center justify-end space-y-8">
              <div className="flex w-full flex-col gap-2">
                <p className="text-md pl-1 font-medium">Suggestions</p>

                {['What is a Canopy element?', 'What is a Collection?', 'How do I create a form?'].map((suggestion) => (
                  <button
                    key={suggestion}
                    onClick={() => handleSuggestionClick(suggestion)}
                    className="text-muted-foreground hover:text-fd-primary hover:bg-fd-primary/5 rounded-lg border p-2 px-3 text-left text-sm transition-colors"
                  >
                    {suggestion}
                  </button>
                ))}
              </div>
            </div>
          ) : null}

          {isLoading && !response && (
            <div className="text-fd-muted-foreground flex animate-pulse items-center gap-2 pt-4 text-sm">
              <Loader2 className="size-4 animate-spin" />
              Thinking...
            </div>
          )}
          <div ref={bottomRef} className="h-px w-full" />
        </div>

        <div className="relative px-4 py-2">
          {isLoading && (
            <div className="absolute -top-7 left-1/2 -translate-x-1/2">
              <button
                type="button"
                onClick={handleStop}
                className="text-foreground flex h-8 items-center gap-2 rounded-md border bg-neutral-50 px-3 text-xs shadow-sm hover:bg-neutral-50/50 dark:bg-neutral-900 dark:hover:bg-neutral-900/50"
              >
                <Loader2 className="text-fd-primary size-4 animate-spin" />
                Stop generating
              </button>
            </div>
          )}
          <form onSubmit={handleSubmit} className="relative">
            <div className="bg-fd-secondary/20 ring-offset-background focus-within:ring-ring flex items-center rounded-lg border px-3 focus-within:ring-1">
              <Sparkles className="text-fd-primary/80 size-5 shrink-0" />
              <textarea
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault()
                    e.currentTarget.form?.requestSubmit()
                  }
                }}
                placeholder="Ask a question..."
                className="placeholder:text-muted-foreground flex h-12 w-full resize-none bg-transparent px-3 py-3 text-sm focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
                autoFocus
              />
              <button
                type="submit"
                disabled={isLoading || !query.trim()}
                className={cn(buttonVariants({ color: 'secondary', size: 'icon-sm' }), 'shrink-0')}
              >
                <Search className="size-4" />
              </button>
            </div>
          </form>
        </div>
      </SheetContent>
    </Sheet>
  )
}

export function AiSearch() {
  const { open, setOpen, setResponse, setQuery } = useAiSearch()

  const handleOpenChange = (open: boolean) => {
    setOpen(open)
    if (!open) {
      setQuery('')
      setResponse('')
    }
  }
  return (
    <button
      className="border-fd-primary text-fd-primary hover:bg-fd-primary/5 hover:text-fd-primary/80 inline-flex items-center gap-2 rounded-full border p-1.5 px-3"
      aria-label="AI Search"
      onClick={() => handleOpenChange(!open)}
    >
      <Sparkles className="size-4" />
      <div className="hidden text-sm 2xl:flex">Ask Blutui AI</div>
    </button>
  )
}
