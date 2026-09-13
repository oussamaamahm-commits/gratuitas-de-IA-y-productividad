import SEO from '../components/SEO'
import ToolCard from '../components/ToolCard'
import AdSlot from '../components/AdSlot'
import { tools } from '../data/tools'

export default function ToolsPage() {
  return (
    <>
      <SEO
        title="Todas las herramientas"
        description="Explora el catálogo completo de herramientas gratuitas de IA de PromptLab: escritura, resúmenes, prompts, planificación y más."
        path="/tools"
      />
      <section className="px-4 pt-32 pb-24 bg-terminal-black min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="text-[11px] tracking-widest text-matrix mb-3">[ CATALOG ]</div>
            <h1 className="font-mono-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Todas las herramientas.
            </h1>
            <p className="text-white/50 text-sm md:text-base leading-relaxed">
              Cada herramienta resuelve una tarea concreta. Elige la que necesitas y empieza en segundos, sin registro.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {tools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>

          <AdSlot variant="horizontal" />
        </div>
      </section>
    </>
  )
}
