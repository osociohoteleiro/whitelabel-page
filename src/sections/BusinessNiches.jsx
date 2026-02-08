import React, { useState } from 'react'
import {
  X, Users, Building2, Stethoscope, Scale, Wrench, ShoppingBag,
  GraduationCap, Dumbbell, Scissors, Camera, Utensils, Car,
  Sparkles, CheckCircle2, ArrowRight, Star, TrendingUp
} from 'lucide-react'

const niches = [
  {
    id: 'influencers',
    icon: Camera,
    title: 'Influenciadores Digitais',
    shortDesc: 'Monetize sua audiência de verdade',
    color: 'from-pink-500 to-rose-500',
    bgColor: 'bg-pink-500/10',
    borderColor: 'border-pink-500/30',
    modal: {
      headline: 'Transforme seguidores em clientes pagantes',
      subheadline: 'Sua audiência vale ouro. Pare de depender só de publis e crie seu próprio império.',
      painPoints: [
        'Publis pagam cada vez menos e são instáveis',
        'Você não tem controle sobre sua renda',
        'Marcas cancelam parcerias do nada',
        'Não consegue vender seus próprios produtos',
        'Perde horas respondendo DMs manualmente'
      ],
      solutions: [
        'Venda infoprodutos, mentorias e serviços 24/7',
        'IA responde seus seguidores enquanto você dorme',
        'Landing pages de alta conversão em segundos',
        'Funis automatizados que vendem no piloto automático',
        'Múltiplas fontes de renda com sua audiência',
        'Gateway de pagamentos com as menores taxas',
        { text: 'Programa de Parceiros MV$ — indique e fature milhões de forma recorrente', link: 'https://programapartner.devendermuito.com' },
        { text: 'Programa de afiliados', comingSoon: true }
      ],
      testimonial: '"Saí de R$ 3k/mês em publis para R$ 25k/mês com meus próprios produtos"',
      cta: 'Quero monetizar minha audiência'
    }
  },
  {
    id: 'hotels',
    icon: Building2,
    title: 'Hotéis e Pousadas',
    shortDesc: 'Reservas diretas sem comissão',
    color: 'from-blue-500 to-cyan-500',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    modal: {
      headline: 'Pare de pagar 20% de comissão para OTAs',
      subheadline: 'Booking e Decolar ficam com seu lucro. Está na hora de ter reservas diretas.',
      painPoints: [
        'Comissões de 15-20% comem seu lucro',
        'Você não tem os dados dos seus hóspedes',
        'Depende 100% das OTAs para ter reservas',
        'Recepção sobrecarregada com WhatsApp',
        'Perde reservas por demora no atendimento'
      ],
      solutions: [
        'Motor de reservas próprio sem comissão',
        'IA atende hóspedes 24/7 no WhatsApp',
        'Upsell automático de upgrades e experiências',
        'Base de clientes própria para remarketing',
        'Páginas de venda de pacotes e promoções'
      ],
      testimonial: '"Reduzi 40% da dependência de OTAs e aumentei o ticket médio em 35%"',
      cta: 'Quero reservas diretas'
    }
  },
  {
    id: 'clinics',
    icon: Stethoscope,
    title: 'Clínicas e Consultórios',
    shortDesc: 'Agenda cheia sem esforço',
    color: 'from-emerald-500 to-teal-500',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    modal: {
      headline: 'Sua agenda lotada de pacientes qualificados',
      subheadline: 'Enquanto você cuida dos pacientes, a IA cuida de trazer novos.',
      painPoints: [
        'Horários vagos que não consegue preencher',
        'Secretária sobrecarregada com ligações',
        'Pacientes não confirmam e dão no-show',
        'Dificuldade em captar pacientes particulares',
        'Concorrência pesada de outras clínicas'
      ],
      solutions: [
        'Sistema de agendamento de consultas integrado',
        'Agendamento automático 24/7 pelo WhatsApp',
        'IA qualifica e agenda pacientes sozinha',
        'Confirmação automática reduz no-show em 70%',
        'Landing pages específicas para cada procedimento',
        'Campanhas segmentadas para seu público ideal'
      ],
      testimonial: '"Dobrei meus atendimentos particulares em 3 meses"',
      cta: 'Quero minha agenda cheia'
    }
  },
  {
    id: 'lawyers',
    icon: Scale,
    title: 'Advogados',
    shortDesc: 'Clientes qualificados todo dia',
    color: 'from-amber-500 to-orange-500',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    modal: {
      headline: 'Pare de depender de indicação',
      subheadline: 'Construa uma máquina previsível de captação de clientes.',
      painPoints: [
        'Renda instável dependendo de indicações',
        'Não sabe como se posicionar no digital',
        'Perde tempo com consultas que não fecham',
        'Concorrência feroz de outros escritórios',
        'Dificuldade em mostrar autoridade online'
      ],
      solutions: [
        'Conteúdo automatizado que atrai clientes',
        'IA qualifica leads antes da consulta',
        'Landing pages para cada área de atuação',
        'Funis que educam e vendem seus serviços',
        'Posicionamento como autoridade no seu nicho'
      ],
      testimonial: '"De 5 para 25 consultas/mês com clientes já prontos para fechar"',
      cta: 'Quero captar mais clientes'
    }
  },
  {
    id: 'services',
    icon: Wrench,
    title: 'Prestadores de Serviços',
    shortDesc: 'Orçamentos que viram vendas',
    color: 'from-violet-500 to-purple-500',
    bgColor: 'bg-violet-500/10',
    borderColor: 'border-violet-500/30',
    modal: {
      headline: 'Chega de orçamento que não fecha',
      subheadline: 'Transforme cada pedido de orçamento em cliente pagante.',
      painPoints: [
        'Clientes pedem orçamento e somem',
        'Perde tempo explicando a mesma coisa',
        'Não consegue mostrar seu diferencial',
        'Concorre só por preço mais baixo',
        'Agenda vazia em alguns meses do ano'
      ],
      solutions: [
        'IA responde e qualifica clientes 24/7',
        'Portfólio digital que impressiona',
        'Follow-up automático que recupera orçamentos',
        'Páginas de venda dos seus serviços',
        'Depoimentos e cases que geram confiança'
      ],
      testimonial: '"Minha taxa de conversão de orçamentos foi de 20% para 55%"',
      cta: 'Quero converter mais orçamentos'
    }
  },
  {
    id: 'ecommerce',
    icon: ShoppingBag,
    title: 'E-commerces',
    shortDesc: 'Vendas no automático',
    color: 'from-green-500 to-emerald-500',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/30',
    modal: {
      headline: 'Multiplique suas vendas sem aumentar equipe',
      subheadline: 'Automação que vende enquanto você escala.',
      painPoints: [
        'Carrinho abandonado sem recuperação',
        'Atendimento lento perde vendas',
        'Custo alto com equipe de suporte',
        'Dificuldade em reativar clientes inativos',
        'Campanhas que não convertem como deveriam'
      ],
      solutions: [
        'Recuperação automática de carrinhos abandonados',
        'IA atende e vende pelo WhatsApp 24/7',
        'Segmentação inteligente de clientes',
        'Campanhas automatizadas de recompra',
        'Landing pages para lançamentos e promoções',
        'Sistema de pagamentos com as menores taxas',
        { text: 'Vitrine de produtos integrada', comingSoon: true }
      ],
      testimonial: '"Recuperei 30% dos carrinhos abandonados e dobrei o LTV"',
      cta: 'Quero vender mais'
    }
  },
  {
    id: 'education',
    icon: GraduationCap,
    title: 'Infoprodutores',
    shortDesc: 'Escale sem burnout',
    color: 'from-indigo-500 to-blue-500',
    bgColor: 'bg-indigo-500/10',
    borderColor: 'border-indigo-500/30',
    modal: {
      headline: 'Venda seus cursos no piloto automático',
      subheadline: 'Funis que convertem enquanto você cria conteúdo.',
      painPoints: [
        'Lançamentos estressantes e imprevisíveis',
        'Depende de lives exaustivas para vender',
        'Não consegue escalar sem se matar',
        'Leads frios que não compram',
        'Suporte manual tomando seu tempo'
      ],
      solutions: [
        'Funis perpétuos que vendem todo dia',
        'IA qualifica e aquece leads automaticamente',
        'Webinars automatizados que convertem',
        'Suporte automatizado para alunos',
        'Upsell e order bump inteligentes',
        'Gateway de pagamentos com split e menores taxas',
        { text: 'Programa de afiliados', comingSoon: true }
      ],
      testimonial: '"Saí de lançamentos para perpétuo e faturei 3x mais com menos stress"',
      cta: 'Quero escalar meu negócio'
    }
  },
  {
    id: 'fitness',
    icon: Dumbbell,
    title: 'Personal Trainers',
    shortDesc: 'Alunos além da academia',
    color: 'from-red-500 to-orange-500',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/30',
    modal: {
      headline: 'Atenda 100 alunos ganhando como se fossem 20',
      subheadline: 'Escale sua consultoria online sem perder qualidade.',
      painPoints: [
        'Tempo limitado = renda limitada',
        'Não consegue atender mais alunos presenciais',
        'Alunos somem depois de 3 meses',
        'Dificuldade em vender consultoria online',
        'Concorrência de apps e academias low cost'
      ],
      solutions: [
        'Programa online escalável com sua metodologia',
        'IA acompanha e motiva alunos diariamente',
        'Comunidade engajada no automático',
        'Landing pages de alta conversão',
        'Funis que vendem sua transformação'
      ],
      testimonial: '"De 15 alunos presenciais para 150 online, faturando 8x mais"',
      cta: 'Quero escalar minha consultoria'
    }
  },
  {
    id: 'beauty',
    icon: Scissors,
    title: 'Salões e Estéticas',
    shortDesc: 'Clientes fiéis e recorrentes',
    color: 'from-fuchsia-500 to-pink-500',
    bgColor: 'bg-fuchsia-500/10',
    borderColor: 'border-fuchsia-500/30',
    modal: {
      headline: 'Agenda lotada e clientes que voltam sempre',
      subheadline: 'Fidelize clientes e aumente seu ticket médio.',
      painPoints: [
        'Horários vazios durante a semana',
        'Clientes não voltam com frequência',
        'Dificuldade em vender pacotes',
        'Confirmação manual de agendamentos',
        'Concorrência de salões novos'
      ],
      solutions: [
        'Agendamento online 24/7 pelo WhatsApp',
        'Lembretes automáticos reduzem faltas',
        'Programa de fidelidade automatizado',
        'Venda de pacotes e combos pelo chat',
        'Campanhas de reativação de clientes'
      ],
      testimonial: '"Aumentei 40% a recorrência dos clientes com automações simples"',
      cta: 'Quero fidelizar meus clientes'
    }
  },
  {
    id: 'restaurants',
    icon: Utensils,
    title: 'Restaurantes',
    shortDesc: 'Delivery sem iFood',
    color: 'from-orange-500 to-red-500',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/30',
    modal: {
      headline: 'Pare de dar 27% para o iFood',
      subheadline: 'Tenha seu próprio canal de delivery e fidelize clientes.',
      painPoints: [
        'Taxas absurdas do iFood comem seu lucro',
        'Você não tem os dados dos clientes',
        'Dependência total das plataformas',
        'Não consegue fidelizar clientes',
        'Concorrência desleal por preço'
      ],
      solutions: [
        'Cardápio digital próprio no WhatsApp',
        'IA recebe pedidos automaticamente',
        'Programa de fidelidade que funciona',
        'Promoções diretas para sua base',
        'Delivery próprio com margem saudável'
      ],
      testimonial: '"Migrei 60% dos pedidos para canal próprio. Lucro dobrou."',
      cta: 'Quero meu delivery próprio'
    }
  },
  {
    id: 'realestate',
    icon: Building2,
    title: 'Imobiliárias',
    shortDesc: 'Leads quentes todo dia',
    color: 'from-slate-500 to-gray-600',
    bgColor: 'bg-slate-500/10',
    borderColor: 'border-slate-500/30',
    modal: {
      headline: 'Leads qualificados que realmente querem comprar',
      subheadline: 'Pare de perder tempo com curiosos. Foque em quem está pronto.',
      painPoints: [
        'Leads frios que só querem "dar uma olhada"',
        'Corretores perdem tempo com quem não compra',
        'Portais cobram caro e entregam pouco',
        'Dificuldade em mostrar imóveis online',
        'Concorrência feroz de outras imobiliárias'
      ],
      solutions: [
        'IA qualifica leads antes do corretor atender',
        'Tour virtual automatizado dos imóveis',
        'Landing pages para cada empreendimento',
        'Nutrição automática de leads frios',
        'CRM integrado com histórico completo'
      ],
      testimonial: '"Taxa de conversão de 3% para 12% com leads pré-qualificados"',
      cta: 'Quero leads qualificados'
    }
  },
  {
    id: 'auto',
    icon: Car,
    title: 'Concessionárias',
    shortDesc: 'Venda mais carros',
    color: 'from-zinc-500 to-neutral-600',
    bgColor: 'bg-zinc-500/10',
    borderColor: 'border-zinc-500/30',
    modal: {
      headline: 'Venda carros pelo WhatsApp 24 horas por dia',
      subheadline: 'O cliente quer comprar às 22h. Você está lá?',
      painPoints: [
        'Leads chegam fora do horário comercial',
        'Vendedores não fazem follow-up adequado',
        'Cliente pesquisa online mas compra no concorrente',
        'Dificuldade em mostrar estoque atualizado',
        'Processo de venda lento e burocrático'
      ],
      solutions: [
        'IA atende e qualifica leads 24/7',
        'Catálogo digital sempre atualizado',
        'Simulação de financiamento automática',
        'Follow-up inteligente que não deixa esfriar',
        'Agendamento de test drive pelo chat'
      ],
      testimonial: '"Aumentamos 45% as vendas com atendimento noturno automatizado"',
      cta: 'Quero vender mais carros'
    }
  },
]

