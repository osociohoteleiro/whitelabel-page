import React, { useState } from 'react'
import FAQItem from '../components/FAQItem'

const faqCategories = [
  { key: 'geral', label: 'Geral' },
  { key: 'ia', label: 'IA & Automação' },
  { key: 'marketing', label: 'Marketing' },
  { key: 'atendimento', label: 'Atendimento' },
  { key: 'custos', label: 'Custos' },
]

const faqs = {
  geral: [
    {
      question: 'O que é a Máquina de Vender Muito?',
      answer: 'É uma plataforma completa que substitui agências, freelancers e ferramentas avulsas. A IA cria sua estratégia de marketing, landing pages, artes, posts, responde clientes 24/7, gerencia leads e processa pagamentos — tudo em um só lugar.',
    },
    {
      question: 'Preciso de conhecimento técnico?',
      answer: 'Não. A plataforma foi feita para empreendedores, não para programadores. Você edita páginas clicando nos elementos, cria automações arrastando blocos, e treina a IA enviando textos e fotos do seu negócio.',
    },
    {
      question: 'Funciona para qualquer tipo de negócio?',
      answer: 'Sim! Hotéis, restaurantes, clínicas, escritórios de advocacia, imobiliárias, academias, salões de beleza, e-commerces e muito mais. A IA se adapta ao seu segmento e aprende sobre seu negócio específico.',
    },
    {
      question: 'Posso usar em mais de um negócio ou filial?',
      answer: 'Sim! Cada negócio tem seu próprio workspace com configurações independentes: IA própria, canais próprios, equipe própria. Ideal para redes, franquias e agências.',
    },
  ],
  ia: [
    {
      question: 'Como a IA monta minha estratégia de marketing?',
      answer: 'Você responde um questionário sobre seu negócio (público-alvo, diferenciais, objetivos). Em 5 minutos, a IA gera um plano completo: personas, tom de voz, calendário de conteúdo, sugestões de campanha e muito mais.',
    },
    {
      question: 'A IA cria landing pages de verdade?',
      answer: 'Sim! Em 60 segundos a IA cria uma página completa de alta conversão. E diferente de outras ferramentas como Lovable, você edita qualquer elemento diretamente na página — texto, imagens, cores, botões — sem código.',
    },
    {
      question: 'A IA vai substituir meus funcionários?',
      answer: 'Não substitui, potencializa. A IA responde perguntas repetitivas (70% do volume), faz follow-up automático e aplica técnicas de venda 24/7. Seu time foca nas negociações complexas e no relacionamento.',
    },
    {
      question: 'Como a IA aprende sobre meu negócio?',
      answer: 'Você alimenta a base de conhecimento com textos, PDFs, fotos e vídeos. A IA usa tecnologia RAG (Retrieval Augmented Generation) para responder com precisão sobre seus produtos, preços, políticas e diferenciais.',
    },
    {
      question: 'Posso corrigir respostas da IA?',
      answer: 'Sim! Se a IA errar, você corrige ali mesmo. Ela aprende com as correções e não repete o erro. Quanto mais você usa, mais inteligente ela fica.',
    },
  ],
  marketing: [
    {
      question: 'Como funciona a criação de artes?',
      answer: 'A IA gera artes profissionais em segundos — posts para redes sociais, banners, stories. Você só descreve o que quer ou deixa a IA sugerir baseado na sua estratégia. Tchau, Canva.',
    },
    {
      question: 'A plataforma posta automaticamente nas redes sociais?',
      answer: 'Sim! Você programa posts para Instagram, Facebook e outras redes. A IA pode criar 30 dias de conteúdo em 30 minutos. Tchau, social media.',
    },
    {
      question: 'Posso criar anúncios no Meta e Google?',
      answer: 'Sim! A plataforma tem integração nativa com Meta Ads e Google Ads. Crie campanhas, defina públicos e orçamentos, tudo sem sair da MV$. E o melhor: sem comissão sobre suas vendas.',
    },
    {
      question: 'Vocês cobram comissão sobre anúncios?',
      answer: 'Não! Diferente de agências que cobram 10-20% sobre o valor investido em mídia, aqui você paga apenas a mensalidade fixa. Invista R$ 10.000 em ads e economize até R$ 2.000/mês.',
    },
  ],
  atendimento: [
    {
      question: 'Quais canais de atendimento posso conectar?',
      answer: 'WhatsApp (APP e Cloud), Instagram Direct, Facebook Messenger, comentários do Instagram e Facebook. Para hotéis: Booking.com, Airbnb e Expedia. Todas as conversas em uma única tela.',
    },
    {
      question: 'A IA responde em todos os canais?',
      answer: 'Sim! A mesma IA treinada no seu negócio responde no WhatsApp, Instagram, Facebook — mantendo consistência na comunicação e aplicando as mesmas técnicas de venda.',
    },
    {
      question: 'E se o cliente quiser falar com um humano?',
      answer: 'A IA transfere automaticamente para sua equipe quando detecta: baixa confiança na resposta, assuntos sensíveis, ou quando o cliente pede. Você define as regras.',
    },
    {
      question: 'Como funciona o CRM de leads?',
      answer: 'Todo contato vira um lead automaticamente. A IA classifica por interesse, registra histórico de conversas, agenda follow-ups e até recupera carrinhos abandonados. Zero lead esquecido.',
    },
  ],
  custos: [
    {
      question: 'Quanto custa comparado a contratar profissionais?',
      answer: 'Uma fração. Consultor de marketing + designer + social media + gestor de tráfego + ferramentas avulsas pode passar de R$ 10.000/mês facilmente. A MV$ faz tudo isso por uma mensalidade acessível.',
    },
    {
      question: 'Tem período de teste?',
      answer: 'Sim! 7 dias grátis com acesso a todas as funcionalidades. Sem cartão de crédito. Cancele quando quiser.',
    },
    {
      question: 'O preço aumenta conforme uso?',
      answer: 'Não há surpresas. Cada plano tem limites claros de workspaces, canais e recursos. Precisa de mais? Faz upgrade. Simples assim.',
    },
    {
      question: 'E as taxas do gateway de pagamento?',
      answer: 'Nosso gateway integrado tem até 40% menos taxas que concorrentes como PagSeguro e Mercado Pago. Mais vendas no seu bolso.',
    },
    {
      question: 'Posso cancelar quando quiser?',
      answer: 'Sim. Sem multa, sem fidelidade, sem burocracia. Você exporta seus dados e pronto. Mas spoiler: ninguém quer sair depois que experimenta.',
    },
  ],
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('geral')

  return (
    <section id="faq" className="py-20 lg:py-32 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            FAQ
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Perguntas frequentes
          </h2>
          <p className="text-lg text-gray-600">
            Tudo que você precisa saber sobre a plataforma
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {faqCategories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === category.key
                  ? 'bg-primary-100 text-primary-700'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ Items */}
        <div className="bg-white rounded-2xl border border-gray-200 divide-y divide-gray-200">
          {faqs[activeCategory].map((faq, index) => (
            <FAQItem key={index} {...faq} />
          ))}
        </div>
      </div>
    </section>
  )
}
