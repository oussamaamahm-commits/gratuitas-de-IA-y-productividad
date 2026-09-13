import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function CTASection() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.cta-reveal', {
        y: 20,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 85%' },
      })
    }, rootRef)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={rootRef} className="px-4 py-24 md:py-32 bg-matrix">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="cta-reveal font-mono-heading font-bold text-3xl sm:text-4xl md:text-5xl text-terminal-black leading-tight">
          Tu próximo bloque de trabajo empieza aquí.
        </h2>
        <p className="cta-reveal text-terminal-black/70 mt-4 text-sm md:text-base">
          Elige una herramienta. Resuelve una tarea. Sigue avanzando.
        </p>
        <Link
          to="/tools"
          className="cta-reveal btn-slide inline-flex items-center rounded-sm bg-terminal-black px-7 py-3.5 text-sm font-semibold text-matrix mt-8"
        >
          <span className="btn-slide-layer bg-white/10" />
          <span>Explorar herramientas →</span>
        </Link>
      </div>
    </section>
  )
}
