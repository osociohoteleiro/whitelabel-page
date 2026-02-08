import React, { useState, useEffect, useCallback } from 'react'
import {
  Lightbulb, Sparkles, Target, Brain, TrendingUp, Zap, CheckCircle2, ArrowRight,
  Clock, Rocket, ChevronLeft, ChevronRight
} from 'lucide-react'

const tabs = [
  {
    id: 'strategy',
    label: 'Planejador Estratégico',
    icon: Lightbulb,
    badge: 'Estratégia com IA',
    badgeIcon: Brain,
    color: 'emerald',
    gradientFrom: 'from-emerald-500',
    gradientTo: 'to-teal-500',
    bgGradient: 'from-emerald-950 via-teal-950 to-slate-900',
    glowColor: 'emerald',
    image: '/images/estrategia.png',
    imageAlt: 'Planejador Estratégico com IA',
    floatingBadge: {
      icon: Zap,
      title: '5 min',
      subtitle: 'estratégia completa'
    },
    headline: 'Sua estratégia de marketing',
    headlineHighlight: 'pronta em minutos',
    subtitle: 'Chega de gastar milhares com consultorias. Nossa IA cria a estratégia completa do seu negócio para que todo seu marketing e vendas estejam 100% alinhados.',
    comparison: {
      before: 'R$ 5.000+',
      beforeText: 'consultorias cobram',
      after: 'em minutos e de graça',
      afterHighlight: true
    },
    painPoint: {
      label: 'O problema:',
      text: 'Sem estratégia definida, cada post, anúncio e página vai para uma direção diferente — e você joga dinheiro fora.'
    },
    benefits: [
      { icon: Brain, title: 'IA que entende seu negócio', description: 'Responda algumas perguntas e a IA mapeia todo o DNA da sua empresa.' },
      { icon: Target, title: 'Estratégia completa', description: 'Público-alvo, persona, tom de voz, diferenciais e posicionamento definidos.' },
      { icon: TrendingUp, title: 'Marketing direcionado', description: 'Toda campanha, post e anúncio alinhados com sua estratégia.' },
    ],
    features: [
      'Definição de público-alvo ideal',
      'Criação de personas detalhadas',
      'Tom de voz da marca',
      'Proposta de valor única',
      'Diferenciais competitivos',
      'Posicionamento de mercado',
    ],
    cta: 'Criar minha estratégia grátis',
    ctaIcon: ArrowRight,
    ctaSubtext: 'Responda algumas perguntas e tenha sua estratégia pronta em minutos.',
    stats: [
      { value: '5 min', label: 'tempo médio' },
      { value: '100%', label: 'personalizado' },
      { value: 'R$ 0', label: 'sem consultoria' },
      { value: '+2.000', label: 'estratégias criadas' },
    ]
  },
  {
    id: 'pages',
    label: 'Criador de Páginas',
    icon: Rocket,
    badge: 'IA Generativa',
    badgeIcon: Rocket,
    color: 'violet',
    gradientFrom: 'from-violet-500',
    gradientTo: 'to-fuchsia-500',
    bgGradient: 'from-slate-900 via-purple-950 to-slate-900',
    glowColor: 'violet',
    images: [
      { src: '/images/pagina1.png', alt: 'Exemplo de página de vendas criada com IA' },
      { src: '/images/criador-paginas.png', alt: 'Criador de páginas de vendas com IA' }
    ],
    floatingBadge: {
      icon: CheckCircle2,
      title: '+5.000',
      subtitle: 'páginas criadas'
    },
    headline: 'Crie páginas de vendas',
    headlineHighlight: 'em segundos',
    subtitle: 'Crie para você ou revenda para clientes — páginas de alta conversão prontas em menos de 60 segundos, sem nenhum esforço.',
    comparison: {
      before: 'R$ 2.000+',
      beforeText: 'designers cobram',
      after: 'você entrega em minutos e lucra',
      afterHighlight: true
    },
    painPoint: {
      label: 'Chega de:',
      text: 'Pagar caro por designer, esperar dias por alterações, páginas que não convertem, depender de terceiros...'
    },
    benefits: [
      { icon: Clock, title: 'Páginas em segundos', description: 'Enquanto sua concorrência espera semanas, você já está vendendo.' },
      { icon: Zap, title: 'IA que entende vendas', description: 'Textos persuasivos e CTAs que convertem de verdade.' },
      { icon: Rocket, title: 'Use ou revenda', description: 'Crie para seu negócio ou venda para clientes e lucre.' },
    ],
    features: [
      'Landing pages de alta conversão',
      'Páginas de captura otimizadas',
      'Páginas de vendas persuasivas',
      'Templates testados e validados',
      'Revenda white-label para clientes',
      'Integração com WhatsApp',
    ],
    cta: 'Criar minha primeira página grátis',
    ctaIcon: Rocket,
    ctaSubtext: 'Sem cartão de crédito. Use para você ou comece a revender hoje.',
    stats: [
      { value: '60s', label: 'tempo médio de criação' },
      { value: '3.2x', label: 'mais conversões' },
      { value: 'R$ 0', label: 'gasto com designer' },
      { value: '24/7', label: 'disponível sempre' },
    ]
  }
]

