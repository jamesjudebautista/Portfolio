
interface TimelineEntry {
  dateRange: string
  duration: string
  company: string
  role: string
  description: string
  isCurrent?: boolean
}

const timeline: TimelineEntry[] = [
    {
        dateRange: 'Mar 2026 — Now',
        duration: 'Current',
        company: 'Mercola Consulting Services · 🇵🇭',
        role: 'Full-Stack Developer · Android · iOS · Backend APIs',
        description: 'Building PAX — Mercola Health Coach 2.0. Shipped 20+ feature modules in Kotlin on a 100% Jetpack Compose UI: a voice-first AI coach on LiveKit, CameraX food logging, health assessments, and lab reports, backed by AWS cloud infrastructure and Java Spring Boot APIs built on MVVM + Clean Architecture with Hilt.',
        isCurrent: true
    },
    {
        dateRange: 'Mar 2025 — Mar 2026',
        duration: '1y',
        company: 'Department of Science & Technology · 🇵🇭',
        role: 'Technical Lead · Full-Stack · DevOps · Platform',
        description: "Leadership & Infrastructure: Led a cross-functional team of 4 engineers, 4 QA, and 78 OJT trainees. Defined full-stack standards, designed CI/CD pipelines, and operated on-premise Kubernetes infrastructure (Jenkins, Helm, Terraform, RBAC, Prometheus/Grafana, PostgreSQL).\tFull-Stack Web Development: Built and maintained scalable web applications utilizing React.js with TypeScript on the frontend and Node.js with TypeScript for backend services.",
    },
    {
        dateRange: 'Jan 2024 — Feb 2025',
        duration: '1y 2m',
        company: 'VeritasPay · 🇵🇭',
        role: 'Senior Android Engineer · Team Lead',
        description: 'Led Android team on Kotlin payment terminals. Owned JIRA pipeline, hardened payment flows, coached juniors.',
    },
    {
        dateRange: 'Oct 2022 — Jan 2024',
        duration: '1y 4m',
        company: 'United Overseas Bank (UOB) · 🇸🇬',
        role: 'Senior Mobile Application Developer — UOB TMRW',
        description:
            'Features + L3 production support across SG / MY / TH / ID for the regional banking app.',
    },
    {
        dateRange: 'Aug 2020 — Oct 2022',
        duration: '2y 2m',
        company: 'Global Payments Inc. · 🇵🇭',
        role: 'Lead Mobile App Developer — P@TT & Gift',
        description:
        'Led greenfield P@TT POS — migrated legacy JS to Kotlin on Clean Architecture + MVVM. Shipped Gift/Loyalty.',
    },
    {
    dateRange: 'Feb 2020 — Aug 2020',
    duration: '7m',
    company: 'Sprout Solutions · 🇵🇭',
    role: 'Senior Application Developer — Sprout HR (Flutter)',
    description:
      'Built the Flutter HR app from scratch — employee directory, clock in/out. Mentored a junior dev.',
    },
    {
    dateRange: 'Aug 2018 — Feb 2020',
    duration: '1y 6m',
    company: 'Senior Data Dynamic (SRDD) · 🇸🇬',
    role: 'Senior App Developer — Sri Sivan · M1 · EyeFly 3D',
    description:
      'Sri Sivan POS: Developed an M1 desktop POS system integrated with NETS and USB serial hardware peripherals, powered by a robust Java Spring Boot backend API and C# .NET.\tEyeFly 3D (Mobile): Served as the sole developer for the EyeFly 3D application across Android and iOS platforms.',
    },
    {
    dateRange: 'Aug 2016 — Jul 2018',
    duration: '2y',
    company: 'Yondu, Inc. (Globe Telecom) · 🇵🇭',
    role: 'Mobile Application Developer',
    description:
      '2-year tenure: Streamwatch (Remote + TV), Punch Card, Seats, Leader Summit, OFW Call, CMP, Globe Labs Caller.',
    },
    {
    dateRange: '2014 — 2016',
    duration: '~2y',
    company: 'Majella · ANVO / Mownecom · 🇵🇭 🇦🇺',
    role: 'Mobile App Developer — earlier experience',
    description:
      'Mi-Track GPS, U-Hop ride-hailing, Lucky 9 (C++ on COCOS2D), NAVI, Attendance, Pingpong.',
    },

]



function TimelineView() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 sm:py-8 py-6 overflow-x-hidden">
            {/* ===============Header============== */}
            <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-cinnamon-700">
                Career Timeline / 02
            </p>

            <h2 className="mt-2 font-black leading-[1.0] tracking-[0.3em] text-coal-900 text-3xl sm:text-4xl md:text-5xl">
                A decade of <span className="text-cinnamon-600">shipping.</span>
            </h2>

            <p className="mt-2 max-w-2xl text-sm text-coal-500">
                9 roles across 3 countries. Each with the dates, title, and what was shipped there.
            </p>

                 {/* ============ TIMELINE TILE ============ */}
            <div className="mt-6 rounded-3xl border border-paper-300 bg-paper-50 p-5 pb-8 shadow-tile">
               <ol className="grid gap-2">
                    {timeline.map((entry) => (
                        <li
                            key={entry.dateRange}
                            className={`grid grid-cols-12 gap-3 rounded-2xl border p-4 ${
                                entry.isCurrent
                                    ? 'border-cinnamon-300 bg-gradient-to-r from-cinnamon-200/40 via-paper-50 to-paper-50': 'border-paper-300 bg-paper-50'
                            }`}
                    >
                        {/* ============Left : Dates range + duration ============ */}
                        <div className="col-span-12 sm:col-span-3">
                            <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-coal-500">
                                {entry.dateRange}
                            </p>
                            <p className={`mt-1 text-xs ${
                                entry.isCurrent ? 'font-bold text-coal-700' : 'text-coal-500'
                            }`}>
                                {entry.duration}
                            </p>
                        </div>
                               {/* RIGHT: company, role, description */}
                        <div className="col-span-12 sm:col-span-9">
                            <h3 className="text-sm font-bold text-coal-900">{entry.company}</h3>
                            <p className="text-xs font-semibold text-cinamon-700">{entry.role}</p>
                            <p className="mt-1 text-[12px] leading-relaxed text-coal-600">
                                {entry.description}
                            </p>
                        </div>
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    )
    }
export default TimelineView