function Header() {
  return (
    <header className="h-16 border-b border-paper-300 bg-paper-100/85 backdrop-blur-xl">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between gap-2 px-3 sm:gap-4 sm:px-6">

        {/* LEFT: avatar + name + subtitle */}
        <a href="#" className="flex min-w-0 flex-1 items-center gap-2 sm:gap-3">

          {/* Avatar */}
          <span className="flex h-9 w-9 flex-none items-center justify-center rounded-2xl bg-gradient-to-br from-cinnamon-500 to-clay-600 text-white font-black shadow-warm-glow sm:h-10 sm:w-10">
            JJ
          </span>

          <span className="min-w-0">
            {/* Name */}
            <span className="block truncate text-sm font-bold tracking-tight text-coal-900 sm:text-base">
              James Jude D. Bautista
            </span>

            {/* MOBILE: scrolling marquee (right → left) */}
            <span className="block overflow-hidden sm:hidden">
              <span className="inline-block whitespace-nowrap font-mono text-[9px] uppercase tracking-[0.2em] text-coal-500 animate-marquee-x">
                Technical Lead · Lead/Senior Mobile Engineer · Full-Stack · DevOps&nbsp;&nbsp;·&nbsp;&nbsp;Technical Lead · Lead/Senior Mobile Engineer · Full-Stack · DevOps&nbsp;&nbsp;·&nbsp;&nbsp;
              </span>
            </span>

            {/* DESKTOP: static full text */}
            <span className="hidden truncate font-mono text-[10px] uppercase tracking-[0.25em] text-coal-500 sm:block">
              Technical Lead · Lead/Senior Mobile Engineer · Full-Stack · DevOps
            </span>
          </span>
        </a>

        {/* RIGHT: Available pill + GitHub + CV */}
        <div className="flex flex-none items-center gap-1.5 sm:gap-3">

          {/* AVAILABLE pill — visible everywhere, smaller on mobile */}
          <span className="inline-flex items-center gap-1 rounded-full border border-emerald-500/30 bg-emerald-100/60 px-2 py-0.5 font-mono text-[8px] font-semibold uppercase tracking-[0.15em] text-emerald-800 sm:gap-2 sm:px-3 sm:py-1 sm:text-[10px] sm:tracking-[0.25em]">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-600" />
            </span>
            Available
          </span>

          {/* GitHub link — visible everywhere */}
          <a
            href="https://github.com/jamesjude123"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="inline-flex rounded-full p-1.5 text-coal-500 transition hover:bg-paper-200 hover:text-coal-900 sm:p-2"
          >
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
              <path d="M9 18c-4.51 2-5-2-7-2" />
            </svg>
          </a>

          {/* CV button — opens Google Drive CV in new tab */}
          <a
            href="https://drive.google.com/file/d/1GfRpnCPpLVW70Q5RvO5CVqMnGHaXoKO1/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-cinnamon-600 to-clay-600 px-3 py-1.5 text-[10px] font-bold text-white shadow-warm-glow transition hover:scale-[1.02] sm:gap-2 sm:px-4 sm:py-2 sm:text-xs"
          >
            <span>CV / Resume</span>
            <span>↓</span>
          </a>

          {/* CoverLetter button — opens Google Drive Cover Letter in new tab */}
          <a
            href="https://drive.google.com/file/d/1Rf1E5-uUUXaB9g-OQi4fo1RwR19lp8h7/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-cinnamon-600 to-clay-600 px-3 py-1.5 text-[10px] font-bold text-white shadow-warm-glow transition hover:scale-[1.02] sm:gap-2 sm:px-4 sm:py-2 sm:text-xs"
          >
            <span>Cover Letter</span>
            <span>↓</span>
          </a>


        </div>
      </div>
    </header>
  )
}

export default Header