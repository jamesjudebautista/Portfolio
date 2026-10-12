function HomeView() {
    return (
        <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:px-6 sm:py-8 overflow-x-hidden">
            <div className="grid grid-cols-12 gap-3">

                {/* ============ MAIN INTRO TILE ============ */}
               <div className="relative col-span-12 overflow-hidden rounded-3xl border border-paper-300 bg-paper-50 p-5 shadow-tile sm:p-7 lg:p-9 lg:col-span-8">
                    {/* Decorative blur orbs */}
                    <div className="absolute -top-16 -right-16 h-72 w-72 rounded-full bg-cinnamon-300/40 blur-3xl" />
                    <div className="absolute -bottom-20 -left-10 h-72 w-72 rounded-full bg-clay-400/20 blur-3xl" />

                    <div className="relative">
                        {/* Eyebrow label */}
                        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.3em] text-cinnamon-700">
                            Engineering Lead · Platform Builder
                        </p>
                        {/* Big headline */}
                     <h1 className="mt-4 font-black leading-[0.95] tracking-[-0.04em] text-coal-900 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
                            I build the<br />
                            things businesses<br />
                            <span className="bg-gradient-to-r from-cinnamon-600 to-clay-600 bg-clip-text text-transparent">
                                bet on.
                            </span>
                        </h1>

                        {/*Description*/}
                        <p className="mt-5 max-w-2xl text-base leading-relaxed text-coal-600 sm:text-lg">
                            Technical Lead, Mobile Engineer, Full-Stack Developer, and Platform Builder.
                            I Ship production code for fintech, banking, payments and government and I Lead the teams that own it.
                        </p>

                        {/* CV Button */}
                        <div className="mt-5 flex flex-wrap item-center gap-3">
                            <button
                                type="button"
                                className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-cinnamon-600 to-clay-600 border px-5 py-2.5 text-sm font-bold text-white shadow-warm-glow transition hover:scale-[1.02]"
                            >
                                See my work →
                            </button>
                            <button
                                type="button"
                                className="inline-flex items-center gap-2 rounded-full border border-paper-400 bg-paper-100 px-5 py-2.5 text-sm text-coal-800 font-bold transition hover:border-cinnamon-400"
                            >
                                Get in touch
                            </button>
                        </div>
                        {/* Focus-areas strip — pinned to bottom of tile */}
                        <div className="mt-auto flex flex-wrap gap-2 pt-7">
                            <span className="inline-flex items-center rounded-full border border-paper-300 bg-paper-100 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-coal-700">Mobile</span>
                            <span className="inline-flex items-center rounded-full border border-paper-300 bg-paper-100 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-coal-700">Full-Stack</span>
                            <span className="inline-flex items-center rounded-full border border-paper-300 bg-paper-100 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-coal-700">DevOps · Platform</span>
                            <span className="inline-flex items-center rounded-full border border-paper-300 bg-paper-100 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-coal-700">AI-augmented</span>
                            <span className="inline-flex items-center rounded-full border border-paper-300 bg-paper-100 px-3 py-1 font-mono text-[11px] font-medium tracking-wide text-coal-700">Team Leadership</span>
                        </div>
                    </div>
                </div>

                {/* ============ CURRENTLY @ MERCOLA TILE (dark, rich) ============ */}
                <div className="relative col-span-12 flex flex-col overflow-hidden rounded-3xl border border-coal-800 bg-coal-900 p-7 text-paper-50 shadow-tile lg:col-span-4">
                    {/* Decorative blur orb */}
                    <div className="pointer-events-none absolute -top-16 -right-16 h-56 w-56 rounded-full bg-cinnamon-600/25 blur-3xl" />

                    <div className="relative flex h-full flex-col">

                        {/* Header row */}
                        <div className="flex items-start justify-between gap-3">
                            <div>
                                <p className="font-mono text-[10px] font-bold uppercase tracking-[0.3em] text-cinnamon-300">Currently</p>
                                <p className="mt-2 text-2xl font-black tracking-tight text-paper-50">Full-Stack Developer</p>
                                <p className="mt-0.5 text-sm font-semibold text-paper-200">Mercola Consulting Services</p>
                                <p className="font-mono text-[11px] text-paper-400">Android · iOS · Backend APIs · 🇵🇭</p>
                            </div>
                            <span className="flex-none rounded-full border border-cinnamon-700 bg-cinnamon-600/20 px-2.5 py-1 font-mono text-[9px] font-bold uppercase tracking-[0.2em] text-cinnamon-300">
                                Mar 2026
                            </span>
                        </div>

                        {/* Role summary */}
                        <p className="mt-4 text-[13px] leading-relaxed text-paper-300">
                            Building PAX — Mercola Health Coach 2.0, a consumer health app centred on a voice-first AI coach. Shipping feature modules across the app: real-time voice, camera-based food logging, health assessments, and lab reports.
                        </p>

                        {/* Mini detail stats — 3 columns */}
                        <div className="mt-4 grid grid-cols-3 gap-2">
                            <div className="rounded-xl border border-coal-800 bg-coal-950/40 px-3 py-2 text-center">
                                <p className="text-lg font-black leading-none text-paper-50">20+</p>
                                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.15em] text-paper-400">Modules shipped</p>
                            </div>
                            <div className="rounded-xl border border-coal-800 bg-coal-950/40 px-3 py-2 text-center">
                                <p className="text-lg font-black leading-none text-paper-50">100%</p>
                                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.15em] text-paper-400">Compose UI</p>
                            </div>
                            <div className="rounded-xl border border-coal-800 bg-coal-950/40 px-3 py-2 text-center">
                                <p className="text-lg font-black leading-none text-paper-50">AI</p>
                                <p className="mt-1 font-mono text-[8px] uppercase tracking-[0.15em] text-paper-400">Voice coach</p>
                            </div>
                        </div>
                        <p className="mt-1.5 font-mono text-[8px] text-paper-500">*voice · food logging · assessments · lab reports · commerce</p>

                        {/* Tech stack pills */}
                        <div className="mt-4 flex flex-wrap gap-1.5">
                            <span className="rounded-full border border-coal-700 bg-coal-800 px-2.5 py-1 font-mono text-[10px] font-semibold text-paper-200">Kotlin</span>
                            <span className="rounded-full border border-coal-700 bg-coal-800 px-2.5 py-1 font-mono text-[10px] font-semibold text-paper-200">Compose</span>
                            <span className="rounded-full border border-coal-700 bg-coal-800 px-2.5 py-1 font-mono text-[10px] font-semibold text-paper-200">LiveKit</span>
                            <span className="rounded-full border border-coal-700 bg-coal-800 px-2.5 py-1 font-mono text-[10px] font-semibold text-paper-200">CameraX</span>
                            <span className="rounded-full border border-coal-700 bg-coal-800 px-2.5 py-1 font-mono text-[10px] font-semibold text-paper-200">Hilt</span>
                            <span className="rounded-full border border-coal-700 bg-coal-800 px-2.5 py-1 font-mono text-[10px] font-semibold text-paper-200">Clean Arch</span>                            
                            <span className="rounded-full border border-coal-700 bg-coal-800 px-2.5 py-1 font-mono text-[10px] font-semibold text-paper-200">MVI</span>
                            <span className="rounded-full border border-coal-700 bg-coal-800 px-2.5 py-1 font-mono text-[10px] font-semibold text-paper-200">Swift5</span>
                            <span className="rounded-full border border-coal-700 bg-coal-800 px-2.5 py-1 font-mono text-[10px] font-semibold text-paper-200">SwiftUI</span>
                            <span className="rounded-full border border-coal-700 bg-coal-800 px-2.5 py-1 font-mono text-[10px] font-semibold text-paper-200">MVVM</span>
                            <span className="rounded-full border border-coal-700 bg-coal-800 px-2.5 py-1 font-mono text-[10px] font-semibold text-paper-200">Java</span>
                            <span className="rounded-full border border-coal-700 bg-coal-800 px-2.5 py-1 font-mono text-[10px] font-semibold text-paper-200">Springboot</span>
                            <span className="rounded-full border border-coal-700 bg-coal-800 px-2.5 py-1 font-mono text-[10px] font-semibold text-paper-200">DynamoDB</span>
                            <span className="rounded-full border border-coal-700 bg-coal-800 px-2.5 py-1 font-mono text-[10px] font-semibold text-paper-200">CI/CD</span>
                        </div>

                        {/* Footer — open to relocation */}
                        <div className="mt-auto flex items-center gap-2 pt-5">
                            <span className="relative flex h-2 w-2">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
                            </span>
                            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-paper-300">
                                Open to international relocation
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            {/* ============ BOTTOM STATS ROW — 4 tiles ============ */}
            <div className="grid grid-cols-12 gap-3 m-5">
                {/* Years (red gradient) */}
                <div className="col-span-6 rounded-3xl border border-cinnamon-700 bg-gradient-to-br from-cinnamon-600 to-clay-600 p-5 text-paper-50 shadow-warm-glow sm:col-span-3">
                    <p className="font-mono text-[10px] uppercase tracking-[0.3em] opacity-90">Years</p>
                    <p className="mt-2 text-4xl font-black tracking-tight sm:text-5xl">
                        12<span className="text-2xl">+</span>
                    </p>
                    <p className="mt-1 text-xs opacity-90">in production</p>
                </div>
                {/* Companies */}
                <div className="col-span-6 rounded-3xl border border-paper-300 bg-paper-50 p-5 shadow-tile sm:col-span-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-coal-500">Companies</p>
                    <p className="mt-2 text-4xl font-black tracking-tight text-coal-900 sm:text-5xl">9</p>
                    <p className="mt-1 text-xs text-coal-500">PH · SG · regional</p>
                </div>
                {/* Countries */}
                <div className="col-span-6 rounded-3xl border border-paper-300 bg-paper-50 p-5 shadow-tile sm:col-span-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-coal-500">Countries</p>
                    <p className="mt-2 text-4xl font-black tracking-tight text-coal-900 sm:text-5xl">
                        8<span className="text-cinnamon-600">+</span>
                    </p>
                    <p className="mt-1 text-xs text-coal-500">SG · AU · US · NY · MY · TH · ID· PH</p>
                </div>
                {/* Lead roles */}
                <div className="col-span-6 rounded-3xl border border-paper-300 bg-paper-50 p-5 shadow-tile sm:col-span-3">
                    <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-coal-500">Lead roles</p>
                    <p className="mt-2 text-4xl font-black tracking-tight text-coal-900 sm:text-5xl">4</p>
                    <p className="mt-1 text-xs text-coal-500">Hired straight in</p>
                </div>
            </div>
        </div>
    )
}
export default HomeView