'use client'

import { useEffect, useRef, useState } from 'react'
import { Sparkles, Search, Loader2 } from 'lucide-react'
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

  const handleOpenChange = (open: boolean) => {
    setOpen(open)
    if (!open) {
      setQuery('')
      setResponse('')
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setIsLoading(true)
    setResponse('') // Clear previous response
    setShouldAutoScroll(true)

    try {
      const res = await fetch('/api/ai', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
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
    } catch (error) {
      console.error('Failed to fetch AI response', error)
      setResponse('Sorry, something went wrong.')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Sheet open={open} onOpenChange={handleOpenChange} modal={false}>
      <SheetContent
        side="right"
        className="flex h-full max-w-[364.5px] flex-col p-0 md:max-w-125"
        aria-describedby={undefined}
        overlayClassName="bg-transparent backdrop-blur-none"
        onInteractOutside={(e) => e.preventDefault()}
      >
        <SheetHeader className="sr-only">
          <SheetTitle>Ask Blutui AI</SheetTitle>
        </SheetHeader>

        <div ref={scrollContainerRef} onScroll={handleScroll} className="flex-1 overflow-y-auto px-6 pt-6">
          {response ? (
            <div className="prose prose-sm dark:prose-invert max-w-none">
              <Markdown
                remarkPlugins={[remarkGfm]}
                components={{
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
            <div className="text-muted-foreground flex h-[99%] flex-col items-center justify-center space-y-4 text-center opacity-50">
              <p className="text-md font-medium">How can I help you with Blutui today?</p>
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

        <div className="bg-fd-background border-t p-4">
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

export function AiSearchModal() {
  const { setOpen } = useAiSearch()

  return (
    <button
      className="border-fd-primary text-fd-primary hover:bg-fd-primary/5 hover:text-fd-primary/80 inline-flex items-center gap-2 rounded-full border p-1.5 px-3"
      aria-label="AI Search"
      onClick={() => setOpen(true)}
    >
      <Sparkles className="size-4" />
      <div className="hidden text-sm 2xl:flex">Ask Blutui AI</div>
    </button>
  )
}
