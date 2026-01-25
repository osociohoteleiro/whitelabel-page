import React from 'react'
import { Check, X } from 'lucide-react'

const features = [
  { name: 'Chat unificado multi-canal', us: true, manychat: true, botconversa: false, kommo: true },
  { name: 'IA treinada no seu negócio', us: true, manychat: false, botconversa: false, kommo: false },
  { name: 'Criação de artes com IA', us: true, manychat: false, botconversa: false, kommo: false },
  { name: 'Anúncios Meta/Google integrados', us: true, manychat: false, botconversa: false, kommo: false },
  { name: 'Postagens automáticas nas redes', us: true, manychat: false, botconversa: false, kommo: false },
  { name: 'Editor visual de automações', us: true, manychat: true, botconversa: true, kommo: true },
  { name: 'CRM integrado', us: true, manychat: false, botconversa: false, kommo: true },
  { name: 'Base de conhecimento (RAG)', us: true, manychat: false, botconversa: false, kommo: false },
  { name: 'Marketing automatizado', us: true, manychat: true, botconversa: true, kommo: true },
  { name: 'Atendimento humano + IA juntos', us: true, manychat: false, botconversa: false, kommo: false },
  { name: 'Tudo em um só lugar', us: true, manychat: false, botconversa: false, kommo: false },
  { name: '100% em português', us: true, manychat: false, botconversa: true, kommo: true },
  { name: 'Preço acessível', us: true, manychat: false, botconversa: true, kommo: false },
]

const competitors = [
  { key: 'us', name: 'Nossa Plataforma', highlight: true },
  { key: 'manychat', name: 'ManyChat', highlight: false },
  { key: 'botconversa', name: 'BotConversa', highlight: false },
  { key: 'kommo', name: 'Kommo CRM', highlight: false },
]

export default function Comparison() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Comparativo
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Por que escolher nossa plataforma
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Compare com as alternativas do mercado
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-hidden rounded-2xl border border-gray-200">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-4 text-left text-sm font-semibold text-gray-900">
                  Funcionalidade
                </th>
                {competitors.map((competitor) => (
                  <th
                    key={competitor.key}
                    className={`px-6 py-4 text-center text-sm font-semibold ${
                      competitor.highlight ? 'bg-primary-50 text-primary-700' : 'text-gray-900'
                    }`}
                  >
                    {competitor.name}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {features.map((feature, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm text-gray-700">{feature.name}</td>
                  {competitors.map((competitor) => (
                    <td
                      key={competitor.key}
                      className={`px-6 py-4 text-center ${
                        competitor.highlight ? 'bg-primary-50/50' : ''
                      }`}
                    >
                      {feature[competitor.key] ? (
                        <Check className={`w-5 h-5 mx-auto ${
                          competitor.highlight ? 'text-primary-600' : 'text-green-500'
                        }`} />
                      ) : (
                        <X className="w-5 h-5 mx-auto text-gray-300" />
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards */}
        <div className="lg:hidden space-y-6">
          {competitors.map((competitor) => (
            <div
              key={competitor.key}
              className={`rounded-2xl p-6 ${
                competitor.highlight
                  ? 'bg-primary-50 border-2 border-primary-500'
                  : 'bg-gray-50'
              }`}
            >
              <h3 className={`font-bold text-lg mb-4 ${
                competitor.highlight ? 'text-primary-700' : 'text-gray-900'
              }`}>
                {competitor.name}
              </h3>
              <ul className="space-y-2">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    {feature[competitor.key] ? (
                      <Check className={`w-5 h-5 ${
                        competitor.highlight ? 'text-primary-600' : 'text-green-500'
                      }`} />
                    ) : (
                      <X className="w-5 h-5 text-gray-300" />
                    )}
                    <span className={`text-sm ${
                      feature[competitor.key] ? 'text-gray-700' : 'text-gray-400'
                    }`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
