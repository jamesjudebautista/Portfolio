import { useState, type ReactElement } from 'react'

// =====================================================================
// Types
// =====================================================================
interface ContactLink {
  href: string
  label: string
  value: string
  external: boolean
  icon: ReactElement
}

// =====================================================================
// Data — contact links
// =====================================================================
const contactLinks: ContactLink[] = [
  {
    href: 'mailto:jamesjudebautista@gmail.com',
    label: 'Email',
    value: 'jamesjudebautista@gmail.com',
    external: false,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
      </svg>
    ),
  },
  {
    href: 'https://www.linkedin.com/in/james-jude-bautista-a863528a/',
    label: 'LinkedIn',
    value: 'linkedin.com/in/james-jude-bautista-a863528a',
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect width="4" height="12" x="2" y="9" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    href: 'https://github.com/jamesjudebautista',
    label: 'GitHub',
    value: 'github.com/jamesjudebautista',
    external: true,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
        <path d="M9 18c-4.51 2-5-2-7-2" />
      </svg>
    ),
  },
]

function ContactView() {
  // Simple form state (MVI-friendly — could be extracted to useContactViewModel later)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')

  const [submitting, setSubmitting] = useState(false)

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setSubmitting(true)

    try {
      // Formsubmit.co — free, no signup, no backend needed.
      // First submission triggers a confirmation email to your gmail — click the link
      // in that email ONCE, then all future submissions arrive automatically.
      const res = await fetch('https://formsubmit.co/ajax/jamesjudebautista@gmail.com', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `Portfolio contact from ${name}`,
          _template: 'table',
        }),
      })

      if (res.ok) {
        alert(`Thanks ${name}! Your message was sent — I'll reply soon.`)
        setName('')
        setEmail('')
        setMessage('')
      } else {
        throw new Error(`HTTP ${res.status}`)
      }
    } catch (err) {
      console.error('Contact form error:', err)
      alert(
        `Sorry, something went wrong. Please email me directly at jamesjudebautista@gmail.com`
      )
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 overflow-x-hidden">

      {/* ============ HEADER ============ */}
      <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-cinnamon-700">
        Contact / 06
      </p>
      <h2 className="mt-2 font-black leading-[1.0] tracking-[-0.03em] text-coal-900 text-3xl sm:text-4xl md:text-5xl">
        Let&apos;s build <span className="text-cinnamon-600">together.</span>
      </h2>
      <p className="mt-2 max-w-2xl text-sm text-coal-500">
        Open to international relocation; on-site, hybrid, or remote.
      </p>

      {/* ============ 3-COLUMN GRID ============ */}
      <div className="mt-6 grid grid-cols-12 gap-3">

        {/* ---- PHOTO + INTRO TILE (col 1) ---- */}
        <div className="relative col-span-12 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 p-0 shadow-tile sm:col-span-6 lg:col-span-4">
          <div className="pointer-events-none absolute -left-12 top-1/3 h-56 w-56 rounded-full bg-cinnamon-300/40 blur-3xl" />
          <div className="pointer-events-none absolute -right-12 bottom-1/4 h-56 w-56 rounded-full bg-clay-400/30 blur-3xl" />

          {/* Photo area — real image with BASE_URL prefix for GitHub Pages */}
          <div className="relative aspect-[4/5] w-full overflow-hidden bg-gradient-to-br from-cinnamon-200/40 via-paper-100 to-clay-400/15">
            <img
              src={`${import.meta.env.BASE_URL}me.jpg`}
              alt="James Jude D. Bautista"
              className="absolute inset-0 h-full w-full object-cover"
              style={{ objectPosition: 'center 18%' }}
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-coal-900/5" />
          </div>

          {/* Bottom caption */}
          <div className="border-t border-paper-300 bg-paper-50 px-5 py-4">
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-cinnamon-700">
              The human
            </p>
            <p className="mt-1 text-base font-black tracking-tight text-coal-900">
              James Jude D. Bautista
            </p>
            <p className="mt-1 text-xs leading-relaxed text-coal-600">
              Twelve years writing code that handles other people&apos;s money, identity &amp; government services. I take that responsibility seriously — &amp; I&apos;d love to talk.
            </p>
          </div>
        </div>

        {/* ---- CONTACT LINKS (col 2) ---- */}
        <div className="col-span-12 grid grid-cols-1 gap-3 sm:col-span-6 lg:col-span-4">

          {contactLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              className="group flex items-center gap-4 rounded-3xl border border-paper-300 bg-paper-50 p-5 shadow-tile transition hover:-translate-y-0.5 hover:border-cinnamon-300 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-cinnamon-200/50 text-cinnamon-700">
                {link.icon}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-coal-500">
                  {link.label}
                </p>
                <p className="truncate text-sm font-bold text-coal-900">{link.value}</p>
              </div>
              <span className="text-coal-400 transition group-hover:translate-x-1 group-hover:text-cinnamon-600">
                →
              </span>
            </a>
          ))}

          {/* View CV — opens Google Drive in new tab */}
          <a
            href="https://drive.google.com/file/d/1GfRpnCPpLVW70Q5RvO5CVqMnGHaXoKO1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-4 rounded-3xl border border-cinnamon-700 bg-gradient-to-br from-cinnamon-600 to-clay-600 p-5 text-paper-50 shadow-warm-glow"
          >
            <div className="flex h-12 w-12 flex-none items-center justify-center rounded-2xl bg-paper-50/20 text-paper-50">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" x2="12" y1="15" y2="3" />
              </svg>
            </div>
            <div className="min-w-0 flex-1">
              <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-paper-50/80">
                Resume
              </p>
              <p className="text-sm font-bold text-paper-50">View CV</p>
            </div>
            <span className="text-paper-50/80 transition group-hover:translate-x-1">↓</span>
          </a>
        </div>

        {/* ---- FORM (col 3) ---- */}
        <form
          onSubmit={handleSubmit}
          className="col-span-12 rounded-3xl border border-paper-300 bg-paper-50 p-6 shadow-tile lg:col-span-4"
        >
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-cinnamon-700">
            Send a message
          </p>
          <h3 className="mt-1 text-lg font-black uppercase tracking-tight text-coal-900">
            Get in touch
          </h3>

          <div className="mt-4 grid gap-3">
            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-coal-500">Name</span>
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="mt-1 w-full rounded-xl border border-paper-300 bg-paper-100 px-3 py-2 text-sm outline-none focus:border-cinnamon-500"
              />
            </label>
            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-coal-500">Email</span>
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 w-full rounded-xl border border-paper-300 bg-paper-100 px-3 py-2 text-sm outline-none focus:border-cinnamon-500"
              />
            </label>
            <label className="block">
              <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-coal-500">Message</span>
              <textarea
                name="message"
                required
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="mt-1 w-full rounded-xl border border-paper-300 bg-paper-100 px-3 py-2 text-sm outline-none focus:border-cinnamon-500"
              />
            </label>
            <button
              type="submit"
              disabled={submitting}
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-cinnamon-600 to-clay-600 px-4 py-2.5 text-sm font-bold text-white shadow-warm-glow transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:scale-100"
            >
              {submitting ? 'Sending…' : 'Send →'}
            </button>
          </div>
        </form>

      </div>
    </div>
  )
}

export default ContactView
