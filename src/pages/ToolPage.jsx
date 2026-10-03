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
import { toolGuides } from '../data/toolGuides'
import { getIcon } from '../lib/iconMap'

const TOOL_ARTICLES = {
  'ai-writer': ['email-que-consigue-respuesta', 'escritura-persuasiva-landing-pages'],
  'ai-summarizer': ['resumir-documentos-con-ia', 'estudiar-con-ia-sin-hacer-trampa'],
  'prompt-builder': ['como-escribir-mejores-prompts', 'prompts-para-marketing'],
  'email-assistant': ['email-que-consigue-respuesta', 'errores-comunes-usando-ia-en-el-trabajo'],
  'smart-planner': ['planificar-un-proyecto-personal', 'organizar-tu-semana-con-ia'],
  'cv-builder': ['cv-filtros-automaticos', 'preparar-entrevista-de-trabajo-con-ia'],
  'meeting-to-tasks': ['notas-de-reunion-que-sirven', 'automatizar-tareas-repetitivas'],
  'text-translator': ['traducir-sin-perder-el-tono', 'email-que-consigue-respuesta'],
}

export default function ToolPage() {
  const { slug } = useParams()
  const tool = getToolBySlug(slug)

  if (!tool) return <Navigate to="/tools" replace />

  const Icon = getIcon(tool.icon)
  const guide = toolGuides[tool.slug]
  const related = getRelatedTools(tool.slug, 3)
  const relatedArticles = (TOOL_ARTICLES[tool.slug] || [])
    .map((s) => resources.find((r) => r.slug === s))
    .filter(Boolean)

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
            {tool.slug === 'text-translator'
              ? 'El texto se envía a un servicio de traducción externo solo para esta traducción. No incluyas información confidencial y revisa el resultado antes de usarlo.'
              : 'El texto se procesa en tu navegador y no se envía a ningún servidor. Revisa siempre el resultado antes de usarlo.'}
          </p>
        </div>
      </section>

      {guide && (
        <section className="px-4 py-12 md:py-16 bg-terminal-deep">
          <div className="max-w-3xl mx-auto space-y-10">
            <div>
              <h2 className="font-mono-heading text-xl md:text-2xl text-white mb-4">Cómo funciona por dentro</h2>
              <div className="space-y-4">
                {guide.inside.map((p) => (
                  <p key={p} className="text-sm md:text-base text-white/60 leading-relaxed">{p}</p>
                ))}
              </div>
            </div>

            <div>
              <h2 className="font-mono-heading text-xl md:text-2xl text-white mb-4">Un ejemplo real</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <figure className="rounded-sm border border-white/10 bg-terminal-black">
                  <figcaption className="px-4 py-2 border-b border-white/5 text-[10px] tracking-widest text-white/40">ENTRADA</figcaption>
                  <pre className="p-4 whitespace-pre-wrap break-words font-code text-xs text-white/70 leading-relaxed">{guide.example.input}</pre>
                </figure>
                <figure className="rounded-sm border border-matrix/20 bg-terminal-black">
                  <figcaption className="px-4 py-2 border-b border-white/5 text-[10px] tracking-widest text-matrix">RESULTADO</figcaption>
                  <pre className="p-4 whitespace-pre-wrap break-words font-code text-xs text-white/80 leading-relaxed">{guide.example.output}</pre>
                </figure>
              </div>
              <p className="text-xs text-white/45 leading-relaxed mt-3">{guide.example.note}</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="font-mono-heading text-lg text-white mb-4">Errores comunes</h2>
                <ul className="list-disc pl-5 space-y-2 text-sm text-white/55 leading-relaxed marker:text-matrix">
                  {guide.mistakes.map((m) => (
                    <li key={m}>{m}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="font-mono-heading text-lg text-white mb-4">Qué no hace</h2>
                <ul className="list-disc pl-5 space-y-2 text-sm text-white/55 leading-relaxed marker:text-matrix">
                  {guide.limits.map((l) => (
                    <li key={l}>{l}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>
      )}

      <section className="px-4 py-12 md:py-16 bg-terminal-black">
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
