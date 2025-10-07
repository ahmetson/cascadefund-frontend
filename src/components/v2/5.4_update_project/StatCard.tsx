import React from 'react'

interface StatCardProps {
  label: string
  value: string
  icon: 'star' | 'fork' | 'issue'
  color: 'yellow' | 'blue' | 'red'
}

const StatCard: React.FC<StatCardProps> = ({ label, value, icon, color }) => {
  const getIconColor = () => {
    switch (color) {
      case 'yellow': return 'text-yellow-500'
      case 'blue': return 'text-blue-500'
      case 'red': return 'text-red-500'
      default: return 'text-gray-500'
    }
  }

  const getIcon = () => {
    switch (icon) {
      case 'star':
        return (
          <svg className={`w-4 h-4 ${getIconColor()}`} fill="currentColor" viewBox="0 0 20 20">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
        )
      case 'fork':
        return (
          <svg className={`w-4 h-4 ${getIconColor()}`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        )
      case 'issue':
        return (
          <svg className={`w-4 h-4 ${getIconColor()}`} fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        )
    }
  }

  return (
    <div className="bg-gray-300 rounded-lg p-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-gray-600">{label}</span>
        {getIcon()}
      </div>
      <div className="text-2xl font-bold text-gray-900">{value}</div>
    </div>
  )
}

export default StatCard
