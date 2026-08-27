import { ArrowDown, ArrowRight, Github, Linkedin, Mail, Send, Sparkles } from 'lucide-react';
import { profile, stats, contact } from '@/data';
import { useReveal } from '@/hooks/useReveal';

type Page = 'home' | 'about' | 'education' | 'skills' | 'contact';

export function Home({ onNavigate }: { onNavigate: (page: Page) => void }) {
  const ref = useReveal<HTMLElement>();

  return (
    <section ref={ref} className="page-enter">
      {/* Hero */}
      <div className="relative overflow-hidden pt-28 pb-20 lg:pt-36 lg:pb-28">
        {/* Background */}
        <div
          aria-hidden
          className="absolute inset-0 bg-gradient-to-br from-[var(--bg-tint)] via-white to-[var(--bg-soft)]"
        />
        <div
          aria-hidden
          className="float-blob absolute -top-20 -right-20 h-72 w-72 rounded-full bg-[var(--green-mint)] opacity-50 blur-3xl"
        />
        <div
          aria-hidden
          className="float-blob absolute bottom-0 left-1/4 h-64 w-64 rounded-full bg-[var(--green)] opacity-10 blur-3xl"
          style={{ animationDelay: '4s' }}
        />

        <div className="relative mx-auto max-w-6xl px-5 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Text */}
            <div className="order-2 lg:order-1">
              <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/80 px-4 py-2 text-sm text-[var(--forest)] shadow-sm ring-1 ring-[var(--line)] reveal">
                <Sparkles className="h-4 w-4 text-[var(--green)]" />
                Available for internships & projects
              </div>

              <h1 className="font-display text-4xl font-extrabold leading-[1.1] tracking-tight text-[var(--ink)] sm:text-5xl lg:text-6xl reveal">
                {profile.name}
              </h1>
              <p className="mt-3 font-display text-xl font-medium text-[var(--green)] sm:text-2xl reveal">
                {profile.title}
              </p>
              <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--ink-soft)] sm:text-lg reveal">
                {profile.shortBio}
              </p>

              <div className="mt-8 flex flex-wrap gap-3 reveal">
                <button
                  onClick={() => onNavigate('skills')}
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--green)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/25 transition-all duration-300 hover:bg-[var(--forest)] hover:shadow-xl hover:shadow-green-600/30"
                >
                  View My Projects
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                <button
                  onClick={() => onNavigate('contact')}
                  className="inline-flex items-center gap-2 rounded-full border-2 border-[var(--line)] bg-white px-6 py-3.5 text-sm font-semibold text-[var(--ink)] transition-all duration-300 hover:border-[var(--green)] hover:text-[var(--green)]"
                >
                  Contact Me
                </button>
              </div>

              {/* Social icons */}
              <div className="mt-8 flex gap-3 reveal">
                <a href={contact.github} target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line)] bg-white text-[var(--ink-soft)] shadow-sm transition-all duration-300 hover:border-[var(--green)] hover:text-[var(--green)] hover:shadow-md" aria-label="GitHub">
                  <Github className="h-5 w-5" />
                </a>
                <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line)] bg-white text-[var(--ink-soft)] shadow-sm transition-all duration-300 hover:border-[var(--green)] hover:text-[var(--green)] hover:shadow-md" aria-label="LinkedIn">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={`mailto:${contact.email}`} className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line)] bg-white text-[var(--ink-soft)] shadow-sm transition-all duration-300 hover:border-[var(--green)] hover:text-[var(--green)] hover:shadow-md" aria-label="Email">
                  <Mail className="h-5 w-5" />
                </a>
                <a href="#" className="flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--line)] bg-white text-[var(--ink-soft)] shadow-sm transition-all duration-300 hover:border-[var(--green)] hover:text-[var(--green)] hover:shadow-md" aria-label="Telegram">
                  <Send className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Photo */}
            <div className="order-1 lg:order-2 flex justify-center reveal">
              <div className="relative">
                <div className="absolute -inset-3 rounded-[2rem] bg-gradient-to-br from-[var(--green-mint)] to-[var(--bg-tint)] opacity-70 blur-sm" />
                <div className="relative overflow-hidden rounded-[1.75rem] border-4 border-white shadow-2xl shadow-green-900/15">
                  <img
                    src={profile.photo}
                    alt={`Portrait of ${profile.name}`}
                    className="aspect-[4/5] w-72 object-cover sm:w-80 lg:w-[22rem]"
                  />
                </div>
                {/* Floating badge */}
                <div className="absolute -bottom-4 -left-4 rounded-2xl bg-white px-4 py-3 shadow-xl ring-1 ring-[var(--line)]">
                  <p className="font-display text-sm font-bold text-[var(--primary)]">{profile.major}</p>
                  <p className="text-xs text-[var(--muted)]">Gen {profile.generation} · {profile.className}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="border-y border-[var(--line)] bg-white">
        <div className="mx-auto grid max-w-6xl grid-cols-2 divide-x divide-[var(--line-soft)] px-5 sm:grid-cols-4 lg:px-8">
          {stats.map((s) => (
            <div key={s.label} className="px-4 py-8 text-center reveal">
              <p className="font-display text-3xl font-extrabold text-[var(--green)]">{s.value}</p>
              <p className="mt-1 text-sm text-[var(--muted)]">{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Intro highlight */}
      <div className="py-20 lg:py-28">
        <div className="mx-auto max-w-4xl px-5 text-center lg:px-8">
          <p className="mb-4 text-sm font-semibold tracking-widest text-[var(--green)] uppercase reveal">
            Welcome
          </p>
          <h2 className="font-display text-3xl font-bold leading-snug tracking-tight text-[var(--ink)] sm:text-4xl reveal">
            Turning ideas into clean, working websites — one line of code at a time.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-[var(--ink-soft)] reveal">
            I am currently studying Web Programming at {profile.school}. I believe
            great websites are simple, fast, and built with the user in mind. Every
            project I build teaches me something new.
          </p>
          <button
            onClick={() => onNavigate('about')}
            className="group mt-8 inline-flex items-center gap-2 text-sm font-semibold text-[var(--green)] reveal"
          >
            Learn more about me
            <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
