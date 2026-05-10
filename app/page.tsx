import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import archImg from "@/public/images/architecture.jpg"

export default function Home() {
  return (
    <main className="max-w-[1200px] mx-auto px-lg pt-32 pb-xxl">
      <section className="mb-xxl max-w-[56rem]">
        <span className="text-xs font-semibold uppercase tracking-[0.2em] mb-4 block text-secondary dark:text-dark-primary">
          Software Engineer & Architect
        </span>
        <h1 className="text-5xl md:text-7xl font-headline leading-[1.1] mb-xl tracking-tight">
          Building minimalist, high-performance systems for{" "}
          <span className="italic font-normal">deep thought</span>.
        </h1>
        <p className="text-xl md:text-2xl font-body max-w-[42rem] mb-xl text-on-surface-variant dark:text-dark-on-surface opacity-80">
          I specialize in crafting digital tools that prioritize intentionality over noise. Currently
          building at the intersection of aesthetic rigor and technical performance.
        </p>
        <div className="flex gap-6">
          <Link
            href="/projects"
            className="px-10 py-4 font-semibold uppercase tracking-widest text-xs transition-all transform hover:-translate-y-1 bg-primary text-white dark:bg-dark-primary dark:text-[#003732]"
          >
            View Selected Work
          </Link>
        </div>
      </section>

      <section className="mt-xxl border-t pt-xxl border-outline-variant">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl items-center">
          <div>
            <h2 className="text-3xl font-headline italic mb-6">
              &ldquo;Engineering is not merely about writing code; it is the act of establishing a
              rigid framework for fluid ideas.&rdquo;
            </h2>
            <p className="text-on-surface-variant dark:text-dark-on-surface opacity-70 leading-relaxed mb-8">
              Based in Accra, building globally. Focused on scalable architectures and intentional
              user interfaces. I bridge the gap between complex systemic requirements and intuitive
              user experiences.
            </p>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 font-semibold text-xs uppercase tracking-widest border-b border-current pb-1 hover:text-secondary transition-colors"
            >
              More about my approach <ArrowRight size={14} />
            </Link>
          </div>
          <div className="aspect-[4/3] overflow-hidden rounded-sm grayscale hover:grayscale-0 transition-all duration-700 opacity-90 dark:opacity-40">
            <Image
              src={archImg}
              alt="Brutalist Architecture"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>
    </main>
  )
}
