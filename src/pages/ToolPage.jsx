import { useParams, Link, Navigate } from 'react-router-dom'
import { CheckCircle2 } from 'lucide-react'
import SEO from '../components/SEO'
import AdSlot from '../components/AdSlot'
import ToolCard from '../components/ToolCard'
import ResourceCard from '../components/ResourceCard'
import FAQAccordionMini from '../components/tools/FAQAccordionMini'
import ToolDemo from '../components/tools/ToolDemo'
import { getToolBySlug, getRelatedTools } from '../data/tools'
import { resources } from '../data/resources'
import { getIcon } from '../lib/iconMap'

export default function ToolPage() {
  const { slug } = useParams()
  const tool = getToolBySlug(slug)

  if (!tool) return <Navigate to="/tools" replace />

  const Icon = getIcon(tool.icon)
  const related = getRelatedTools(tool.slug, 3)
  const relatedArticles = resources.slice(0, 2)

  return (
    <>
      <SEO
        title={tool.name}
        description={tool.description}
        path={`/tools/${tool.slug}`}
      />

      <section className="px-4 pt-32 pb-16 bg-terminal-deep bg-grid">
        <div className="max-w-4xl mx-auto">
          <Link to="/tools" className="link-hover text-xs text-white/40 hover:text-matrix mb-6 inline-block">
            ← Todas las herramientas
          </Link>
          <div className="flex items-center gap-4 mb-5">
            <div className="flex items-center justify-center h-12 w-12 rounded-sm border border-matrix/20 bg-matrix/5 text-matrix shrink-0">
              <Icon size={22} />
            </div>
            <h1 className="font-mono-heading font-bold text-2xl md:text-4xl text-white">{tool.name}</h1>
          </div>
          <p className="text-white/55 text-sm md:text-base max-w-2xl leading-relaxed">{tool.description}</p>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16 bg-terminal-black">
        <div className="max-w-4xl mx-auto">
          <ToolDemo slug={tool.slug} />
          <p className="text-[11px] text-white/30 mt-4">
            Los resultados se generan localmente en tu navegador y pueden necesitar revisión antes de usarse.
          </p>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16 bg-terminal-deep">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mono-heading text-xl md:text-2xl text-white mb-8">Cómo funciona</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {tool.howItWorks.map((step, i) => (
              <div key={step.title} className="rounded-sm border border-white/10 bg-terminal-gray/30 p-5">
                <div className="text-[11px] text-matrix/70 font-code mb-2">0{i + 1}</div>
                <h3 className="font-mono-heading text-sm text-white mb-1.5">{step.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-12 md:py-16 bg-terminal-black">
        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <h2 className="font-mono-heading text-lg text-white mb-4">Casos de uso</h2>
            <ul className="space-y-3">
              {tool.useCases.map((useCase) => (
                <li key={useCase} className="flex items-start gap-2.5 text-sm text-white/55">
                  <CheckCircle2 size={15} className="text-matrix mt-0.5 shrink-0" />
                  {useCase}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="font-mono-heading text-lg text-white mb-4">Consejos</h2>
            <ul className="space-y-3">
              {tool.tips.map((tip) => (
                <li key={tip} className="flex items-start gap-2.5 text-sm text-white/55">
                  <span className="text-matrix mt-0.5">›</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <div className="px-4">
        <div className="max-w-4xl mx-auto">
          <AdSlot variant="inArticle" />
        </div>
      </div>

      <section className="px-4 py-12 md:py-16 bg-terminal-deep">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mono-heading text-lg text-white mb-6">Preguntas frecuentes</h2>
          <FAQAccordionMini items={tool.faq} />
        </div>
      </section>

      {related.length > 0 && (
        <section className="px-4 py-12 md:py-16 bg-terminal-black">
          <div className="max-w-4xl mx-auto">
            <h2 className="font-mono-heading text-lg text-white mb-6">Herramientas relacionadas</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {related.map((t) => (
                <ToolCard key={t.slug} tool={t} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="px-4 py-12 md:py-20 bg-terminal-deep">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-mono-heading text-lg text-white mb-6">Artículos relacionados</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {relatedArticles.map((r) => (
              <ResourceCard key={r.slug} resource={r} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
