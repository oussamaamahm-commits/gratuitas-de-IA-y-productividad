import SEO from '../components/SEO'

const ENTRIES = [
  {
    version: 'v1.0',
    date: '13 de septiembre de 2026',
    changes: [
      'Lanzamiento inicial de QuickMotionAI con 8 herramientas gratuitas.',
      'Sección de recursos con guías sobre IA y productividad.',
      'Arquitectura preparada para Google AdSense y monetización futura.',
    ],
  },
]

export default function Changelog() {
  return (
    <>
      <SEO title="Changelog" description="Historial de cambios y novedades de QuickMotionAI." path="/changelog" />
      <section className="px-4 pt-32 pb-24 bg-terminal-black min-h-screen">
        <div className="max-w-2xl mx-auto">
          <div className="text-[11px] tracking-widest text-matrix mb-3">[ CHANGELOG ]</div>
          <h1 className="font-mono-heading font-bold text-3xl md:text-4xl text-white mb-10">Changelog</h1>

          <div className="space-y-10">
            {ENTRIES.map((entry) => (
              <div key={entry.version} className="border-l-2 border-matrix/30 pl-5">
                <div className="flex items-center gap-3 mb-3">
                  <span className="font-mono-heading text-matrix text-sm">{entry.version}</span>
                  <span className="text-[11px] text-white/30">{entry.date}</span>
                </div>
                <ul className="space-y-2">
                  {entry.changes.map((c) => (
                    <li key={c} className="text-sm text-white/55">• {c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
