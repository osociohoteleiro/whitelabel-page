import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle,
  TrendingUp,
  Users,
  Zap,
  Palette,
  Code2,
  HeadphonesIcon,
  RefreshCw,
  Shield,
  Tag,
  Layers,
  Building2,
  UserPlus,
  Megaphone,
  Banknote,
  Star,
  Crown,
  Rocket,
  Check,
  ChevronDown,
  HelpCircle,
  Send,
  AlertCircle,
  Loader2,
  User
} from 'lucide-react'
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_BASE_URL || '/api'

// Dados dos benefícios
const benefits = [
  {
    icon: Palette,
    title: 'Sua Marca, Nossa Tecnologia',
    description: 'Use sua identidade visual completa. Seus clientes verão apenas a sua marca na plataforma.',
    color: 'bg-blue-500',
  },
  {
    icon: TrendingUp,
    title: 'Comissões Recorrentes',
    description: 'Ganhe todo mês enquanto o cliente estiver ativo. Até 45% de comissão sobre cada licença.',
    color: 'bg-green-500',
  },
  {
    icon: Code2,
    title: 'Zero Desenvolvimento',
    description: 'Plataforma pronta para uso. Sem custos de desenvolvimento, manutenção ou infraestrutura.',
    color: 'bg-purple-500',
  },
  {
    icon: HeadphonesIcon,
    title: 'Suporte Técnico Incluso',
    description: 'Nossa equipe cuida de toda a parte técnica. Você foca apenas nas vendas e relacionamento.',
    color: 'bg-orange-500',
  },
  {
    icon: RefreshCw,
    title: 'Atualizações Automáticas',
    description: 'Sempre na versão mais recente. Novas funcionalidades e melhorias sem custo adicional.',
    color: 'bg-pink-500',
  },
  {
    icon: Shield,
    title: 'Segurança Garantida',
    description: 'Infraestrutura robusta com backup, SSL e proteção de dados. Tranquilidade para você e seus clientes.',
    color: 'bg-cyan-500',
  },
]

// Níveis de comissão
const levels = [
  {
    name: 'Iniciante',
    icon: Star,
    range: '1 a 5',
    commission: '15%',
    earnings: 'R$ 148,50',
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    features: [
      'Plataforma White Label completa',
      'Suporte técnico incluso',
      'Atualizações automáticas',
      'Material de vendas',
    ],
  },
  {
    name: 'Bronze',
    icon: Star,
    range: '6 a 10',
    commission: '25%',
    earnings: 'R$ 247,50',
    color: 'from-orange-400 to-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    features: [
      'Tudo do nível Iniciante',
      'Prioridade no suporte',
      'Treinamentos exclusivos',
      'Material de marketing',
    ],
  },
  {
    name: 'Parceiro',
    icon: Crown,
    range: '11 a 60',
    commission: '35%',
    earnings: 'R$ 346,50',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    popular: true,
    features: [
      'Tudo do nível Bronze',
      'Mentorias periódicas',
      'Condições especiais',
      'Suporte prioritário',
    ],
  },
  {
    name: 'Avançado',
    icon: Rocket,
    range: 'acima de 60',
    commission: '45%',
    earnings: 'R$ 445,50',
    color: 'from-amber-400 to-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    features: [
      'Tudo do nível Parceiro',
      'Gerente de conta dedicado',
      'Acesso antecipado a novidades',
      'Bônus por performance',
    ],
  },
]

// Passos de como funciona
const steps = [
  {
    number: '01',
    icon: UserPlus,
    title: 'Cadastre-se como Parceiro',
    description: 'Preencha o formulário de interesse e nossa equipe entrará em contato para alinhar os próximos passos.',
    color: 'bg-blue-500',
  },
  {
    number: '02',
    icon: Palette,
    title: 'Personalize sua Plataforma',
    description: 'Configure sua marca, cores e domínio. A plataforma ficará com a cara da sua empresa.',
    color: 'bg-purple-500',
  },
  {
    number: '03',
    icon: Megaphone,
    title: 'Comece a Vender',
    description: 'Com materiais de apoio e treinamento, você está pronto para prospectar e fechar negócios.',
    color: 'bg-orange-500',
  },
  {
    number: '04',
    icon: Banknote,
    title: 'Receba Comissões',
    description: 'A cada cliente ativo, você recebe comissões recorrentes mensais diretamente na sua conta.',
    color: 'bg-green-500',
  },
]

