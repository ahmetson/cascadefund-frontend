import React from 'react'

interface StatCardProps {
  number: string
  label: string
  period: string
  description: string
}

const StatCard: React.FC<StatCardProps> = ({ number, label, period, description }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm text-center">
      <div className="mb-4">
        <div className="text-3xl font-bold text-cascade-blue mb-1">{number}</div>
        <div className="text-lg text-gray-700">{label}</div>
        <div className="text-sm font-medium text-gray-900 mb-2">{period}</div>
      </div>
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  )
}

export default StatCard
