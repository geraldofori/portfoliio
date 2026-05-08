import { SOCIAL_LINKS } from '@/lib/constants'

export function Footer() {
  return (
    <footer className="w-full border-t mt-xxl bg-surface-container border-outline-variant dark:bg-dark-surface dark:border-[#3d4947]">
      <div className="max-w-[1200px] mx-auto px-lg py-xl flex flex-col md:flex-row justify-between items-center gap-md">
        <div className="text-xs font-semibold uppercase tracking-widest opacity-60">
          &copy; 2024 Gerald Bosu Ofori. Built with intentionality.
        </div>
        <div className="flex gap-lg">
          {SOCIAL_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
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
