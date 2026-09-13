import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getIcon } from '../lib/iconMap'
import { getToolsByCategory } from '../data/tools'

export default function CategoryCard({ category }) {
  const Icon = getIcon(category.icon)
  const count = getToolsByCategory(category.slug).length

  return (
    <Link
      to={`/categories/${category.slug}`}
      className="category-card card-hover group flex flex-col rounded-sm border border-white/10 bg-terminal-gray/40 p-5"
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center justify-center h-9 w-9 rounded-sm border border-matrix/20 bg-matrix/5 text-matrix">
          <Icon size={17} />
        </div>
        <span className="text-[10px] text-white/30">{count} herramienta{count !== 1 ? 's' : ''}</span>
      </div>
      <h3 className="font-mono-heading text-sm text-white mb-1 tracking-wide">{category.name}</h3>
      <p className="text-xs text-white/50 mb-4">{category.description}</p>
      <div className="mt-auto flex items-center gap-1.5 text-xs text-matrix/80 group-hover:text-matrix">
        Explorar
        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
