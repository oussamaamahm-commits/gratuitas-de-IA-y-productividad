import SEO from '../../components/SEO'
import LegalLayout from './LegalLayout'

export default function CookiesPolicy() {
  return (
    <>
      <SEO title="Política de cookies" description="Política de cookies de PromptLab." path="/legal/cookies" />
      <LegalLayout title="Política de cookies" updated="13 de septiembre de 2026">
        <p>
          Una cookie es un pequeño archivo que se almacena en tu navegador al visitar una página web. Esta
          política explica qué tipos de cookies puede utilizar PromptLab y con qué finalidad.
        </p>

        <h2>Cookies técnicas</h2>
        <p>
          Son necesarias para el funcionamiento básico de la Plataforma, como recordar tus preferencias de
          interfaz. No requieren consentimiento previo por ser estrictamente necesarias.
        </p>

        <h2>Cookies analíticas</h2>
        <p>
          Nos ayudan a entender cómo se usa la Plataforma, qué herramientas se visitan más y dónde podemos
          mejorar la experiencia. Se activan únicamente si el usuario las acepta.
        </p>

        <h2>Cookies publicitarias</h2>
        <p>
          Cuando la publicidad de Google AdSense esté activa, se podrán utilizar cookies publicitarias para
          mostrar anuncios relevantes. Estas cookies solo se activan con el consentimiento del usuario y pueden
          gestionarse desde la configuración de tu navegador o desde los ajustes de anuncios de Google.
        </p>

        <h2>Cómo gestionar las cookies</h2>
        <p>
          Puedes eliminar o bloquear las cookies desde la configuración de tu navegador. Ten en cuenta que
          bloquear todas las cookies puede afectar al funcionamiento de algunas partes de la Plataforma.
        </p>
      </LegalLayout>
    </>
  )
}
