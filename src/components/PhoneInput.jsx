import { useState, useEffect, useRef } from 'react'
import { ChevronDown, Check } from 'lucide-react'

// Lista de países com DDI e bandeiras
const COUNTRIES = [
  { code: 'BR', name: 'Brasil', flag: '🇧🇷', dialCode: '+55', format: '(##) #####-####', maxLength: 11 },
  { code: 'US', name: 'Estados Unidos', flag: '🇺🇸', dialCode: '+1', format: '(###) ###-####', maxLength: 10 },
  { code: 'PT', name: 'Portugal', flag: '🇵🇹', dialCode: '+351', format: '### ### ###', maxLength: 9 },
  { code: 'AR', name: 'Argentina', flag: '🇦🇷', dialCode: '+54', format: '## ####-####', maxLength: 10 },
  { code: 'MX', name: 'México', flag: '🇲🇽', dialCode: '+52', format: '### ### ####', maxLength: 10 },
  { code: 'ES', name: 'Espanha', flag: '🇪🇸', dialCode: '+34', format: '### ## ## ##', maxLength: 9 },
  { code: 'CO', name: 'Colômbia', flag: '🇨🇴', dialCode: '+57', format: '### ### ####', maxLength: 10 },
  { code: 'CL', name: 'Chile', flag: '🇨🇱', dialCode: '+56', format: '# #### ####', maxLength: 9 },
  { code: 'PE', name: 'Peru', flag: '🇵🇪', dialCode: '+51', format: '### ### ###', maxLength: 9 },
  { code: 'UY', name: 'Uruguai', flag: '🇺🇾', dialCode: '+598', format: '## ### ###', maxLength: 8 },
  { code: 'PY', name: 'Paraguai', flag: '🇵🇾', dialCode: '+595', format: '### ### ###', maxLength: 9 },
  { code: 'BO', name: 'Bolívia', flag: '🇧🇴', dialCode: '+591', format: '# ### ####', maxLength: 8 },
  { code: 'VE', name: 'Venezuela', flag: '🇻🇪', dialCode: '+58', format: '### ### ####', maxLength: 10 },
  { code: 'EC', name: 'Equador', flag: '🇪🇨', dialCode: '+593', format: '## ### ####', maxLength: 9 },
  { code: 'GB', name: 'Reino Unido', flag: '🇬🇧', dialCode: '+44', format: '#### ### ####', maxLength: 10 },
  { code: 'DE', name: 'Alemanha', flag: '🇩🇪', dialCode: '+49', format: '### ########', maxLength: 11 },
  { code: 'FR', name: 'França', flag: '🇫🇷', dialCode: '+33', format: '# ## ## ## ##', maxLength: 9 },
  { code: 'IT', name: 'Itália', flag: '🇮🇹', dialCode: '+39', format: '### ### ####', maxLength: 10 },
  { code: 'CA', name: 'Canadá', flag: '🇨🇦', dialCode: '+1', format: '(###) ###-####', maxLength: 10 },
]

