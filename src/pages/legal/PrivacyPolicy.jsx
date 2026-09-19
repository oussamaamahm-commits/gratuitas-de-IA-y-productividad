import SEO from '../../components/SEO'
import LegalLayout from './LegalLayout'

export default function PrivacyPolicy() {
  return (
    <>
      <SEO title="Política de privacidad" description="Política de privacidad de QuickMotionAI." path="/legal/privacidad" />
      <LegalLayout title="Política de privacidad" updated="13 de septiembre de 2026">
        <p>
          En QuickMotionAI nos tomamos en serio la privacidad de quienes usan nuestras herramientas. Esta política
          explica qué información se procesa, con qué finalidad y qué derechos tiene el usuario.
        </p>

        <h2>Qué datos procesamos</h2>
        <p>
          El texto que introduces en las herramientas (por ejemplo, al usar AI Writer o Prompt Builder) se
          procesa en tu propio navegador o, cuando la herramienta lo requiere de forma explícita —como el
          Traductor de texto—, se envía puntualmente a un servicio externo para completar la solicitud. No
          almacenamos ese contenido en nuestros servidores tras completar la operación.
        </p>

        <h2>Datos de navegación</h2>
        <p>
          Como la mayoría de sitios web, podemos recopilar datos técnicos básicos de navegación (páginas
          visitadas, tipo de dispositivo, origen del tráfico) con fines analíticos y de mejora del servicio, así
          como para la gestión de la publicidad mostrada a través de Google AdSense cuando esté activa.
        </p>

        <h2>Publicidad</h2>
        <p>
          Cuando la Plataforma tenga activada la publicidad de Google AdSense, terceros proveedores, incluido
          Google, podrán utilizar cookies para mostrar anuncios basados en visitas previas del usuario a este u
          otros sitios web. El usuario puede inhabilitar la publicidad personalizada visitando los ajustes de
          anuncios de Google.
        </p>

        <h2>Base legal y finalidad</h2>
        <p>
          El procesamiento de datos se basa en la ejecución del servicio solicitado por el usuario y, en su caso,
          en el consentimiento otorgado para el uso de cookies no esenciales, gestionado a través del aviso de
          cookies.
        </p>

        <h2>Derechos del usuario</h2>
        <p>
          Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición y portabilidad de tus datos
          contactando a través de la página de contacto de la Plataforma.
        </p>

        <h2>Cambios en esta política</h2>
        <p>
          Esta política puede actualizarse para reflejar cambios legales o funcionales de la Plataforma. La
          fecha de la última actualización se indica al inicio de este documento.
        </p>
      </LegalLayout>
    </>
  )
}
