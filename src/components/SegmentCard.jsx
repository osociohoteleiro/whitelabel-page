import React from 'react'

export default function SegmentCard({ icon, title, benefits, className = '' }) {
  return (
    <div
      className={`
        group p-6 bg-white rounded-2xl border border-gray-100
        hover:border-primary-200 hover:shadow-lg
        transition-all duration-300 cursor-pointer
        ${className}
      `}
    >
      <div className="flex items-center gap-4 mb-4">
        <span className="text-3xl">{icon}</span>
        <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      </div>
      <ul className="space-y-2">
        {benefits.slice(0, 3).map((benefit, index) => (
          <li key={index} className="flex items-start gap-2 text-sm text-gray-600">
            <span className="text-primary-500 mt-1">•</span>
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  )
}
