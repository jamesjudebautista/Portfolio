import type { ReactElement } from 'react'

// =====================================================================
// Types
// =====================================================================
interface StackCategory {
  number: string
  title: string
  icon: ReactElement
  pills: string[]
}

// =====================================================================
// Data — 13 skill categories
// =====================================================================
const categories: StackCategory[] = [
  {
    number: '/01',
    title: 'Mobile Engineering',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="14" height="20" x="5" y="2" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    pills: ['Android (Kotlin)', 'Android (Java)', 'Jetpack Compose', 'XML UI', 'Material 3', 'CameraX', 'Health Connect', 'Flutter', 'Dart', 'iOS (Swift)', 'KMP / KMM'],
  },
  {
    number: '/02',
    title: 'Web & Backend',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    pills: ['React.js', 'TypeScript', 'Tailwind CSS', 'Node.js', 'Express', 'REST APIs', 'Server-side arch', '.NET (C#)', 'Java Spring Boot'],
  },
    {
    number: '/03',
    title: 'Database & Storage',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    pills: ['MySQL', 'PostgreSQL', 'SQL', 'DynamoDB', 'Room', 'DataStore', 'SQLite', 'Firebase Realtime DB', 'Firebase Firestore'],
  },
  {
    number: '/04',
    title: 'Architecture & Patterns',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2 2 7l10 5 10-5-10-5z" />
        <path d="m2 17 10 5 10-5" />
        <path d="m2 12 10 5 10-5" />
      </svg>
    ),
    pills: ['Clean Architecture', 'MVC', 'MVI', 'MVVM', 'MVP', 'Redux', 'Unidirectional Data Flow', 'SOLID', 'Modularization', 'DI · Hilt', 'DI · Koin'],
  },
  {
    number: '/05',
    title: 'Async, Data & APIs',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14a9 3 0 0 0 18 0V5" />
        <path d="M3 12a9 3 0 0 0 18 0" />
      </svg>
    ),
    pills: ['Coroutines', 'Flow / StateFlow', 'LiveData', 'RxJava2', 'Retrofit', 'Ktor', 'LiveKit (real-time voice)', 'WebRTC audio', 'Sockets', 'REST · JSON · XML', 'Room', 'DataStore', 'SQLite', 'PostgreSQL'],
  },
  {
    number: '/06',
    title: 'DevOps & Infrastructure',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    ),
    pills: ['Jenkins', 'Azure DevOps Pipelines', 'GitHub Actions', 'GitLab CI', 'Docker', 'Kubernetes', 'containerd', 'Helm', 'NGINX', 'Terraform', 'Prometheus', 'Grafana', 'RBAC', 'Bash', 'Linux', 'On-prem infra', 'ETL pipelines', 'Release automation'],
  },
  {
    number: '/07',
    title: 'AI-augmented Engineering',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3z" />
        <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
        <line x1="12" x2="12" y1="19" y2="22" />
      </svg>
    ),
    pills: ['Claude', 'ChatGPT', 'Gemini', 'Codex', 'Prompt engineering', 'AI-assisted code review', 'AI refactoring', 'AI test generation', 'AI tech writing'],
  },
  {
    number: '/08',
    title: 'Quality & Testing',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    pills: ['JUnit4', 'JUnit5', 'Mockito', 'Espresso', 'Katalon Studio', 'Playwright (E2E)', 'Code reviews', 'Static analysis', 'Crashlytics'],
  },
  {
    number: '/09',
    title: 'Security & Integration',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    pills: ['SSO', 'LDAP', 'Active Directory', 'OAuth2 / OIDC', 'API security', 'RSA encryption', 'OAuth Token ', 'Key mgmt', 'TLS / HTTPS hardening', 'Credential Manager', 'Biometric auth', 'App-lock PIN'],
  },
  {
    number: '/10',
    title: 'Compliance & Standards',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="15" x2="15" y2="15" />
        <line x1="9" y1="11" x2="15" y2="11" />
      </svg>
    ),
    pills: ['HIPAA-aware', 'ISO 27001-aware', 'PCI DSS-aware', 'Data privacy by design', 'Secure SDLC'],
  },
  {
    number: '/11',
    title: 'Payments & POS',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect width="20" height="14" x="2" y="5" rx="2" />
        <line x1="2" x2="22" y1="10" y2="10" />
      </svg>
    ),
    pills: ['ISO 8583', 'EMV', 'PCI-aware', 'Nets API', 'USB Serial (COM)', 'Star printers', 'Bixolon printers', 'Nexgo terminals', 'Pax terminals'],
  },
  {
    number: '/12',
    title: 'Cloud & Backend Tooling',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    pills: ['Firebase App Distribution', 'FCM', 'Firebase Realtime DB', 'Crashlytics', 'Firebase Analytics', 'Google Maps SDK', 'Azure DevOps'],
  },
  {
    number: '/13',
    title: 'VCS & IDEs',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="18" cy="18" r="3" />
        <circle cx="6" cy="6" r="3" />
        <path d="M13 6h3a2 2 0 0 1 2 2v7" />
        <line x1="6" y1="9" x2="6" y2="21" />
      </svg>
    ),
    pills: ['GitHub', 'GitLab', 'Bitbucket', 'Azure Repos', 'Gitea', 'Trunk-based', 'GitFlow', 'Android Studio', 'Xcode', 'IntelliJ IDEA', 'Visual Studio', 'VS Code'],
  },
]

