# Portfolio — James Jude D. Bautista

Personal portfolio website built from scratch in React + Vite + Tailwind, deployed to GitHub Pages.

**Live site:** [jamesjude123.github.io/Portfolio](https://jamesjude123.github.io/Portfolio/)
**CV:** [Google Drive](https://drive.google.com/file/d/1GfRpnCPpLVW70Q5RvO5CVqMnGHaXoKO1/view?usp=sharing)

---

## About Me

**James Jude D. Bautista** — Full-Stack Developer · Android · iOS · Backend APIs · DevOps · Platform Builder

Twelve years shipping production code across fintech, banking, payments and government. Currently at **Mercola Consulting Services** building PAX — a voice-first health-coaching app on Kotlin + Jetpack Compose. Previously Technical Lead at DOST, Senior Engineer at VeritasPay, UOB, Global Payments, Sprout, SRDD, and Yondu (Globe Telecom).

I take on Lead / Senior / Full-Stack roles and I'm open to international relocation.

- 📧 [jamesjudebautista@gmail.com](mailto:jamesjudebautista@gmail.com)
- 💼 [LinkedIn](https://www.linkedin.com/in/james-jude-bautista-a863528a/)
- 🐙 [GitHub](https://github.com/jamesjude123)

---

## What This Site Contains

Six tabs (bottom navigation bar):

| # | Tab | What's inside |
|---|-----|---------------|
| 1 | **Home** | Big intro tile + "Currently" role at Mercola + 4 stat tiles |
| 2 | **Timeline** | 9 career entries across 3 countries, most recent first |
| 3 | **Apps** | 24 production apps across 9 companies (Mercola, DOST, VeritasPay, UOB, Global Payments, Sprout, SRDD, Yondu, earlier freelance) |
| 4 | **Stack** | 13 skill categories + PAX and DOST product spotlights |
| 5 | **Rules** | 6 engineering principles I live by |
| 6 | **Contact** | Photo, direct links, and a working contact form |

Plus a scrolling **Marquee** below the header showing quick skill tags.

---

## Tech Stack

### Frontend
- **React 19** — UI library
- **TypeScript** — type safety
- **Vite** — dev server + build tool (blazing fast HMR)
- **Tailwind CSS v4** — utility-first styling with custom `@theme` tokens
- **Lucide Icons** + inline SVGs — icon system

### Custom Design Tokens (in `src/presentation/styles/theme.css`)
- **Palette:** `paper` · `coal` · `cinnamon` · `clay` (11-shade scales)
- **Fonts:** `Archivo Black` (display), `Inter` (body), `JetBrains Mono` (labels)
- **Shadows:** `warm-glow` (red accent glow), `tile` (soft depth)
- **Animations:** `marquee-x` (infinite scroll)

### Contact Form Backend
- **Formsubmit.co** — free, no-signup form-to-email service

### Hosting
- **GitHub Pages** — free static hosting
- **gh-pages** npm package — one-command deploys

---

## Architecture

Clean Architecture with three top-level layers under `src/`:

```
src/
├── presentation/          UI layer — React components & styles
│   ├── App.tsx            root shell (holds Header + Marquee + main + Footer)
│   ├── components/
│   │   └── layout/        Header, Footer, Marquee
│   ├── pages/             one folder per tab
│   │   ├── Home/
│   │   ├── Timeline/
│   │   ├── Apps/
│   │   ├── Stack/
│   │   ├── Rules/
│   │   └── Contact/
│   ├── routes/
│   │   └── tabs.tsx       single source of truth for tab config
│   └── styles/
│       ├── theme.css      @theme tokens
│       ├── animations.css @keyframes
│       └── globals.css    body + h1/h2 defaults
│
├── domain/                (reserved for entities + use cases)
│   └── entities/
│
├── data/                  (reserved for datasources + repositories)
│   ├── datasources/
│   └── repositories/
│
├── main.tsx               app entry
└── index.css              imports Tailwind + theme + animations + globals
```

**Tab navigation pattern:** state lifted to `App.tsx` — Footer emits `onTabChange(idx)`, App renders `tabs[activeIdx].view`. No routing library required.

---

## Getting Started (Local Dev)

### Prerequisites
- **Node.js** 18+ (20+ recommended)
- **npm** 9+

### Install & Run
```bash
git clone https://github.com/jamesjude123/Portfolio.git
cd Portfolio
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173).

### Available Scripts

| Command | What it does |
|---------|--------------|
| `npm run dev` | Start dev server with hot reload |
| `npm run build` | Build production bundle to `dist/` |
| `npm run preview` | Preview the production build locally |
| `npm run lint` | Run ESLint |
| `npm run deploy` | Build + push to `gh-pages` branch (publishes to GitHub Pages) |

---

## Deployment

Deploys go to **GitHub Pages** with one command:

```bash
npm run deploy
```

This runs `predeploy` (which runs `build`), then pushes the `dist/` folder to the `gh-pages` branch. GitHub serves it at:

```
https://jamesjude123.github.io/Portfolio/
```

**Config:** `vite.config.ts` sets `base: '/Portfolio/'` — this MUST match the GitHub repo name for asset paths to resolve correctly.

For any assets in `public/` referenced from JSX, use `import.meta.env.BASE_URL` to prefix paths:

```tsx
<img src={`${import.meta.env.BASE_URL}pax/03-voice.jpg`} />
```

This resolves to `/` locally and `/Portfolio/` in production.

---

## Design Reference

Inspired by [portfolio-design-v8c-swipe.html](https://github.com/jamesjude123/portfolio-design-v8c-swipe) — a static HTML/Tailwind design mockup that this project translates to a real React app.

---

## What I Learned Building This

- **React 19** + `useState` for controlled tab state (lifting state up pattern)
- **Tailwind v4** `@theme` block for design tokens — no `tailwind.config.js` needed
- **Vite base-path handling** for GitHub Pages sub-path deploys
- **CSS Grid** `grid-cols-1` fix for `overflow-x-hidden` on `fixed inset-0` layouts
- **Formsubmit** integration for backend-free contact forms
- **Semantic HTML** — `<header>`, `<main>`, `<footer>`, `<article>`, `<figure>`, `<ol>` throughout

---

## License

Personal portfolio — code is MIT, content is © James Jude D. Bautista.

---

**Built with 🔥 and Claude.** ~5 days of design-first UI iteration, then hardened into clean architecture.
