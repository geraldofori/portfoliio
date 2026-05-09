import Image from "next/image"
import { ArrowRight, CircleDot, BookOpen, Film } from "lucide-react"

const PORTRAIT_URL =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuC7mm7HkXPUWPfHB4AOGav1ZqiN72RkkAKLeG55--O8h0VYkcEfrIFX3WtPwLsRHWVC1B_clMrdlYm0q7oWDbrld3H9b12-4o1IF11ZsbholYLefB2z99_lghZVQYdMJ7a3LELs88dbRdT0CBOVdd8OykMXtmZo7p7qQ6yWj6sfGSzDCdv509eQOKH9yrZiydcFCyqt9-I4FP-NJxO29q6vu1kiSvsTXAQM2PP0GkIErp0XoYA71X2j_WKRuhaLFwBfISQIE9LnPL8"

const philosophies = [
  {
    title: "Zen Minimalism",
    desc: "Code is a liability until it is proven an asset. My approach centers on extreme reduction—stripping away complexity until only the essential logic remains.",
  },
  {
    title: "Performance First",
    desc: "Architecting modern dashboards and high-availability microservices with a non-negotiable focus on speed and resilience.",
  },
  {
    title: "Intellectual Rigor",
    desc: "Every line of code is a decision. Deep research and structural planning precede any implementation, ensuring long-term maintainability.",
  },
] as const

const focusAreas = [
  "Distributed Databases",
  "DevOps Automation",
  "System Security",
  "UI/UX Psychology",
] as const

const pursuits = [
  { icon: CircleDot, label: "Tactical Geometry (Football)" },
  { icon: BookOpen, label: "Stoic Philosophy (Reading)" },
  { icon: Film, label: "Visual Narrative (Anime)" },
] as const

export default function About() {
  return (
    <main className="pt-32 pb-xxl px-lg">
      <div className="max-w-[800px] mx-auto">
        <section className="mb-xxl border-b border-outline-variant pb-xxl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-xl items-end">
            <div className="md:col-span-7">
              <span className="text-xs font-semibold uppercase tracking-widest mb-4 block text-secondary dark:text-dark-primary">
                System Architect
              </span>
              <h1 className="text-6xl font-headline mb-8">Gerald Bosu Ofori.</h1>
              <p className="text-xl font-body text-on-surface-variant dark:text-dark-on-surface leading-relaxed italic mb-8 opacity-80">
                Engineering digital frameworks with structural integrity and cinematic precision. I
                build systems that don&apos;t just function&mdash;they endure.
              </p>
            </div>
            <div className="md:col-span-5 aspect-[4/5] bg-surface-container overflow-hidden rounded-sm">
              <Image
                src={PORTRAIT_URL}
                alt="Gerald Bosu Ofori"
                width={400}
                height={500}
                className="w-full h-full object-cover grayscale brightness-90"
              />
            </div>
          </div>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-xl mb-xxl">
          <div>
            <h2 className="text-3xl font-headline mb-8 border-l-4 pl-6 border-primary dark:border-dark-primary">
              Technical Philosophy
            </h2>
            <div className="space-y-10">
              {philosophies.map((p) => (
                <div key={p.title}>
                  <h3 className="text-xs font-semibold uppercase tracking-widest mb-2 text-secondary dark:text-dark-primary">
                    {p.title}
                  </h3>
                  <p className="text-on-surface-variant dark:text-dark-on-surface leading-relaxed text-sm opacity-70">
                    {p.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-xl">
            <div className="p-8 border border-outline-variant dark:border-[#3d4947] bg-surface-container dark:bg-[#221f1d]">
              <h2 className="text-xs font-semibold uppercase tracking-widest border-b border-outline-variant pb-4 mb-6">
                Areas of Focus
              </h2>
              <ul className="space-y-4 text-sm font-medium">
                {focusAreas.map((area) => (
                  <li
                    key={area}
                    className="flex justify-between items-center group cursor-default text-on-surface dark:text-dark-on-surface"
                  >
                    {area}{" "}
                    <ArrowRight
                      size={14}
                      className="group-hover:translate-x-1 transition-transform"
                    />
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-4">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-on-surface-variant dark:text-dark-on-surface opacity-60">
                Extracurricular Pursuits
              </h2>
              {pursuits.map((p) => (
                <div
                  key={p.label}
                  className="flex items-center gap-4 p-4 border border-outline-variant rounded-sm"
                >
                  <p.icon size={20} className="text-on-surface dark:text-dark-on-surface" />
                  <span className="text-sm font-medium text-on-surface dark:text-dark-on-surface">
                    {p.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
