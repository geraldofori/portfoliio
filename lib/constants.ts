export const EMAIL = "hello@geraldofori.com"
export const NAME = "Gerald Bosu Ofori"
export const TAGLINE = "Software Engineer & Architect"

export const NAV_ITEMS = [
  { label: "Work", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const

export const SOCIAL_LINKS = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Email", href: `mailto:${EMAIL}` },
  { label: "Read.cv", href: "#" },
] as const