export default function PhoneInput({ value = '', onChange, placeholder = 'Digite o número', className = '', error = '' }) {
  // Separar DDI e número do value inicial
  const parseInitialValue = (fullNumber) => {
    if (!fullNumber) return { countryCode: 'BR', phoneNumber: '' }

    const cleanNumber = fullNumber.replace(/\D/g, '')

    // Tentar encontrar o país pelo DDI
    for (const country of COUNTRIES) {
      const dialCodeClean = country.dialCode.replace('+', '')
      if (cleanNumber.startsWith(dialCodeClean)) {
        return {
          countryCode: country.code,
          phoneNumber: cleanNumber.substring(dialCodeClean.length)
        }
      }
    }

    // Se não encontrou, assumir Brasil
    return { countryCode: 'BR', phoneNumber: cleanNumber }
  }

  const initial = parseInitialValue(value)
  const [selectedCountry, setSelectedCountry] = useState(
    COUNTRIES.find(c => c.code === initial.countryCode) || COUNTRIES[0]
  )
  const [phoneNumber, setPhoneNumber] = useState(initial.phoneNumber)
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const dropdownRef = useRef(null)

  // Fechar dropdown ao clicar fora
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false)
        setSearchTerm('')
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Atualizar valor completo quando mudar país ou número
  useEffect(() => {
    const dialCodeClean = selectedCountry.dialCode.replace('+', '')
    const fullNumber = phoneNumber ? `${dialCodeClean}${phoneNumber}` : ''
    onChange(fullNumber)
  }, [selectedCountry, phoneNumber])

  const formatPhoneNumber = (number, format) => {
    if (!number) return ''

    const cleaned = number.replace(/\D/g, '')
    let formatted = ''
    let numberIndex = 0

    for (let i = 0; i < format.length && numberIndex < cleaned.length; i++) {
      if (format[i] === '#') {
        formatted += cleaned[numberIndex]
        numberIndex++
      } else {
        formatted += format[i]
      }
    }

    return formatted
  }

  const handlePhoneChange = (e) => {
    const input = e.target.value.replace(/\D/g, '')

    // Limitar ao tamanho máximo do país
    if (input.length <= selectedCountry.maxLength) {
      setPhoneNumber(input)
    }
  }

  const handleCountrySelect = (country) => {
    setSelectedCountry(country)
    setIsDropdownOpen(false)
    setSearchTerm('')
  }

  const filteredCountries = COUNTRIES.filter(country =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    country.dialCode.includes(searchTerm) ||
    country.code.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const formattedNumber = formatPhoneNumber(phoneNumber, selectedCountry.format)
  const isValid = phoneNumber.length === selectedCountry.maxLength

  return (
    <div className={className}>
      <div className="flex items-stretch">
        {/* Seletor de País */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className={`flex items-center gap-2 px-3 py-3 border rounded-l-xl hover:bg-gray-50 transition-colors h-full ${
              error ? 'border-red-300' : 'border-gray-300 border-r-0'
            }`}
            style={{ minWidth: '110px' }}
          >
            <span className="text-2xl">{selectedCountry.flag}</span>
            <span className="text-sm font-medium text-gray-700">{selectedCountry.dialCode}</span>
            <ChevronDown className={`w-4 h-4 text-gray-400 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
          </button>

          {/* Dropdown de Países */}
          {isDropdownOpen && (
            <div className="absolute z-50 mt-1 w-72 bg-white border border-gray-200 rounded-xl shadow-lg max-h-80 overflow-hidden">
              {/* Campo de busca */}
              <div className="p-2 border-b border-gray-200">
                <input
                  type="text"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Buscar país..."
                  className="w-full px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-200 focus:border-primary-500 text-sm outline-none"
                  autoFocus
                />
              </div>

              {/* Lista de países */}
              <div className="overflow-y-auto max-h-64">
                {filteredCountries.length > 0 ? (
                  filteredCountries.map((country) => (
                    <button
                      key={country.code}
                      type="button"
                      onClick={() => handleCountrySelect(country)}
                      className={`w-full flex items-center gap-3 px-4 py-2.5 hover:bg-primary-50 transition-colors text-left ${
                        selectedCountry.code === country.code ? 'bg-primary-100' : ''
                      }`}
                    >
                      <span className="text-2xl">{country.flag}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">{country.name}</div>
                        <div className="text-xs text-gray-500">{country.dialCode}</div>
                      </div>
                      {selectedCountry.code === country.code && (
                        <Check className="w-5 h-5 text-primary-600" />
                      )}
                    </button>
                  ))
                ) : (
                  <div className="p-4 text-center text-gray-500 text-sm">
                    Nenhum país encontrado
                  </div>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Campo de Número */}
        <div className="flex-1 relative">
          <input
            type="tel"
            value={formattedNumber}
            onChange={handlePhoneChange}
            placeholder={placeholder}
            className={`w-full px-4 py-3 border rounded-r-xl focus:ring-2 focus:outline-none transition-all ${
              error
                ? 'border-red-300 focus:border-red-500 focus:ring-red-200'
                : isValid
                  ? 'border-green-300 focus:border-green-500 focus:ring-green-200'
                  : 'border-gray-300 focus:border-primary-500 focus:ring-primary-200'
            }`}
          />

          {/* Indicador de validação */}
          {phoneNumber && (
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2">
              {isValid ? (
                <Check className="w-5 h-5 text-green-500" />
              ) : (
                <span className="text-xs text-gray-400">
                  {phoneNumber.length}/{selectedCountry.maxLength}
                </span>
              )}
            </div>
          )}
        </div>
      </div>

      {/* Preview do número completo */}
      {phoneNumber && (
        <div className="mt-1 text-xs text-gray-500">
          Número completo: {selectedCountry.dialCode} {formattedNumber}
        </div>
      )}

      {/* Mensagem de erro */}
      {error && (
        <div className="mt-1 text-xs text-red-500">
          {error}
        </div>
      )}

      {/* Hint de formatação */}
      {!phoneNumber && !error && (
        <div className="mt-1 text-xs text-gray-400">
          Formato: {selectedCountry.dialCode} {selectedCountry.format.replace(/#/g, '9')}
        </div>
      )}
    </div>
  )
}
