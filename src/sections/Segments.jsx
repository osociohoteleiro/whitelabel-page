import React from 'react'
import SegmentCard from '../components/SegmentCard'

const segments = [
  {
    icon: '🏨',
    title: 'Hospedagem',
    benefits: [
      'IA responde sobre disponibilidade e preços 24h',
      'Envia fotos dos quartos automaticamente',
      'Follow-up de cotações não convertidas',
      'Mensagem de pré-check-in automática',
    ],
  },
  {
    icon: '🏥',
    title: 'Clínicas',
    benefits: [
      'Agendamento online sem telefone',
      'Reduz no-show em até 40%',
      'Lembretes 24h e 1h antes',
      'Follow-up pós-consulta',
    ],
  },
  {
    icon: '🏠',
    title: 'Imobiliárias',
    benefits: [
      'Qualifica leads automaticamente',
      'Envia fotos/vídeos de imóveis',
      'Agendamento de visitas integrado',
      'IA responde sobre financiamento',
    ],
  },
  {
    icon: '🛒',
    title: 'E-commerce',
    benefits: [
      'Vende enquanto você dorme',
      'Status de pedidos via WhatsApp',
      'Recuperação de carrinho abandonado',
      'Catálogo de produtos via chat',
    ],
  },
  {
    icon: '🍽️',
    title: 'Restaurantes',
    benefits: [
      'Cardápio digital via WhatsApp',
      'Reservas automatizadas',
      'Promoções segmentadas',
      'Pedidos delivery direto',
    ],
  },
  {
    icon: '🎓',
    title: 'Escolas',
    benefits: [
      'Captação de matrículas 24h',
      'IA responde sobre cursos/valores',
      'Agendamento de aulas experimentais',
      'Comunicação com pais/alunos',
    ],
  },
  {
    icon: '🔧',
    title: 'Serviços',
    benefits: [
      'Agendamento de consultas',
      'Qualificação de leads',
      'Follow-up de orçamentos',
      'Coleta de documentos via chat',
    ],
  },
  {
    icon: '🏋️',
    title: 'Academias',
    benefits: [
      'Captação de experimentais',
      'Lembretes de treino',
      'Renovação automática de planos',
      'Promoções sazonais',
    ],
  },
  {
    icon: '📢',
    title: 'Agências de Marketing',
    benefits: [
      'Gerencie múltiplos clientes em um painel',
      'White label com sua marca',
      'Relatórios automatizados por cliente',
      'Revenda com margem de lucro',
    ],
  },
  {
    icon: '👔',
    title: 'Profissionais Liberais',
    benefits: [
      'Agenda integrada com Google Calendar',
      'Confirmação automática de reuniões',
      'Coleta de documentos pelo WhatsApp',
      'Follow-up de propostas enviadas',
    ],
  },
  {
    icon: '📱',
    title: 'Influenciadores Digitais',
    benefits: [
      'Responda DMs automaticamente 24h',
      'Qualifique parcerias comerciais',
      'Envie mídia kit automaticamente',
      'Agende posts e stories',
    ],
  },
  {
    icon: '🏛️',
    title: 'Organizações Governamentais',
    benefits: [
      'Atendimento ao cidadão 24h',
      'Respostas automáticas sobre serviços',
      'Agendamento de atendimento presencial',
      'Redução de filas e tempo de espera',
    ],
  },
]

export default function Segments() {
  return (
    <section id="segmentos" className="py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Segmentos
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Ideal para qualquer negócio
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Funcionalidades específicas para cada tipo de operação
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {segments.map((segment, index) => (
            <SegmentCard key={index} {...segment} />
          ))}
        </div>
      </div>
    </section>
  )
}
