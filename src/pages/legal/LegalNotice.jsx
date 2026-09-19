import SEO from '../../components/SEO'
import LegalLayout from './LegalLayout'

export default function LegalNotice() {
  return (
    <>
      <SEO title="Aviso legal" description="Aviso legal de QuickMotionAI." path="/legal/aviso-legal" />
      <LegalLayout title="Aviso legal" updated="13 de septiembre de 2026">
        <p>
          Este aviso legal regula el acceso y uso del sitio web QuickMotionAI (en adelante, "la Plataforma"), un
          proyecto que ofrece herramientas gratuitas de inteligencia artificial y productividad accesibles desde
          el navegador.
        </p>

        <h2>Identificación del titular</h2>
        <p>
          QuickMotionAI es un proyecto en desarrollo. La información de identificación fiscal y de contacto formal se
          actualizará en este apartado en cuanto el proyecto disponga de una entidad registrada.
        </p>

        <h2>Objeto</h2>
        <p>
          La Plataforma ofrece un conjunto de herramientas basadas en procesamiento de texto y, en su caso,
          inteligencia artificial, orientadas a facilitar tareas de escritura, resumen, planificación y
          organización. El acceso a la Plataforma es gratuito, salvo posibles funcionalidades futuras marcadas
          expresamente como de pago.
        </p>

        <h2>Condiciones de uso</h2>
        <p>
          El uso de la Plataforma implica la aceptación de este aviso legal, de la política de privacidad y de
          los términos de uso. El usuario se compromete a utilizar la Plataforma de forma lícita y a no realizar
          actividades que puedan dañar, inutilizar o sobrecargar los sistemas.
        </p>

        <h2>Propiedad intelectual</h2>
        <p>
          El diseño, la estructura, el código y los contenidos originales de la Plataforma son propiedad de
          QuickMotionAI, salvo que se indique lo contrario. Los resultados generados a partir del uso de las
          herramientas pertenecen al usuario que los genera.
        </p>

        <h2>Exclusión de responsabilidad</h2>
        <p>
          Las herramientas de la Plataforma pueden generar resultados que requieran revisión humana. QuickMotionAI no
          garantiza la exactitud, integridad o idoneidad de los resultados generados para un fin concreto, y no
          se responsabiliza del uso que el usuario haga de ellos.
        </p>

        <h2>Legislación aplicable</h2>
        <p>
          Este aviso legal se rige por la legislación española y de la Unión Europea aplicable. Cualquier
          controversia se someterá a los juzgados y tribunales competentes según la normativa vigente.
        </p>
      </LegalLayout>
    </>
  )
}
