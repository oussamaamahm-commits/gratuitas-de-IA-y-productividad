import { useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import NoiseOverlay from './components/NoiseOverlay'
import { ADSENSE_PUBLISHER_ID, isAdsenseConfigured } from './lib/adsenseConfig'

import Home from './pages/Home'
import ToolsPage from './pages/ToolsPage'
import ToolPage from './pages/ToolPage'
import CategoriesPage from './pages/CategoriesPage'
import CategoryPage from './pages/CategoryPage'
import BlogPage from './pages/BlogPage'
import BlogPostPage from './pages/BlogPostPage'
import LegalNotice from './pages/legal/LegalNotice'
import PrivacyPolicy from './pages/legal/PrivacyPolicy'
import CookiesPolicy from './pages/legal/CookiesPolicy'
import Terms from './pages/legal/Terms'
import About from './pages/About'
import Contact from './pages/Contact'
import Changelog from './pages/Changelog'
import NotFound from './pages/NotFound'

export default function App() {
  useEffect(() => {
    if (!isAdsenseConfigured()) return
    if (document.querySelector('script[data-adsbygoogle-loader]')) return

    const script = document.createElement('script')
    script.async = true
    script.src = `https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_PUBLISHER_ID}`
    script.crossOrigin = 'anonymous'
    script.dataset.adsbygoogleLoader = 'true'
    document.head.appendChild(script)
  }, [])

  return (
    <div className="min-h-screen bg-terminal-black">
      <NoiseOverlay />
      <Navbar />
      <ScrollToTop />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tools" element={<ToolsPage />} />
          <Route path="/tools/:slug" element={<ToolPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
          <Route path="/categories/:slug" element={<CategoryPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
          <Route path="/legal/aviso-legal" element={<LegalNotice />} />
          <Route path="/legal/privacidad" element={<PrivacyPolicy />} />
          <Route path="/legal/cookies" element={<CookiesPolicy />} />
          <Route path="/legal/terminos" element={<Terms />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/changelog" element={<Changelog />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
