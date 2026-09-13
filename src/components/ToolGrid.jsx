import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import ToolCard from './ToolCard'
import { tools } from '../data/tools'

gsap.registerPlugin(ScrollTrigger)

export default function ToolGrid() {
  const rootRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.tool-card', {
        y: 24,
        opacity: 0,
        duration: 0.6,
        ease: 'power3.out',
        stagger: 0.15,
        scrollTrigger: {
          trigger: rootRef.current,
          start: 'top 80%',
        },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="herramientas" className="relative px-4 py-24 md:py-32 bg-terminal-black" ref={rootRef}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-12">
          <div className="text-[11px] tracking-widest text-matrix mb-3">[ TOOLS ]</div>
          <h2 className="font-mono-heading font-bold text-3xl md:text-4xl text-white mb-4">
            Tu nuevo arsenal.
          </h2>
          <p className="text-white/50 text-sm md:text-base leading-relaxed">
            Pequeñas herramientas para eliminar grandes cantidades de trabajo repetitivo.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {tools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>
      </div>
    </section>
  )
}
