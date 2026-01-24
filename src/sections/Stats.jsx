import React from 'react'

const stats = [
  { value: '70%', label: 'Respostas automáticas' },
  { value: '3x', label: 'Mais conversões' },
  { value: '24/7', label: 'Atendimento sem pausa' },
  { value: '50%', label: 'Menos tempo de resposta' },
]

export default function Stats() {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl lg:text-5xl font-extrabold text-white mb-2">
                {stat.value}
              </p>
              <p className="text-primary-100 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
