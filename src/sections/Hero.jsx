import React from 'react'
import { ArrowRight, Play, MessageSquare, Sparkles, BarChart3 } from 'lucide-react'
import Button from '../components/Button'

export default function Hero() {
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
              Plataforma completa com IA que administra parte do seu negócio, atende 24/7, qualifica leads e converte automaticamente. Do design, anúncio e atendimento, ao relatório e estratégia.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button size="lg">
                Testar grátis por 14 dias
                <ArrowRight className="w-5 h-5" />
              </Button>
              <Button variant="secondary" size="lg">
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

          {/* Visual */}
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
                  <span className="text-sm text-gray-500 font-medium">Chat Unificado</span>
                </div>

                {/* Content */}
                <div className="p-4 space-y-4">
                  {/* Conversation */}
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
            </div>

            {/* Floating Cards */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3 animate-float">
              <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                <MessageSquare className="w-5 h-5 text-green-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">70%</p>
                <p className="text-xs text-gray-500">Respostas automáticas</p>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-3 flex items-center gap-3 animate-float" style={{ animationDelay: '1s' }}>
              <div className="w-10 h-10 bg-primary-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-5 h-5 text-primary-600" />
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">3x</p>
                <p className="text-xs text-gray-500">Mais conversões</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
