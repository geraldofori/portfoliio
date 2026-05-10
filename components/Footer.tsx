import { NAME, SOCIAL_LINKS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="w-full border-t mt-xxl bg-surface-container border-outline-variant dark:bg-dark-surface dark:border-[#3d4947]">
      <div className="max-w-[1200px] mx-auto px-lg py-lg flex flex-col md:flex-row justify-between items-center gap-md">
        <div className="text-xs font-semibold uppercase tracking-widest opacity-60 text-center md:text-left">
          &copy; 2024 {NAME}.
        </div>
        <div className="flex gap-lg">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-secondary transition-colors text-sm opacity-80"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
