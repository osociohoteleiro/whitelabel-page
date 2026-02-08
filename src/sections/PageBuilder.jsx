import React, { useState, useEffect, useCallback } from 'react'
import { Sparkles, Clock, Zap, Rocket, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    src: '/images/pagina1.png',
    alt: 'Exemplo de página de vendas criada com IA'
  },
  {
    src: '/images/criador-paginas.png',
    alt: 'Criador de páginas de vendas com IA'
  }
]

const benefits = [
  {
    icon: Clock,
    title: 'Páginas em segundos',
    description: 'Enquanto sua concorrência espera semanas, você já está vendendo.'
  },
  {
    icon: Zap,
    title: 'IA que entende vendas',
    description: 'Textos persuasivos e CTAs que convertem de verdade.'
  },
  {
    icon: Rocket,
    title: 'Use ou revenda',
    description: 'Crie para seu negócio ou venda para clientes e lucre.'
  },
]

const features = [
  'Landing pages de alta conversão',
  'Páginas de captura otimizadas',
  'Páginas de vendas persuasivas',
  'Templates testados e validados',
  'Revenda white-label para clientes',
  'Integração com WhatsApp',
]

export default function PageBuilder({ onOpenSignup }) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }, [])

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }, [])

  const goToSlide = useCallback((index) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    // Retomar auto-play após 5 segundos
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }, [])

  // Auto-play do slider
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(nextSlide, 4000)
    return () => clearInterval(interval)
  }, [isAutoPlaying, nextSlide])

  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-violet-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-500/20 to-fuchsia-500/20 border border-violet-500/30 rounded-full mb-6 backdrop-blur-sm">
            <Sparkles className="w-4 h-4 text-violet-400" />
            <span className="text-sm font-medium text-violet-300">Exclusivo na MV$</span>
          </div>

          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
            Crie páginas de vendas{' '}
            <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
              em segundos
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Crie para <span className="text-white font-semibold">você</span> ou <span className="text-violet-400 font-bold">revenda para clientes</span> —
            páginas de alta conversão prontas em <span className="text-white font-semibold">menos de 60 segundos</span>, sem nenhum esforço.
          </p>

          <p className="text-base lg:text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Enquanto outros gastam <span className="text-gray-300">R$ 2.000+</span> com designers e esperam semanas,
            você entrega em minutos e <span className="text-green-400 font-semibold">lucra com cada página</span>.
          </p>

          {/* Pain point callout - centralizado */}
          <div className="inline-block bg-red-500/10 border border-red-500/30 rounded-xl px-6 py-3 backdrop-blur-sm">
            <p className="text-red-300 text-sm font-medium">
              <span className="text-red-400 font-bold">Chega de:</span> Pagar caro por designer, esperar dias por alterações,
              páginas que não convertem, depender de terceiros...
            </p>
          </div>
        </div>

        {/* SLIDER EM DESTAQUE - Full Width */}
        <div className="relative group mb-16">
          {/* Glow effect behind slider */}
          <div className="absolute -inset-4 lg:-inset-8 bg-gradient-to-r from-violet-600/40 via-fuchsia-600/40 to-pink-600/40 rounded-3xl blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Slider container */}
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl shadow-violet-500/20">
            {/* Slides */}
            <div className="relative">
              {slides.map((slide, index) => (
                <div
                  key={index}
                  className={`transition-opacity duration-700 ease-in-out ${
                    index === currentSlide ? 'opacity-100' : 'opacity-0 absolute inset-0'
                  }`}
                >
                  <img
                    src={slide.src}
                    alt={slide.alt}
                    className="w-full h-auto"
                  />
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={() => { prevSlide(); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 5000); }}
              className="absolute left-4 lg:left-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 z-20"
              aria-label="Slide anterior"
            >
              <ChevronLeft className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>
            <button
              onClick={() => { nextSlide(); setIsAutoPlaying(false); setTimeout(() => setIsAutoPlaying(true), 5000); }}
              className="absolute right-4 lg:right-6 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-black/50 hover:bg-black/70 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all opacity-0 group-hover:opacity-100 z-20"
              aria-label="Próximo slide"
            >
              <ChevronRight className="w-5 h-5 lg:w-6 lg:h-6" />
            </button>

            {/* Dots Navigation */}
            <div className="absolute bottom-4 lg:bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
              {slides.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-2.5 h-2.5 lg:w-3 lg:h-3 rounded-full transition-all ${
                    index === currentSlide
                      ? 'bg-white w-6 lg:w-8'
                      : 'bg-white/50 hover:bg-white/80'
                  }`}
                  aria-label={`Ir para slide ${index + 1}`}
                />
              ))}
            </div>

            {/* Overlay badge */}
            <div className="absolute top-4 lg:top-6 right-4 lg:right-6 bg-gradient-to-r from-violet-600 to-fuchsia-600 px-4 lg:px-6 py-2 lg:py-3 rounded-full shadow-lg z-10">
              <div className="flex items-center gap-2">
                <Rocket className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                <span className="text-sm lg:text-base font-bold text-white">IA Generativa</span>
              </div>
            </div>

            {/* Floating stats - bottom left */}
            <div className="absolute bottom-16 lg:bottom-20 left-4 lg:left-6 bg-white rounded-2xl p-3 lg:p-4 shadow-xl border border-gray-100 z-10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-xl flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl lg:text-2xl font-bold text-gray-900">+5.000</div>
                  <div className="text-xs lg:text-sm text-gray-500">páginas criadas</div>
                </div>
              </div>
            </div>

            {/* Floating badge - top left */}
            <div className="absolute top-4 lg:top-6 left-4 lg:left-6 bg-black/60 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 z-10">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white">Crie em tempo real</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits e Features - Grid abaixo da imagem */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-violet-500 to-fuchsia-500 rounded-xl flex items-center justify-center shadow-lg shadow-violet-500/25">
                  <benefit.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-white">{benefit.title}</h3>
              </div>
              <p className="text-gray-400">{benefit.description}</p>
            </div>
          ))}
        </div>

        {/* Features checklist + CTA */}
        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 lg:p-10 backdrop-blur-sm">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Features */}
            <div>
              <h4 className="text-xl font-bold text-white mb-6">O que você pode criar:</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center lg:text-left">
              <button
                onClick={onOpenSignup}
                className="w-full lg:w-auto group relative px-10 py-5 bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 rounded-2xl font-bold text-white text-lg shadow-xl shadow-violet-500/25 hover:shadow-violet-500/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Criar minha primeira página grátis
                  <Rocket className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <p className="text-gray-500 text-sm mt-4">
                Sem cartão de crédito. Use para você ou comece a revender hoje.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom social proof */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">60s</div>
              <div className="text-gray-400 text-sm">tempo médio de criação</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">3.2x</div>
              <div className="text-gray-400 text-sm">mais conversões</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">R$ 0</div>
              <div className="text-gray-400 text-sm">gasto com designer</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">24/7</div>
              <div className="text-gray-400 text-sm">disponível sempre</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
