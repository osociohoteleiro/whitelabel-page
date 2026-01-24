import React from 'react'
import { Link2, GraduationCap, Rocket } from 'lucide-react'

const steps = [
  {
    number: '01',
    icon: Link2,
    title: 'Conecte seus canais',
    description: 'Em minutos, conecte WhatsApp, Instagram, Facebook e Email. Basta escanear um QR Code ou autorizar o acesso.',
    color: 'primary',
  },
  {
    number: '02',
    icon: GraduationCap,
    title: 'Treine a IA',
    description: 'Faça upload de textos, PDFs e fotos do seu negócio. A IA aprende e já começa a responder corretamente.',
    color: 'accent',
  },
  {
    number: '03',
    icon: Rocket,
    title: 'Automatize e escale',
    description: 'Crie fluxos de automação, configure follow-ups e deixe a IA trabalhar enquanto você foca no que importa.',
    color: 'primary',
  },
]

export default function HowItWorks() {
  return (
    <section className="py-20 lg:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-primary-600 font-semibold text-sm uppercase tracking-wider">
            Como funciona
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-3 mb-4">
            Comece em 3 passos simples
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Configure em minutos, não em semanas. Veja resultados desde o primeiro dia.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-gray-200 to-transparent" />
              )}

              <div className="text-center lg:text-left">
                {/* Number badge */}
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-accent-500 text-white font-bold text-2xl mb-6 shadow-lg shadow-primary-500/25">
                  {step.number}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
