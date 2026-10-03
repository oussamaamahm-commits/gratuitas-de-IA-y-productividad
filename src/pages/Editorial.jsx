import { Link } from 'react-router-dom'
import SEO from '../components/SEO'
import LegalLayout from './legal/LegalLayout'

export default function Editorial() {
  return (
    <>
      <SEO
        title="Política editorial"
        description="Cómo elaboramos, revisamos y actualizamos los artículos y las herramientas de QuickMotionAI, y cómo tratamos la inteligencia artificial."
        path="/editorial"
      />
      <LegalLayout title="Política editorial" updated="3 de octubre de 2026">
        <p>
          QuickMotionAI publica guías y herramientas gratuitas sobre productividad, escritura y uso práctico de la
          inteligencia artificial. Esta página explica cómo trabajamos para que sepas qué esperar de lo que lees aquí.
        </p>

        <h2>Qué publicamos</h2>
        <p>
          Artículos prácticos con pasos, ejemplos y plantillas, y herramientas que se ejecutan en tu navegador. No
          publicamos contenido relleno ni textos pensados solo para posicionar: cada artículo debe resolver una tarea
          concreta, como escribir un correo, resumir un documento o planificar un proyecto.
        </p>

        <h2>Cómo elaboramos los artículos</h2>
        <p>
          Cada guía parte de un problema real de trabajo o estudio. Los ejemplos de prompts y plantillas están
          pensados para copiarse y adaptarse. Cuando un consejo depende del contexto, lo indicamos. No presentamos
          cifras, estudios ni resultados que no podamos respaldar, y cuando usamos números en un ejemplo, lo señalamos
          como ilustrativo.
        </p>

        <h2>Uso de inteligencia artificial</h2>
        <p>
          Utilizamos herramientas de IA como apoyo en la redacción y la revisión de borradores, igual que se usa un
          corrector ortográfico, y el contenido se revisa y se edita antes de publicarse. Las herramientas de este sitio
          funcionan con reglas fijas que se ejecutan en tu navegador (salvo el traductor, que usa un servicio externo) y
          lo explicamos en la página de cada una, incluidas sus limitaciones.
        </p>

        <h2>Qué no es este sitio</h2>
        <p>
          Nada de lo publicado constituye asesoramiento legal, médico, financiero ni profesional. Las guías sobre CV,
          correos o planificación son orientaciones generales. Para decisiones con consecuencias importantes,
          consulta a un profesional cualificado.
        </p>

        <h2>Publicidad y afiliación</h2>
        <p>
          El sitio puede mostrar anuncios de terceros (Google AdSense). La publicidad no influye en lo que escribimos ni
          en las herramientas que ofrecemos. Si en el futuro incluimos enlaces de afiliación, lo indicaremos de forma
          visible junto al enlace.
        </p>

        <h2>Correcciones y actualizaciones</h2>
        <p>
          Si encuentras un error, un dato desactualizado o una herramienta que no se comporta como describimos, escríbenos
          desde la <Link to="/contact" className="text-matrix underline underline-offset-2">página de contacto</Link> y
          lo revisaremos. Corregimos los errores en el propio artículo y actualizamos la fecha cuando el cambio es
          sustancial.
        </p>
      </LegalLayout>
    </>
  )
}
