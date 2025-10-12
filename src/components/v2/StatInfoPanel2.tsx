import React from 'react'

export interface MetricCardProps {
  title: string
  subtitle?: string
  value: string
  color?: string
  icon?: string
  footer?: string
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, title, value, color, subtitle, footer }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="flex items-center space-x-3 mb-2">
        {icon && color && 
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${color}`}>
          <span className="text-white text-sm">{icon}</span>
        </div>}
        <span className="text-md text-gray-600">{title}</span>
        <span className="text-sm text-gray-600">{subtitle}</span>
      </div>
      <div className="text-2xl font-bold text-gray-800">{value}</div>
      {footer && <>
        <hr  className='w-full h-2 separator'/>
        <div className="text-gray-600">{footer}</div>
      </>}
    </div>
  )
}

export default MetricCard
