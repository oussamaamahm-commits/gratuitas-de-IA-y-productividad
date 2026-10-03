import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import { Terminal, Target, Layers, ShieldCheck } from 'lucide-react'

export default function About() {
  return (
    <>
      <SEO
        title="Sobre QuickMotionAI"
        description="QuickMotionAI es un proyecto independiente de herramientas gratuitas y guías prácticas para escribir, organizar y trabajar más rápido con ayuda de IA."
        path="/about"
      />
      <section className="px-4 pt-32 pb-24 bg-terminal-black min-h-screen">
        <div className="max-w-2xl mx-auto">
          <div className="text-[11px] tracking-widest text-matrix mb-3">[ ABOUT ]</div>
          <h1 className="font-mono-heading font-bold text-3xl md:text-4xl text-white mb-6">Sobre QuickMotionAI</h1>

          <div className="space-y-5 text-sm md:text-base text-white/60 leading-relaxed">
            <p>
              QuickMotionAI es un proyecto independiente que reúne herramientas gratuitas y guías prácticas para tareas
              que se repiten cada semana: escribir correos, resumir textos, ordenar notas de reuniones, planificar
              proyectos o preparar un currículum. Nació de una idea sencilla: gran parte de ese trabajo se puede acelerar
              si tienes la estructura adecuada, con o sin inteligencia artificial.
            </p>
            <p>
              Las herramientas se ejecutan en tu navegador y no requieren registro. Cada una explica cómo funciona por
              dentro y qué no hace, porque preferimos que sepas exactamente qué esperar a prometer más de lo que
              ofrece. Las guías del blog incluyen ejemplos y plantillas que puedes copiar y adaptar.
            </p>
            <h2 className="font-mono-heading text-lg text-white pt-4">Qué encontrarás aquí</h2>
            <ul className="list-disc pl-5 space-y-2 marker:text-matrix">
              <li>Ocho herramientas gratuitas para escritura, estudio, productividad y negocio.</li>
              <li>Guías en español con ejemplos reales, sin relleno ni cifras inventadas.</li>
              <li>Explicaciones transparentes de los límites de cada herramienta y del uso de IA.</li>
            </ul>
            <p>
              Si quieres saber cómo preparamos los contenidos, lee nuestra{' '}
              <Link to="/editorial" className="text-matrix underline underline-offset-2">política editorial</Link>. Para
              sugerencias, errores o propuestas de nuevas herramientas, escríbenos desde la{' '}
              <Link to="/contact" className="text-matrix underline underline-offset-2">página de contacto</Link>.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-12">
            {[
              { icon: Terminal, title: 'Producto primero', desc: 'La experiencia de uso va por delante de cualquier otra consideración, incluida la publicidad.' },
              { icon: Target, title: 'Utilidad concreta', desc: 'Cada herramienta y cada guía resuelve una tarea específica.' },
              { icon: ShieldCheck, title: 'Privacidad', desc: 'Salvo el traductor, el texto que introduces se procesa en tu navegador.' },
              { icon: Layers, title: 'Transparencia', desc: 'Explicamos cómo funciona cada herramienta y dónde se queda corta.' },
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
