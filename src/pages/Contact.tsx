import { useState } from 'react';
import { Mail, Phone, Send, Github, Linkedin, Check, AlertCircle, MapPin } from 'lucide-react';
import { contact, profile } from '../data';
import { useReveal } from '../hooks/useReveal';

type Status = 'idle' | 'error' | 'sent';

export function Contact() {
  const ref = useReveal<HTMLElement>();
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setStatus('error');
      return;
    }
    setStatus('sent');
    setForm({ name: '', email: '', message: '' });
  };

  const field =
    'w-full rounded-xl border border-[var(--line)] bg-[var(--bg-soft)] px-4 py-3 text-sm text-[var(--ink)] placeholder:text-[var(--muted)] transition-all focus:border-[var(--green)] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[var(--green)]/20';

  const contactItems = [
    {
      icon: Mail,
      label: 'Email',
      value: contact.email,
      href: `mailto:${contact.email}`,
    },
    {
      icon: Phone,
      label: 'Phone',
      value: `${contact.phone} (placeholder)`,
      href: `tel:${contact.phone.replace(/\s/g, '')}`,
    },
    {
      icon: Send,
      label: 'Telegram',
      value: `${contact.telegram} (placeholder)`,
      href: '#',
    },
    {
      icon: Github,
      label: 'GitHub',
      value: 'github.com/thidaonchu',
      href: contact.github,
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      value: 'linkedin.com/in/thidaonchu',
      href: contact.linkedin,
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Phnom Penh, Cambodia',
      href: '#',
    },
  ];

  return (
    <section ref={ref} className="page-enter pt-28 pb-20 lg:pt-36 lg:pb-28">
      <div className="mx-auto max-w-6xl px-5 lg:px-8">
        {/* Header */}
        <div className="mb-14 max-w-2xl reveal">
          <p className="mb-3 text-sm font-semibold tracking-widest text-[var(--green)] uppercase">
            Contact
          </p>
          <h1 className="font-display text-4xl font-extrabold tracking-tight text-[var(--ink)] sm:text-5xl">
            Let's get in touch
          </h1>
          <p className="mt-4 text-base leading-relaxed text-[var(--ink-soft)]">
            Have a question, a project idea, or an internship opportunity? I would
            love to hear from you. Fill out the form or reach me directly.
          </p>
        </div>

        <div className="grid gap-8 lg:grid-cols-12 lg:gap-10">
          {/* Contact info cards */}
          <div className="lg:col-span-5">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith('http') ? '_blank' : undefined}
                  rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="group flex items-center gap-4 rounded-2xl border border-[var(--line)] bg-white p-4 transition-all duration-300 hover:border-[var(--green)] hover:shadow-lg hover:shadow-green-900/5 reveal"
                >
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[var(--green-mint)] text-[var(--green)] transition-colors duration-300 group-hover:bg-[var(--green)] group-hover:text-white">
                    <item.icon className="h-5 w-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="text-xs font-medium text-[var(--muted)]">{item.label}</p>
                    <p className="truncate text-sm font-semibold text-[var(--ink)]">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Note */}
            <div className="mt-4 rounded-2xl bg-[var(--bg-soft)] p-5 reveal">
              <p className="text-xs leading-relaxed text-[var(--muted)]">
                Phone and Telegram are marked as placeholders — replace them with your
                real contact details before sharing this site.
              </p>
            </div>
          </div>

          {/* Contact form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-[var(--line)] bg-white p-6 shadow-lg shadow-green-900/5 sm:p-8 reveal"
            >
              <h2 className="font-display text-xl font-bold text-[var(--ink)]">Send me a message</h2>
              <p className="mt-1 text-sm text-[var(--ink-soft)]">
                I will get back to you as soon as I can.
              </p>

              <div className="mt-6 space-y-5">
                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[var(--ink)]">Name</span>
                  <input
                    type="text"
                    value={form.name}
                    onChange={(e) => {
                      setForm({ ...form, name: e.target.value });
                      if (status !== 'idle') setStatus('idle');
                    }}
                    className={field}
                    placeholder="Your full name"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[var(--ink)]">Email</span>
                  <input
                    type="email"
                    value={form.email}
                    onChange={(e) => {
                      setForm({ ...form, email: e.target.value });
                      if (status !== 'idle') setStatus('idle');
                    }}
                    className={field}
                    placeholder="you@example.com"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-medium text-[var(--ink)]">Message</span>
                  <textarea
                    rows={5}
                    value={form.message}
                    onChange={(e) => {
                      setForm({ ...form, message: e.target.value });
                      if (status !== 'idle') setStatus('idle');
                    }}
                    className={`${field} resize-none`}
                    placeholder="Tell me about your project, question, or opportunity…"
                  />
                </label>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
                <button
                  type="submit"
                  className="group inline-flex items-center gap-2 rounded-full bg-[var(--green)] px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-green-600/25 transition-all duration-300 hover:bg-[var(--forest)] hover:shadow-xl"
                >
                  {status === 'sent' ? (
                    <>
                      <Check className="h-4 w-4" />
                      Message sent!
                    </>
                  ) : (
                    <>
                      Send Message
                      <Send className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </>
                  )}
                </button>

                {status === 'error' && (
                  <p className="flex items-center gap-1.5 text-sm text-red-600">
                    <AlertCircle className="h-4 w-4" />
                    Please fill in all fields.
                  </p>
                )}
                {status === 'sent' && (
                  <p className="text-sm text-[var(--green)]">
                    Thank you, {profile.name.split(' ')[0]} will reply soon.
                  </p>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
