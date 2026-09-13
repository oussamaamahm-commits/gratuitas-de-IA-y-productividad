import { Link } from 'react-router-dom'
import SEO from '../components/SEO'

export default function NotFound() {
  return (
    <>
      <SEO title="Página no encontrada" description="La página que buscas no existe." path="/404" />
      <section className="px-4 pt-40 pb-32 bg-terminal-black min-h-screen text-center">
        <div className="text-[11px] tracking-widest text-matrix mb-4">[ ERROR 404 ]</div>
        <h1 className="font-mono-heading font-bold text-3xl md:text-5xl text-white mb-4">
          PROCESS_NOT_FOUND
        </h1>
        <p className="text-white/50 text-sm md:text-base mb-8">
          La página que buscas no existe o ha sido movida.
        </p>
        <Link
          to="/"
          className="btn-slide inline-flex items-center rounded-sm bg-matrix px-6 py-3 text-sm font-semibold text-terminal-black"
        >
          <span className="btn-slide-layer bg-black/10" />
          <span>Volver al inicio →</span>
        </Link>
      </section>
    </>
  )
}
