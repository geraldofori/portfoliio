'use client'

import { createContext, useContext, useEffect, useState, type ReactNode } from 'react'

type ThemeContextType = {
  darkMode: boolean
  setDarkMode: (value: boolean) => void
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

function getInitialDarkMode(): boolean {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('darkMode') === 'true'
  }
  return false
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [darkMode, setDarkMode] = useState(getInitialDarkMode)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', darkMode)
    localStorage.setItem('darkMode', String(darkMode))
  }, [darkMode])

  return (
    <ThemeContext.Provider value={{ darkMode, setDarkMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  const context = useContext(ThemeContext)
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider')
  }
  return context
}
