import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowRight, Info } from 'lucide-react'
import SEO from '../components/SEO'
import AdSlot from '../components/AdSlot'
import ResourceCard from '../components/ResourceCard'
import { getResourceBySlug, resources } from '../data/resources'

function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return <h2 className="font-mono-heading text-lg md:text-xl text-white pt-6">{block.content}</h2>
    case 'h3':
      return <h3 className="font-mono-heading text-base text-white/90 pt-2">{block.content}</h3>
    case 'ul':
      return (
        <ul className="list-disc pl-5 space-y-2 text-sm md:text-base text-white/60 leading-relaxed marker:text-matrix">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      )
    case 'ol':
      return (
        <ol className="list-decimal pl-5 space-y-2 text-sm md:text-base text-white/60 leading-relaxed marker:text-matrix">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ol>
      )
    case 'example':
      return (
        <figure className="rounded-sm border border-matrix/20 bg-terminal-black">
          {block.title && (
            <figcaption className="px-4 py-2 border-b border-white/5 text-[10px] tracking-widest text-matrix uppercase">
              {block.title}
            </figcaption>
          )}
          <pre className="p-4 overflow-x-auto whitespace-pre-wrap break-words font-code text-xs md:text-sm text-white/80 leading-relaxed">
            {block.content}
          </pre>
        </figure>
      )
    case 'note':
      return (
        <aside className="flex gap-3 rounded-sm border border-matrix/20 bg-matrix/5 p-4 text-sm text-white/70 leading-relaxed">
          <Info size={16} className="text-matrix shrink-0 mt-0.5" aria-hidden="true" />
          <p>{block.content}</p>
        </aside>
      )
    case 'cta':
      return (
        <Link
          to={block.to}
          className="btn-slide inline-flex items-center gap-2 rounded-sm bg-matrix px-5 py-3 text-sm font-semibold text-terminal-black"
        >
          <span className="btn-slide-layer bg-black/10" />
          <span className="flex items-center gap-2">
            {block.label} <ArrowRight size={14} />
          </span>
        </Link>
      )
    default:
      return <p className="text-sm md:text-base text-white/60 leading-relaxed">{block.content}</p>
  }
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const article = getResourceBySlug(slug)

  if (!article) return <Navigate to="/blog" replace />

  const related = resources.filter((r) => r.slug !== slug && r.category === article.category).concat(
    resources.filter((r) => r.slug !== slug && r.category !== article.category),
  ).slice(0, 2)

  // Mid-article ad goes right before the middle section heading, never next to a CTA or example box.
  const headingIndexes = article.body.map((b, i) => (b.type === 'h2' ? i : -1)).filter((i) => i > 0)
  const splitAt = headingIndexes[Math.floor(headingIndexes.length / 2)] ?? Math.ceil(article.body.length / 2)

  const published = new Date(article.date).toLocaleDateString('es-ES', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  })

  return (
    <>
      <SEO title={article.title} description={article.excerpt} path={`/blog/${article.slug}`} type="article" />
      <article className="px-4 pt-32 pb-24 bg-terminal-black min-h-screen">
        <div className="max-w-2xl mx-auto">
          <Link to="/blog" className="link-hover text-xs text-white/40 hover:text-matrix mb-6 inline-block">
            ← Volver al blog
          </Link>

          <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-white/40 mb-4">
            <span className="text-matrix tracking-widest uppercase">{article.category}</span>
            <span>·</span>
            <span>{article.readingTime} de lectura</span>
            <span>·</span>
            <time dateTime={article.date}>{published}</time>
          </div>

          <h1 className="font-mono-heading font-bold text-2xl md:text-4xl text-white mb-3 leading-tight">
            {article.title}
          </h1>
          <p className="text-xs text-white/35 mb-8">
            Por la redacción de QuickMotionAI ·{' '}
            <Link to="/editorial" className="underline underline-offset-2 hover:text-matrix">
              Cómo elaboramos el contenido
            </Link>
          </p>

          <div className="space-y-5">
            {article.body.slice(0, splitAt).map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          <div className="my-10">
            <AdSlot variant="inArticle" />
          </div>

          <div className="space-y-5">
            {article.body.slice(splitAt).map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          <div className="mt-10 rounded-sm border border-matrix/15 bg-terminal-gray/40 px-4 py-3 text-xs text-white/50 leading-relaxed">
            Este artículo es informativo y no sustituye el consejo de un profesional. Los resultados generados con
            herramientas de IA pueden contener errores y necesitan revisión humana antes de su uso final.
          </div>

          {related.length > 0 && (
            <div className="mt-16 border-t border-white/10 pt-10">
              <h2 className="font-mono-heading text-sm tracking-widest text-white/50 mb-5">ARTÍCULOS RELACIONADOS</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {related.map((r) => (
                  <ResourceCard key={r.slug} resource={r} />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    </>
  )
}
