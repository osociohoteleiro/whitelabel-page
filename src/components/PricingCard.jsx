import React from 'react'
import { Check } from 'lucide-react'
import Button from './Button'

export default function PricingCard({
  name,
  description,
  features,
  highlighted = false,
  ctaText = 'Começar agora',
  className = '',
  onOpenSignup
}) {
  return (
    <div
      className={`
        relative p-6 lg:p-8 rounded-2xl
        ${highlighted
          ? 'bg-gradient-to-br from-primary-600 to-primary-700 text-white shadow-2xl shadow-primary-500/25 scale-105'
          : 'bg-white border border-gray-200'
        }
        transition-all duration-300
        ${className}
      `}
    >
      {highlighted && (
        <div className="absolute -top-4 left-1/2 -translate-x-1/2">
          <span className="bg-accent-500 text-white text-xs font-bold px-4 py-1 rounded-full">
            MAIS POPULAR
          </span>
        </div>
      )}

      <div className="mb-6">
        <h3 className={`text-xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-gray-900'}`}>
          {name}
        </h3>
        <p className={`text-sm ${highlighted ? 'text-primary-100' : 'text-gray-500'}`}>
          {description}
        </p>
      </div>

      <ul className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 ${highlighted ? 'text-primary-200' : 'text-primary-500'}`} />
            <span className={`text-sm ${highlighted ? 'text-primary-50' : 'text-gray-600'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={highlighted ? 'secondary' : 'primary'}
        className="w-full"
        onClick={onOpenSignup}
      >
        {ctaText}
      </Button>
    </div>
  )
}
