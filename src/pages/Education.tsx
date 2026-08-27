import { CheckCircle2, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { education, profile } from '../data';
import { useReveal } from '../hooks/useReveal';

type Page = 'home' | 'about' | 'education' | 'skills' | 'contact';

export function Education({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="page-enter pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto max-w-5xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-2xl reveal">
          <p className="mb-3 text-sm font-semibold tracking-widest text-[var(--green)] uppercase">
            Education
          </p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-[var(--ink)] sm:text-5xl">
            My learning journey
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[var(--ink-soft)]">
            From high school to specialized IT training — the path that brought me
            to web development.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-5 top-2 h-full w-px bg-gradient-to-b from-[var(--green)] via-[var(--green)] to-transparent sm:left-6" />

          <div className="space-y-8">
            {education.map((edu) => {
              const isCurrent = edu.status === 'current';
              return (
                <div key={edu.title} className="relative pl-16 sm:pl-20 reveal">
                  {/* Dot */}
                  <div className={`absolute left-0 top-1 flex h-11 w-11 items-center justify-center rounded-full ring-4 ring-white sm:h-12 sm:w-12 ${
                    isCurrent ? 'bg-[var(--green)] text-white' : 'bg-white border-2 border-[var(--green)] text-[var(--green)]'
                  }`}>
                    <GraduationCap className="h-5 w-5" />
                  </div>

                  {/* Card */}
                  <div className="group rounded-2xl border border-[var(--line)] bg-white p-6 transition-all duration-300 hover:border-[var(--green)] hover:shadow-lg hover:shadow-green-900/5 sm:p-7">
                    <div className="flex flex-wrap items-center gap-3">
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--green-mint)] px-3 py-1 text-xs font-semibold text-[var(--forest)]">
                        <Calendar className="h-3.5 w-3.5" />
                        {edu.period}
                      </span>
                      {isCurrent && (
                        <span className="inline-flex items-center gap-1.5 rounded-full bg-[var(--green)] px-3 py-1 text-xs font-semibold text-white">
                          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-white" />
                          Current
                        </span>
                      )}
                      {!isCurrent && (
                        <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--line)] px-3 py-1 text-xs font-semibold text-[var(--muted)]">
                          <CheckCircle2 className="h-3.5 w-3.5" />
                          Completed
                        </span>
                      )}
                    </div>

                    <h3 className="mt-4 font-display text-xl font-bold text-[var(--ink)]">
                      {edu.title}
                    </h3>
                    <p className="mt-1 flex items-center gap-1.5 text-sm font-medium text-[var(--green)]">
                      <MapPin className="h-4 w-4" />
                      {edu.subtitle}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[var(--ink-soft)]">
                      {edu.description}
                    </p>

                    {/* PNC detail badges */}
                    {isCurrent && (
                      <div className="mt-5 grid grid-cols-3 gap-3">
                        <div className="rounded-xl bg-[var(--bg-soft)] p-3 text-center">
                          <p className="text-xs text-[var(--muted)]">Generation</p>
                          <p className="mt-1 font-display text-sm font-bold text-[var(--primary)]">{profile.generation}</p>
                        </div>
                        <div className="rounded-xl bg-[var(--bg-soft)] p-3 text-center">
                          <p className="text-xs text-[var(--muted)]">Class</p>
                          <p className="mt-1 font-display text-sm font-bold text-[var(--primary)]">{profile.className}</p>
                        </div>
                        <div className="rounded-xl bg-[var(--bg-soft)] p-3 text-center">
                          <p className="text-xs text-[var(--muted)]">Major</p>
                          <p className="mt-1 font-display text-sm font-bold text-[var(--primary)]">{profile.major}</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 rounded-3xl border border-[var(--line)] bg-[var(--bg-soft)] p-8 text-center reveal">
          <h3 className="font-display text-xl font-bold text-[var(--ink)]">
            Curious about what I can build?
          </h3>
          <p className="mt-2 text-sm text-[var(--ink-soft)]">
            My education is hands-on — see the projects I have created along the way.
          </p>
          <button
            onClick={() => onNavigate('skills')}
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-[var(--green)] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[var(--forest)]"
          >
            View My Projects
          </button>
        </div>
      </div>
    </section>
  );
}