// Regular category tile
function CategoryTile({ category }: { category: StackCategory }) {
  return (
    <div className="col-span-12 rounded-3xl border border-paper-300 bg-paper-50 p-5 shadow-tile sm:col-span-6 lg:col-span-4">
      <div className="flex items-center justify-between">
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cinnamon-200/60 text-cinnamon-700">
          {category.icon}
        </span>
        <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-coal-500">
          {category.number}
        </p>
      </div>
      <h3 className="mt-3 text-base font-bold tracking-tight text-coal-900">
        {category.title}
      </h3>
      <div className="mt-3 flex flex-wrap gap-1">
        {category.pills.map((pill) => (
          <span
            key={pill}
            className="inline-flex items-center rounded-full border border-paper-300 bg-paper-100 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-coal-700"
          >
            {pill}
          </span>
        ))}
      </div>
    </div>
  )
}

function StackView() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 overflow-x-hidden">

      {/* ============ HEADER ============ */}
      <div className="flex items-end justify-between gap-4">
        <div>
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-cinnamon-700">
            Core competencies / 04
          </p>
          <h2 className="mt-2 font-black leading-[1.0] tracking-[-0.03em] text-coal-900 text-3xl sm:text-4xl md:text-5xl">
            The full <span className="text-cinnamon-600">stack he runs.</span>
          </h2>
        </div>
        <p className="hidden max-w-sm text-xs text-coal-500 sm:block">
          Every tool below has shipped to production at one of his roles. Scroll inside this slide ↓
        </p>
      </div>

      {/* ============ GRID ============ */}
      <div className="mt-5 grid grid-cols-12 gap-3 pb-8">

        {/* 12 category tiles (data-driven) */}
        {categories.map((cat) => (
          <CategoryTile key={cat.number} category={cat} />
        ))}

        {/* Leadership tile — full width */}
        <div className="col-span-12 rounded-3xl border border-paper-300 bg-paper-50 p-5 shadow-tile">
          <div className="flex items-center justify-between">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-cinnamon-200/60 text-cinnamon-700">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </span>
            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-coal-500">/13</p>
          </div>
          <h3 className="mt-3 text-base font-bold tracking-tight text-coal-900">Leadership &amp; Process</h3>
          <div className="mt-3 flex flex-wrap gap-1">
            {['Team leadership', 'Mentoring', 'Sprint planning', 'Code reviews', 'Stakeholder communication', 'Agile / Scrum', 'OKR planning', 'JIRA', 'Trello'].map((p) => (
              <span key={p} className="inline-flex items-center rounded-full border border-paper-300 bg-paper-100 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-coal-700">
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* PAX spotlight */}
        <div className="col-span-12 rounded-3xl border border-paper-300 bg-paper-50 p-6 shadow-tile lg:col-span-6">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-cinnamon-700">
            Product he builds · shipping now
          </p>
          <h3 className="mt-2 text-xl font-black uppercase tracking-tight text-coal-900">
            PAX · voice-first health coach
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-coal-600">
          Here is the updated summary that incorporates iOS (Swift 5 / SwiftUI), Java Spring Boot, AWS Services (EC2, Lambda, S3, API Gateway, DynamoDB), and automated CI/CD pipelines:

A cross-platform consumer health app with native mobile clients in Kotlin (100% Jetpack Compose) and iOS (Swift 5 / SwiftUI), backed by a Java Spring Boot backend on AWS (EC2, Lambda, S3, API Gateway, DynamoDB). Features real-time voice coaching over LiveKit, camera-based food logging on CameraX, a 40-question health assessment, lab reports, and movement tracking through Health Connect — all engineered on MVVM + Clean Architecture with Hilt, secured behind biometric app-lock, and delivered via automated Azure DevOps / GitHub Actions CI/CD pipelines.
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            <span className="inline-flex items-center rounded-full border border-cinnamon-300 bg-cinnamon-200/50 px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-cinnamon-800">Kotlin</span>
            <span className="inline-flex items-center rounded-full border border-cinnamon-300 bg-cinnamon-200/50 px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-cinnamon-800">Jetpack Compose</span>
            {['Swift 5 / SwiftUI', 'Java Spring Boot', 'AWS Services', 'Automated CI/CD', 'Azure DevOps'].map((p) => (
              <span key={p} className="inline-flex items-center rounded-full border border-paper-300 bg-paper-100 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-coal-700">
                {p}
              </span>
            ))}
          </div>
        </div>

        {/* DOST spotlight */}
        <div className="col-span-12 rounded-3xl border border-paper-300 bg-paper-50 p-6 shadow-tile lg:col-span-6">
          <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-cinnamon-700">
            Platform he led · in production
          </p>
          <h3 className="mt-2 text-xl font-black uppercase tracking-tight text-coal-900">
            DOST · on-prem Kubernetes
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-coal-600">
            Full-stack apps on Kubernetes (containerd), fed by CI/CD he authored, observed in real time, accessed under RBAC. React + TS front-ends, Node + TS APIs, deployed via Helm + Terraform, monitored with Prometheus + Grafana, backed by PostgreSQL on hardened Linux — all behind NGINX + TLS.
          </p>
          <div className="mt-4 flex flex-wrap gap-1.5">
            <span className="inline-flex items-center rounded-full border border-cinnamon-300 bg-cinnamon-200/50 px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-cinnamon-800">React · TS</span>
            <span className="inline-flex items-center rounded-full border border-cinnamon-300 bg-cinnamon-200/50 px-3 py-1 font-mono text-[11px] font-semibold tracking-wide text-cinnamon-800">Node · TS</span>
            {['Helm', 'Terraform', 'Jenkins · Gitea', 'NGINX · TLS', 'RBAC', 'Prometheus · Grafana', 'PostgreSQL', 'Linux on-prem'].map((p) => (
              <span key={p} className="inline-flex items-center rounded-full border border-paper-300 bg-paper-100 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-coal-700">
                {p}
              </span>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default StackView
