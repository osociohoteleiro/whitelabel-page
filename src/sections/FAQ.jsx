import React, { useState } from 'react'
import FAQItem from '../components/FAQItem'

const faqCategories = [
  { key: 'plataforma', label: 'Plataforma' },
  { key: 'ia', label: 'IA' },
  { key: 'implementacao', label: 'Implementação' },
  { key: 'custos', label: 'Custos' },
  { key: 'seguranca', label: 'Segurança' },
]

const faqs = {
  plataforma: [
    {
      question: 'Preciso de conhecimento técnico?',
      answer: 'Não. A plataforma foi desenhada para ser usada por qualquer pessoa. O editor visual permite criar automações arrastando e soltando, sem código.',
    },
    {
      question: 'Funciona com meu WhatsApp atual?',
      answer: 'Sim. Você pode conectar seu número atual ou usar um número dedicado. Funciona tanto com WhatsApp Business APP quanto WhatsApp Cloud.',
    },
    {
      question: 'Quantos canais posso conectar?',
      answer: 'Dependendo do plano, você pode conectar: WhatsApp APP, WhatsApp Cloud, Instagram Direct, Facebook Messenger, Comentários do Instagram, Comentários do Facebook, Booking.com, Airbnb e Expedia.',
    },
    {
      question: 'Posso usar em mais de um negócio/unidade?',
      answer: 'Sim! Cada negócio pode ter seu próprio workspace com configurações independentes. Ideal para redes e franquias.',
    },
  ],
  ia: [
    {
      question: 'A IA vai substituir meus atendentes?',
      answer: 'Não. A IA trabalha junto com seu time. Ela responde perguntas repetitivas (70% do volume) e escala para humanos quando necessário. Seu time foca nas vendas complexas.',
    },
    {
      question: 'Posso personalizar as respostas da IA?',
      answer: 'Sim. Você treina a IA com sua base de conhecimento (textos, PDFs, imagens). Também pode corrigir respostas - a IA aprende com as correções.',
    },
    {
      question: 'A IA pode enviar fotos e vídeos?',
      answer: 'Sim! A IA tem acesso à sua galeria de mídias e envia automaticamente quando relevante. Por exemplo, se o cliente pede "fotos do quarto", ela envia.',
    },
    {
      question: 'E se a IA não souber responder?',
      answer: 'Ela transfere automaticamente para um atendente humano. Você configura quando isso acontece (confiança baixa, assuntos específicos, etc).',
    },
  ],
  implementacao: [
    {
      question: 'Quanto tempo leva para configurar?',
      answer: 'A configuração básica leva minutos: conectar WhatsApp e ativar a IA padrão. O treinamento completo da IA com sua base de conhecimento leva algumas horas.',
    },
    {
      question: 'Preciso instalar alguma coisa?',
      answer: 'Não. É 100% web. Funciona em qualquer navegador, computador ou celular.',
    },
    {
      question: 'Vocês oferecem treinamento?',
      answer: 'Sim. Temos tutoriais em vídeo, central de ajuda, e treinamento ao vivo para planos Business e Enterprise.',
    },
    {
      question: 'Posso migrar de outra plataforma?',
      answer: 'Sim. Fazemos migração de histórico de conversas e leads de outras plataformas.',
    },
  ],
  custos: [
    {
      question: 'Tem período de teste?',
      answer: 'Sim! 7 dias grátis, sem cartão de crédito. Teste todas as funcionalidades.',
    },
    {
      question: 'Posso cancelar quando quiser?',
      answer: 'Sim. Sem multa, sem fidelidade. Você pode exportar seus dados a qualquer momento.',
    },
    {
      question: 'O preço aumenta conforme uso?',
      answer: 'Não há surpresas. Cada plano tem limites claros. Se precisar de mais, você faz upgrade.',
    },
  ],
  seguranca: [
    {
      question: 'Meus dados estão seguros?',
      answer: 'Sim. Usamos criptografia em todas as comunicações, servidores no Brasil, backups diários, e seguimos todas as normas da LGPD.',
    },
    {
      question: 'Quem tem acesso às conversas dos meus clientes?',
      answer: 'Apenas você e sua equipe (com as permissões que você definir). Nós não acessamos conteúdo de conversas.',
    },
    {
      question: 'E se meu funcionário sair?',
      answer: 'Você remove o acesso instantaneamente. Todo histórico permanece na empresa.',
    },
  ],
}

export default function FAQ() {
  const [activeCategory, setActiveCategory] = useState('plataforma')

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
