import React from 'react'
import PricingCard from '../components/PricingCard'

const plans = [
  {
    name: 'Starter',
    description: 'Para pequenos negócios começando',
    features: [
      '1 workspace',
      'WhatsApp + 1 canal adicional',
      'IA básica com base de conhecimento',
      'CRM integrado',
      'Relatórios essenciais',
      'Suporte por email',
    ],
    highlighted: false,
  },
  {
    name: 'Professional',
    description: 'Para empresas em crescimento',
    features: [
      '1 workspace',
      'Todos os canais',
      'IA avançada com ferramentas',
      'Editor de fluxos de automação',
      'Agendamento online',
      'Relatórios completos',
      'Suporte por chat',
    ],
    highlighted: true,
  },
  {
    name: 'Business',
    description: 'Para operações robustas',
    features: [
      '10 workspaces',
      'Todos os canais + integrações',
      'IA avançada + ferramentas customizadas',
      'Automações ilimitadas',
      'API de integração',
      'Relatórios avançados + exportação',
      'Suporte prioritário',
    ],
    highlighted: false,
  },
  {
    name: 'Parceiros',
    description: 'Para revendedores e agências',
    features: [
      'Suporte Premium',
      'Workspaces ilimitados',
      'Testadores',
    ],
    highlighted: false,
    ctaText: 'Falar com vendas',
  },
]

export default function Pricing({ onOpenSignup }) {
  return (
    <section id="planos" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Planos
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Escolha o plano ideal para você
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Comece grátis por 7 dias. Sem cartão de crédito.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4 items-start">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} onOpenSignup={onOpenSignup} />
          ))}
        </div>

        {/* Enterprise note */}
        <div className="mt-12 text-center">
          <p className="text-gray-500">
            Precisa de algo personalizado?{' '}
            <a href="#" className="text-primary-600 font-medium hover:underline">
              Fale com nosso time de vendas
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