export default function AITools({ onOpenSignup, hideMenu = false }) {
  const [activeTab, setActiveTab] = useState(0)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const activeContent = tabs[activeTab]

  // Auto-rotate tabs
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setActiveTab(prev => (prev + 1) % tabs.length)
    }, 8000)
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  // Auto-rotate images for pages tab
  useEffect(() => {
    if (activeTab !== 1) return
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % (tabs[1].images?.length || 1))
    }, 4000)
    return () => clearInterval(interval)
  }, [activeTab])

  const handleTabChange = (index) => {
    setActiveTab(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }

  const nextTab = useCallback(() => {
    setActiveTab(prev => (prev + 1) % tabs.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }, [])

  const prevTab = useCallback(() => {
    setActiveTab(prev => (prev - 1 + tabs.length) % tabs.length)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 15000)
  }, [])

  const colorClasses = {
    emerald: {
      badge: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30',
      badgeText: 'text-emerald-300',
      badgeIcon: 'text-emerald-400',
      highlight: 'text-emerald-400',
      glow: 'from-emerald-600/40 via-teal-600/40 to-cyan-600/40',
      button: 'from-emerald-600 via-teal-600 to-cyan-600',
      buttonHover: 'from-emerald-500 via-teal-500 to-cyan-500',
      iconBg: 'from-emerald-500 to-teal-500',
      check: 'text-emerald-400',
      floatingBg: 'from-emerald-400 to-teal-500',
      painBg: 'bg-amber-500/10 border-amber-500/30',
      painText: 'text-amber-300',
      painLabel: 'text-amber-400',
    },
    violet: {
      badge: 'from-violet-500/20 to-fuchsia-500/20 border-violet-500/30',
      badgeText: 'text-violet-300',
      badgeIcon: 'text-violet-400',
      highlight: 'text-violet-400',
      glow: 'from-violet-600/40 via-fuchsia-600/40 to-pink-600/40',
      button: 'from-violet-600 via-fuchsia-600 to-pink-600',
      buttonHover: 'from-violet-500 via-fuchsia-500 to-pink-500',
      iconBg: 'from-violet-500 to-fuchsia-500',
      check: 'text-green-400',
      floatingBg: 'from-green-400 to-emerald-500',
      painBg: 'bg-red-500/10 border-red-500/30',
      painText: 'text-red-300',
      painLabel: 'text-red-400',
    }
  }

  const colors = colorClasses[activeContent.color]

  return (
    <section className={`py-20 lg:py-32 bg-gradient-to-br ${activeContent.bgGradient} relative overflow-hidden transition-all duration-700`}>
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute top-20 left-10 w-72 h-72 bg-${activeContent.color}-500/20 rounded-full blur-[100px] transition-all duration-700`} />
        <div className={`absolute bottom-20 right-10 w-96 h-96 bg-${activeContent.color}-500/20 rounded-full blur-[120px] transition-all duration-700`} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Tab Navigation - Sticky on scroll */}
        <div className={`sticky z-30 flex flex-col items-center mb-8 py-4 transition-all duration-300 ${
          hideMenu ? 'top-0' : 'top-[64px]'
        }`}>
          <div className="inline-flex items-center bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-2 shadow-lg">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => handleTabChange(index)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                  activeTab === index
                    ? `bg-gradient-to-r ${tab.gradientFrom} ${tab.gradientTo} text-white shadow-lg`
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="hidden sm:inline">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Progress bar */}
          <div className="flex justify-center gap-2 mt-4">
            {tabs.map((_, index) => (
              <div key={index} className="h-1 w-16 bg-white/20 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${tabs[index].gradientFrom} ${tabs[index].gradientTo} rounded-full transition-all duration-300 ${
                    activeTab === index && isAutoPlaying ? 'animate-progress' : activeTab === index ? 'w-full' : 'w-0'
                  }`}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="transition-all duration-500">
          {/* Header */}
          <div className="text-center mb-12">
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${colors.badge} border rounded-full mb-6 backdrop-blur-sm`}>
              <activeContent.badgeIcon className={`w-4 h-4 ${colors.badgeIcon}`} />
              <span className={`text-sm font-medium ${colors.badgeText}`}>{activeContent.badge}</span>
            </div>

            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
              {activeContent.headline}{' '}
              <span className={`bg-gradient-to-r ${activeContent.gradientFrom} ${activeContent.gradientTo} bg-clip-text text-transparent`}>
                {activeContent.headlineHighlight}
              </span>
            </h2>

            <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
              {activeContent.subtitle}
            </p>

            <p className="text-base lg:text-lg text-gray-400 max-w-2xl mx-auto mb-8">
              Enquanto {activeContent.comparison.beforeText} <span className="text-gray-300">{activeContent.comparison.before}</span>,{' '}
              {activeContent.comparison.afterHighlight ? (
                <span className={`${colors.highlight} font-semibold`}>{activeContent.comparison.after}</span>
              ) : (
                activeContent.comparison.after
              )}.
            </p>

            {/* Pain point callout */}
            <div className={`inline-block ${colors.painBg} border rounded-xl px-6 py-3 backdrop-blur-sm`}>
              <p className={colors.painText + ' text-sm font-medium'}>
                <span className={`${colors.painLabel} font-bold`}>{activeContent.painPoint.label}</span>{' '}
                {activeContent.painPoint.text}
              </p>
            </div>
          </div>

          {/* Image Showcase */}
          <div className="relative group mb-16">
            {/* Navigation Arrows */}
            <button
              onClick={prevTab}
              className="absolute -left-4 lg:-left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-20 opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextTab}
              className="absolute -right-4 lg:-right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 hover:bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-20 opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Glow effect */}
            <div className={`absolute -inset-4 lg:-inset-8 bg-gradient-to-r ${colors.glow} rounded-3xl blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />

            {/* Image container */}
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl">
              {/* Single image or slider */}
              {activeContent.images ? (
                <div className="relative">
                  {activeContent.images.map((img, index) => (
                    <div
                      key={index}
                      className={`transition-opacity duration-700 ease-in-out ${
                        index === currentImageIndex ? 'opacity-100' : 'opacity-0 absolute inset-0'
                      }`}
                    >
                      <img src={img.src} alt={img.alt} className="w-full h-auto" />
                    </div>
                  ))}
                  {/* Image dots */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 z-20">
                    {activeContent.images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-2.5 h-2.5 rounded-full transition-all ${
                          index === currentImageIndex ? 'bg-white w-6' : 'bg-white/50 hover:bg-white/80'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              ) : (
                <img src={activeContent.image} alt={activeContent.imageAlt} className="w-full h-auto" />
              )}

              {/* Overlay badge - top right */}
              <div className={`absolute top-4 lg:top-6 right-4 lg:right-6 bg-gradient-to-r ${activeContent.gradientFrom} ${activeContent.gradientTo} px-4 lg:px-6 py-2 lg:py-3 rounded-full shadow-lg z-10`}>
                <div className="flex items-center gap-2">
                  <activeContent.badgeIcon className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                  <span className="text-sm lg:text-base font-bold text-white">{activeContent.badge}</span>
                </div>
              </div>

              {/* Floating stats - bottom left */}
              <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 bg-white rounded-2xl p-3 lg:p-4 shadow-xl border border-gray-100 z-10">
                <div className="flex items-center gap-3">
                  <div className={`w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br ${colors.floatingBg} rounded-xl flex items-center justify-center`}>
                    <activeContent.floatingBadge.icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-xl lg:text-2xl font-bold text-gray-900">{activeContent.floatingBadge.title}</div>
                    <div className="text-xs lg:text-sm text-gray-500">{activeContent.floatingBadge.subtitle}</div>
                  </div>
                </div>
              </div>

              {/* Floating badge - top left */}
              <div className="absolute top-4 lg:top-6 left-4 lg:left-6 bg-black/60 backdrop-blur-md rounded-full px-4 py-2 border border-white/20 z-10">
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 bg-${activeContent.color}-400 rounded-full animate-pulse`} />
                  <span className="text-sm font-medium text-white">
                    {activeTab === 0 ? 'Guiado por IA' : 'Crie em tempo real'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
            {activeContent.benefits.map((benefit, index) => (
              <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`flex-shrink-0 w-12 h-12 bg-gradient-to-br ${colors.iconBg} rounded-xl flex items-center justify-center shadow-lg`}>
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
                <h4 className="text-xl font-bold text-white mb-6">
                  {activeTab === 0 ? 'O que a IA define para você:' : 'O que você pode criar:'}
                </h4>
                <div className="grid sm:grid-cols-2 gap-4">
                  {activeContent.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle2 className={`w-5 h-5 ${colors.check} flex-shrink-0`} />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="text-center lg:text-left">
                <button
                  onClick={onOpenSignup}
                  className={`w-full lg:w-auto group relative px-10 py-5 bg-gradient-to-r ${colors.button} rounded-2xl font-bold text-white text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    {activeContent.cta}
                    <activeContent.ctaIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                  <div className={`absolute inset-0 bg-gradient-to-r ${colors.buttonHover} opacity-0 group-hover:opacity-100 transition-opacity`} />
                </button>

                <p className="text-gray-500 text-sm mt-4">
                  {activeContent.ctaSubtext}
                </p>
              </div>
            </div>
          </div>

          {/* Bottom stats */}
          <div className="mt-16 pt-12 border-t border-white/10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {activeContent.stats.map((stat, index) => (
                <div key={index}>
                  <div className="text-3xl lg:text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes progress {
          from { width: 0; }
          to { width: 100%; }
        }
        .animate-progress {
          animation: progress 8s linear;
        }
      `}</style>
    </section>
  )
}
