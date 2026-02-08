import React from 'react'
import { Target, Lightbulb, TrendingUp, Brain, Zap, CheckCircle2, ArrowRight } from 'lucide-react'

const benefits = [
  {
    icon: Brain,
    title: 'IA que entende seu negócio',
    description: 'Responda algumas perguntas e a IA mapeia todo o DNA da sua empresa.'
  },
  {
    icon: Target,
    title: 'Estratégia completa',
    description: 'Público-alvo, persona, tom de voz, diferenciais e posicionamento definidos.'
  },
  {
    icon: TrendingUp,
    title: 'Marketing direcionado',
    description: 'Toda campanha, post e anúncio alinhados com sua estratégia.'
  },
]

const features = [
  'Definição de público-alvo ideal',
  'Criação de personas detalhadas',
  'Tom de voz da marca',
  'Proposta de valor única',
  'Diferenciais competitivos',
  'Posicionamento de mercado',
]

export default function StrategicPlanner({ onOpenSignup }) {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-br from-emerald-950 via-teal-950 to-slate-900 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-10 w-72 h-72 bg-emerald-500/20 rounded-full blur-[100px]" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/20 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-[150px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 border border-emerald-500/30 rounded-full mb-6 backdrop-blur-sm">
            <Lightbulb className="w-4 h-4 text-emerald-400" />
            <span className="text-sm font-medium text-emerald-300">Planejador Estratégico com IA</span>
          </div>

          <h2 className="text-4xl lg:text-5xl xl:text-6xl font-extrabold text-white mb-6 leading-tight">
            Sua estratégia de marketing{' '}
            <span className="bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 bg-clip-text text-transparent">
              pronta em minutos
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed mb-4">
            Chega de <span className="text-white font-semibold">gastar milhares</span> com consultorias.
            Nossa IA cria a <span className="text-emerald-400 font-bold">estratégia completa</span> do seu negócio
            para que todo seu marketing e vendas estejam <span className="text-white font-semibold">100% alinhados</span>.
          </p>

          <p className="text-base lg:text-lg text-gray-400 max-w-2xl mx-auto mb-8">
            Enquanto consultorias cobram <span className="text-gray-300">R$ 5.000+</span> e levam semanas,
            você tem sua estratégia <span className="text-emerald-400 font-semibold">em minutos e de graça</span>.
          </p>

          {/* Pain point callout */}
          <div className="inline-block bg-amber-500/10 border border-amber-500/30 rounded-xl px-6 py-3 backdrop-blur-sm">
            <p className="text-amber-300 text-sm font-medium">
              <span className="text-amber-400 font-bold">O problema:</span> Sem estratégia definida, cada post, anúncio e página
              vai para uma direção diferente — e você joga dinheiro fora.
            </p>
          </div>
        </div>

        {/* IMAGEM EM DESTAQUE */}
        <div className="relative group mb-16">
          {/* Glow effect behind image */}
          <div className="absolute -inset-4 lg:-inset-8 bg-gradient-to-r from-emerald-600/40 via-teal-600/40 to-cyan-600/40 rounded-3xl blur-3xl opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

          {/* Image container */}
          <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl shadow-emerald-500/20">
            <img
              src="/images/estrategia.png"
              alt="Planejador Estratégico com IA"
              className="w-full h-auto"
            />

            {/* Overlay badge */}
            <div className="absolute top-4 lg:top-6 right-4 lg:right-6 bg-gradient-to-r from-emerald-600 to-teal-600 px-4 lg:px-6 py-2 lg:py-3 rounded-full shadow-lg">
              <div className="flex items-center gap-2">
                <Brain className="w-4 h-4 lg:w-5 lg:h-5 text-white" />
                <span className="text-sm lg:text-base font-bold text-white">Estratégia com IA</span>
              </div>
            </div>

            {/* Floating stats - bottom left */}
            <div className="absolute bottom-4 lg:bottom-6 left-4 lg:left-6 bg-white rounded-2xl p-3 lg:p-4 shadow-xl border border-gray-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-emerald-400 to-teal-500 rounded-xl flex items-center justify-center">
                  <Zap className="w-5 h-5 lg:w-6 lg:h-6 text-white" />
                </div>
                <div>
                  <div className="text-xl lg:text-2xl font-bold text-gray-900">5 min</div>
                  <div className="text-xs lg:text-sm text-gray-500">estratégia completa</div>
                </div>
              </div>
            </div>

            {/* Floating badge - top left */}
            <div className="absolute top-4 lg:top-6 left-4 lg:left-6 bg-black/60 backdrop-blur-md rounded-full px-4 py-2 border border-white/20">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white">Guiado por IA</span>
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {benefits.map((benefit, index) => (
            <div key={index} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-sm hover:bg-white/10 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center shadow-lg shadow-emerald-500/25">
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
              <h4 className="text-xl font-bold text-white mb-6">O que a IA define para você:</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="text-center lg:text-left">
              <button
                onClick={onOpenSignup}
                className="w-full lg:w-auto group relative px-10 py-5 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 rounded-2xl font-bold text-white text-lg shadow-xl shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all duration-300 hover:-translate-y-1 overflow-hidden"
              >
                <span className="relative z-10 flex items-center justify-center gap-3">
                  Criar minha estratégia grátis
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>

              <p className="text-gray-500 text-sm mt-4">
                Responda algumas perguntas e tenha sua estratégia pronta em minutos.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom social proof */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">5 min</div>
              <div className="text-gray-400 text-sm">tempo médio</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">100%</div>
              <div className="text-gray-400 text-sm">personalizado</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">R$ 0</div>
              <div className="text-gray-400 text-sm">sem consultoria</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">+2.000</div>
              <div className="text-gray-400 text-sm">estratégias criadas</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
