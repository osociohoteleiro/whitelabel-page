import React from 'react'
import { X, Check, ArrowRight, Sparkles } from 'lucide-react'

const problems = [
  // Custos com profissionais
  { text: 'Pagar consultor de marketing para criar estratégia', highlight: 'consultor de marketing' },
  { text: 'Pagar designer freelancer para cada arte', highlight: 'designer freelancer' },
  { text: 'Pagar desenvolvedor para criar landing page', highlight: 'desenvolvedor' },
  { text: 'Pagar social media para criar e postar conteúdo', highlight: 'social media' },
  { text: 'Pagar comissão para gestor de tráfego', highlight: 'gestor de tráfego' },
  // Custos operacionais
  { text: 'Pagar várias ferramentas: Canva, CRM, WordPress...', highlight: 'várias ferramentas' },
  { text: 'Taxas altas no gateway de pagamentos', highlight: 'Taxas altas' },
  // Ineficiências
  { text: 'Perde vendas: cliente pergunta e ninguém responde a tempo', highlight: 'Perde vendas' },
  { text: 'Follow-up manual que sempre esquece de fazer', highlight: 'sempre esquece' },
  { text: 'Agência de marketing que não entrega resultado', highlight: 'não entrega resultado' },
  { text: 'Funcionários desmotivados fazendo corpo mole', highlight: 'desmotivados' },
  { text: 'Você trabalhando demais e faturando pouco', highlight: 'trabalhando demais' },
]

const solutions = [
  // Automação de estratégia e criação
  { text: 'Estratégia completa montada pela IA em 5 minutos', highlight: '5 minutos' },
  { text: 'Artes profissionais criadas em segundos com IA', highlight: 'em segundos' },
  { text: 'Landing pages de alta conversão em 60 segundos', highlight: '60 segundos' },
  { text: '30 dias de posts prontos em apenas 30 minutos', highlight: '30 minutos' },
  { text: 'Anúncios Meta e Google sem comissão sobre vendas', highlight: 'sem comissão' },
  // Plataforma unificada
  { text: 'Tudo em uma única plataforma: adeus ferramentas avulsas', highlight: 'única plataforma' },
  { text: 'Gateway de pagamentos com até 40% menos taxas', highlight: '40% menos taxas' },
  // Automação de vendas
  { text: 'IA responde em 3 segundos, 24/7, aplicando técnicas de venda', highlight: '24/7' },
  { text: 'Follow-up automático: 0% de leads esquecidos', highlight: '0% de leads esquecidos' },
  { text: 'Recuperação automática de carrinhos abandonados', highlight: 'automática' },
  { text: '92,7% do seu negócio administrado pela IA', highlight: '92,7%' },
  { text: 'Você foca no que importa enquanto a máquina vende', highlight: 'máquina vende' },
]

// Helper to render text with highlighted portion
const renderWithHighlight = (text, highlight, isGood) => {
  if (!highlight) return text
  const parts = text.split(highlight)
  return (
    <>
      {parts[0]}
      <span className={`font-bold ${isGood ? 'text-green-600' : 'text-red-600'}`}>
        {highlight}
      </span>
      {parts[1]}
    </>
  )
}

export default function Problem() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 border border-violet-200 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-700">Transformação real</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            O que muda com a{' '}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              Máquina de Vender Muito
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Chega de sofrer com agências que não entregam, funcionários desmotivados e ferramentas caras.{' '}
            <span className="font-semibold text-gray-900">Deixe a máquina trabalhar por você</span>.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Before */}
          <div className="bg-gradient-to-br from-red-50 to-rose-50 rounded-3xl p-8 lg:p-10 border border-red-100 shadow-lg shadow-red-100/50">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center">
                <X className="w-6 h-6 text-red-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-red-900">Antes</h3>
                <p className="text-sm text-red-600">Sem a MV$</p>
              </div>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-200/80 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-red-800">
                    {renderWithHighlight(problem.text, problem.highlight, false)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-red-200">
              <p className="text-red-700 font-semibold text-center">
                💸 Custos altos, stress e pouco resultado
              </p>
            </div>
          </div>

          {/* After */}
          <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-3xl p-8 lg:p-10 border border-green-100 shadow-lg shadow-green-100/50 relative overflow-hidden">
            {/* Glow effect */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-green-200/50 rounded-full blur-3xl" />

            <div className="flex items-center gap-3 mb-8 relative z-10">
              <div className="w-12 h-12 bg-green-100 rounded-2xl flex items-center justify-center">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-900">Depois</h3>
                <p className="text-sm text-green-600">Com a MV$</p>
              </div>
            </div>
            <ul className="space-y-4 relative z-10">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-200/80 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-green-800">
                    {renderWithHighlight(solution.text, solution.highlight, true)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="mt-8 pt-6 border-t border-green-200 relative z-10">
              <p className="text-green-700 font-semibold text-center">
                🚀 Alta rentabilidade com o menor esforço
              </p>
            </div>
          </div>
        </div>

        {/* Arrow - mobile only */}
        <div className="flex justify-center my-8 lg:hidden">
          <ArrowRight className="w-8 h-8 text-gray-400 rotate-90" />
        </div>
      </div>
    </section>
  )
}
