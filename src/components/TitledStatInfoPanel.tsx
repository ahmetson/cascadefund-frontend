import React from 'react'
import BasePanel from '@/components/panel/BasePanel'

interface StatsCardProps {
  title: string
  value: string
  subtitle?: string
}

const StatsCard: React.FC<StatsCardProps> = ({ title, value, subtitle }) => {
  return (
    <BasePanel className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h3 className="text-sm font-medium text-gray-700 mb-2">{title}</h3>
      <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
      {subtitle && <div className="text-sm text-gray-500">{subtitle}</div>}
    </BasePanel>
  )
}

export default StatsCard
