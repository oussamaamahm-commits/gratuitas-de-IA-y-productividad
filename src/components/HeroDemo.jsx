import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import { Zap, Brain, Lock, PenLine, FileText, Sparkles, CalendarCheck, FileUser, Mail, Circle } from 'lucide-react'

const SIDEBAR_TOOLS = [
  { label: 'Write', icon: PenLine },
  { label: 'Summarize', icon: FileText },
  { label: 'Prompts', icon: Sparkles },
  { label: 'Planner', icon: CalendarCheck },
  { label: 'CV', icon: FileUser },
  { label: 'Email', icon: Mail },
]

export default function HeroDemo() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } })
      tl.from('.hero-badge-top', { y: -12, opacity: 0, duration: 0.5 })
        .from('.hero-headline', { y: 24, opacity: 0, duration: 0.7, stagger: 0.08 }, '-=0.2')
        .from('.hero-sub', { y: 16, opacity: 0, duration: 0.6 }, '-=0.3')
        .from('.hero-cta', { y: 12, opacity: 0, duration: 0.5, stagger: 0.08 }, '-=0.3')
        .from(
          '.hero-mockup',
          { opacity: 0, scale: 0.85, rotateY: 0, rotateX: 0, duration: 0.9, ease: 'power3.out' },
          '-=0.4'
        )
        .from('.hero-mockup-badge', { y: 16, opacity: 0, duration: 0.5, stagger: 0.15 }, '-=0.3')
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      ref={rootRef}
      className="relative min-h-[100dvh] flex flex-col items-center justify-center pt-28 pb-16 px-4 bg-terminal-deep bg-grid overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-terminal-black pointer-events-none" />

      <div className="hero-badge-top inline-flex items-center gap-2 rounded-full border border-matrix/25 bg-terminal-gray/50 px-3 py-1 text-[11px] tracking-widest text-matrix mb-6">
        <span className="relative flex h-1.5 w-1.5">
          <span className="animate-pulse-dot absolute inline-flex h-full w-full rounded-full bg-matrix" />
        </span>
        SYSTEM ONLINE
      </div>

      <h1 className="text-center font-mono-heading font-bold text-4xl sm:text-5xl md:text-6xl leading-[1.05] text-white max-w-3xl">
        <span className="hero-headline block">Trabaja más rápido.</span>
        <span className="hero-headline block text-matrix text-glow">Con IA.</span>
      </h1>

      <p className="hero-sub text-center text-white/60 max-w-xl mt-6 text-sm md:text-base leading-relaxed">
        Un arsenal de herramientas gratuitas para escribir, resumir, organizar y automatizar tu trabajo diario.
      </p>

      <div className="flex flex-col sm:flex-row items-center gap-3 mt-8">
        <Link
          to="/tools"
          className="hero-cta btn-slide inline-flex items-center rounded-sm bg-matrix px-6 py-3 text-sm font-semibold text-terminal-black"
        >
          <span className="btn-slide-layer bg-black/10" />
          <span>Explorar herramientas →</span>
        </Link>
        <a
          href="/#como-funciona"
          className="hero-cta btn-slide inline-flex items-center rounded-sm border border-white/20 px-6 py-3 text-sm text-white/80"
        >
          <span className="btn-slide-layer bg-white/5" />
          <span>Ver cómo funciona</span>
        </a>
      </div>

      <div
        className="hero-mockup w-full max-w-3xl mt-14"
        style={{ perspective: '1000px' }}
      >
        <div
          className="rounded-sm border border-matrix/20 bg-terminal-gray shadow-[0_20px_60px_rgba(0,0,0,0.6)] overflow-hidden"
          style={{ transform: 'rotateY(-5deg) rotateX(2deg)' }}
        >
          <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/5 bg-terminal-black/60">
            <div className="flex gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
            </div>
            <div className="flex-1 text-center text-[11px] text-white/30 font-code truncate">
              promptlab.app / workspace
            </div>
          </div>

          <div className="flex flex-col sm:flex-row min-h-[280px] text-left">
            <aside className="sm:w-40 border-b sm:border-b-0 sm:border-r border-white/5 p-3 bg-terminal-black/40">
              <div className="text-[10px] tracking-widest text-white/30 mb-2 px-1">TOOLS</div>
              <ul className="space-y-1">
                {SIDEBAR_TOOLS.map((t, i) => (
                  <li
                    key={t.label}
                    className={`flex items-center gap-2 px-2 py-1.5 rounded-sm text-[11px] ${
                      i === 0 ? 'bg-matrix/10 text-matrix' : 'text-white/50'
                    }`}
                  >
                    <t.icon size={12} />
                    {t.label}
                  </li>
                ))}
              </ul>
            </aside>

            <div className="flex-1 p-4 flex flex-col">
              <div className="text-[10px] tracking-widest text-white/30 mb-3">AI WORKSPACE</div>
              <div className="text-xs text-white/70 mb-2 font-code">¿Qué quieres resolver hoy?</div>
              <div className="border border-white/10 rounded-sm bg-terminal-black/60 px-3 py-2 text-[11px] text-white/40 font-code mb-3">
                Escribe una tarea, pega un texto o describe un objetivo...
              </div>
              <button
                type="button"
                tabIndex={-1}
                className="self-start rounded-sm bg-matrix/90 text-terminal-black text-[11px] font-semibold px-3 py-1.5 mb-4"
              >
                RUN TOOL
              </button>

              <div className="mt-auto border-t border-white/5 pt-3">
                <div className="flex items-center justify-between text-[10px] text-white/30 mb-1.5">
                  <span>OUTPUT_READY</span>
                  <span className="font-code">00:00:02</span>
                </div>
                <div className="text-[11px] text-matrix/80 font-code leading-relaxed">
                  &gt; tarea estructurada en 3 pasos accionables
                  <span className="blink-cursor" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-3 mt-8">
        {[
          { icon: Zap, label: 'Gratis' },
          { icon: Brain, label: 'IA práctica' },
          { icon: Lock, label: 'Sin complicaciones' },
        ].map((b) => (
          <div
            key={b.label}
            className="hero-mockup-badge flex items-center gap-1.5 rounded-full border border-white/10 bg-terminal-gray/60 px-3 py-1.5 text-[11px] text-white/60"
          >
            <b.icon size={13} className="text-matrix" />
            {b.label}
          </div>
        ))}
      </div>
    </section>
  )
}
