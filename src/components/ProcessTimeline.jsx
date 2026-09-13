import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { MousePointerClick, MessageSquareText, Cpu, CheckSquare } from 'lucide-react'

gsap.registerPlugin(ScrollTrigger)

const STEPS = [
  { n: '01', title: 'Elige', desc: 'Selecciona la herramienta que necesitas.', icon: MousePointerClick },
  { n: '02', title: 'Describe', desc: 'Introduce el contexto de tu tarea.', icon: MessageSquareText },
  { n: '03', title: 'Procesa', desc: 'Deja que la IA estructure y transforme la información.', icon: Cpu },
  { n: '04', title: 'Utiliza', desc: 'Copia, descarga o aplica el resultado.', icon: CheckSquare },
]

export default function ProcessTimeline() {
  const rootRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleX: 0, scaleY: 0 },
        {
          scaleX: 1,
          scaleY: 1,
          transformOrigin: 'left top',
          ease: 'none',
          scrollTrigger: {
            trigger: rootRef.current,
            start: 'top 70%',
            end: 'bottom 60%',
            scrub: 0.5,
          },
        }
      )

      gsap.from('.timeline-node', {
        scale: 0,
        opacity: 0,
        duration: 0.5,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: { trigger: rootRef.current, start: 'top 70%' },
      })
    }, rootRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id="como-funciona" className="px-4 py-20 md:py-28 bg-terminal-deep" ref={rootRef}>
      <div className="max-w-6xl mx-auto">
        <div className="max-w-xl mb-16">
          <div className="text-[11px] tracking-widest text-matrix mb-3">[ PROCESS ]</div>
          <h2 className="font-mono-heading font-bold text-3xl md:text-4xl text-white">
            De problema a resultado.
          </h2>
        </div>

        <div className="relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-white/10">
            <div ref={lineRef} className="h-full bg-matrix" style={{ transform: 'scaleX(0)' }} />
          </div>
          <div className="md:hidden absolute top-0 bottom-0 left-6 w-px bg-white/10">
            <div ref={lineRef} className="w-full bg-matrix" style={{ transform: 'scaleY(0)', height: '100%' }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
            {STEPS.map((step) => (
              <div key={step.n} className="relative flex md:flex-col gap-4 md:gap-0 pl-16 md:pl-0">
                <div className="timeline-node absolute md:relative left-0 md:left-auto top-0 flex items-center justify-center h-12 w-12 rounded-full border-2 border-matrix bg-terminal-black text-matrix mb-0 md:mb-5 shrink-0">
                  <step.icon size={18} />
                </div>
                <div>
                  <div className="text-[11px] text-matrix/60 font-code mb-1">{step.n}</div>
                  <h3 className="font-mono-heading text-lg text-white mb-1.5">{step.title}</h3>
                  <p className="text-xs text-white/50 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
