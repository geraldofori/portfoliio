'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Moon, Sun, Menu } from 'lucide-react'
import { useTheme } from './ThemeProvider'
import { NAV_ITEMS } from '@/lib/constants'

export function Navbar() {
  const { darkMode, setDarkMode } = useTheme()
  const pathname = usePathname()

  return (
    <nav className="w-full sticky top-0 z-50 border-b backdrop-blur-md bg-background/80 border-surface-container dark:bg-dark-surface/80">
      <div className="max-w-[1200px] mx-auto px-lg py-md flex justify-between items-center">
        <Link
          href="/"
          className="text-2xl font-bold tracking-tighter text-on-surface dark:text-dark-on-surface"
        >
          {darkMode ? 'ARCHITECT.LOG' : 'Gerald Bosu Ofori'}
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {NAV_ITEMS.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-semibold uppercase tracking-widest hover:text-secondary transition-colors ${
                  isActive
                    ? 'text-secondary border-b-2 border-secondary pb-1'
                    : 'text-on-surface-variant dark:text-dark-on-surface'
                }`}
              >
                {item.label}
              </Link>
            )
          })}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="hover:text-secondary transition-colors text-on-surface-variant dark:text-dark-on-surface"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="text-on-surface-variant dark:text-dark-on-surface"
            aria-label="Toggle dark mode"
          >
            {darkMode ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <Menu size={24} className="text-on-surface-variant dark:text-dark-on-surface" />
        </div>
      </div>
    </nav>
  )
}
