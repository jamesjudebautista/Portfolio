import { useState } from 'react'
import { paxScreens, uobScreens, sproutScreens, srddScreens,
   streamWatchScreens , seatsScreens, LeaderSummitScreens, ofwScreens,
   miScreens, naviScreens, uhopScreens, cmpScreens
 } from '../../../utils/constant'

// =====================================================================
// Shared building blocks
// =====================================================================


// Extract the "v" param from a YouTube URL like https://www.youtube.com/watch?v=XXX
function getYoutubeId(url: string): string | null {
  try {
    return new URL(url).searchParams.get('v')
  } catch {
    return null
  }
}

function Pill({ children, accent }: { children: React.ReactNode; accent?: boolean }) {
  return accent ? (
    <span className="inline-flex items-center rounded-full border border-cinnamon-300 bg-cinnamon-200/50 px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-cinnamon-800">
      {children}
    </span>
  ) : (
    <span className="inline-flex items-center rounded-full border border-paper-300 bg-paper-100 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-coal-700">
      {children}
    </span>
  )
}

interface VideoThumbProps {
  href: string
  imgSrc: string
  imgAlt: string
  label: string
  caption?: string
}
function VideoThumb({ href, imgSrc, imgAlt, label, caption }: VideoThumbProps) {
  const [isPlaying, setIsPlaying] = useState(false)
  const videoId = getYoutubeId(href)

  return (
    <figure className="w-[280px] flex-none snap-start sm:w-[340px]">
      <div className="overflow-hidden rounded-2xl border border-paper-300 bg-paper-50 shadow-sm">
        {isPlaying && videoId ? (
          // ===== Embedded YouTube iframe (autoplays after click) =====
          <div className="relative aspect-[16/9] w-full">
            <iframe
              className="absolute inset-0 h-full w-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0`}
              title={imgAlt}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : (
          // ===== Thumbnail with play button (initial state) =====
          <button
            type="button"
            onClick={() => setIsPlaying(true)}
            className="group relative block aspect-[16/9] w-full overflow-hidden"
            aria-label={`Play ${label}`}
          >
            <img src={imgSrc} alt={imgAlt} loading="lazy" className="h-full w-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-coal-950/70 via-transparent to-transparent" />
            <span className="absolute left-1/2 top-1/2 flex h-12 w-12 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-paper-50/40 bg-coal-950/55 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
              <svg viewBox="0 0 24 24" className="ml-0.5 h-5 w-5" fill="#FAF7F2" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
            <p className="absolute bottom-2 left-3 right-3 text-[13px] font-black uppercase leading-tight text-paper-50">
              {label}
            </p>
          </button>
        )}
      </div>
      {caption && (
        <figcaption className="mt-2 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-coal-500">
          {caption}
        </figcaption>
      )}
    </figure>
  )
}

interface AppTileProps {
  span?: string // e.g. 'lg:col-span-6', 'lg:col-span-12'
  accentPill: string
  pills: string[]
  title: string
  description: string
  children?: React.ReactNode // optional media rail content
}
function AppTile({ span = 'lg:col-span-12', accentPill, pills, title, description, children }: AppTileProps) {
  return (
    <article className={`relative col-span-12 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 p-6 shadow-tile transition hover:-translate-y-0.5 hover:border-cinnamon-300 ${span}`}>
      <div className="absolute -top-16 -right-16 h-56 w-56 rounded-full bg-cinnamon-300/40 blur-3xl" />
      <div className="relative flex flex-wrap items-center gap-2">
        <Pill accent>{accentPill}</Pill>
        {pills.map((p) => (
          <Pill key={p}>{p}</Pill>
        ))}
      </div>
      <h4 className="relative mt-3 text-2xl font-black uppercase tracking-tight text-coal-900">
        {title}
      </h4>
      <p className="relative mt-2 max-w-3xl text-sm leading-relaxed text-coal-600">
        {description}
      </p>
      {children && <div className="relative mt-5 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">{children}</div>}
    </article>
  )
}

function CompanyGroup({ name, highlight = false, children }: { name: string; highlight?: boolean; children: React.ReactNode }) {
  return (
    <div className="mt-8">
      <h3 className={`border-b ${highlight ? 'border-cinnamon-300' : 'border-paper-300'} pb-3 text-xl font-black uppercase tracking-tight text-coal-900`}>
        {name}
      </h3>
      <div className="mt-4 grid grid-cols-12 gap-3">
        {children}
      </div>
    </div>
  )
}

// =====================================================================
// Company sections
// =====================================================================


function Mercola() {
  return (
    <CompanyGroup name="Mercola Consulting Services" highlight>
      <AppTile
        accentPill="Mobile · Health"
        pills={['Kotlin', 'Jetpack Compose', 'LiveKit', 'CameraX', 'Hilt · Clean Arch']}
        title="PAX — Mercola Health Coach 2.0"
        description="Consumer health-coaching app built around Pax, a voice-first AI coach running on real-time audio. Shipped 20+ feature modules on a 100% Jetpack Compose UI: Food Buddy camera-based food logging, a 40-question health assessment across 6 modules, lab results and medical reports, Stride Strong movement tracking on Health Connect, commerce, and account security with biometric app-lock."
      >
        {paxScreens.map((s) => (
          <figure key={s.label} className="w-[140px] flex-none snap-start sm:w-[160px]">
            <div className="overflow-hidden rounded-[1.4rem] border border-paper-300 bg-paper-50 shadow-sm">
              <img src={s.image} alt={s.alt} loading="lazy" className="block h-auto w-full" />
            </div>
            <figcaption className="mt-2 text-center font-mono text-[9px] uppercase tracking-[0.2em] text-coal-500">
              {s.label}
            </figcaption>
          </figure>
        ))}
      </AppTile>
    </CompanyGroup>
  )
}

function DOST() {
  return (
    <CompanyGroup name="Department of Science & Technology">
      <AppTile
        accentPill="Platform · Lead"
        pills={['React + TS', 'Node + TS', 'Kubernetes', 'Helm · Terraform', 'PostgreSQL']}
        title="DOST Engineering Platform"
        description="On-prem Kubernetes platform powering multiple government applications. Authored the CI/CD pipelines, observability stack, and RBAC model used by every team that ships through it."
      />
    </CompanyGroup>
  )
}

function VeritasPay() {
  return (
    <CompanyGroup name="VeritasPay">
      <AppTile
        accentPill="POS · Payments"
        pills={['Kotlin', 'MVVM', 'Coroutines', 'Retrofit', 'ISO 8583 · EMV']}
        title="Face-to-Face Payment"
        description="Kotlin payment terminals for in-person card & QR transactions on Nexgo and Pax devices. Hardened security around payment flows and improved UI responsiveness on constrained POS hardware."
      >
        <VideoThumb
          href="http://www.youtube.com/watch?v=zv_7Rc0WcvY"
          imgSrc="https://img.youtube.com/vi/zv_7Rc0WcvY/hqdefault.jpg"
          imgAlt="Tap. Pay. Done."
          label="Tap. Pay. Done."
          caption="Face-to-face payment"
        />
      </AppTile>
    </CompanyGroup>
  )
}

function UOB() {
  return (
    <CompanyGroup name="United Overseas Bank (UOB)">
      <AppTile
        accentPill="Banking · Regional"
        pills={['Kotlin', 'MVVM', 'Coroutines · RxJava', 'Retrofit', 'Firebase']}
        title="UOB TMRW — Regional Banking"
        description="Regional mobile banking platform serving Singapore, Malaysia, Thailand and Indonesia. Diagnosed complex production incidents across four country builds and shipped Kotlin features under strict banking compliance."
      >
       {uobScreens.map((s) => (
          <figure key={s.label} className="w-[140px] flex-none snap-start sm:w-[160px]">
            <div className="overflow-hidden rounded-[1.4rem] border border-paper-300 bg-paper-50 shadow-sm">
              <img src={s.image} alt={s.alt} loading="lazy" className="block h-auto w-full" />
            </div>
          </figure>
        ))}
      </AppTile>
    </CompanyGroup>
  )
}

function GlobalPayments() {
  return (
    <CompanyGroup name="Global Payments Inc.">
      <AppTile
        accentPill="POS · Lead"
        pills={['Kotlin', 'Java', 'Clean Architecture', 'MVVM', 'REST APIs']}
        title="P@TT — Pay at the Table"
        description="Greenfield restaurant POS with advanced bill-splitting. Migrated the legacy JavaScript codebase to Kotlin on Clean Architecture, set coding standards and embedded code-review practices across the team."
      >
        <VideoThumb
          href="http://www.youtube.com/watch?v=DXglgNQamv8"
          imgSrc="https://img.youtube.com/vi/DXglgNQamv8/hqdefault.jpg"
          imgAlt="P@TT"
          label="P@TT"
          caption="Pay at the table"
        />
      </AppTile>

      <AppTile
        accentPill="POS · Add-on"
        pills={['Java', 'Kotlin', 'Android SDK', 'REST APIs']}
        title="Gift App"
        description="Gift card, e-gift and loyalty redemption modules running alongside the payment app on Android terminals."
        >
          <VideoThumb
          href="http://www.youtube.com/watch?v=JT4W7vzUBMQ"
          imgSrc="https://img.youtube.com/vi/JT4W7vzUBMQ/hqdefault.jpg"
          imgAlt="Gift App"
          label="Gift App"
          caption="POS add-on"
        />
      </AppTile>
      
    </CompanyGroup>
  )
}

function Sprout() {
  return (
    <CompanyGroup name="Sprout Solutions">
      <AppTile
        accentPill="HR · Mobile"
        pills={['Flutter', 'Dart', 'Provider / BLoC', 'REST APIs']}
        title="Sprout HR (Flutter)"
        description="Employee directory and clock-in / clock-out, built from scratch. Architected for clean separation of concerns with Provider / BLoC state management."
       >
       {sproutScreens.map((s) => (
          <figure key={s.label} className="w-[140px] flex-none snap-start sm:w-[160px]">
            <div className="overflow-hidden rounded-[1.4rem] border border-paper-300 bg-paper-50 shadow-sm">
              <img src={s.image} alt={s.alt} loading="lazy" className="block h-auto w-full" />
            </div>
          </figure>
        ))}
      </AppTile>
    </CompanyGroup>
  )
}

function SRDD() {
  return (
    <CompanyGroup name="Senior Data Dynamic (SRDD)">
      <AppTile
        accentPill="POS · Payments"
        pills={['Android', 'Java', 'Nets API', 'USB Serial', 'Star printers']}
        title="Sri Sivan Temple POS"
        description="Plug-and-play Android POS handling ordering, payments and receipt printing across multiple companies, integrating Nets terminals over USB serial and Star printers. Engineered as reusable Android libraries."
      >
        <VideoThumb
          href="https://www.youtube.com/watch?v=14FkdV9EWHI"
          imgSrc="https://img.youtube.com/vi/14FkdV9EWHI/hqdefault.jpg"
          imgAlt="Sri Sivan POS"
          label="Sri Sivan POS"
          caption="Temple ordering & payment"
        />
      </AppTile>
      <AppTile
        accentPill="Multimedia · 3D"
        pills={['Java', 'Swift 4', '3D rendering', 'Multimedia']}
        title="EyeFly3D Pix and Vid"
        description="Sole developer for both Android (Java) and iOS (Swift 4) versions of an app converting 2D pictures to stereoscopic 3D, with multimedia processing and platform-specific performance tuning. and Automatic 2D-to-3D video conversion built on the same multimedia pipeline."
      >
        {srddScreens.map((s) => (
          <figure key={s.label} className="w-[140px] flex-none snap-start sm:w-[160px]">
            <div className="overflow-hidden rounded-[1.4rem] border border-paper-300 bg-paper-50 shadow-sm">
              <img src={s.image} alt={s.alt} loading="lazy" className="block h-auto w-full" />
            </div>
          </figure>
        ))}
        
      </AppTile>
      <AppTile
        accentPill="Desktop · POS"
        pills={['.NET', 'C#', 'Nets API', 'Bixolon']}
        title="M1 Cashless (.NET)"
        description="Sole developer maintaining and extending a .NET desktop POS, integrating Nets payment terminals and Bixolon printers in C#."
      >
        <VideoThumb
          href="https://www.youtube.com/watch?v=lbwBZ9feRKk"
          imgSrc="https://img.youtube.com/vi/lbwBZ9feRKk/hqdefault.jpg"
          imgAlt="Sri Sivan POS"
          label="Sri Sivan POS"
          caption="Temple ordering & payment"
        />
      </AppTile>
    </CompanyGroup>
  )
}

function Yondu() {
  const yonduApps: AppTileProps[] = [
    {
      accentPill: 'Mobile',
      pills: ['Java', 'Android SDK', 'Roku API'],
      title: 'Streamwatch Remote',
      description: 'Android remote control for Roku-powered TVs, with firmware update notifications and a smoother UX than the physical remote.',
      children: streamWatchScreens.map((s) => (
          <figure key={s.label} className="w-[140px] flex-none snap-start sm:w-[160px]">
            <div className="overflow-hidden rounded-[1.4rem] border border-paper-300 bg-paper-50 shadow-sm">
              <img src={s.image} alt={s.alt} loading="lazy" className="block h-auto w-full" />
            </div>
          </figure>
      )),
    },
    { span: "lg:col-span-6", accentPill: 'Mobile', pills: ['BrightScript', 'Roku'], title: 'Streamwatch — TV Channels', description: 'Roku-based TV channel app managing and monitoring user access to new content channels.' },
    { span: 'lg:col-span-6', accentPill: 'Mobile', pills: ['Java', 'Barcode', 'REST APIs'], title: 'Punch Card — Loyalty', description: 'Loyalty card app with barcode scanning, reward tracking and store-availability lookup.'},
    {  accentPill: 'Mobile', pills: ['Java', 'REST APIs'], title: 'Seats — Restaurant Booking', description: 'Booking platform letting users reserve tables at partner restaurants without calling.' ,
       children: seatsScreens.map((s) => (
          <figure key={s.label} className="w-[140px] flex-none snap-start sm:w-[160px]">
            <div className="overflow-hidden rounded-[1.4rem] border border-paper-300 bg-paper-50 shadow-sm">
              <img src={s.image} alt={s.alt} loading="lazy" className="block h-auto w-full" />
            </div>
          </figure>
      )),
    },
    {  accentPill: 'Mobile', pills: ['Java', 'Chat', 'REST APIs'], title: 'Leader Summit App', description: 'Social-style event app delivering updates and private group chat during the Leader Summit.',
       children: LeaderSummitScreens.map((s) => (
          <figure key={s.label} className="w-[140px] flex-none snap-start sm:w-[160px]">
            <div className="overflow-hidden rounded-[1.4rem] border border-paper-300 bg-paper-50 shadow-sm">
              <img src={s.image} alt={s.alt} loading="lazy" className="block h-auto w-full" />
            </div>
          </figure>
      )),
     },
    {  accentPill: 'Mobile', pills: ['Java', 'Telephony'], title: 'OFW Emergency Call', description: 'Emergency call app providing free, accessible calling support for overseas Filipino workers.' ,
        children: ofwScreens.map((s) => (
          <figure key={s.label} className="w-[140px] flex-none snap-start sm:w-[160px]">
            <div className="overflow-hidden rounded-[1.4rem] border border-paper-300 bg-paper-50 shadow-sm">
              <img src={s.image} alt={s.alt} loading="lazy" className="block h-auto w-full" />
            </div>
          </figure>
      )),
    },
    {  accentPill: 'Mobile', pills: ['Java', 'SQLite'], title: 'CMP Pocket Guide', description: 'Emergency-contact app holding employee contact details for internal corporate use.' ,
          children: cmpScreens.map((s) => (
          <figure key={s.label} className="w-[140px] flex-none snap-start sm:w-[160px]">
            <div className="overflow-hidden rounded-[1.4rem] border border-paper-300 bg-paper-50 shadow-sm">
              <img src={s.image} alt={s.alt} loading="lazy" className="block h-auto w-full" />
            </div>
          </figure>
      )),
    },
    {  span: 'lg:col-span-6',accentPill: 'Mobile', pills: ['Java', 'Telephony'], title: 'Globe Labs Caller', description: 'App displaying a company logo during incoming overseas calls for brand marketing.'},
  ]
  return (
    <CompanyGroup name="Yondu, Inc. (Globe Telecom)">
      {yonduApps.map((app) => (
        <AppTile key={app.title} {...app} />
      ))}
    </CompanyGroup>
  )
}

function Earlier() {
  const earlierApps: AppTileProps[] = [
    { accentPill: 'Mobile', pills: ['Java', 'Google Maps SDK'], title: 'Mi-Track (Majella 🇦🇺)', description: 'GPS routing app delivering turn-by-turn route instructions.',
        children: miScreens.map((s) => (
          <figure key={s.label} className="w-[140px] flex-none snap-start sm:w-[160px]">
            <div className="overflow-hidden rounded-[1.4rem] border border-paper-300 bg-paper-50 shadow-sm">
              <img src={s.image} alt={s.alt} loading="lazy" className="block h-auto w-full" />
            </div>
          </figure>
      )),
     },
    { accentPill: 'Mobile', pills: ['Java', 'Maps', 'REST APIs'], title: 'U-Hop (ANVO)', description: 'Uber / Grab-style ride-hailing app, owned end-to-end from design to release.' ,
        children: uhopScreens.map((s) => (
          <figure key={s.label} className="w-[140px] flex-none snap-start sm:w-[160px]">
            <div className="overflow-hidden rounded-[1.4rem] border border-paper-300 bg-paper-50 shadow-sm">
              <img src={s.image} alt={s.alt} loading="lazy" className="block h-auto w-full" />
            </div>
          </figure>
      )),
    },
    { span: 'lg:col-span-6', accentPill: 'Mobile', pills: ['C++', 'COCOS2D'], title: 'Lucky 9 (ANVO/Mownecom)', description: 'Mobile card game built in C++ on COCOS2D.' },
    { accentPill: 'Mobile', pills: ['Java', 'Automation'], title: 'NAVI Mobile — SEO', description: 'Auto-clicker and finder tool for site ranking.' ,
        children: naviScreens.map((s) => (
          <figure key={s.label} className="w-[140px] flex-none snap-start sm:w-[160px]">
            <div className="overflow-hidden rounded-[1.4rem] border border-paper-300 bg-paper-50 shadow-sm">
              <img src={s.image} alt={s.alt} loading="lazy" className="block h-auto w-full" />
            </div>
          </figure>
      )),
    },
    { span: 'lg:col-span-6', accentPill: 'Mobile', pills: ['Java', 'SQLite'], title: 'Attendance App', description: 'Signature-based attendance capture with database sync.' },
    { span: 'lg:col-span-6', accentPill: 'Mobile', pills: ['Java', 'Media'], title: 'Pingpong App', description: 'Batch-download and playback of company videos.' },
  ]
  return (
    <CompanyGroup name="Earlier Experience (2014 – 2016)">
      {earlierApps.map((app) => (
        <AppTile key={app.title} {...app} />
      ))}
    </CompanyGroup>
  )
}

// =====================================================================
// AppsView
// =====================================================================
function AppsView() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 overflow-x-hidden">
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-cinnamon-700">
            Apps / 03
          </p>
          <h2 className="mt-2 font-black leading-[1.0] tracking-[-0.03em] text-coal-900 text-3xl sm:text-4xl md:text-5xl">
            A decade of <span className="text-cinnamon-600">shipping.</span>
          </h2>
        </div>
        <p className="hidden max-w-sm text-xs text-coal-500 sm:block">
          24 production apps across 9 companies, organized by role. Scroll inside this slide ↓
        </p>
      </div>

      <Mercola />
      <DOST />
      <VeritasPay />
      <UOB />
      <GlobalPayments />
      <Sprout />
      <SRDD />
      <Yondu />
      <Earlier />
    </div>
  )
}

export default AppsView
