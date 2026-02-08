import React from 'react'
import { Check, X, Sparkles } from 'lucide-react'

const features = [
  // Estratégia e Criação
  { name: 'Estratégia de marketing montada por IA', us: true, agencies: true, lovable: false, tools: false, manychat: false },
  { name: 'Criação de artes com IA', us: true, agencies: true, lovable: false, tools: 'canva', manychat: false },
  { name: 'Criação de landing pages com IA', us: true, agencies: true, lovable: true, tools: 'wordpress', manychat: false },
  { name: 'Edição inline das páginas criadas', us: true, agencies: true, lovable: false, tools: 'wordpress', manychat: false },
  { name: 'Posts automáticos nas redes sociais', us: true, agencies: true, lovable: false, tools: 'mlabs', manychat: false },
  // Anúncios e Marketing
  { name: 'Anúncios Meta/Google integrados', us: true, agencies: true, lovable: false, tools: false, manychat: false },
  { name: 'Sem comissão sobre vendas de anúncios', us: true, agencies: false, lovable: true, tools: true, manychat: true },
  // Atendimento
  { name: 'Chat unificado multi-canal', us: true, agencies: false, lovable: false, tools: 'manychat', manychat: true },
  { name: 'IA vendedora treinada no seu negócio', us: true, agencies: false, lovable: false, tools: false, manychat: false },
  { name: 'Base de conhecimento inteligente (RAG)', us: true, agencies: false, lovable: false, tools: false, manychat: false },
  { name: 'Atendimento humano + IA juntos', us: true, agencies: true, lovable: false, tools: false, manychat: false },
  // CRM e Pagamentos
  { name: 'CRM de leads integrado', us: true, agencies: false, lovable: false, tools: 'kommo', manychat: false },
  { name: 'Gateway de pagamentos integrado', us: true, agencies: false, lovable: false, tools: false, manychat: false },
  { name: 'Menores taxas do mercado', us: true, agencies: false, lovable: false, tools: false, manychat: false },
  // Benefícios
  { name: 'Tudo em uma única plataforma', us: true, agencies: false, lovable: false, tools: false, manychat: false },
  { name: '100% em português', us: true, agencies: true, lovable: false, tools: 'partial', manychat: false },
  { name: 'Custo acessível e previsível', us: true, agencies: false, lovable: true, tools: 'partial', manychat: true },
  { name: 'Sem depender de terceiros', us: true, agencies: false, lovable: true, tools: true, manychat: true },
]

const competitors = [
  { key: 'us', name: 'MV$', highlight: true },
  { key: 'agencies', name: 'Agências', subtitle: 'de Marketing' },
  { key: 'lovable', name: 'Lovable', subtitle: '& similares' },
  { key: 'tools', name: 'Ferramentas', subtitle: 'avulsas' },
  { key: 'manychat', name: 'ManyChat', subtitle: '& chatbots' },
]

// Helper to render cell value
const renderValue = (value, isHighlight) => {
  if (value === true) {
    return <Check className={`w-5 h-5 mx-auto ${isHighlight ? 'text-primary-600' : 'text-green-500'}`} />
  }
  if (value === false) {
    return <X className="w-5 h-5 mx-auto text-gray-300" />
  }
  if (value === 'partial') {
    return <span className="text-xs text-amber-600 font-medium">Parcial</span>
  }
  // It's a tool name (canva, mlabs, etc.)
  return <span className="text-xs text-gray-500 font-medium">Via {value}</span>
}

export default function Comparison() {
  return (
    <section className="py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 border border-violet-200 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-700">Comparativo completo</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Por que escolher a{' '}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              Máquina de Vender Muito
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Compare com agências, ferramentas de IA e soluções avulsas do mercado
          </p>
        </div>

        {/* Desktop Table */}
        <div className="hidden lg:block overflow-hidden rounded-3xl border border-gray-200 shadow-xl">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-6 py-5 text-left text-sm font-semibold text-gray-900 w-[280px]">
                  Funcionalidade
                </th>
                {competitors.map((competitor) => (
                  <th
                    key={competitor.key}
                    className={`px-4 py-5 text-center ${
                      competitor.highlight
                        ? 'bg-gradient-to-b from-violet-100 to-fuchsia-50 border-b-2 border-violet-500'
                        : ''
                    }`}
                  >
                    <div className={`text-sm font-bold ${competitor.highlight ? 'text-violet-700' : 'text-gray-900'}`}>
                      {competitor.name}
                    </div>
                    {competitor.subtitle && (
                      <div className={`text-xs font-normal mt-0.5 ${competitor.highlight ? 'text-violet-500' : 'text-gray-500'}`}>
                        {competitor.subtitle}
                      </div>
                    )}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {features.map((feature, index) => (
                <tr key={index} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-6 py-4 text-sm text-gray-700">{feature.name}</td>
                  {competitors.map((competitor) => (
                    <td
                      key={competitor.key}
                      className={`px-4 py-4 text-center ${
                        competitor.highlight ? 'bg-violet-50/30' : ''
                      }`}
                    >
                      {renderValue(feature[competitor.key], competitor.highlight)}
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
                  ? 'bg-gradient-to-br from-violet-50 to-fuchsia-50 border-2 border-violet-500 shadow-lg shadow-violet-100/50'
                  : 'bg-gray-50 border border-gray-200'
              }`}
            >
              <div className="mb-4">
                <h3 className={`font-bold text-lg ${
                  competitor.highlight ? 'text-violet-700' : 'text-gray-900'
                }`}>
                  {competitor.name}
                </h3>
                {competitor.subtitle && (
                  <p className={`text-sm ${competitor.highlight ? 'text-violet-500' : 'text-gray-500'}`}>
                    {competitor.subtitle}
                  </p>
                )}
              </div>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="flex-shrink-0 w-6">
                      {renderValue(feature[competitor.key], competitor.highlight)}
                    </div>
                    <span className={`text-sm ${
                      feature[competitor.key] === true ? 'text-gray-700 font-medium' :
                      feature[competitor.key] === false ? 'text-gray-400' :
                      'text-gray-600'
                    }`}>
                      {feature.name}
                    </span>
                  </li>
                ))}
              </ul>
              {competitor.highlight && (
                <div className="mt-6 pt-4 border-t border-violet-200">
                  <p className="text-center text-sm font-semibold text-violet-700">
                    ✨ Tudo em uma única plataforma
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
