import { useParams, Link, Navigate } from 'react-router-dom'
import SEO from '../components/SEO'
import AdSlot from '../components/AdSlot'
import ResourceCard from '../components/ResourceCard'
import { getResourceBySlug, resources } from '../data/resources'

export default function BlogPostPage() {
  const { slug } = useParams()
  const article = getResourceBySlug(slug)

  if (!article) return <Navigate to="/blog" replace />

  const related = resources.filter((r) => r.slug !== slug).slice(0, 2)
  const midpoint = Math.ceil(article.body.length / 2)

  return (
    <>
      <SEO title={article.title} description={article.excerpt} path={`/blog/${article.slug}`} type="article" />
      <article className="px-4 pt-32 pb-24 bg-terminal-black min-h-screen">
        <div className="max-w-2xl mx-auto">
          <Link to="/blog" className="link-hover text-xs text-white/40 hover:text-matrix mb-6 inline-block">
            ← Volver al blog
          </Link>

          <div className="flex items-center gap-3 text-[11px] text-white/40 mb-4">
            <span className="text-matrix tracking-widest uppercase">{article.category}</span>
            <span>·</span>
            <span>{article.readingTime}</span>
            <span>·</span>
            <time dateTime={article.date}>
              {new Date(article.date).toLocaleDateString('es-ES', { day: 'numeric', month: 'long', year: 'numeric' })}
            </time>
          </div>

          <h1 className="font-mono-heading font-bold text-2xl md:text-4xl text-white mb-8 leading-tight">
            {article.title}
          </h1>

          <div className="prose-content space-y-5">
            {article.body.slice(0, midpoint).map((block, i) =>
              block.type === 'h2' ? (
                <h2 key={i} className="font-mono-heading text-lg md:text-xl text-white pt-4">
                  {block.content}
                </h2>
              ) : (
                <p key={i} className="text-sm md:text-base text-white/60 leading-relaxed">
                  {block.content}
                </p>
              )
            )}
          </div>

          <div className="my-10">
            <AdSlot variant="inArticle" />
          </div>

          <div className="prose-content space-y-5">
            {article.body.slice(midpoint).map((block, i) =>
              block.type === 'h2' ? (
                <h2 key={i} className="font-mono-heading text-lg md:text-xl text-white pt-4">
                  {block.content}
                </h2>
              ) : (
                <p key={i} className="text-sm md:text-base text-white/60 leading-relaxed">
                  {block.content}
                </p>
              )
            )}
          </div>

          <div className="mt-8 rounded-sm border border-matrix/15 bg-terminal-gray/40 px-4 py-3 text-xs text-white/50">
            Los resultados generados con herramientas de IA pueden necesitar revisión humana antes de su uso final.
          </div>

          {related.length > 0 && (
            <div className="mt-16 border-t border-white/10 pt-10">
              <h3 className="font-mono-heading text-sm tracking-widest text-white/50 mb-5">ARTÍCULOS RELACIONADOS</h3>
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
