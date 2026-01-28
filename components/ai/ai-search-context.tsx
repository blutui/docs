'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

interface AiSearchContextType {
  open: boolean
  setOpen: (open: boolean) => void
  query: string
  setQuery: (query: string) => void
  response: string
  setResponse: React.Dispatch<React.SetStateAction<string>>
  isLoading: boolean
  setIsLoading: (isLoading: boolean) => void
}

const AiSearchContext = createContext<AiSearchContextType | undefined>(undefined)

export function AiSearchProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [response, setResponse] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  return (
    <AiSearchContext.Provider
      value={{
        open,
        setOpen,
        query,
        setQuery,
        response,
        setResponse,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </AiSearchContext.Provider>
  )
}

export function useAiSearch() {
  const context = useContext(AiSearchContext)
  if (context === undefined) {
    throw new Error('useAiSearch must be used within an AiSearchProvider')
  }
  return context
}
