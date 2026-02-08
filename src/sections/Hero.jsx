import React, { useState, useEffect } from 'react'
import { ArrowRight, Play, MessageSquare, Sparkles, BarChart3, TrendingUp, Calendar, Image, Facebook, DollarSign } from 'lucide-react'
import Button from '../components/Button'

const slides = [
  {
    id: 'chat',
    title: 'Chat Unificado',
    badge: { value: '70%', label: 'Respostas automáticas', icon: MessageSquare, color: 'green' },
    floatingBadge: { value: '3x', label: 'Mais conversões', icon: BarChart3, color: 'primary' },
  },
  {
    id: 'meta-ads',
    title: 'Anúncios Meta Ads',
    badge: { value: 'Auto', label: 'Criação de anúncios', icon: Facebook, color: 'blue' },
    floatingBadge: { value: '5x', label: 'ROI médio', icon: TrendingUp, color: 'green' },
  },
  {
    id: 'social',
    title: 'Posts Automáticos',
    badge: { value: '24/7', label: 'Publicações agendadas', icon: Image, color: 'pink' },
    floatingBadge: { value: '+200%', label: 'Engajamento', icon: TrendingUp, color: 'accent' },
  },
  {
    id: 'followup',
    title: 'Follow-up Inteligente',
    badge: { value: '0%', label: 'Leads esquecidos', icon: Calendar, color: 'orange' },
    floatingBadge: { value: '+45%', label: 'Conversão', icon: TrendingUp, color: 'green' },
  },
  {
    id: 'revenue',
    title: 'Gestão de Receita',
    badge: { value: 'IA', label: 'Precificação dinâmica', icon: DollarSign, color: 'emerald' },
    floatingBadge: { value: '+30%', label: 'Receita', icon: TrendingUp, color: 'primary' },
  },
]

const badgeColors = {
  green: 'bg-green-100 text-green-600',
  blue: 'bg-blue-100 text-blue-600',
  pink: 'bg-pink-100 text-pink-600',
  orange: 'bg-orange-100 text-orange-600',
  emerald: 'bg-emerald-100 text-emerald-600',
  primary: 'bg-primary-100 text-primary-600',
  accent: 'bg-accent-100 text-accent-600',
}

