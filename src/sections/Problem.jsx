import React from 'react'
import { X, Check, ArrowRight } from 'lucide-react'

const problems = [
  'Precisa contratar designer para criar artes',
  'Precisa de gestor de tráfego para anúncios',
  'Precisa de social media para postar',
  'Atendente responde manualmente cada mensagem',
  'Perde vendas por demora no atendimento',
  'Follow-up manual (sempre esquece)',
  'Múltiplas ferramentas para gerenciar tudo',
  'Equipe grande e custos altos',
]

const solutions = [
  'IA cria designs automaticamente para você',
  'Anúncios no Facebook, Instagram e Google sem gestor',
  'Posts automáticos nas redes sociais',
  'IA responde 24/7 com informações corretas',
  'Resposta instantânea a qualquer hora',
  'Follow-up automático programado',
  'Uma única plataforma para tudo',
  'Reduza custos com equipe enxuta',
]

export default function Problem() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            O que muda com nossa plataforma
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Elimine custos com equipe e automatize design, marketing, anúncios e atendimento
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Before */}
          <div className="bg-red-50 rounded-2xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-red-100 rounded-xl flex items-center justify-center">
                <X className="w-5 h-5 text-red-600" />
              </div>
              <h3 className="text-xl font-bold text-red-900">Antes</h3>
            </div>
            <ul className="space-y-4">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-red-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <X className="w-4 h-4 text-red-600" />
                  </div>
                  <span className="text-red-800">{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* After */}
          <div className="bg-green-50 rounded-2xl p-8 lg:p-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-green-900">Depois</h3>
            </div>
            <ul className="space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-200 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-green-600" />
                  </div>
                  <span className="text-green-800">{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Arrow */}
        <div className="flex justify-center my-8 lg:hidden">
          <ArrowRight className="w-8 h-8 text-gray-400 rotate-90" />
        </div>
      </div>
    </section>
  )
}