function NicheModal({ niche, isOpen, onClose, onOpenSignup }) {
  if (!isOpen || !niche) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose()
    }
  }

  const handleCTA = () => {
    onClose()
    onOpenSignup()
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-modal-enter max-h-[90vh] flex flex-col">
        {/* Header com gradiente */}
        <div className={`relative bg-gradient-to-r ${niche.color} p-8 text-white`}>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 hover:bg-white/30 transition-colors"
          >
            <X className="w-5 h-5 text-white" />
          </button>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm">
              <niche.icon className="w-7 h-7 text-white" />
            </div>
            <div>
              <p className="text-white/80 text-sm font-medium">Solução para</p>
              <h3 className="text-2xl font-bold">{niche.title}</h3>
            </div>
          </div>

          <h2 className="text-2xl lg:text-3xl font-extrabold mb-2">
            {niche.modal.headline}
          </h2>
          <p className="text-white/90 text-lg">
            {niche.modal.subheadline}
          </p>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 p-8">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Pain Points */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-red-100 rounded-lg flex items-center justify-center">
                  <X className="w-4 h-4 text-red-600" />
                </div>
                <h4 className="font-bold text-gray-900">Seus desafios hoje</h4>
              </div>
              <ul className="space-y-3">
                {niche.modal.painPoints.map((point, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3 h-3 text-red-500" />
                    </div>
                    <span className="text-gray-600 text-sm">{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Solutions */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-4 h-4 text-green-600" />
                </div>
                <h4 className="font-bold text-gray-900">Como resolvemos</h4>
              </div>
              <ul className="space-y-3">
                {niche.modal.solutions.map((solution, index) => {
                  const isObject = typeof solution === 'object'
                  const isLink = isObject && solution.link
                  const isComingSoon = isObject && solution.comingSoon
                  const text = isObject ? solution.text : solution

                  return (
                    <li key={index} className="flex items-start gap-3">
                      <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${isComingSoon ? 'bg-amber-100' : 'bg-green-100'}`}>
                        <CheckCircle2 className={`w-3 h-3 ${isComingSoon ? 'text-amber-500' : 'text-green-500'}`} />
                      </div>
                      {isLink ? (
                        <a
                          href={solution.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-sm text-violet-600 hover:text-violet-800 underline underline-offset-2 font-medium"
                        >
                          {text}
                        </a>
                      ) : isComingSoon ? (
                        <span className="text-sm text-amber-600 font-medium flex items-center gap-2">
                          {text}
                          <span className="text-[10px] bg-amber-100 text-amber-700 px-2 py-0.5 rounded-full font-bold uppercase">Em breve</span>
                        </span>
                      ) : (
                        <span className="text-gray-600 text-sm">{text}</span>
                      )}
                    </li>
                  )
                })}
              </ul>
            </div>
          </div>

          {/* Testimonial */}
          <div className="mt-8 bg-gray-50 rounded-2xl p-6 border border-gray-100">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-700 italic">{niche.modal.testimonial}</p>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <button
              onClick={handleCTA}
              className={`group relative px-10 py-4 bg-gradient-to-r ${niche.color} rounded-2xl font-bold text-white text-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 overflow-hidden`}
            >
              <span className="relative z-10 flex items-center justify-center gap-3">
                {niche.modal.cta}
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </button>
            <p className="text-gray-500 text-sm mt-3">
              Teste grátis por 7 dias. Sem cartão de crédito.
            </p>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes modal-enter {
          from {
            opacity: 0;
            transform: scale(0.95) translateY(10px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-modal-enter {
          animation: modal-enter 0.3s ease-out;
        }
      `}</style>
    </div>
  )
}

export default function BusinessNiches({ onOpenSignup }) {
  const [selectedNiche, setSelectedNiche] = useState(null)

  return (
    <section id="segmentos" className="py-20 lg:py-32 bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-violet-100 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-fuchsia-100 rounded-full blur-[120px] opacity-50" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 border border-violet-200 rounded-full mb-6">
            <Users className="w-4 h-4 text-violet-600" />
            <span className="text-sm font-medium text-violet-700">Soluções por segmento</span>
          </div>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Para quem a{' '}
            <span className="bg-gradient-to-r from-violet-600 via-fuchsia-600 to-pink-600 bg-clip-text text-transparent">
              Máquina de Vender Muito
            </span>
            {' '}é indispensável
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Não importa seu nicho — se você quer <span className="font-semibold text-gray-900">vender mais</span>,{' '}
            <span className="font-semibold text-gray-900">automatizar processos</span> e{' '}
            <span className="font-semibold text-gray-900">escalar sem aumentar custos</span>,
            a MV$ foi feita para você.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {niches.map((niche) => (
            <button
              key={niche.id}
              onClick={() => setSelectedNiche(niche)}
              className={`group relative ${niche.bgColor} ${niche.borderColor} border-2 rounded-2xl p-6 text-left hover:scale-105 transition-all duration-300 hover:shadow-xl`}
            >
              {/* Icon */}
              <div className={`w-12 h-12 bg-gradient-to-br ${niche.color} rounded-xl flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform`}>
                <niche.icon className="w-6 h-6 text-white" />
              </div>

              {/* Content */}
              <h3 className="font-bold text-gray-900 mb-1 group-hover:text-violet-700 transition-colors">
                {niche.title}
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                {niche.shortDesc}
              </p>

              {/* Link Saiba mais */}
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-violet-600 group-hover:text-violet-800 transition-colors">
                Saiba mais
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>

              {/* Hover glow effect */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${niche.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
            </button>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 rounded-full">
            <TrendingUp className="w-5 h-5 text-violet-600" />
            <span className="text-gray-700">
              <span className="font-semibold text-gray-900">+5.000 negócios</span> já usam a Máquina de Vender Muito
            </span>
          </div>
        </div>
      </div>

      {/* Modal */}
      <NicheModal
        niche={selectedNiche}
        isOpen={!!selectedNiche}
        onClose={() => setSelectedNiche(null)}
        onOpenSignup={onOpenSignup}
      />
    </section>
  )
}
