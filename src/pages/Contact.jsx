import SEO from '../components/SEO'
import { Mail } from 'lucide-react'

export default function Contact() {
  return (
    <>
      <SEO
        title="Contacto"
        description="Ponte en contacto con el equipo de QuickMotionAI."
        path="/contact"
      />
      <section className="px-4 pt-32 pb-24 bg-terminal-black min-h-screen">
        <div className="max-w-2xl mx-auto">
          <div className="text-[11px] tracking-widest text-matrix mb-3">[ CONTACT ]</div>
          <h1 className="font-mono-heading font-bold text-3xl md:text-4xl text-white mb-6">Contacto</h1>
          <p className="text-sm md:text-base text-white/60 leading-relaxed mb-8 max-w-lg">
            ¿Tienes feedback, has encontrado un error o quieres proponer una herramienta nueva? Escríbenos
            directamente y te responderemos lo antes posible.
          </p>

          <a
            href="mailto:hello@quickmotionai.com"
            className="btn-slide inline-flex items-center gap-2 rounded-sm border border-matrix/40 px-5 py-3 text-sm text-matrix"
          >
            <span className="btn-slide-layer bg-matrix/10" />
            <span className="flex items-center gap-2">
              <Mail size={15} />
              hello@quickmotionai.com
            </span>
          </a>
        </div>
      </section>
    </>
  )
}
