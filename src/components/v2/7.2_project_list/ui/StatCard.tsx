import React from 'react'

interface StatCardProps {
  title: string
  value: string
  subtitle?: string
  footer?: string
}

const StatCard: React.FC<StatCardProps> = ({ title, value, subtitle, footer }) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h4 className="text-sm font-medium text-gray-700 mb-2">{title}</h4>
      <div className="space-y-1">
        <div className="text-lg font-semibold text-gray-900">{value}</div>
        {subtitle && <div className="text-sm text-gray-600">{subtitle}</div>}
        {footer && <div className="text-xs text-gray-500">{footer}</div>}
      </div>
    </div>
  )
}

export default StatCard
