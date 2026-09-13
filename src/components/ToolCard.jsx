import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { getIcon } from '../lib/iconMap'
import { categories } from '../data/categories'

export default function ToolCard({ tool }) {
  const Icon = getIcon(tool.icon)
  const category = categories.find((c) => c.slug === tool.category)

  return (
    <Link
      to={`/tools/${tool.slug}`}
      className="tool-card card-hover group flex flex-col justify-between rounded-sm border border-white/10 bg-terminal-gray/50 p-5 h-full"
    >
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center justify-center h-9 w-9 rounded-sm border border-matrix/20 bg-matrix/5 text-matrix">
            <Icon size={17} />
          </div>
          {category && (
            <span className="text-[10px] tracking-widest text-white/30 uppercase">{category.name}</span>
          )}
        </div>
        <h3 className="font-mono-heading text-base text-white mb-1.5">{tool.name}</h3>
        <p className="text-xs text-white/50 leading-relaxed">{tool.shortDescription}</p>
      </div>

      <div className="flex items-center gap-1.5 mt-5 text-xs text-matrix/80 group-hover:text-matrix">
        Abrir herramienta
        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
