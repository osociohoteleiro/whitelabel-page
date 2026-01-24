import React from 'react'
import {
  MessageSquare,
  Bot,
  Workflow,
  Users,
  Megaphone,
  BarChart3,
  Brain,
  Calendar
} from 'lucide-react'
import FeatureCard from '../components/FeatureCard'

const features = [
  {
    icon: MessageSquare,
    title: 'Chat Unificado',
    description: 'WhatsApp, Instagram, Facebook e Email em uma única interface. Histórico completo e transferência entre atendentes.',
  },
  {
    icon: Bot,
    title: 'IA Vendedora',
    description: 'Assistente inteligente que responde 24/7, qualifica leads, envia fotos e vídeos, e transfere para humanos quando necessário.',
  },
  {
    icon: Workflow,
    title: 'Automação Visual',
    description: 'Editor visual drag-and-drop para criar fluxos de atendimento sem programar. 17 tipos de ações disponíveis.',
  },
  {
    icon: Users,
    title: 'CRM de Leads',
    description: 'Capture leads automaticamente de qualquer canal. Funil visual, campos personalizáveis e histórico completo.',
  },
  {
    icon: Megaphone,
    title: 'Marketing Automatizado',
    description: 'Campanhas por data, evento ou comportamento. Disparo em massa segmentado via WhatsApp, Email e SMS.',
  },
  {
    icon: BarChart3,
    title: 'Relatórios',
    description: 'Dashboard em tempo real com taxa de conversão, tempo de resposta, performance da IA e muito mais.',
  },
  {
    icon: Brain,
    title: 'Base de Conhecimento',
    description: 'Treine a IA com seus textos, PDFs e imagens. Busca semântica para respostas sempre corretas.',
  },
  {
    icon: Calendar,
    title: 'Agendamento Online',
    description: 'Página pública de agendamento integrada ao sistema. Confirmação e lembretes automáticos.',
  },
]

export default function Features() {
  return (
    <section id="funcionalidades" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Funcionalidades
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Tudo que você precisa em uma plataforma
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Ferramentas poderosas para automatizar, vender e escalar seu atendimento
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
