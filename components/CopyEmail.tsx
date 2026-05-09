'use client'

import { useState } from 'react'
import { Copy } from 'lucide-react'
import { EMAIL } from '@/lib/constants'

export function CopyEmail() {
  const [copied, setCopied] = useState(false)

  const copyEmail = () => {
    navigator.clipboard.writeText(EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div
      onClick={copyEmail}
      className="group relative border p-lg flex flex-col justify-between h-[240px] cursor-pointer transition-all hover:translate-y-[-4px] bg-surface-container border-outline-variant dark:bg-[#221f1d] dark:border-[#3d4947]"
    >
      <div className="flex justify-between items-start">
        <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant dark:text-dark-on-surface opacity-60">
          Direct Channel
        </span>
        <Copy
          size={16}
          className="opacity-40 group-hover:opacity-100 group-hover:text-secondary transition-all text-on-surface-variant dark:text-dark-on-surface"
        />
      </div>
      <div>
        <h2 className="text-2xl font-headline mb-1 text-on-surface dark:text-dark-on-surface">
          {EMAIL}
        </h2>
        <p className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant dark:text-dark-on-surface opacity-40">
          Click to copy address
        </p>
      </div>
      {copied && (
        <div className="absolute inset-0 bg-secondary/10 backdrop-blur-sm flex items-center justify-center pointer-events-none">
          <span className="text-[10px] font-bold uppercase tracking-widest bg-background dark:bg-dark-surface px-4 py-2 border border-secondary text-secondary">
            Copied to Clipboard
          </span>
        </div>
      )}
    </div>
  )
}
