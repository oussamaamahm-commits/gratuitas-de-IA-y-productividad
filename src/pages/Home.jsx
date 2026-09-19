import SEO from '../components/SEO'
import HeroDemo from '../components/HeroDemo'
import ToolGrid from '../components/ToolGrid'
import TelemetryFeed from '../components/TelemetryFeed'
import Metrics from '../components/Metrics'
import MiniDashboard from '../components/MiniDashboard'
import Categories from '../components/Categories'
import IntegrationOrbit from '../components/IntegrationOrbit'
import ProcessTimeline from '../components/ProcessTimeline'
import SeoResources from '../components/SeoResources'
import FAQ from '../components/FAQ'
import CTASection from '../components/CTASection'

export default function Home() {
  return (
    <>
      <SEO
        description="Herramientas gratuitas de IA para escribir, resumir, organizar, planificar y trabajar más rápido."
        path="/"
      />
      <h1 className="sr-only">QuickMotionAI — Herramientas de IA y Productividad Gratis</h1>
      <HeroDemo />
      <ToolGrid />
      <TelemetryFeed />
      <Metrics />
      <MiniDashboard />
      <Categories />
      <IntegrationOrbit />
      <ProcessTimeline />
      <SeoResources />
      <FAQ />
      <CTASection />
    </>
  )
}
