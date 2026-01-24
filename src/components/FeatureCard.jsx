import React from 'react'

export default function FeatureCard({ icon: Icon, title, description, className = '' }) {
  return (
    <div
      className={`
        group p-6 lg:p-8 bg-white rounded-2xl border border-gray-100
        hover:border-primary-200 hover:shadow-xl hover:shadow-primary-500/5
        transition-all duration-300
        ${className}
      `}
    >
      <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-accent-100 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
        <Icon className="w-7 h-7 text-primary-600" />
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}
