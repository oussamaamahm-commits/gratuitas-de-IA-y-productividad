export default function LegalLayout({ title, updated, children }) {
  return (
    <section className="px-4 pt-32 pb-24 bg-terminal-black min-h-screen">
      <div className="max-w-2xl mx-auto">
        <div className="text-[11px] tracking-widest text-matrix mb-3">[ LEGAL ]</div>
        <h1 className="font-mono-heading font-bold text-3xl text-white mb-2">{title}</h1>
        {updated && <p className="text-xs text-white/30 mb-10">Última actualización: {updated}</p>}
        <div className="legal-content space-y-5 text-sm text-white/60 leading-relaxed [&_h2]:font-mono-heading [&_h2]:text-white [&_h2]:text-base [&_h2]:pt-4">
          {children}
        </div>
      </div>
    </section>
  )
}
