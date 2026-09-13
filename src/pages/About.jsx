import SEO from '../components/SEO'
import { Terminal, Target, Layers } from 'lucide-react'

export default function About() {
  return (
    <>
      <SEO
        title="Sobre PromptLab"
        description="PromptLab es un sistema de herramientas gratuitas de IA y productividad para escribir, organizar y trabajar más rápido."
        path="/about"
      />
      <section className="px-4 pt-32 pb-24 bg-terminal-black min-h-screen">
        <div className="max-w-2xl mx-auto">
          <div className="text-[11px] tracking-widest text-matrix mb-3">[ ABOUT ]</div>
          <h1 className="font-mono-heading font-bold text-3xl md:text-4xl text-white mb-6">Sobre PromptLab</h1>

          <div className="space-y-5 text-sm md:text-base text-white/60 leading-relaxed">
            <p>
              PromptLab nace de una idea simple: la mayoría de las tareas diarias de escritura, organización y
              planificación se repiten una y otra vez, y gran parte de ese trabajo se puede acelerar con las
              herramientas adecuadas.
            </p>
            <p>
              No buscamos ser otra plataforma que promete "revolucionar" tu forma de trabajar. Buscamos ser un
              conjunto de herramientas concretas, gratuitas y directas al grano, que resuelvan tareas reales en
              minutos en lugar de horas.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12">
            {[
              { icon: Terminal, title: 'Producto primero', desc: 'La experiencia de uso siempre por delante de cualquier otra consideración.' },
              { icon: Target, title: 'Utilidad concreta', desc: 'Cada herramienta resuelve una tarea específica, sin funciones de relleno.' },
              { icon: Layers, title: 'Crecimiento simple', desc: 'Empezamos con herramientas gratuitas y contenido útil, sin fricción de registro.' },
            ].map((item) => (
              <div key={item.title} className="rounded-sm border border-white/10 bg-terminal-gray/40 p-5">
                <item.icon size={18} className="text-matrix mb-3" />
                <h3 className="font-mono-heading text-sm text-white mb-1.5">{item.title}</h3>
                <p className="text-xs text-white/50 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
