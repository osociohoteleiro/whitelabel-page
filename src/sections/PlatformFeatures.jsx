import React from 'react'
import {
  Palette, Share2, Target, MessageSquare, Code2, Lightbulb,
  CreditCard, Layers, Building2, Sparkles, ArrowRight, Zap
} from 'lucide-react'

const features = [
  // 1. Estratégia completa com IA
  {
    icon: Lightbulb,
    before: 'Semanas de planejamento',
    title: 'Estratégia completa com IA',
    description: 'Conte para a IA o que você faz e ela monta sua estratégia de posicionamento, campanhas e funis. Perfeito para quem está começando ou quer escalar.',
    highlight: 'Estratégia em 5 minutos',
    color: 'from-yellow-500 to-orange-500',
    bgColor: 'bg-yellow-50',
  },
  // 2. Anúncios que vendem sozinhos
  {
    icon: Target,
    before: '20% de comissão',
    title: 'Anúncios que vendem sozinhos',
    description: 'Crie campanhas segmentadas no Facebook, Instagram e Google com poucos cliques. Tenha autonomia ou potencialize seu gestor de tráfego.',
    highlight: 'Zero comissão sobre vendas',
    color: 'from-orange-500 to-amber-500',
    bgColor: 'bg-orange-50',
  },
  // 3. Atendimento 24/7 com IA
  {
    icon: MessageSquare,
    before: 'Vendas perdidas por demora',
    title: 'Atendimento 24/7 com IA',
    description: 'IA atende WhatsApp, Instagram e Facebook aplicando técnicas de vendas. Funciona sozinha ou junto com sua equipe, potencializando resultados.',
    highlight: 'Resposta em 3 segundos',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-50',
  },
  // 4. Redes sociais no piloto automático
  {
    icon: Share2,
    before: 'Horas de trabalho manual',
    title: 'Redes sociais no piloto automático',
    description: 'A IA cria artes, escreve copys, posta no Instagram e Facebook, e entrega relatórios. Faça sozinho ou libere sua equipe para tarefas estratégicas.',
    highlight: 'Poste 30 dias em 30 minutos',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-50',
  },
  // 5. Crie artes profissionais sozinho
  {
    icon: Palette,
    before: 'R$ 500+ por arte',
    title: 'Crie artes profissionais sozinho',
    description: 'Tenha autonomia para criar designs incríveis para posts, stories, banners e anúncios. Se já tem designer, potencialize o trabalho dele com IA.',
    highlight: 'Artes em segundos',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-50',
  },
  // 6. Páginas de vendas em 60 segundos
  {
    icon: Code2,
    before: 'R$ 3.000+ por página',
    title: 'Páginas de vendas em 60 segundos',
    description: 'Crie landing pages e páginas de vendas de alta conversão sem saber programar. Tenha autonomia ou acelere o trabalho do seu time.',
    highlight: 'Sem conhecimento técnico',
    color: 'from-cyan-500 to-blue-500',
    bgColor: 'bg-cyan-50',
  },
  // 7. As menores taxas do mercado
  {
    icon: CreditCard,
    before: 'Taxas que comem seu lucro',
    title: 'As menores taxas do mercado',
    description: 'Maximize seu lucro em cada venda com nosso gateway de pagamentos. Taxas competitivas que fazem diferença no final do mês.',
    highlight: 'Até 40% menos taxas',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-50',
  },
  // 8. Tudo em uma única plataforma
  {
    icon: Layers,
    before: 'R$ 1.500+/mês em ferramentas',
    title: 'Tudo em uma única plataforma',
    description: 'Unifique Trello, Canva, WordPress e outras ferramentas em um só lugar. Menos ferramentas, menos custo, mais produtividade.',
    highlight: 'Sistema integrado',
    color: 'from-indigo-500 to-violet-500',
    bgColor: 'bg-indigo-50',
  },
  // 9. Solução completa para hoteleiros
  {
    icon: Building2,
    before: 'Sistemas desconectados',
    title: 'Solução completa para hoteleiros',
    description: 'PMS, Channel Manager e motor de reservas integrados com IA. Tudo que seu hotel precisa para maximizar ocupação e receita.',
    highlight: 'Gestão hoteleira com IA',
    color: 'from-slate-600 to-gray-700',
    bgColor: 'bg-slate-50',
  },
]

export default function PlatformFeatures({ onOpenSignup }) {
  return (
    <section id="funcionalidades" className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-violet-100 rounded-full blur-[150px] opacity-40" />
        <div className="absolute bottom-20 left-0 w-[500px] h-[500px] bg-fuchsia-100 rounded-full blur-[150px] opacity-40" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 border border-violet-200 rounded-full mb-6">
            <Zap className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-700">Transformação real</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Tenha autonomia.{' '}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              Potencialize resultados.
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-4">
            Faça você mesmo ou <span className="font-semibold text-gray-900">multiplique a produtividade da sua equipe</span>.
            Nossa IA trabalha 24/7 para você vender mais, gastar menos e ter tempo para o que realmente importa.
          </p>

          <p className="text-lg text-gray-500 max-w-2xl mx-auto">
            Ideal para quem está começando sozinho ou para empresas que querem{' '}
            <span className="font-semibold text-gray-700">escalar sem aumentar custos</span>.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`group relative ${feature.bgColor} rounded-3xl p-6 lg:p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1`}
            >
              {/* Before badge */}
              <div className="absolute -top-3 left-6 right-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-red-100 border border-red-200 rounded-full">
                  <span className="text-xs font-medium text-red-700 line-through">{feature.before}</span>
                </div>
              </div>

              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${feature.color} rounded-2xl flex items-center justify-center mb-5 mt-2 shadow-lg group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {feature.description}
              </p>

              {/* Highlight */}
              <div className={`inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r ${feature.color} rounded-full`}>
                <Sparkles className="w-4 h-4 text-white" />
                <span className="text-sm font-bold text-white">{feature.highlight}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />

            <div className="relative z-10">
              <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                Faça mais com menos. Ou faça muito mais com o mesmo.
              </h3>
              <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
                Se você está começando, tenha <span className="font-bold text-yellow-300">autonomia total</span> para fazer tudo sozinho.
                <br />
                <span className="text-white/80">Se já tem equipe, potencialize a produtividade e escale sem aumentar custos.</span>
              </p>

              <button
                onClick={onOpenSignup}
                className="group inline-flex items-center gap-3 px-10 py-5 bg-white text-violet-700 rounded-2xl font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                Quero testar grátis
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-white/70 text-sm mt-4">
                Teste grátis por 7 dias. Sem cartão de crédito.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
