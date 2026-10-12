type TileVariant = 'cinnamon' | 'paper' | 'coal'

interface Tile {
  category: string
  items: string
  variant: TileVariant
  rotate: string // tailwind rotate class
}

const tiles: Tile[] = [
  { category: 'Mobile',       items: 'Android · iOS · Flutter · KMP',                variant: 'cinnamon', rotate: '-rotate-2' },
  { category: 'Frontend',     items: 'React · TypeScript ',                          variant: 'paper',    rotate: 'rotate-1'  },
  { category: 'API Gateway',  items: 'Node.js · TypeScript · Java · Springboot',     variant: 'cinnamon', rotate: '-rotate-1' },
  { category: 'Database',     items: 'MySQL · PostgreSQL · SQL · DynamoDB',          variant: 'paper', rotate: '-rotate-1'    },
  { category: 'DevOps',       items: 'K8s · Helm · Terraform · Jenkins',             variant: 'cinnamon', rotate: '-rotate-1' },
  { category: 'AI-Augmented', items: 'Claude · ChatGPT · Gemini · Codex',            variant: 'paper',    rotate: 'rotate-2'  },
  { category: 'Backend',      items: 'K8s · Helm · Terraform · Jenkins',             variant: 'cinnamon', rotate: '-rotate-1' },
  { category: 'Leadership',   items: 'Hired into Lead & Tech-Lead roles',            variant: 'coal',     rotate: '-rotate-2' },
  { category: 'Payments',     items: 'UOB · VeritasPay · Global Payments · SRDD',    variant: 'cinnamon', rotate: 'rotate-1'  },
  { category: 'Monitoring',   items: 'Prometheus · Grafana · Firebase Analytics/Crashlytics',    variant: 'paper',    rotate: 'rotate-2'  },
]

// Map each variant to its specific Tailwind classes
function variantClasses(variant: TileVariant) {
  switch (variant) {
    case 'cinnamon':
      return {
        box:   'border-cinnamon-300 bg-cinnamon-200/40',
        label: 'text-cinnamon-700',
        body:  'text-coal-900',
      }
    case 'paper':
      return {
        box:   'border-paper-300 bg-paper-50',
        label: 'text-cinnamon-700',
        body:  'text-coal-900',
      }
    case 'coal':
      return {
        box:   'border-coal-800 bg-coal-900',
        label: 'text-cinnamon-300',
        body:  'text-paper-50',
      }
  }
}

// A single row of tiles, reused twice for seamless loop
function TileRow({ ariaHidden = false }: { ariaHidden?: boolean }) {
  return (
    <div aria-hidden={ariaHidden} className="flex shrink-0 items-center gap-3 pr-3">
      {tiles.map((tile) => {
        const cls = variantClasses(tile.variant)
        return (
          <div
            key={tile.category + (ariaHidden ? '-dup' : '')}
            className={`${tile.rotate} rounded-2xl border ${cls.box} px-4 py-2.5 shadow-tile`}
          >
            <p className={`font-mono text-[9px] uppercase tracking-[0.3em] font-bold ${cls.label}`}>
              {tile.category}
            </p>
            <p className={`text-sm ${cls.body}`}>{tile.items}</p>
          </div>
        )
      })}
    </div>
  )
}

function Marquee() {
  return (
    <section className="relative h-[70px] sm:h-[88px] overflow-hidden border-b border-paper-300 bg-paper-100">
      {/* Left fade gradient */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-paper-100 to-transparent" />

      {/* Right fade gradient */}
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-paper-100 to-transparent" />

      {/* The scrolling track — duplicated content for seamless loop */}
      <div
        className="marquee-track flex h-full items-center whitespace-nowrap"
        style={{ width: 'max-content' }}
      >
        <TileRow />
        <TileRow ariaHidden />
      </div>
    </section>
  )
}

export default Marquee