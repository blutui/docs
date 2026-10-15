'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

import { cn } from 'lib/utils'

interface PromptBlockProps {
  /** Label for the toggle while the prompt is hidden. */
  showLabel?: string
  /** Label for the toggle while the prompt is visible. */
  hideLabel?: string
  children: React.ReactNode
}

/**
 * Wraps a code block so its contents stay collapsed until the reader expands it.
 * The title bar and copy button of the code block remain visible, so the prompt
 * can be copied without reading it first.
 */
export function PromptBlock({ showLabel = 'Show prompt', hideLabel = 'Hide prompt', children }: PromptBlockProps) {
  const [open, setOpen] = useState(false)

  return (
    <div className="my-4">
      <div className={cn('*:my-0 [&_figure]:rounded-b-none', !open && '[&_[role=region]]:hidden')}>{children}</div>
      <button
        type="button"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        className="text-fd-muted-foreground hover:text-fd-accent-foreground bg-fd-card -mt-px flex h-9.5 w-full items-center justify-center gap-2 rounded-b-xl border border-t-0 px-4 text-sm font-medium shadow-sm transition-colors"
      >
        {open ? hideLabel : showLabel}
        <ChevronDown className={cn('size-3.5 transition-transform', open && 'rotate-180')} />
      </button>
    </div>
  )
}
