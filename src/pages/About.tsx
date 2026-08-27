import { Target, Heart, BookOpen, Rocket } from 'lucide-react';
import { profile, learning } from '../data';
import { useReveal } from '../hooks/useReveal';

type Page = 'home' | 'about' | 'education' | 'skills' | 'contact';

export function About({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const ref = useReveal<HTMLElement>();

  const cards = [
    { icon: BookOpen, title: 'My Background', body: profile.background },
    { icon: Heart, title: 'My Interests', body: profile.interests },
    { icon: Target, title: 'My Career Goal', body: profile.goal },
  ];

  return (
    <section ref={ref} className="page-enter pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-2xl reveal">
          <p className="mb-3 text-sm font-semibold tracking-widest text-[var(--green)] uppercase">
            About Me
          </p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-[var(--ink)] sm:text-5xl">
            Get to know me
          </h1>
        </div>

        {/* Profile card + intro */}
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          {/* Profile card */}
          <div className="lg:col-span-4 reveal">
            <div className="sticky top-24 overflow-hidden rounded-3xl border border-[var(--line)] bg-white shadow-lg shadow-green-900/5">
              <div className="relative h-32 bg-gradient-to-r from-[var(--primary)] to-[var(--forest)] animated-gradient">
                <div className="absolute -bottom-12 left-1/2 -translate-x-1/2">
                  <div className="overflow-hidden rounded-2xl border-4 border-white shadow-lg">
                    <img
                      src={profile.photo}
                      alt={profile.name}
                      className="h-24 w-24 object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="px-6 pb-6 pt-16 text-center">
                <h2 className="font-display text-xl font-bold text-[var(--ink)]">{profile.name}</h2>
                <p className="mt-1 text-sm text-[var(--green)]">{profile.title}</p>
                <div className="mt-5 space-y-3 text-left text-sm">
                  <div className="flex justify-between border-b border-[var(--line-soft)] pb-2">
                    <span className="text-[var(--muted)]">School</span>
                    <span className="font-medium text-[var(--ink)]">PNC</span>
                  </div>
                  <div className="flex justify-between border-b border-[var(--line-soft)] pb-2">
                    <span className="text-[var(--muted)]">Major</span>
                    <span className="font-medium text-[var(--ink)]">{profile.major}</span>
                  </div>
                  <div className="flex justify-between border-b border-[var(--line-soft)] pb-2">
                    <span className="text-[var(--muted)]">Generation</span>
                    <span className="font-medium text-[var(--ink)]">{profile.generation}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[var(--muted)]">Class</span>
                    <span className="font-medium text-[var(--ink)]">{profile.className}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Intro + cards */}
          <div className="lg:col-span-8">
            <div className="rounded-3xl bg-[var(--bg-soft)] p-7 reveal sm:p-9">
              <h3 className="font-display text-xl font-bold text-[var(--ink)]">Who I Am</h3>
              <p className="mt-4 text-base leading-relaxed text-[var(--ink-soft)]">
                {profile.longBio}
              </p>
            </div>

            <div className="mt-6 grid gap-5 sm:grid-cols-3">
              {cards.map((c) => (
                <div
                  key={c.title}
                  className="group rounded-2xl border border-[var(--line)] bg-white p-6 transition-all duration-300 hover:border-[var(--green)] hover:shadow-lg hover:shadow-green-900/5 reveal"
                >
                  <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[var(--green-mint)] text-[var(--green)] transition-colors duration-300 group-hover:bg-[var(--green)] group-hover:text-white">
                    <c.icon className="h-5 w-5" />
                  </span>
                  <h4 className="font-display text-base font-bold text-[var(--ink)]">{c.title}</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* What I am learning */}
        <div className="mt-20">
          <div className="mb-10 text-center reveal">
            <p className="mb-3 text-sm font-semibold tracking-widest text-[var(--green)] uppercase">
              Currently
            </p>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-[var(--ink)] sm:text-4xl">
              What I Am Learning
            </h2>
            <p className="mt-4 text-[var(--ink-soft)]">
              The skills and technologies I am actively studying at PNC.
            </p>
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {learning.map((item, i) => (
              <div
                key={item.title}
                className="group relative rounded-2xl border border-[var(--line)] bg-white p-6 transition-all duration-300 hover:border-[var(--green)] hover:shadow-lg hover:shadow-green-900/5 reveal"
              >
                <span className="font-display text-5xl font-extrabold text-[var(--bg-tint)] transition-colors duration-300 group-hover:text-[var(--green-mint)]">
                  0{i + 1}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-[var(--ink)]">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--ink-soft)]">{item.body}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 flex flex-col items-center justify-between gap-4 rounded-3xl bg-gradient-to-r from-[var(--primary)] to-[var(--forest)] px-8 py-10 text-center sm:flex-row sm:text-left reveal">
          <div className="flex items-center gap-4">
            <Rocket className="h-10 w-10 shrink-0 text-white/90" />
            <div>
              <h3 className="font-display text-xl font-bold text-white">Want to see my work?</h3>
              <p className="mt-1 text-sm text-white/80">Check out the skills and projects I have been building.</p>
            </div>
          </div>
          <button
            onClick={() => onNavigate('skills')}
            className="shrink-0 rounded-full bg-white px-6 py-3 text-sm font-semibold text-[var(--primary)] transition-all duration-300 hover:bg-[var(--green)] hover:text-white"
          >
            View Skills & Projects
          </button>
        </div>
      </div>
    </section>
  );
}
