import { useParams, Link, Navigate } from 'react-router-dom'
import SEO from '../components/SEO'
import ToolCard from '../components/ToolCard'
import { getCategoryBySlug } from '../data/categories'
import { getToolsByCategory } from '../data/tools'
import { getIcon } from '../lib/iconMap'

export default function CategoryPage() {
  const { slug } = useParams()
  const category = getCategoryBySlug(slug)

  if (!category) return <Navigate to="/categories" replace />

  const Icon = getIcon(category.icon)
  const categoryTools = getToolsByCategory(category.slug)

  return (
    <>
      <SEO
        title={`Herramientas de ${category.label}`}
        description={`${category.longDescription} Explora las herramientas gratuitas de IA de QuickMotionAI en la categoría ${category.label}.`}
        path={`/categories/${category.slug}`}
      />
      <section className="px-4 pt-32 pb-24 bg-terminal-black min-h-screen">
        <div className="max-w-6xl mx-auto">
          <Link to="/categories" className="link-hover text-xs text-white/40 hover:text-matrix mb-6 inline-block">
            ← Todas las categorías
          </Link>

          <div className="flex items-center gap-4 mb-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-sm border border-matrix/20 bg-matrix/5 text-matrix">
              <Icon size={22} />
            </div>
            <div>
              <div className="text-[11px] tracking-widest text-matrix">{category.name}</div>
              <h1 className="font-mono-heading font-bold text-2xl md:text-3xl text-white">{category.label}</h1>
            </div>
          </div>
          <p className="text-white/50 text-sm md:text-base max-w-xl mb-12">{category.longDescription}</p>

          {categoryTools.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {categoryTools.map((tool) => (
                <ToolCard key={tool.slug} tool={tool} />
              ))}
            </div>
          ) : (
            <p className="text-white/40 text-sm">Próximamente añadiremos herramientas a esta categoría.</p>
          )}
        </div>
      </section>
    </>
  )
}
