import React from 'react'

export default function ProductShowcase() {
  return (
    <section className="py-12 lg:py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Headline */}
        <div className="text-center mb-10 lg:mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Todos os seus clientes.{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-accent-600">
              Uma única tela.
            </span>
          </h2>
          <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
            WhatsApp, Instagram, Facebook, Booking, Airbnb — todas as conversas centralizadas.
            A IA responde automaticamente enquanto você foca no que importa: <strong>vender mais</strong>.
          </p>
        </div>

        {/* Screenshot */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-primary-500/20 via-accent-500/20 to-primary-500/20 rounded-3xl blur-2xl opacity-60"></div>

          {/* Image container */}
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50">
            <img
              src="/images/chat-unificado.png"
              alt="Plataforma de chat unificado com IA"
              className="w-full h-auto"
            />

            {/* Overlay gradient at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/10 to-transparent"></div>
          </div>

          {/* Floating badges */}
          <div className="hidden lg:block absolute -left-4 top-1/4 bg-white rounded-xl shadow-lg p-4 border border-gray-100 animate-pulse">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <span className="text-green-600 text-xl">✓</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">IA Respondeu</p>
                <p className="text-xs text-gray-500">Agora mesmo</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-4 top-1/3 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-primary-100 rounded-full flex items-center justify-center">
                <span className="text-primary-600 text-xl">💬</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">+150 conversas</p>
                <p className="text-xs text-gray-500">Atendidas hoje</p>
              </div>
            </div>
          </div>

          <div className="hidden lg:block absolute -right-8 bottom-1/4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-accent-100 rounded-full flex items-center justify-center">
                <span className="text-accent-600 text-xl">🎯</span>
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">32 leads</p>
                <p className="text-xs text-gray-500">Qualificados pela IA</p>
              </div>
            </div>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mt-12 flex flex-wrap justify-center gap-6 lg:gap-12 text-center">
          <div>
            <p className="text-2xl lg:text-3xl font-bold text-gray-900">70%</p>
            <p className="text-sm text-gray-500">Respostas automáticas</p>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
          <div>
            <p className="text-2xl lg:text-3xl font-bold text-gray-900">24/7</p>
            <p className="text-sm text-gray-500">Atendimento ativo</p>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
          <div>
            <p className="text-2xl lg:text-3xl font-bold text-gray-900">9+</p>
            <p className="text-sm text-gray-500">Canais integrados</p>
          </div>
          <div className="w-px h-12 bg-gray-200 hidden sm:block"></div>
          <div>
            <p className="text-2xl lg:text-3xl font-bold text-gray-900">3x</p>
            <p className="text-sm text-gray-500">Mais conversões</p>
          </div>
        </div>
      </div>
    </section>
  )
}