// FAQs
const faqs = [
  {
    question: 'O que é White Label?',
    answer: 'White Label é um modelo de negócio onde você comercializa uma plataforma completa como se fosse sua, com sua própria marca. Toda a tecnologia é desenvolvida e mantida por nós, mas seus clientes veem apenas a sua identidade visual.',
  },
  {
    question: 'Como funciona o pagamento das comissões?',
    answer: 'As comissões são calculadas mensalmente sobre o valor das licenças dos clientes ativos (pagantes e adimplentes). O pagamento é realizado até o dia 15 do mês seguinte, diretamente na sua conta bancária.',
  },
  {
    question: 'Posso usar a plataforma para minha própria empresa?',
    answer: 'Sim, você pode usar a plataforma internamente, porém não há desconto ou comissão para uso próprio. O valor cobrado é o integral da licença (R$ 990,00/mês).',
  },
  {
    question: 'Preciso ter conhecimento técnico?',
    answer: 'Não! Você não precisa saber programar ou ter conhecimento técnico. Toda a parte tecnológica é de nossa responsabilidade. Você foca apenas em vendas e relacionamento com clientes.',
  },
  {
    question: 'Qual é o investimento inicial?',
    answer: 'Não há investimento inicial para se tornar um parceiro White Label. Você começa a ganhar comissões assim que seus primeiros clientes ativarem suas licenças.',
  },
  {
    question: 'Como funciona o suporte aos meus clientes?',
    answer: 'Você é responsável pelo suporte de primeiro nível (dúvidas básicas, orientações de uso). Para questões técnicas mais complexas, nossa equipe de suporte está disponível para auxiliar.',
  },
  {
    question: 'Posso oferecer desconto aos meus clientes?',
    answer: 'Você pode repassar parte ou toda a sua comissão ao cliente final, mas apenas em negociações privadas e individuais. É proibido divulgar preços menores que R$ 990,00 publicamente em sites, anúncios ou materiais comerciais.',
  },
  {
    question: 'O que acontece se eu quiser sair do programa?',
    answer: 'Em caso de desligamento, você perde o direito de uso da plataforma White Label e as comissões cessam imediatamente. Os clientes ativos permanecem vinculados à plataforma, sem direito a comissionamento futuro.',
  },
]