export default function Hero({ onOpenSignup, onOpenVideo }) {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 4000)
    return () => clearInterval(timer)
  }, [])

  const slide = slides[currentSlide]
  const BadgeIcon = slide.badge.icon
  const FloatingIcon = slide.floatingBadge.icon

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-accent-50" />
      <div className="absolute top-20 right-0 w-[600px] h-[600px] bg-primary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-accent-200/30 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-100 rounded-full mb-6">
              <Sparkles className="w-4 h-4 text-primary-600" />
              <span className="text-sm font-medium text-primary-700">
                Potencializado por IA de última geração
              </span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Transforme o seu negócio em uma{' '}
              <span className="text-gradient">máquina de gerar dinheiro</span>
            </h1>

            <p className="text-lg lg:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              Plataforma completa com IA que administra 92,7% do seu negócio, do estratégico, ao pós venda.
              <br /><br />
              Chega de sofrer com agências que não entregam resultado, com funcionários desmotivados. Deixe a nossa máquina de vender muito te levar à alta rentabilidade com o menor esforço. Tá preparado?
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg" onClick={onOpenSignup}>
                Testar grátis por 7 dias
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg" onClick={onOpenVideo}>
                <Play className="w-5 h-5" />
                Ver demonstração
              </Button>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 text-sm text-gray-500">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sem cartão de crédito</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>LGPD Compliant</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Servidores no Brasil</span>
              </div>
            </div>
          </div>

          {/* Visual - Carousel */}
          <div className="relative">
            {/* Main Card */}
            <div className="relative bg-white rounded-2xl shadow-2xl shadow-gray-200/50 p-4 lg:p-6">
              {/* Mock Interface */}
              <div className="bg-gray-100 rounded-xl overflow-hidden">
                {/* Header */}
                <div className="bg-white px-4 py-3 border-b flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-400" />
                    <div className="w-3 h-3 rounded-full bg-yellow-400" />
                    <div className="w-3 h-3 rounded-full bg-green-400" />
                  </div>
                  <span className="text-sm text-gray-500 font-medium transition-all duration-300">
                    {slide.title}
                  </span>
                </div>

                {/* Content - Slides */}
                <div className="p-4 min-h-[280px] relative overflow-hidden">
                  {/* Slide 1: Chat Unificado */}
                  <div className={`absolute inset-4 transition-all duration-500 ${currentSlide === 0 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                          W
                        </div>
                        <div className="bg-white rounded-xl px-4 py-2 shadow-sm max-w-[200px]">
                          <p className="text-sm text-gray-700">Olá! Qual o valor da diária?</p>
                          <span className="text-xs text-gray-400">WhatsApp • 10:32</span>
                        </div>
                      </div>
                      <div className="flex gap-3 justify-end">
                        <div className="bg-primary-500 rounded-xl px-4 py-2 max-w-[220px]">
                          <div className="flex items-center gap-2 mb-1">
                            <Sparkles className="w-3 h-3 text-primary-200" />
                            <span className="text-xs text-primary-200">IA Respondendo</span>
                          </div>
                          <p className="text-sm text-white">
                            Olá! Temos diárias a partir de R$ 350. Posso enviar fotos do quarto?
                          </p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 rounded-full bg-pink-500 flex items-center justify-center text-white text-sm font-bold flex-shrink-0">
                          I
                        </div>
                        <div className="bg-white rounded-xl px-4 py-2 shadow-sm max-w-[180px]">
                          <p className="text-sm text-gray-700">Vocês têm disponibilidade sábado?</p>
                          <span className="text-xs text-gray-400">Instagram • 10:35</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 2: Meta Ads */}
                  <div className={`absolute inset-4 transition-all duration-500 ${currentSlide === 1 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                    <div className="space-y-3">
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center gap-3 mb-3">
                          <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                            <Facebook className="w-5 h-5 text-white" />
                          </div>
                          <div>
                            <p className="font-semibold text-gray-900 text-sm">Campanha de Verão</p>
                            <p className="text-xs text-green-600">● Ativa</p>
                          </div>
                        </div>
                        <div className="grid grid-cols-3 gap-2 text-center">
                          <div className="bg-gray-50 rounded-lg p-2">
                            <p className="text-lg font-bold text-gray-900">12.5k</p>
                            <p className="text-xs text-gray-500">Alcance</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2">
                            <p className="text-lg font-bold text-gray-900">842</p>
                            <p className="text-xs text-gray-500">Cliques</p>
                          </div>
                          <div className="bg-gray-50 rounded-lg p-2">
                            <p className="text-lg font-bold text-green-600">R$2.40</p>
                            <p className="text-xs text-gray-500">CPC</p>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl p-3 text-white">
                        <div className="flex items-center gap-2 mb-1">
                          <Sparkles className="w-4 h-4" />
                          <span className="text-sm font-medium">IA criou novo anúncio</span>
                        </div>
                        <p className="text-xs opacity-90">Otimizado para conversão baseado em dados</p>
                      </div>
                    </div>
                  </div>

                  {/* Slide 3: Social Posts */}
                  <div className={`absolute inset-4 transition-all duration-500 ${currentSlide === 2 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                    <div className="space-y-3">
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-900">Posts Agendados</span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">7 esta semana</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-orange-400 rounded-lg flex items-center justify-center text-white text-xs font-bold">IG</div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-700">Promoção de Inverno</p>
                              <p className="text-xs text-gray-400">Hoje, 18:00</p>
                            </div>
                            <span className="text-xs text-orange-600">Pendente</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-gray-50 rounded-lg">
                            <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white text-xs font-bold">FB</div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-700">Dicas de Viagem</p>
                              <p className="text-xs text-gray-400">Amanhã, 10:00</p>
                            </div>
                            <span className="text-xs text-blue-600">Agendado</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-pink-500 to-orange-400 rounded-xl p-3 text-white">
                        <div className="flex items-center gap-2">
                          <Sparkles className="w-4 h-4" />
                          <span className="text-sm font-medium">IA gerando conteúdo...</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 4: Follow-up */}
                  <div className={`absolute inset-4 transition-all duration-500 ${currentSlide === 3 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                    <div className="space-y-3">
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-900">Follow-ups Hoje</span>
                          <span className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-full">8 pendentes</span>
                        </div>
                        <div className="space-y-2">
                          <div className="flex items-center gap-3 p-2 bg-green-50 rounded-lg border border-green-200">
                            <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white text-xs font-bold">JM</div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-700">João Maria</p>
                              <p className="text-xs text-gray-400">Cotação enviada há 2 dias</p>
                            </div>
                            <span className="text-xs text-green-600 font-medium">● Enviado</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 bg-orange-50 rounded-lg border border-orange-200">
                            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white text-xs font-bold">AS</div>
                            <div className="flex-1">
                              <p className="text-sm font-medium text-gray-700">Ana Silva</p>
                              <p className="text-xs text-gray-400">Aguardando resposta</p>
                            </div>
                            <span className="text-xs text-orange-600 font-medium">14:30</span>
                          </div>
                        </div>
                      </div>
                      <div className="bg-gradient-to-r from-primary-500 to-primary-600 rounded-xl p-3 text-white">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm font-medium">IA agenda follow-ups automaticamente</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Slide 5: Revenue Management */}
                  <div className={`absolute inset-4 transition-all duration-500 ${currentSlide === 4 ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                    <div className="space-y-3">
                      <div className="bg-white rounded-xl p-4 shadow-sm">
                        <div className="flex items-center justify-between mb-3">
                          <span className="text-sm font-medium text-gray-900">Receita do Mês</span>
                          <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">+18% vs mês anterior</span>
                        </div>
                        <div className="mb-3">
                          <p className="text-2xl font-bold text-gray-900">R$ 47.850</p>
                          <p className="text-xs text-gray-500">Meta: R$ 50.000</p>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div className="bg-gradient-to-r from-green-500 to-emerald-500 h-2 rounded-full" style={{ width: '95%' }}></div>
                        </div>
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="bg-emerald-50 rounded-xl p-3 text-center">
                          <p className="text-lg font-bold text-emerald-700">R$ 285</p>
                          <p className="text-xs text-emerald-600">Diária Média</p>
                        </div>
                        <div className="bg-blue-50 rounded-xl p-3 text-center">
                          <p className="text-lg font-bold text-blue-700">78%</p>
                          <p className="text-xs text-blue-600">Ocupação</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center gap-2 pb-4">
                  {slides.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        currentSlide === index ? 'bg-primary-500 w-6' : 'bg-gray-300 hover:bg-gray-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating Cards - Dynamic based on slide */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3 animate-float">
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${badgeColors[slide.badge.color]}`}>
                <BadgeIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{slide.badge.value}</p>
                <p className="text-xs text-gray-500">{slide.badge.label}</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${badgeColors[slide.floatingBadge.color]}`}>
                <FloatingIcon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{slide.floatingBadge.value}</p>
                <p className="text-xs text-gray-500">{slide.floatingBadge.label}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
