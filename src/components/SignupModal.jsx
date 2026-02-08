import { useState, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { X, Building2, Store, ArrowRight, Sparkles, ArrowLeft, Eye, EyeOff, Check, Loader2 } from 'lucide-react'
import PhoneInput from './PhoneInput'

// URL da API - usa produção se não for localhost
const API_URL = window.location.hostname === 'localhost'
  ? 'http://localhost:3001/api'
  : 'https://api.osociohoteleiro.com.br/api'

// Função para calcular força da senha
const calculatePasswordStrength = (password) => {
  if (!password) {
    return { score: 0, label: '', color: '', bgColor: '', suggestions: [] }
  }

  let score = 0
  const suggestions = []

  // Comprimento
  if (password.length >= 8) score += 1
  else suggestions.push('Use pelo menos 8 caracteres')

  if (password.length >= 12) score += 1

  // Letras minúsculas
  if (/[a-z]/.test(password)) score += 1
  else suggestions.push('Adicione letras minúsculas')

  // Letras maiúsculas
  if (/[A-Z]/.test(password)) score += 1
  else suggestions.push('Adicione letras maiúsculas')

  // Números
  if (/[0-9]/.test(password)) score += 1
  else suggestions.push('Adicione números')

  // Caracteres especiais
  if (/[^A-Za-z0-9]/.test(password)) score += 1
  else suggestions.push('Adicione caracteres especiais (@, #, $, etc.)')

  // Determinar label e cor
  let label = ''
  let color = ''
  let bgColor = ''

  if (score <= 2) {
    label = 'Muito fraca'
    color = 'text-red-600'
    bgColor = 'bg-red-500'
  } else if (score <= 3) {
    label = 'Fraca'
    color = 'text-orange-600'
    bgColor = 'bg-orange-500'
  } else if (score <= 4) {
    label = 'Média'
    color = 'text-yellow-600'
    bgColor = 'bg-yellow-500'
  } else if (score <= 5) {
    label = 'Boa'
    color = 'text-lime-600'
    bgColor = 'bg-lime-500'
  } else {
    label = 'Excelente'
    color = 'text-green-600'
    bgColor = 'bg-green-500'
  }

  return { score, label, color, bgColor, suggestions }
}

export default function SignupModal({ isOpen, onClose, onOpenLogin }) {
  const [step, setStep] = useState('select') // 'select', 'form', 'success'
  const [businessType, setBusinessType] = useState(null) // 'hotel' ou 'business'
  const [hoveredOption, setHoveredOption] = useState(null)
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [passwordStrength, setPasswordStrength] = useState({ score: 0, label: '', color: '', bgColor: '', suggestions: [] })

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    businessName: '',
  })

  // useCallback deve ser declarado ANTES do early return para evitar violação das regras de hooks
  const handlePhoneChange = useCallback((value) => {
    setFormData(prev => ({ ...prev, phone: value }))
    setError(null)
  }, [])

  if (!isOpen) return null

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose()
    }
  }

  const handleClose = () => {
    setStep('select')
    setBusinessType(null)
    setFormData({ name: '', email: '', password: '', confirmPassword: '', phone: '', businessName: '' })
    setError(null)
    setPasswordStrength({ score: 0, label: '', color: '', bgColor: '', suggestions: [] })
    onClose()
  }

  const handleSwitchToLogin = () => {
    handleClose()
    onOpenLogin?.()
  }

  const handleSelectType = (type) => {
    if (type === 'hotel') {
      // Hoteleiros vão para o sistema específico
      window.location.href = 'https://ia.osociohoteleiro.com.br/login'
      return
    }
    setBusinessType(type)
    setStep('form')
  }

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    setError(null)

    // Calcular força da senha quando o campo de senha for alterado
    if (name === 'password') {
      const strength = calculatePasswordStrength(value)
      setPasswordStrength(strength)
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Validação de força da senha (mínimo: Média = score 4)
    if (passwordStrength.score < 4) {
      setError('A senha deve ter no mínimo força "Média". Siga as sugestões abaixo do campo de senha.')
      setLoading(false)
      return
    }

    // Validação de confirmação de senha
    if (formData.password !== formData.confirmPassword) {
      setError('As senhas não coincidem')
      setLoading(false)
      return
    }

    try {
      const response = await fetch(`${API_URL}/auth/register-business`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          password: formData.password,
          phone: formData.phone,
          businessName: formData.businessName,
          businessType: businessType,
          source: 'landing-page',
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || data.message || 'Erro ao criar conta')
      }

      setStep('success')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }

  const isFormValid = formData.name &&
    formData.email &&
    formData.password &&
    formData.confirmPassword &&
    passwordStrength.score >= 4 &&
    formData.password === formData.confirmPassword

  const passwordsMatch = formData.confirmPassword && formData.password === formData.confirmPassword
  const passwordsDontMatch = formData.confirmPassword && formData.password !== formData.confirmPassword

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl overflow-hidden animate-modal-enter max-h-[90vh] flex flex-col">
        {/* Background decoration - fixed */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-violet-200/50 to-fuchsia-200/50 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-primary-200/50 to-accent-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

        {/* Close button - fixed */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
        >
          <X className="w-5 h-5 text-gray-600" />
        </button>

        {/* Scrollable content */}
        <div className="overflow-y-auto flex-1 scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: '#d1d5db transparent'
          }}
        >

        {/* Step: Select Business Type */}
        {step === 'select' && (
          <div className="relative p-8 md:p-12">
            <div className="text-center mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-violet-100 to-fuchsia-100 rounded-full mb-4">
                <Sparkles className="w-4 h-4 text-violet-600" />
                <span className="text-sm font-medium text-violet-700">Comece sua jornada</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">
                Qual é o seu{' '}
                <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-fuchsia-500 bg-clip-text text-transparent">
                  tipo de negócio
                </span>
                ?
              </h2>
              <p className="text-gray-600 max-w-md mx-auto">
                Selecione a opção que melhor descreve você para personalizarmos sua experiência
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Option 1: Hoteleiro */}
              <button
                onClick={() => handleSelectType('hotel')}
                className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  hoveredOption === 'hotel'
                    ? 'border-violet-500 bg-gradient-to-br from-violet-50 to-fuchsia-50 shadow-lg shadow-violet-200/50 scale-[1.02]'
                    : 'border-gray-200 hover:border-violet-300 bg-white'
                }`}
                onMouseEnter={() => setHoveredOption('hotel')}
                onMouseLeave={() => setHoveredOption(null)}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  hoveredOption === 'hotel'
                    ? 'bg-gradient-to-br from-violet-500 to-fuchsia-500 shadow-lg'
                    : 'bg-violet-100'
                }`}>
                  <Building2 className={`w-8 h-8 transition-colors ${
                    hoveredOption === 'hotel' ? 'text-white' : 'text-violet-600'
                  }`} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  Sou Hoteleiro
                  <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                    hoveredOption === 'hotel' ? 'translate-x-1 text-violet-600' : 'text-gray-400'
                  }`} />
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  Tenho um hotel, pousada ou hospedagem e quero automatizar meu atendimento com IA
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-violet-100 text-violet-700 text-xs font-medium rounded-full">Hotéis</span>
                  <span className="px-3 py-1 bg-fuchsia-100 text-fuchsia-700 text-xs font-medium rounded-full">Pousadas</span>
                  <span className="px-3 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">Hostels</span>
                </div>

                {hoveredOption === 'hotel' && (
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-violet-500 ring-offset-2 pointer-events-none" />
                )}
              </button>

              {/* Option 2: Outros negócios */}
              <button
                onClick={() => handleSelectType('business')}
                className={`group relative p-6 rounded-2xl border-2 transition-all duration-300 text-left ${
                  hoveredOption === 'business'
                    ? 'border-primary-500 bg-gradient-to-br from-primary-50 to-accent-50 shadow-lg shadow-primary-200/50 scale-[1.02]'
                    : 'border-gray-200 hover:border-primary-300 bg-white'
                }`}
                onMouseEnter={() => setHoveredOption('business')}
                onMouseLeave={() => setHoveredOption(null)}
              >
                <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-4 transition-all duration-300 ${
                  hoveredOption === 'business'
                    ? 'bg-gradient-to-br from-primary-500 to-accent-500 shadow-lg'
                    : 'bg-primary-100'
                }`}>
                  <Store className={`w-8 h-8 transition-colors ${
                    hoveredOption === 'business' ? 'text-white' : 'text-primary-600'
                  }`} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 flex items-center gap-2">
                  Cadastre seu Negócio
                  <ArrowRight className={`w-5 h-5 transition-all duration-300 ${
                    hoveredOption === 'business' ? 'translate-x-1 text-primary-600' : 'text-gray-400'
                  }`} />
                </h3>

                <p className="text-gray-600 text-sm mb-4">
                  Tenho outro tipo de negócio e quero usar IA para vender mais e atender melhor
                </p>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-primary-100 text-primary-700 text-xs font-medium rounded-full">Lojas</span>
                  <span className="px-3 py-1 bg-accent-100 text-accent-700 text-xs font-medium rounded-full">Serviços</span>
                  <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-medium rounded-full">E-commerce</span>
                </div>

                {hoveredOption === 'business' && (
                  <div className="absolute inset-0 rounded-2xl ring-2 ring-primary-500 ring-offset-2 pointer-events-none" />
                )}
              </button>
            </div>

            <p className="text-center text-sm text-gray-500 mt-8">
              Já tem uma conta?{' '}
              <button onClick={handleSwitchToLogin} className="text-primary-600 font-semibold hover:underline">
                Fazer login
              </button>
            </p>
          </div>
        )}

        {/* Step: Registration Form */}
        {step === 'form' && (
          <div className="relative p-8 md:p-12">
            {/* Back button */}
            <button
              onClick={() => setStep('select')}
              className="absolute top-4 left-4 z-10 p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors flex items-center gap-1 text-sm text-gray-600"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <div className="text-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-accent-100 rounded-full mb-4">
                <Store className="w-4 h-4 text-primary-600" />
                <span className="text-sm font-medium text-primary-700">Cadastro de Negócio</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-2">
                Crie sua conta{' '}
                <span className="bg-gradient-to-r from-primary-600 to-accent-600 bg-clip-text text-transparent">
                  gratuita
                </span>
              </h2>
              <p className="text-gray-600">
                Comece a transformar seu negócio em uma máquina de vendas
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
                  {error}
                </div>
              )}

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Seu nome *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="João Silva"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    WhatsApp
                  </label>
                  <PhoneInput
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="(11) 99999-9999"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Nome do negócio
                </label>
                <input
                  type="text"
                  name="businessName"
                  value={formData.businessName}
                  onChange={handleInputChange}
                  placeholder="Minha Empresa Ltda"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  E-mail *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="seu@email.com"
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all"
                  required
                />
              </div>

              {/* Campo de Senha com indicador de força */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Senha *
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200 outline-none transition-all pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {/* Indicador de força da senha */}
                {formData.password && (
                  <div className="mt-2 space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="flex-1 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full ${passwordStrength.bgColor} transition-all duration-300`}
                          style={{ width: `${(passwordStrength.score / 6) * 100}%` }}
                        />
                      </div>
                      <span className={`text-xs font-medium ${passwordStrength.color}`}>
                        {passwordStrength.label}
                      </span>
                    </div>
                    {passwordStrength.suggestions.length > 0 && (
                      <div className="text-xs text-gray-500 space-y-1">
                        {passwordStrength.suggestions.map((suggestion, index) => (
                          <div key={index} className="flex items-center gap-1">
                            <span className="text-gray-400">•</span>
                            {suggestion}
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Campo de Confirmação de Senha */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Confirmar Senha *
                </label>
                <div className="relative">
                  <input
                    type={showConfirmPassword ? 'text' : 'password'}
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    placeholder="••••••••"
                    className={`w-full px-4 py-3 rounded-xl border outline-none transition-all pr-12 ${
                      passwordsMatch
                        ? 'border-green-500 focus:border-green-500 focus:ring-2 focus:ring-green-200'
                        : passwordsDontMatch
                          ? 'border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-200'
                          : 'border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-200'
                    }`}
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-1 text-gray-400 hover:text-gray-600"
                  >
                    {showConfirmPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>

                {/* Validação visual de senhas iguais */}
                {formData.confirmPassword && (
                  <div className="mt-2">
                    {passwordsMatch ? (
                      <div className="flex items-center gap-2 text-xs text-green-600">
                        <Check className="w-4 h-4" />
                        <span>As senhas coincidem</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2 text-xs text-red-600">
                        <X className="w-4 h-4" />
                        <span>As senhas não coincidem</span>
                      </div>
                    )}
                  </div>
                )}
              </div>

              <button
                type="submit"
                disabled={!isFormValid || loading}
                className={`w-full py-4 rounded-xl font-semibold text-white transition-all flex items-center justify-center gap-2 ${
                  isFormValid && !loading
                    ? 'bg-gradient-to-r from-primary-600 to-accent-600 hover:shadow-lg hover:shadow-primary-200/50 hover:-translate-y-0.5'
                    : 'bg-gray-300 cursor-not-allowed'
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-5 h-5 animate-spin" />
                    Criando conta...
                  </>
                ) : (
                  <>
                    Criar conta gratuita
                    <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Mensagem de aviso sobre requisitos da senha */}
              {formData.password && passwordStrength.score < 4 && (
                <p className="text-xs text-red-600 text-center">
                  A senha deve ter força mínima "Média" para continuar
                </p>
              )}

              <p className="text-center text-xs text-gray-500 mt-4">
                Ao criar sua conta, você concorda com nossos{' '}
                <Link to="/terms-of-service" className="text-primary-600 hover:underline" target="_blank">Termos de Uso</Link>
                {' '}e{' '}
                <Link to="/privacy-policy" className="text-primary-600 hover:underline" target="_blank">Política de Privacidade</Link>
              </p>
            </form>
          </div>
        )}

        {/* Step: Success */}
        {step === 'success' && (
          <div className="relative p-8 md:p-12 text-center">
            <div className="w-20 h-20 mx-auto mb-6 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center shadow-lg shadow-green-200">
              <Check className="w-10 h-10 text-white" />
            </div>

            <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-3">
              Conta criada com{' '}
              <span className="bg-gradient-to-r from-green-500 to-emerald-500 bg-clip-text text-transparent">
                sucesso!
              </span>
            </h2>

            <p className="text-gray-600 mb-8 max-w-md mx-auto">
              Enviamos um e-mail de confirmação para <strong>{formData.email}</strong>.
              Verifique sua caixa de entrada para ativar sua conta.
            </p>

            <div className="space-y-3">
              <button
                onClick={handleSwitchToLogin}
                className="block w-full py-4 rounded-xl font-semibold text-white bg-gradient-to-r from-primary-600 to-accent-600 hover:shadow-lg hover:shadow-primary-200/50 transition-all"
              >
                Fazer login agora
              </button>
              <button
                onClick={handleClose}
                className="block w-full py-4 rounded-xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all"
              >
                Voltar para o site
              </button>
            </div>
          </div>
        )}
        </div>{/* End scrollable content */}
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
        /* Custom scrollbar styles */
        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }
        .overflow-y-auto::-webkit-scrollbar-track {
          background: transparent;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb {
          background-color: #d1d5db;
          border-radius: 3px;
        }
        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background-color: #9ca3af;
        }
      `}</style>
    </div>
  )
}