// Componente do Formulário de Contato
function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    personType: '',
    company: '',
    cnpj: '',
    website: '',
    instagram: '',
    position: '',
    businessType: '',
    cpf: '',
    instagramPf: '',
    message: '',
    // Novos campos
    niche: '',
    isSaasPartner: '',
    saasPartnerDetails: '',
    hasTeam: '',
    teamSize: '',
    hasActiveClients: '',
    clientCount: '',
    isInfluencer: '',
    followerCount: '',
  })
  const [status, setStatus] = useState('idle')
  const [errorMessage, setErrorMessage] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const formatPhone = (value) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 2) return `(${numbers}`
    if (numbers.length <= 7) return `(${numbers.slice(0, 2)}) ${numbers.slice(2)}`
    if (numbers.length <= 11) return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7)}`
    return `(${numbers.slice(0, 2)}) ${numbers.slice(2, 7)}-${numbers.slice(7, 11)}`
  }

  const formatCNPJ = (value) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 2) return numbers
    if (numbers.length <= 5) return `${numbers.slice(0, 2)}.${numbers.slice(2)}`
    if (numbers.length <= 8) return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5)}`
    if (numbers.length <= 12) return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8)}`
    return `${numbers.slice(0, 2)}.${numbers.slice(2, 5)}.${numbers.slice(5, 8)}/${numbers.slice(8, 12)}-${numbers.slice(12, 14)}`
  }

  const formatCPF = (value) => {
    const numbers = value.replace(/\D/g, '')
    if (numbers.length <= 3) return numbers
    if (numbers.length <= 6) return `${numbers.slice(0, 3)}.${numbers.slice(3)}`
    if (numbers.length <= 9) return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6)}`
    return `${numbers.slice(0, 3)}.${numbers.slice(3, 6)}.${numbers.slice(6, 9)}-${numbers.slice(9, 11)}`
  }

  const handlePhoneChange = (e) => {
    const formatted = formatPhone(e.target.value)
    setFormData((prev) => ({ ...prev, phone: formatted }))
  }

  const handleCNPJChange = (e) => {
    const formatted = formatCNPJ(e.target.value)
    setFormData((prev) => ({ ...prev, cnpj: formatted }))
  }

  const handleCPFChange = (e) => {
    const formatted = formatCPF(e.target.value)
    setFormData((prev) => ({ ...prev, cpf: formatted }))
  }

  const handleInstagramChange = (e, field) => {
    let value = e.target.value
    if (value.startsWith('@')) value = value.substring(1)
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')
    setErrorMessage('')

    const dataToSend = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      personType: formData.personType,
      message: formData.message,
      // Novos campos
      niche: formData.niche,
      isSaasPartner: formData.isSaasPartner,
      saasPartnerDetails: formData.isSaasPartner === 'sim' ? formData.saasPartnerDetails : '',
      hasTeam: formData.hasTeam,
      teamSize: formData.hasTeam === 'sim' ? formData.teamSize : '',
      hasActiveClients: formData.hasActiveClients,
      clientCount: formData.hasActiveClients === 'sim' ? formData.clientCount : '',
      isInfluencer: formData.isInfluencer,
      followerCount: formData.isInfluencer === 'sim' ? formData.followerCount : '',
    }

    if (formData.personType === 'pj') {
      dataToSend.company = formData.company
      dataToSend.cnpj = formData.cnpj
      dataToSend.website = formData.website
      dataToSend.instagram = formData.instagram
      dataToSend.position = formData.position
    } else {
      dataToSend.businessType = formData.businessType
      dataToSend.cpf = formData.cpf
      dataToSend.instagram = formData.instagramPf
    }

    try {
      await axios.post(`${API_URL}/whitelabel-partner/lead`, dataToSend)
      setStatus('success')
      setFormData({
        name: '', email: '', phone: '', personType: '',
        company: '', cnpj: '', website: '', instagram: '', position: '',
        businessType: '', cpf: '', instagramPf: '', message: '',
        niche: '', isSaasPartner: '', saasPartnerDetails: '', hasTeam: '',
        teamSize: '', hasActiveClients: '', clientCount: '', isInfluencer: '', followerCount: '',
      })
    } catch (error) {
      setStatus('error')
      setErrorMessage(error.response?.data?.message || 'Ocorreu um erro ao enviar. Por favor, tente novamente.')
    }
  }

  const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"

  if (status === 'success') {
    return (
      <div className="text-center py-12">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <CheckCircle className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2">Cadastro recebido!</h3>
        <p className="text-gray-600 mb-6">Nossa equipe entrará em contato em breve para dar continuidade ao seu processo de parceria.</p>
        <button onClick={() => setStatus('idle')} className="text-primary-600 font-medium hover:text-primary-700">
          Enviar outro cadastro
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit}>
      <h3 className="text-xl font-bold text-gray-900 mb-6">Cadastre-se como Parceiro</h3>

      {status === 'error' && (
        <div className="flex items-center gap-2 p-4 bg-red-50 border border-red-200 rounded-lg mb-6">
          <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
          <span className="text-red-700 text-sm">{errorMessage}</span>
        </div>
      )}

      <div className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome completo *</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className={inputClass} placeholder="Seu nome" />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail *</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className={inputClass} placeholder="seu@email.com" />
        </div>

        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone/WhatsApp *</label>
          <input type="tel" id="phone" name="phone" value={formData.phone} onChange={handlePhoneChange} required className={inputClass} placeholder="(11) 99999-9999" />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tipo de cadastro *</label>
          <div className="grid grid-cols-2 gap-3">
            <button type="button" onClick={() => setFormData(prev => ({ ...prev, personType: 'pf' }))}
              className={`flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all ${formData.personType === 'pf' ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-gray-200 hover:border-gray-300 text-gray-600'}`}>
              <User className="w-5 h-5" /><span className="font-medium">Pessoa Física</span>
            </button>
            <button type="button" onClick={() => setFormData(prev => ({ ...prev, personType: 'pj' }))}
              className={`flex items-center justify-center gap-2 p-4 rounded-lg border-2 transition-all ${formData.personType === 'pj' ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-gray-200 hover:border-gray-300 text-gray-600'}`}>
              <Building2 className="w-5 h-5" /><span className="font-medium">Pessoa Jurídica</span>
            </button>
          </div>
        </div>

        {formData.personType === 'pj' && (
          <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-900 flex items-center gap-2"><Building2 className="w-4 h-4" /> Dados da Empresa</h4>
            <div>
              <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">Nome da Empresa *</label>
              <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} required={formData.personType === 'pj'} className={inputClass} placeholder="Nome da sua empresa" />
            </div>
            <div>
              <label htmlFor="cnpj" className="block text-sm font-medium text-gray-700 mb-1">CNPJ *</label>
              <input type="text" id="cnpj" name="cnpj" value={formData.cnpj} onChange={handleCNPJChange} required={formData.personType === 'pj'} maxLength={18} className={inputClass} placeholder="00.000.000/0000-00" />
            </div>
            <div>
              <label htmlFor="position" className="block text-sm font-medium text-gray-700 mb-1">Seu cargo na empresa *</label>
              <input type="text" id="position" name="position" value={formData.position} onChange={handleChange} required={formData.personType === 'pj'} className={inputClass} placeholder="Ex: Diretor, Gerente, Sócio..." />
            </div>
            <div>
              <label htmlFor="website" className="block text-sm font-medium text-gray-700 mb-1">Site <span className="text-gray-400">(opcional)</span></label>
              <input type="url" id="website" name="website" value={formData.website} onChange={handleChange} className={inputClass} placeholder="https://www.suaempresa.com.br" />
            </div>
            <div>
              <label htmlFor="instagram" className="block text-sm font-medium text-gray-700 mb-1">Instagram da empresa <span className="text-gray-400">(opcional)</span></label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">@</span>
                <input type="text" id="instagram" name="instagram" value={formData.instagram} onChange={(e) => handleInstagramChange(e, 'instagram')} className={`${inputClass} pl-8`} placeholder="suaempresa" />
              </div>
            </div>
          </div>
        )}

        {formData.personType === 'pf' && (
          <div className="space-y-4 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <h4 className="font-medium text-gray-900 flex items-center gap-2"><User className="w-4 h-4" /> Dados Pessoais</h4>
            <div>
              <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-1">Tipo de atuação/negócio *</label>
              <input type="text" id="businessType" name="businessType" value={formData.businessType} onChange={handleChange} required={formData.personType === 'pf'} className={inputClass} placeholder="Ex: Consultor, Freelancer, Agência..." />
            </div>
            <div>
              <label htmlFor="cpf" className="block text-sm font-medium text-gray-700 mb-1">CPF *</label>
              <input type="text" id="cpf" name="cpf" value={formData.cpf} onChange={handleCPFChange} required={formData.personType === 'pf'} maxLength={14} className={inputClass} placeholder="000.000.000-00" />
            </div>
            <div>
              <label htmlFor="instagramPf" className="block text-sm font-medium text-gray-700 mb-1">Instagram <span className="text-gray-400">(opcional)</span></label>
              <div className="relative">
                <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400">@</span>
                <input type="text" id="instagramPf" name="instagramPf" value={formData.instagramPf} onChange={(e) => handleInstagramChange(e, 'instagramPf')} className={`${inputClass} pl-8`} placeholder="seuperfil" />
              </div>
            </div>
          </div>
        )}

        {/* Seção: Sobre seu negócio */}
        {formData.personType && (
          <div className="space-y-4 p-4 bg-blue-50 rounded-lg border border-blue-200">
            <h4 className="font-medium text-gray-900 flex items-center gap-2">
              <TrendingUp className="w-4 h-4" /> Sobre seu negócio
            </h4>

            {/* Nicho de atuação */}
            <div>
              <label htmlFor="niche" className="block text-sm font-medium text-gray-700 mb-1">Qual é o nicho em que você trabalha? *</label>
              <input type="text" id="niche" name="niche" value={formData.niche} onChange={handleChange} required className={inputClass} placeholder="Ex: Marketing Digital, Tecnologia, Saúde, Educação..." />
            </div>

            {/* Já é parceiro de alguma plataforma SAAS? */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Já é parceiro de alguma plataforma SAAS? *</label>
              <div className="grid grid-cols-2 gap-3">
                <button type="button" onClick={() => setFormData(prev => ({ ...prev, isSaasPartner: 'sim' }))}
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${formData.isSaasPartner === 'sim' ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-gray-200 hover:border-gray-300 text-gray-600'}`}>
                  <span className="font-medium">Sim</span>
                </button>
                <button type="button" onClick={() => setFormData(prev => ({ ...prev, isSaasPartner: 'nao', saasPartnerDetails: '' }))}
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${formData.isSaasPartner === 'nao' ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-gray-200 hover:border-gray-300 text-gray-600'}`}>
                  <span className="font-medium">Não</span>
                </button>
              </div>
            </div>

            {formData.isSaasPartner === 'sim' && (
              <div>
                <label htmlFor="saasPartnerDetails" className="block text-sm font-medium text-gray-700 mb-1">Quais plataformas? *</label>
                <input type="text" id="saasPartnerDetails" name="saasPartnerDetails" value={formData.saasPartnerDetails} onChange={handleChange} required className={inputClass} placeholder="Ex: HubSpot, RD Station, ActiveCampaign..." />
              </div>
            )}

            {/* Trabalha sozinho ou tem equipe? */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Trabalha sozinho ou tem equipe? *</label>
              <div className="grid grid-cols-2 gap-3">
                <button type="button" onClick={() => setFormData(prev => ({ ...prev, hasTeam: 'nao', teamSize: '' }))}
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${formData.hasTeam === 'nao' ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-gray-200 hover:border-gray-300 text-gray-600'}`}>
                  <span className="font-medium">Trabalho sozinho</span>
                </button>
                <button type="button" onClick={() => setFormData(prev => ({ ...prev, hasTeam: 'sim' }))}
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${formData.hasTeam === 'sim' ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-gray-200 hover:border-gray-300 text-gray-600'}`}>
                  <span className="font-medium">Tenho equipe</span>
                </button>
              </div>
            </div>

            {formData.hasTeam === 'sim' && (
              <div>
                <label htmlFor="teamSize" className="block text-sm font-medium text-gray-700 mb-1">Quantos colaboradores? *</label>
                <input type="number" id="teamSize" name="teamSize" value={formData.teamSize} onChange={handleChange} required min="1" className={inputClass} placeholder="Ex: 5" />
              </div>
            )}

            {/* Já tem clientes ativos? */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Já tem clientes ativos? *</label>
              <div className="grid grid-cols-2 gap-3">
                <button type="button" onClick={() => setFormData(prev => ({ ...prev, hasActiveClients: 'sim' }))}
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${formData.hasActiveClients === 'sim' ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-gray-200 hover:border-gray-300 text-gray-600'}`}>
                  <span className="font-medium">Sim</span>
                </button>
                <button type="button" onClick={() => setFormData(prev => ({ ...prev, hasActiveClients: 'nao', clientCount: '' }))}
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${formData.hasActiveClients === 'nao' ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-gray-200 hover:border-gray-300 text-gray-600'}`}>
                  <span className="font-medium">Não</span>
                </button>
              </div>
            </div>

            {formData.hasActiveClients === 'sim' && (
              <div>
                <label htmlFor="clientCount" className="block text-sm font-medium text-gray-700 mb-1">Quantos clientes ativos? *</label>
                <input type="number" id="clientCount" name="clientCount" value={formData.clientCount} onChange={handleChange} required min="1" className={inputClass} placeholder="Ex: 10" />
              </div>
            )}

            {/* É influenciador digital? */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">É influenciador digital? *</label>
              <div className="grid grid-cols-2 gap-3">
                <button type="button" onClick={() => setFormData(prev => ({ ...prev, isInfluencer: 'sim' }))}
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${formData.isInfluencer === 'sim' ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-gray-200 hover:border-gray-300 text-gray-600'}`}>
                  <span className="font-medium">Sim</span>
                </button>
                <button type="button" onClick={() => setFormData(prev => ({ ...prev, isInfluencer: 'nao', followerCount: '' }))}
                  className={`flex items-center justify-center gap-2 p-3 rounded-lg border-2 transition-all ${formData.isInfluencer === 'nao' ? 'border-primary-500 bg-primary-50 text-primary-700' : 'border-gray-200 hover:border-gray-300 text-gray-600'}`}>
                  <span className="font-medium">Não</span>
                </button>
              </div>
            </div>

            {formData.isInfluencer === 'sim' && (
              <div>
                <label htmlFor="followerCount" className="block text-sm font-medium text-gray-700 mb-1">Quantos seguidores? *</label>
                <input type="number" id="followerCount" name="followerCount" value={formData.followerCount} onChange={handleChange} required min="1" className={inputClass} placeholder="Ex: 50000" />
              </div>
            )}
          </div>
        )}

        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem <span className="text-gray-400">(opcional)</span></label>
          <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={3} className={`${inputClass} resize-none`} placeholder="Conte-nos mais sobre seu interesse..." />
        </div>

        <button type="submit" disabled={
          status === 'loading' ||
          !formData.personType ||
          !formData.niche ||
          !formData.isSaasPartner ||
          !formData.hasTeam ||
          !formData.hasActiveClients ||
          !formData.isInfluencer ||
          (formData.isSaasPartner === 'sim' && !formData.saasPartnerDetails) ||
          (formData.hasTeam === 'sim' && !formData.teamSize) ||
          (formData.hasActiveClients === 'sim' && !formData.clientCount) ||
          (formData.isInfluencer === 'sim' && !formData.followerCount)
        }
          className="w-full bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold py-4 px-6 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
          {status === 'loading' ? (<><Loader2 className="w-5 h-5 animate-spin" /> Enviando...</>) : (<>Quero ser Parceiro <Send className="w-5 h-5" /></>)}
        </button>

        <p className="text-xs text-gray-500 text-center">Ao enviar, você concorda com nossa política de privacidade.</p>
      </div>
    </form>
  )
}

// Componente FAQ Accordion
function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <div className="space-y-4">
      {faqs.map((faq, index) => (
        <div key={index} className={`bg-gray-50 rounded-xl overflow-hidden transition-all duration-300 ${openIndex === index ? 'ring-2 ring-primary-500' : ''}`}>
          <button onClick={() => setOpenIndex(openIndex === index ? null : index)} className="w-full flex items-center justify-between p-6 text-left">
            <div className="flex items-center gap-4">
              <div className={`p-2 rounded-lg transition-colors ${openIndex === index ? 'bg-primary-500' : 'bg-primary-100'}`}>
                <HelpCircle className={`w-5 h-5 ${openIndex === index ? 'text-white' : 'text-primary-600'}`} />
              </div>
              <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
            </div>
            <ChevronDown className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} />
          </button>
          <div className={`overflow-hidden transition-all duration-300 ${openIndex === index ? 'max-h-96' : 'max-h-0'}`}>
            <div className="px-6 pb-6 pt-0">
              <div className="pl-14 pr-4">
                <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

// Página Principal
export default function WhitelabelPartner() {
  const scrollToSection = (id) => {
    document.querySelector(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
            <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center">
              <span className="text-white text-lg font-bold">MV</span>
            </div>
            <div>
              <h1 className="text-lg font-bold text-gray-900">MV$</h1>
              <p className="text-xs text-gray-500">Máquina de Vender Muito</p>
            </div>
          </Link>
          <button onClick={() => scrollToSection('#contato')} className="bg-gradient-to-r from-primary-600 to-accent-600 hover:from-primary-700 hover:to-accent-700 text-white font-semibold px-6 py-2.5 rounded-lg transition-all">
            Quero ser Parceiro
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-amber-500 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-6">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                <span className="text-sm font-medium">Programa de Parceiros - Máquina de Vender Muito</span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                E se você pudesse <span className="text-amber-400">faturar milhões</span> com a Máquina de Vender Muito?
              </h1>

              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl">
                Sim, talvez você possa fazer parte do programa de parceiros da <strong className="text-amber-400">Máquina de Vender Muito</strong> e construir um negócio milionário. Comercialize com sua própria marca e ganhe <strong className="text-amber-400">comissões recorrentes de até 45%</strong>. Zero investimento em tecnologia.
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-sm">Sua marca na plataforma</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <TrendingUp className="w-5 h-5 text-amber-400" />
                  <span className="text-sm">Até 45% de comissão</span>
                </div>
                <div className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Zap className="w-5 h-5 text-amber-400" />
                  <span className="text-sm">Tecnologia pronta</span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button onClick={() => scrollToSection('#contato')} className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-lg transition-all flex items-center justify-center gap-2">
                  Quero ser Parceiro <ArrowRight className="w-5 h-5" />
                </button>
                <button onClick={() => scrollToSection('#como-funciona')} className="border-2 border-white/30 hover:border-white/60 text-white font-semibold px-8 py-4 rounded-lg transition-all">
                  Como Funciona
                </button>
              </div>
            </div>

            <div className="hidden lg:block">
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-amber-400 mb-2">45%</div>
                    <div className="text-white/80 text-sm">Comissão Máxima</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-amber-400 mb-2">R$990</div>
                    <div className="text-white/80 text-sm">Valor da Licença</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-amber-400 mb-2">0%</div>
                    <div className="text-white/80 text-sm">Investimento Inicial</div>
                  </div>
                  <div className="text-center p-4">
                    <div className="text-4xl font-bold text-amber-400 mb-2">100%</div>
                    <div className="text-white/80 text-sm">Sua Marca</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* O que é White Label */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
                Entenda o modelo
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                O que é <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">White Label</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                White Label é um modelo de negócio onde você comercializa uma plataforma completa como se fosse sua. Toda a tecnologia é desenvolvida e mantida por nós, mas seus clientes veem apenas a <strong>sua marca</strong>.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Você não precisa investir em desenvolvimento, infraestrutura ou equipe técnica. Foque apenas em <strong>vender e atender seus clientes</strong>, enquanto cuidamos de toda a parte tecnológica.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <Tag className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Sua Marca em Destaque</h4>
                    <p className="text-gray-600">Logo, cores e domínio personalizados. Seus clientes não sabem da nossa existência.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <Layers className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Tecnologia Completa</h4>
                    <p className="text-gray-600">Plataforma robusta com todas as funcionalidades prontas para uso imediato.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                  <div className="p-2 bg-primary-100 rounded-lg">
                    <Building2 className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Seu Negócio, Suas Regras</h4>
                    <p className="text-gray-600">Defina sua estratégia de preços e atendimento. Você é dono do relacionamento.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-2xl p-8 md:p-12">
              <div className="space-y-6">
                <div className="bg-white rounded-xl p-6 shadow-lg border border-primary-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-primary-600 rounded-xl flex items-center justify-center">
                      <Layers className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">MV$ Soluções</div>
                      <div className="text-sm text-gray-500">Desenvolvimento & Infraestrutura</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">Tecnologia</span>
                    <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">Manutenção</span>
                    <span className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-xs font-medium">Atualizações</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-primary-400 rotate-90" />
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-amber-200">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-amber-500 rounded-xl flex items-center justify-center">
                      <Building2 className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Você (Parceiro)</div>
                      <div className="text-sm text-gray-500">Comercialização & Atendimento</div>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-medium">Sua Marca</span>
                    <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-medium">Vendas</span>
                    <span className="px-3 py-1 bg-amber-50 text-amber-700 rounded-full text-xs font-medium">Suporte N1</span>
                  </div>
                </div>

                <div className="flex justify-center">
                  <ArrowRight className="w-8 h-8 text-amber-400 rotate-90" />
                </div>

                <div className="bg-white rounded-xl p-6 shadow-lg border border-gray-200">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gray-600 rounded-xl flex items-center justify-center">
                      <Users className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-bold text-gray-900">Seus Clientes</div>
                      <div className="text-sm text-gray-500">Veem apenas a sua marca</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Vantagens
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Por que se tornar um <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Parceiro White Label</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Benefícios exclusivos que fazem do nosso programa uma oportunidade única de negócio.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-gray-100">
                <div className={`${benefit.color} w-14 h-14 rounded-xl flex items-center justify-center mb-5`}>
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quem pode participar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <span className="inline-block px-4 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium mb-4">
                Requisitos
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Quem pode <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">participar</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                O Programa de Parceiros é <strong>restrito a profissionais</strong> que já prestam serviços para outras empresas e possuem potencial real de revenda da plataforma.
              </p>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Buscamos parceiros comprometidos em construir um negócio sólido e de longo prazo conosco.
              </p>

              <div className="space-y-4">
                <div className="flex items-start gap-4 p-4 bg-green-50 rounded-xl border border-green-200">
                  <div className="p-2 bg-green-100 rounded-lg">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Perfil Ideal</h4>
                    <p className="text-gray-600">Agências de marketing, consultorias, freelancers e profissionais que atendem múltiplas empresas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4 p-4 bg-red-50 rounded-xl border border-red-200">
                  <div className="p-2 bg-red-100 rounded-lg">
                    <AlertCircle className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Não é para você se...</h4>
                    <p className="text-gray-600">Você representa uma rede de empresas ou deseja adquirir uma licença única para uso próprio. Nesse caso, adquira a licença com um de nossos parceiros ou diretamente conosco em <a href="https://maquina.devendermuito.com" target="_blank" rel="noopener noreferrer" className="text-primary-600 font-medium hover:underline">maquina.devendermuito.com</a>.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-8 md:p-10 text-white">
              <h3 className="text-2xl font-bold mb-6">Como funciona a aprovação?</h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 font-bold">1</div>
                  <div>
                    <h4 className="font-semibold mb-1">Preencha o formulário</h4>
                    <p className="text-white/70 text-sm">Envie suas informações através do formulário de interesse nesta página.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 font-bold">2</div>
                  <div>
                    <h4 className="font-semibold mb-1">Agende uma call</h4>
                    <p className="text-white/70 text-sm">Um especialista do nosso time entrará em contato para uma conversa inicial.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center flex-shrink-0 font-bold">3</div>
                  <div>
                    <h4 className="font-semibold mb-1">Apresente seu negócio</h4>
                    <p className="text-white/70 text-sm">Mostre como você pretende comercializar a plataforma e seu potencial de vendas.</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Aprovação</h4>
                    <p className="text-white/70 text-sm">Após análise, você receberá a resposta sobre sua participação no programa.</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 p-4 bg-white/10 rounded-xl border border-white/20">
                <div className="flex items-center gap-3">
                  <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0" />
                  <p className="text-sm text-white/80">
                    <strong className="text-amber-400">Vagas limitadas:</strong> Não temos obrigação de aceitar novos parceiros. A aprovação depende da análise do perfil e potencial apresentado.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Passo a passo
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Como <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">funciona</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Em apenas 4 passos simples você começa a ganhar dinheiro como nosso parceiro.
            </p>
          </div>

          <div className="relative">
            <div className="hidden lg:block absolute top-24 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-blue-500 via-purple-500 via-orange-500 to-green-500"></div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {steps.map((step, index) => (
                <div key={index} className="relative">
                  <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow h-full border border-gray-100">
                    <div className="relative z-10 mb-6">
                      <div className={`${step.color} w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg`}>
                        <step.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-gray-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                        {step.number}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Níveis de Comissão */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-amber-100 text-amber-700 rounded-full text-sm font-medium mb-4">
              Comissões
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Quanto você pode <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">ganhar</span>?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Suas comissões crescem conforme você traz mais clientes. O valor base da licença é <strong>R$ 990,00/mês</strong>.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {levels.map((level, index) => (
              <div key={index} className={`relative rounded-2xl p-8 ${level.bgColor} border-2 ${level.borderColor} hover:shadow-xl transition-shadow ${level.popular ? 'ring-2 ring-purple-500 ring-offset-2' : ''}`}>
                {level.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-gradient-to-r from-purple-500 to-purple-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                      Mais Popular
                    </span>
                  </div>
                )}

                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${level.color} flex items-center justify-center mb-6`}>
                  <level.icon className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-900 mb-2">{level.name}</h3>
                <p className="text-gray-600 mb-6"><strong>{level.range}</strong> indicações ativas</p>

                <div className="mb-6">
                  <div className="text-5xl font-bold text-gray-900 mb-1">{level.commission}</div>
                  <div className="text-gray-500">de comissão por licença</div>
                  <div className="mt-2 text-lg font-semibold text-amber-600">{level.earnings}/mês por cliente</div>
                </div>

                <ul className="space-y-3">
                  {level.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-r from-primary-600 to-primary-800 rounded-2xl p-8 md:p-12 text-white">
            <div className="max-w-4xl mx-auto text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Exemplos de ganhos no nível Avançado</h3>
              <p className="text-white/80 mb-8">Veja quanto você pode ganhar com 45% de comissão sobre cada licença de R$ 990,00/mês:</p>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6">
                  <div className="text-sm text-white/60 mb-2">70 clientes ativos</div>
                  <div className="text-3xl md:text-4xl font-bold text-amber-400">R$ 31.185,00</div>
                  <div className="text-white/70 mt-1">por mês</div>
                  <div className="mt-3 pt-3 border-t border-white/20">
                    <div className="text-2xl font-bold text-green-400">R$ 374.220,00</div>
                    <div className="text-white/70 text-sm">por ano</div>
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 ring-2 ring-amber-400">
                  <div className="text-sm text-white/60 mb-2">200 clientes ativos</div>
                  <div className="text-3xl md:text-4xl font-bold text-amber-400">R$ 89.100,00</div>
                  <div className="text-white/70 mt-1">por mês</div>
                  <div className="mt-3 pt-3 border-t border-white/20">
                    <div className="text-2xl font-bold text-green-400">R$ 1.069.200,00</div>
                    <div className="text-white/70 text-sm">por ano</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8">
            * Considera-se indicação ativa o cliente com contrato vigente e pagamentos em dia.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-4">
              Dúvidas frequentes
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Perguntas <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">Frequentes</span>
            </h2>
            <p className="text-lg text-gray-600">
              Tire suas principais dúvidas sobre o Programa White Label Partner.
            </p>
          </div>

          <FAQSection />
        </div>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="py-20 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <div className="text-white lg:sticky lg:top-24">
              <span className="inline-block px-4 py-1 bg-white/10 backdrop-blur-sm rounded-full text-sm font-medium mb-4">
                Faça parte do time
              </span>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Pronto para <span className="text-amber-400">começar</span>?
              </h2>
              <p className="text-lg text-white/80 mb-8">
                Preencha o formulário ao lado e nossa equipe entrará em contato para alinhar os próximos passos da sua parceria.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-white/90">Comissões recorrentes de até 45%</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-white/90">Sua marca na plataforma</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-white/90">Zero investimento inicial</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-amber-400" />
                  <span className="text-white/90">Suporte técnico incluso</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo e Desenvolvedor */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-accent-600 rounded-xl flex items-center justify-center">
                  <span className="text-white text-lg font-bold">MV</span>
                </div>
                <div>
                  <h1 className="text-lg font-bold">MV$</h1>
                  <p className="text-xs text-gray-400">Máquina de Vender Muito</p>
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Desenvolvido por WG Soluções Tecnológicas LTDA -{' '}
                <a href="https://osociohoteleiro.com.br" target="_blank" rel="noopener noreferrer" className="text-amber-400 hover:text-amber-300 transition-colors">
                  O Sócio Hoteleiro
                </a>
              </p>
              <p className="text-sm text-gray-500 mt-2">CNPJ: 31.128.328/0001-11</p>
              <p className="text-sm text-gray-500">Calçada das Margaridas, 163</p>
              <p className="text-sm text-gray-500">Centro Comercial Alphaville - Barueri/SP</p>
            </div>

            {/* Parceiros */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Parceiros</h3>
              <div className="space-y-3">
                <a href="mailto:parceria@devendermuito.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                  <Send className="w-4 h-4" />
                  <span>parceria@devendermuito.com</span>
                </a>
                <a href="https://wa.me/5511910373532" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-gray-400 hover:text-green-400 transition-colors">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                  <span>(11) 91037-3532</span>
                </a>
              </div>
            </div>

            {/* Links */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <div className="space-y-3">
                <Link to="/" className="block text-gray-400 hover:text-white transition-colors">Voltar ao site</Link>
                <Link to="/terms-of-service" className="block text-gray-400 hover:text-white transition-colors">Termos de Serviço</Link>
                <Link to="/privacy-policy" className="block text-gray-400 hover:text-white transition-colors">Política de Privacidade</Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-500">
            <p>© 2024 MV$ - Máquina de Vender Muito. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
