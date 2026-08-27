import { ArrowUp, Github, Linkedin, Mail, Send } from 'lucide-react';
import { navLinks, profile, contact } from '@/data';

type Page = 'home' | 'about' | 'education' | 'skills' | 'contact';

export function Footer({ onNavigate }: { onNavigate: (page: Page) => void }) {
  return (
    <footer className="border-t border-[var(--line)] bg-[var(--bg-soft)]">
      <div className="mx-auto max-w-6xl px-5 py-14 lg:px-8">
        <div className="flex flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="max-w-xs">
            <button onClick={() => onNavigate('home')} className="flex items-center gap-2.5">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--forest)] font-display text-sm font-bold text-white">
                {profile.initials}
              </span>
              <span className="font-display text-lg font-semibold tracking-tight text-[var(--ink)]">
                {profile.name}
              </span>
            </button>
            <p className="mt-4 text-sm leading-relaxed text-[var(--ink-soft)]">
              {profile.title} · {profile.school}
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href={contact.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] text-[var(--ink-soft)] transition-all hover:border-[var(--green)] hover:text-[var(--green)]"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] text-[var(--ink-soft)] transition-all hover:border-[var(--green)] hover:text-[var(--green)]"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${contact.email}`}
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] text-[var(--ink-soft)] transition-all hover:border-[var(--green)] hover:text-[var(--green)]"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] text-[var(--ink-soft)] transition-all hover:border-[var(--green)] hover:text-[var(--green)]"
                aria-label="Telegram"
              >
                <Send className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-[var(--muted)] uppercase">
              Pages
            </p>
            <ul className="space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.page}>
                  <button
                    onClick={() => onNavigate(l.page)}
                    className="link-underline text-sm text-[var(--ink-soft)] hover:text-[var(--primary)]"
                  >
                    {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 text-xs font-semibold tracking-widest text-[var(--muted)] uppercase">
              Contact
            </p>
            <ul className="space-y-2.5 text-sm text-[var(--ink-soft)]">
              <li>{contact.email}</li>
              <li>{contact.phone} (placeholder)</li>
              <li>Telegram: {contact.telegram} (placeholder)</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 border-t border-[var(--line)] pt-6 sm:flex-row sm:items-center">
          <p className="text-xs text-[var(--muted)]">
            © {new Date().getFullYear()} {profile.name}. Built with passion for learning.
          </p>
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="group inline-flex items-center gap-2 text-xs font-medium text-[var(--muted)] hover:text-[var(--green)]"
          >
            Back to top
            <ArrowUp className="h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
