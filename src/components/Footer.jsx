import { Link } from 'react-router-dom'
import { Terminal } from 'lucide-react'

const COLUMNS = [
  {
    title: 'TOOLS',
    links: [
      { label: 'Writing', href: '/tools/ai-writer' },
      { label: 'Summarizer', href: '/tools/ai-summarizer' },
      { label: 'Prompts', href: '/tools/prompt-builder' },
      { label: 'Planner', href: '/tools/smart-planner' },
    ],
  },
  {
    title: 'RESOURCES',
    links: [
      { label: 'Blog', href: '/blog' },
      { label: 'Guides', href: '/blog' },
      { label: 'AI Tips', href: '/blog' },
      { label: 'Productivity', href: '/blog' },
    ],
  },
  {
    title: 'COMPANY',
    links: [
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
      { label: 'Changelog', href: '/changelog' },
    ],
  },
  {
    title: 'LEGAL',
    links: [
      { label: 'Privacy', href: '/legal/privacidad' },
      { label: 'Cookies', href: '/legal/cookies' },
      { label: 'Terms', href: '/legal/terminos' },
      { label: 'Legal Notice', href: '/legal/aviso-legal' },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="bg-terminal-gray border-t border-white/5 px-4 pt-16 pb-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_repeat(4,1fr)] gap-10 pb-12">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <Terminal size={18} className="text-matrix" />
              <span className="font-mono-heading font-bold text-white">QuickMotionAI</span>
            </div>
            <p className="text-xs text-white/40 leading-relaxed max-w-xs">
              AI Productivity System. Menos tareas. Más resultados.
            </p>
          </div>

          {COLUMNS.map((col) => (
            <div key={col.title}>
              <h4 className="text-[11px] tracking-widest text-matrix/70 mb-4">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link to={link.href} className="link-hover text-xs text-white/50 hover:text-white">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-white/30">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-matrix" />
            </span>
            <span className="text-matrix/70 tracking-widest">SYSTEM ACTIVE · v1.0</span>
          </div>
          <span>© {new Date().getFullYear()} QuickMotionAI. Todos los derechos reservados.</span>
        </div>
      </div>
    </footer>
  )
}
