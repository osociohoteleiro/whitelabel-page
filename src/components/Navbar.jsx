import React, { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import Button from './Button'

const navLinks = [
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Segmentos', href: '#segmentos' },
  { label: 'Planos', href: '#planos' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar({ onOpenSignup, onOpenLogin, hideBanner = false, hideMenu = false }) {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        hideMenu
          ? '-translate-y-full opacity-0 pointer-events-none'
          : hideBanner
            ? 'top-0 translate-y-0 opacity-100'
            : 'top-10 translate-y-0 opacity-100'
      } ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center relative overflow-hidden">
              <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none" xmlns="http://www.w3.org/2000/svg">
                {/* Cifrão estilizado com engrenagem */}
                <circle cx="20" cy="20" r="14" stroke="white" strokeWidth="2" strokeDasharray="4 2" opacity="0.3"/>
                <path d="M20 8V32" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                <path d="M15 12C15 12 17 10 20 10C23 10 26 12 26 15C26 18 23 19 20 20C17 21 14 22 14 25C14 28 17 30 20 30C23 30 25 28 25 28" stroke="white" strokeWidth="2.5" strokeLinecap="round"/>
                {/* Setas de crescimento */}
                <path d="M28 14L32 10M32 10L28 10M32 10L32 14" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <span className={`font-bold text-xl ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`}>
              MV<span className="text-accent-600">$</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className={`font-medium transition-colors ${
                  isScrolled ? 'text-gray-600 hover:text-gray-900' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <Button variant="ghost" size="sm" onClick={onOpenLogin}>
              Entrar
            </Button>
            <Button size="sm" onClick={onOpenSignup}>
              Testar Grátis
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="block py-2 text-gray-600 hover:text-gray-900 font-medium"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="pt-4 flex flex-col gap-3">
              <Button variant="secondary" className="w-full" onClick={onOpenLogin}>
                Entrar
              </Button>
              <Button className="w-full" onClick={onOpenSignup}>
                Testar Grátis
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}
