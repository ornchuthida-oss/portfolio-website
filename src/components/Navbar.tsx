import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { navLinks, profile } from '../data';

type Page = 'home' | 'about' | 'education' | 'skills' | 'contact';

export function Navbar({
  current,
  onNavigate,
}: {
  current: Page;
  onNavigate: (page: Page) => void;
}) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const go = (page: Page) => {
    onNavigate(page);
    setOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
        scrolled
          ? 'bg-white/90 backdrop-blur-lg border-b border-[var(--line)] shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 lg:px-8">
        <button
          onClick={() => go('home')}
          className="flex items-center gap-2.5"
          aria-label="Go to home"
        >
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-[var(--primary)] to-[var(--forest)] font-display text-sm font-bold text-white shadow-md shadow-green-900/20">
            {profile.initials}
          </span>
          <span className="hidden font-display text-base font-semibold tracking-tight text-[var(--ink)] sm:block">
            {profile.name}
          </span>
        </button>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 md:flex">
          {navLinks.map((link) => (
            <li key={link.page}>
              <button
                onClick={() => go(link.page)}
                className={`rounded-lg px-3.5 py-2 text-sm font-medium transition-all duration-300 ${
                  current === link.page
                    ? 'bg-[var(--bg-tint)] text-[var(--primary)]'
                    : 'text-[var(--ink-soft)] hover:text-[var(--primary)] hover:bg-[var(--bg-soft)]'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => go('contact')}
          className="hidden rounded-full bg-[var(--green)] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-green-600/25 transition-all duration-300 hover:bg-[var(--forest)] hover:shadow-lg hover:shadow-green-600/30 md:block"
        >
          Get in touch
        </button>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--line)] text-[var(--ink)] md:hidden"
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div
        className={`overflow-hidden bg-white border-t border-[var(--line)] transition-all duration-400 md:hidden ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <ul className="flex flex-col gap-1 px-5 py-3">
          {navLinks.map((link) => (
            <li key={link.page}>
              <button
                onClick={() => go(link.page)}
                className={`w-full rounded-lg px-4 py-3 text-left text-sm font-medium transition-colors ${
                  current === link.page
                    ? 'bg-[var(--bg-tint)] text-[var(--primary)]'
                    : 'text-[var(--ink-soft)] hover:bg-[var(--bg-soft)]'
                }`}
              >
                {link.label}
              </button>
            </li>
          ))}
          <li>
            <button
              onClick={() => go('contact')}
              className="mt-1 w-full rounded-lg bg-[var(--green)] px-4 py-3 text-center text-sm font-semibold text-white"
            >
              Get in touch
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}
