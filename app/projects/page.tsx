import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { projects } from "@/lib/projects"

export default function Projects() {
  return (
    <main className="max-w-[1200px] mx-auto px-lg pt-32 pb-xxl">
      <header className="mb-xxl max-w-[48rem]">
        <h1 className="text-4xl font-headline mb-lg">Selected Projects</h1>
        <p className="text-lg opacity-70 italic font-serif">
          A curation of digital frameworks, identity systems, and user interfaces designed with
          structural honesty.
        </p>
      </header>

      <div className="flex flex-col gap-xxl">
        {projects.map((project, i) => (
          <section
            key={project.id}
            className={`pt-xxl ${i === 0 ? "pt-0" : ""}`}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
              <div className={i % 2 === 0 ? "order-2 md:order-1" : "order-2"}>
                <h2 className="text-3xl font-headline mt-sm mb-md">{project.title}</h2>
                <p className="text-on-surface-variant dark:text-dark-on-surface mb-lg max-w-[32rem] leading-relaxed">
                  {project.desc}
                </p>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 font-semibold text-xs tracking-widest uppercase border-b border-current pb-1 hover:text-secondary transition-all"
                >
                  View live project <ArrowUpRight size={14} />
                </Link>
              </div>
              <div
                className={`relative ${i % 2 === 0 ? "order-1 md:order-2" : "order-1"} aspect-[16/10] overflow-hidden rounded-sm group bg-surface-container-high`}
              >
                <Image
                  src={`https://api.microlink.io/?url=${project.url}&screenshot=true&embed=screenshot.url`}
                  alt={project.title}
                  fill
                  className="object-cover grayscale hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                />
              </div>
            </div>
          </section>
        ))}
      </div>
    </main>
  )
}
