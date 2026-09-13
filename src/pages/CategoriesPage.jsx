import SEO from '../components/SEO'
import CategoryCard from '../components/CategoryCard'
import { categories } from '../data/categories'

export default function CategoriesPage() {
  return (
    <>
      <SEO
        title="Categorías"
        description="Explora las herramientas de PromptLab organizadas por categoría: escritura, productividad, estudio, negocio, IA y automatización."
        path="/categories"
      />
      <section className="px-4 pt-32 pb-24 bg-terminal-black min-h-screen">
        <div className="max-w-6xl mx-auto">
          <div className="max-w-2xl mb-12">
            <div className="text-[11px] tracking-widest text-matrix mb-3">[ CATEGORIES ]</div>
            <h1 className="font-mono-heading font-bold text-3xl md:text-4xl text-white">
              Encuentra la herramienta adecuada.
            </h1>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {categories.map((c) => (
              <CategoryCard key={c.slug} category={c} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
