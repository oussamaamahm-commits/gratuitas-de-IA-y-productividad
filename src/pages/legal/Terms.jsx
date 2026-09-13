import SEO from '../../components/SEO'
import LegalLayout from './LegalLayout'

export default function Terms() {
  return (
    <>
      <SEO title="Términos de uso" description="Términos de uso de PromptLab." path="/legal/terminos" />
      <LegalLayout title="Términos de uso" updated="13 de septiembre de 2026">
        <p>
          Estos términos regulan el uso de las herramientas y contenidos disponibles en PromptLab. Al utilizar la
          Plataforma, aceptas estos términos en su totalidad.
        </p>

        <h2>Uso de las herramientas</h2>
        <p>
          Las herramientas de PromptLab son de uso gratuito y no requieren registro. Puedes utilizarlas para
          fines personales y profesionales, siempre dentro de la legalidad vigente.
        </p>

        <h2>Naturaleza de los resultados</h2>
        <p>
          Los resultados generados por las herramientas —textos, resúmenes, planes, prompts, traducciones u
          otros— se ofrecen como punto de partida y pueden contener errores o imprecisiones. Es responsabilidad
          del usuario revisar y validar cualquier resultado antes de utilizarlo, especialmente en contextos
          profesionales, legales o de alta responsabilidad.
        </p>

        <h2>Usos prohibidos</h2>
        <p>
          No está permitido utilizar la Plataforma para generar contenido ilegal, difamatorio, fraudulento o que
          infrinja derechos de terceros, ni para intentar vulnerar la seguridad o el funcionamiento normal del
          servicio.
        </p>

        <h2>Disponibilidad del servicio</h2>
        <p>
          PromptLab se esfuerza por mantener la Plataforma disponible y en buen funcionamiento, pero no garantiza
          un acceso ininterrumpido. Las herramientas y funcionalidades pueden modificarse, añadirse o retirarse
          en cualquier momento.
        </p>

        <h2>Modificación de los términos</h2>
        <p>
          Estos términos pueden actualizarse para reflejar cambios en el servicio o en la normativa aplicable. El
          uso continuado de la Plataforma tras una actualización implica la aceptación de los nuevos términos.
        </p>
      </LegalLayout>
    </>
  )
}
