import Image from "next/image"
import Link from "next/link"
import { Download, ArrowUpRight } from "lucide-react"
import { CopyEmail } from "@/components/CopyEmail"
import archSpaceImg from "@/public/images/architecture-space.jpg"

const socialLinks = [
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
  { label: "Read.cv", href: "#" },
] as const

export default function Contact() {
  return (
    <main className="max-w-[800px] mx-auto pt-32 pb-xxl px-lg">
      <header className="mb-xxl">
        <h1 className="text-5xl md:text-7xl font-headline mb-6 text-on-surface dark:text-dark-on-surface">
          Let&apos;s Collaborate
        </h1>
        <p className="text-xl text-on-surface-variant dark:text-dark-on-surface max-w-[36rem] opacity-70">
          Currently seeking opportunities to build meaningful digital experiences and deliberate
          design systems.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-lg mb-xxl">
        <CopyEmail />

        <Link
          href="#"
          className="group border p-lg flex flex-col justify-between h-[240px] transition-all hover:translate-y-[-4px] hover:border-secondary bg-surface-container border-outline-variant dark:bg-[#221f1d] dark:border-[#3d4947]"
        >
          <div className="flex justify-between items-start">
            <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant dark:text-dark-on-surface opacity-60">
              Address Book
            </span>
            <Download
              size={16}
              className="opacity-40 group-hover:opacity-100 group-hover:text-secondary transition-all text-on-surface-variant dark:text-dark-on-surface"
            />
          </div>
          <div>
            <h2 className="text-2xl font-headline mb-1 text-on-surface dark:text-dark-on-surface">
              Save Contact
            </h2>
            <p className="text-[10px] uppercase font-bold tracking-wider text-on-surface-variant dark:text-dark-on-surface opacity-40">
              Download vCard (.vcf)
            </p>
          </div>
        </Link>
      </div>

      <section className="border-t border-outline-variant pt-xl mb-xxl">
        <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant dark:text-dark-on-surface opacity-40 block mb-8">
          Digital Presence
        </span>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-md">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="flex items-center justify-between p-6 border transition-all hover:bg-secondary/5 hover:border-secondary group border-outline-variant dark:border-[#3d4947]"
            >
              <span className="text-sm font-medium text-on-surface dark:text-dark-on-surface">
                {link.label}
              </span>
              <ArrowUpRight
                size={14}
                className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform text-on-surface-variant dark:text-dark-on-surface"
              />
            </Link>
          ))}
        </div>
      </section>

      <div className="w-full h-[400px] overflow-hidden rounded-sm grayscale opacity-80 border border-outline-variant">
        <Image
          src={archSpaceImg}
          alt="Architecture Space"
          className="w-full h-full object-cover"
        />
      </div>
    </main>
  )
}
