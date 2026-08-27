import { ExternalLink, Code2, Palette, Database, Wrench, Layers } from 'lucide-react';
import { skills, projects } from '../data';
import { useReveal } from '../hooks/useReveal';

type Page = 'home' | 'about' | 'education' | 'skills' | 'contact';

const categoryIcon: Record<string, typeof Code2> = {
  Frontend: Code2,
  Design: Palette,
  Backend: Database,
  Programming: Code2,
  Tools: Wrench,
};

const categoryColor: Record<string, string> = {
  Frontend: 'from-emerald-500 to-green-600',
  Design: 'from-teal-500 to-emerald-600',
  Backend: 'from-green-600 to-emerald-700',
  Programming: 'from-emerald-600 to-teal-600',
  Tools: 'from-teal-600 to-green-600',
};

export function SkillsProjects({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="page-enter pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-2xl reveal">
          <p className="mb-3 text-sm font-semibold tracking-widest text-[var(--green)] uppercase">
            Skills & Projects
          </p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-[var(--ink)] sm:text-5xl">
            What I know & what I've built
          </h1>
        </div>

        {/* Skills section */}
        <div className="mb-20">
          <div className="mb-8 flex items-center gap-3 reveal">
            <Layers className="h-6 w-6 text-[var(--green)]" />
            <h2 className="font-display text-2xl font-bold text-[var(--ink)]">My Skills</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {skills.map((skill) => {
              const Icon = categoryIcon[skill.category] ?? Code2;
              return (
                <div
                  key={skill.name}
                  className="group rounded-2xl border border-[var(--line)] bg-white p-5 transition-all duration-300 hover:border-[var(--green)] hover:shadow-lg hover:shadow-green-900/5 reveal"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <span className={`flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${categoryColor[skill.category]} text-white`}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="font-display text-base font-bold text-[var(--ink)]">{skill.name}</span>
                    </div>
                    <span className="text-sm font-semibold text-[var(--green)]">{skill.level}%</span>
                  </div>
                  <div className="mt-4 h-2 overflow-hidden rounded-full bg-[var(--bg-tint)]">
                    <div
                      className="skill-fill h-full rounded-full bg-gradient-to-r from-[var(--green)] to-[var(--forest)]"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-[var(--muted)]">{skill.category}</p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Projects section */}
        <div>
          <div className="mb-8 flex items-center gap-3 reveal">
            <Code2 className="h-6 w-6 text-[var(--green)]" />
            <h2 className="font-display text-2xl font-bold text-[var(--ink)]">My Projects</h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {projects.map((p) => (
              <article
                key={p.name}
                className="group flex flex-col overflow-hidden rounded-2xl border border-[var(--line)] bg-white transition-all duration-300 hover:border-[var(--green)] hover:shadow-xl hover:shadow-green-900/10 reveal"
              >
                {/* Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.name}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                {/* Body */}
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-display text-lg font-bold text-[var(--ink)]">{p.name}</h3>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-[var(--ink-soft)]">
                    {p.description}
                  </p>

                  {/* Tech tags */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {p.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full bg-[var(--green-mint)] px-2.5 py-1 text-xs font-medium text-[var(--forest)]"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Button */}
                  <a
                    href="#"
                    onClick={(e) => e.preventDefault()}
                    className="group/btn mt-5 inline-flex items-center gap-2 self-start rounded-full border border-[var(--line)] px-4 py-2.5 text-sm font-semibold text-[var(--ink)] transition-all duration-300 hover:border-[var(--green)] hover:bg-[var(--green)] hover:text-white"
                  >
                    View Project
                    <ExternalLink className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </article>
            ))}
          </div>

          {/* Note */}
          <p className="mt-6 text-center text-xs text-[var(--muted)] reveal">
            Project links are placeholders — replace them with your live project URLs when ready.
          </p>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-[var(--primary)] to-[var(--forest)] p-8 text-center reveal">
          <h3 className="font-display text-xl font-bold text-white">Like what you see?</h3>
          <p className="mt-2 text-sm text-white/80">
            I am always open to talking about projects, internships, or collaboration.
          </p>
          <button
            onClick={() => onNavigate('contact')}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--primary)] transition-all duration-300 hover:bg-[var(--green)] hover:text-white"
          >
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  );
}
