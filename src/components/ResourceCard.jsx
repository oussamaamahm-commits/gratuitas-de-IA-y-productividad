import { Link } from 'react-router-dom'
import { ArrowRight, Clock } from 'lucide-react'

export default function ResourceCard({ resource }) {
  return (
    <Link
      to={`/blog/${resource.slug}`}
      className="resource-card card-hover group flex flex-col rounded-sm border border-white/10 bg-terminal-gray/40 p-5"
    >
      <div className="flex items-center justify-between mb-3">
        <span className="text-[10px] tracking-widest text-matrix uppercase">{resource.category}</span>
        <span className="flex items-center gap-1 text-[10px] text-white/30">
          <Clock size={11} />
          {resource.readingTime}
        </span>
      </div>
      <h3 className="font-mono-heading text-sm text-white mb-2 leading-snug">{resource.title}</h3>
      <p className="text-xs text-white/50 leading-relaxed mb-4">{resource.excerpt}</p>
      <div className="mt-auto flex items-center gap-1.5 text-xs text-matrix/80 group-hover:text-matrix">
        Leer artículo
        <ArrowRight size={13} className="transition-transform group-hover:translate-x-1" />
      </div>
    </Link>
  )
}
