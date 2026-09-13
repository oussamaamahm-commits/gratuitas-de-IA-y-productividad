import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const METRICS = [
  { value: 8, suffix: '', label: 'Herramientas' },
  { value: 6, suffix: '', label: 'Categorías' },
  { value: 0, suffix: '€', label: 'Acceso inicial', prefix: false },
  { value: 100, suffix: '%', label: 'Accesible desde el navegador' },
]

export default function Metrics() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counters = gsap.utils.toArray('.metric-value')
      counters.forEach((el) => {
        const target = Number(el.dataset.value)
        const suffix = el.dataset.suffix || ''
        const obj = { val: 0 }
        gsap.to(obj, {
          val: target,
          duration: 1.2,
          ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
          onUpdate: () => {
            el.textContent = Math.round(obj.val) + suffix
          },
        })
      })

      gsap.from('.metric-item', {
        y: 16,
        opacity: 0,
        duration: 0.5,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 85%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section className="px-4 py-16 md:py-20 bg-terminal-deep border-y border-white/5" ref={rootRef}>
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {METRICS.map((m) => (
          <div key={m.label} className="metric-item text-center">
            <div
              className="metric-value font-mono-heading font-bold text-3xl md:text-4xl text-matrix text-glow"
              data-value={m.value}
              data-suffix={m.suffix}
            >
              0{m.suffix}
            </div>
            <div className="text-[11px] md:text-xs text-white/50 mt-2 tracking-wide">{m.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}
