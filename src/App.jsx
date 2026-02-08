import React, { useState, useRef, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SignupModal from './components/SignupModal'
import LoginModal from './components/LoginModal'
import VideoModal from './components/VideoModal'
import FloatingVideoWidget from './components/FloatingVideoWidget'
import Hero from './sections/Hero'
import ProductShowcase from './sections/ProductShowcase'
import PlatformFeatures from './sections/PlatformFeatures'
import BusinessNiches from './sections/BusinessNiches'
import AITools from './sections/AITools'
import Problem from './sections/Problem'
import Comparison from './sections/Comparison'
import Stats from './sections/Stats'
import Pricing from './sections/Pricing'
import FAQ from './sections/FAQ'
import CTA from './sections/CTA'
import TermsOfService from './pages/TermsOfService'
import PrivacyPolicy from './pages/PrivacyPolicy'
import WhitelabelPartner from './pages/WhitelabelPartner'

function LandingPage({ openSignup, openLogin, openVideo }) {
  const [hideBanner, setHideBanner] = useState(false)
  const [hideMenu, setHideMenu] = useState(false)
  const productShowcaseRef = useRef(null)
  const aiToolsRef = useRef(null)

  // Observer para esconder o BANNER quando chegar em ProductShowcase
  useEffect(() => {
    const bannerObserver = new IntersectionObserver(
      ([entry]) => {
        setHideBanner(entry.isIntersecting)
      },
      {
        threshold: 0,
        rootMargin: '-44px 0px 0px 0px'
      }
    )

    if (productShowcaseRef.current) {
      bannerObserver.observe(productShowcaseRef.current)
    }

    return () => {
      if (productShowcaseRef.current) {
        bannerObserver.unobserve(productShowcaseRef.current)
      }
    }
  }, [])

  // Observer para esconder o MENU quando chegar em AITools
  useEffect(() => {
    const menuObserver = new IntersectionObserver(
      ([entry]) => {
        setHideMenu(entry.isIntersecting)
      },
      {
        threshold: 0,
        rootMargin: '-64px 0px 0px 0px' // Considera a altura do menu
      }
    )

    if (aiToolsRef.current) {
      menuObserver.observe(aiToolsRef.current)
    }

    return () => {
      if (aiToolsRef.current) {
        menuObserver.unobserve(aiToolsRef.current)
      }
    }
  }, [])

  return (
    <div className="min-h-screen bg-white">
      {/* Top Banner - Fixed (esconde na seção AITools) */}
      <div
        className={`fixed top-0 left-0 right-0 z-[60] bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 text-white text-center py-2.5 px-4 shadow-lg transition-all duration-300 ${
          hideBanner ? '-translate-y-full opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <a
          href="https://osociohoteleiro.com.br"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          <span className="animate-pulse">🏨</span>
          <span>Você é dono de hotel?</span>
          <span className="bg-white/20 backdrop-blur-sm px-3 py-0.5 rounded-full text-xs font-bold uppercase tracking-wide">
            Clique aqui
          </span>
          <span>→</span>
        </a>
      </div>

      <Navbar onOpenSignup={openSignup} onOpenLogin={openLogin} hideBanner={hideBanner} hideMenu={hideMenu} />
      <main>
        <Hero onOpenSignup={openSignup} onOpenVideo={openVideo} />
        <div ref={productShowcaseRef}>
          <ProductShowcase />
        </div>
        <PlatformFeatures onOpenSignup={openSignup} />
        <BusinessNiches onOpenSignup={openSignup} />
        <div ref={aiToolsRef}>
          <AITools onOpenSignup={openSignup} hideMenu={hideMenu} />
        </div>
        <Problem />
        <Comparison />
        <Stats />
        <Pricing onOpenSignup={openSignup} />
        <FAQ />
        <CTA onOpenSignup={openSignup} />
      </main>
      <Footer />
      <FloatingVideoWidget videoUrl="https://youtu.be/HFe5xGsBsNo" />
    </div>
  )
}

export default function App() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false)
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  const openSignup = () => setIsSignupModalOpen(true)
  const openLogin = () => setIsLoginModalOpen(true)
  const openVideo = () => setIsVideoModalOpen(true)

  return (
    <>
      {/* Modals - Disponíveis em todas as páginas */}
      <SignupModal
        isOpen={isSignupModalOpen}
        onClose={() => setIsSignupModalOpen(false)}
        onOpenLogin={openLogin}
      />
      <LoginModal
        isOpen={isLoginModalOpen}
        onClose={() => setIsLoginModalOpen(false)}
        onOpenSignup={openSignup}
      />
      <VideoModal
        isOpen={isVideoModalOpen}
        onClose={() => setIsVideoModalOpen(false)}
        videoUrl="https://youtu.be/HFe5xGsBsNo"
      />

      <Routes>
        <Route path="/" element={<LandingPage openSignup={openSignup} openLogin={openLogin} openVideo={openVideo} />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/whitelabel-partner" element={<WhitelabelPartner />} />
      </Routes>
    </>
  )
}
