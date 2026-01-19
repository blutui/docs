'use client'

import { createContext, useContext, useState, type ReactNode } from 'react'

interface AiSearchContextType {
  open: boolean
  setOpen: (open: boolean) => void
}

const AiSearchContext = createContext<AiSearchContextType | undefined>(undefined)

export function AiSearchProvider({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false)

  //   const toggle = () => setOpen((prev) => !prev)

  return <AiSearchContext.Provider value={{ open, setOpen }}>{children}</AiSearchContext.Provider>
}

export function useAiSearch() {
  const context = useContext(AiSearchContext)
  if (context === undefined) {
    throw new Error('useAiSearch must be used within an AiSearchProvider')
  }
  return context
}
