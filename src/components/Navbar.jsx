import { useEffect, useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Menu, X, Terminal } from 'lucide-react'

const NAV_LINKS = [
  { label: 'Herramientas', href: '/tools' },
  { label: 'Categorías', href: '/categories' },
  { label: 'Cómo funciona', href: '/#como-funciona' },
  { label: 'Recursos', href: '/blog' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const sentinelRef = useRef(null)
  const navigate = useNavigate()

  useEffect(() => {
    const sentinel = document.createElement('div')
    sentinel.style.position = 'absolute'
    sentinel.style.top = '40px'
    sentinel.style.height = '1px'
    sentinel.style.width = '1px'
    sentinel.style.pointerEvents = 'none'
    document.body.prepend(sentinel)

    const observer = new IntersectionObserver(
      ([entry]) => setScrolled(!entry.isIntersecting),
      { threshold: 0 }
    )
    observer.observe(sentinel)

    return () => {
      observer.disconnect()
      sentinel.remove()
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleAnchorClick = (href) => (e) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      setMenuOpen(false)
      const id = href.split('#')[1]
      if (window.location.pathname !== '/') {
        navigate('/')
        setTimeout(() => {
          document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
        }, 100)
      } else {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      setMenuOpen(false)
    }
  }

  return (
    <>
      <header className="fixed top-3 md:top-5 left-0 right-0 z-50 flex justify-center px-3">
        <nav
          className={`w-full max-w-4xl flex items-center justify-between gap-4 px-4 md:px-6 py-2.5 md:py-3 rounded-full transition-all duration-300 ${
            scrolled
              ? 'bg-terminal-gray/80 backdrop-blur-md border border-matrix/20 shadow-[0_4px_24px_rgba(0,255,65,0.06)]'
              : 'bg-transparent border border-transparent'
          }`}
          aria-label="Navegación principal"
        >
          <Link to="/" className="flex items-center gap-2 shrink-0 group" onClick={() => setMenuOpen(false)}>
            <Terminal size={18} className="text-matrix" aria-hidden="true" />
            <span className="font-mono-heading font-bold text-sm md:text-base tracking-tight text-white">
              PromptLab
            </span>
          </Link>

          <ul className="hidden md:flex items-center gap-6 text-xs tracking-wide text-white/70">
            {NAV_LINKS.map((link) => (
              <li key={link.label}>
                {link.href.startsWith('/#') ? (
                  <a href={link.href} onClick={handleAnchorClick(link.href)} className="link-hover hover:text-matrix">
                    {link.label}
                  </a>
                ) : (
                  <Link to={link.href} className="link-hover hover:text-matrix">
                    {link.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>

          <Link
            to="/tools"
            className="hidden md:inline-flex btn-slide items-center rounded-full border border-matrix/40 px-4 py-1.5 text-xs font-medium text-matrix"
          >
            <span className="btn-slide-layer bg-matrix/10" />
            <span>Explorar herramientas</span>
          </Link>

          <button
            className="md:hidden text-white p-1"
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-terminal-deep/98 backdrop-blur-sm md:hidden flex flex-col items-center justify-center gap-8 px-6">
          {NAV_LINKS.map((link) =>
            link.href.startsWith('/#') ? (
              <a
                key={link.label}
                href={link.href}
                onClick={handleAnchorClick(link.href)}
                className="text-2xl font-mono-heading text-white hover:text-matrix"
              >
                {link.label}
              </a>
            ) : (
              <Link
                key={link.label}
                to={link.href}
                onClick={() => setMenuOpen(false)}
                className="text-2xl font-mono-heading text-white hover:text-matrix"
              >
                {link.label}
              </Link>
            )
          )}
          <Link
            to="/tools"
            onClick={() => setMenuOpen(false)}
            className="mt-4 rounded-full border border-matrix/50 px-6 py-2.5 text-sm text-matrix"
          >
            Explorar herramientas →
          </Link>
        </div>
      )}
    </>
  )
}
