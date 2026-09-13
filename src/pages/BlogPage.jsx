import SEO from '../components/SEO'
import ResourceCard from '../components/ResourceCard'
import AdSlot from '../components/AdSlot'
import { resources } from '../data/resources'

export default function BlogPage() {
  return (
    <>
      <SEO
        title="Blog — Recursos sobre IA y productividad"
        description="Artículos prácticos sobre cómo escribir mejores prompts, usar IA sin perder productividad y automatizar tareas repetitivas."
        path="/blog"
      />
      <section className="px-4 pt-32 pb-24 bg-terminal-black min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="text-[11px] tracking-widest text-matrix mb-3">[ BLOG ]</div>
            <h1 className="font-mono-heading font-bold text-3xl md:text-4xl text-white mb-4">
              Aprende a trabajar mejor con IA.
            </h1>
            <p className="text-white/50 text-sm md:text-base">
              Guías prácticas sobre prompts, productividad y automatización, sin relleno.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12">
            {resources.map((r) => (
              <ResourceCard key={r.slug} resource={r} />
            ))}
          </div>

          <AdSlot variant="horizontal" />
        </div>
      </section>
    </>
  )
}
