'use client'
import { type ComponentProps } from 'react'
import { useAiSearch } from '../../../ai/ai-search-context'

export function TOCWrapper(props: ComponentProps<'div'>) {
  const { open } = useAiSearch()

  if (open) return null

  return <div {...props} />
}
