import { ArrowRight, CircleDot, BookOpen, Film } from "lucide-react"

const philosophies = [
  {
    title: "User-Centric Engineering",
    desc: "Technology should empower people. I focus on bridging the gap between complex business logic and intuitive interfaces, ensuring that every feature directly enhances the end-user experience.",
  },
  {
    title: "Uncompromising Quality",
    desc: "Application resilience is non-negotiable. I ensure high performance and maintainability through rigorous unit testing, continuous quality monitoring, and thorough peer reviews.",
  },
  {
    title: "Architectural Integrity",
    desc: "Scalable systems require a strong foundation. I leverage diverse frameworks and cloud infrastructure to design reliable, long-lasting applications from the ground up.",
  },
] as const

const focusAreas = [
  "Frontend Architecture",
  "Full-Stack Integration",
  "Cloud Infrastructure",
  "Agile Team Leadership",
] as const

const hobbies = [
  { icon: CircleDot, label: "Football" },
  { icon: BookOpen, label: "Reading" },
  { icon: Film, label: "Anime" },
] as const

export default function About() {
  return (
    <main className="pt-32 pb-xxl px-lg">
      <div className="max-w-[800px] mx-auto">
        <section className="mb-xxl">
          <div className="max-w-[48rem]">
            <span className="text-xs font-semibold uppercase tracking-widest mb-4 block text-secondary dark:text-dark-primary">
              Software Architect
            </span>
            <h1 className="text-6xl font-headline mb-8">Gerald Bosu Ofori.</h1>
            <p className="text-xl font-body text-on-surface-variant dark:text-dark-on-surface leading-relaxed italic mb-8 opacity-80">
              A dedicated software engineer with a results-driven mindset. I focus on building robust digital applications and scalable solutions, effectively utilizing my skill set to contribute positively to any professional context I am engaged in.
            </p>
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
                Hobbies
              </h2>
              {hobbies.map((p) => (
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
