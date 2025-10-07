import React from 'react'

interface ProgressBarProps {
  percentage: number
  color?: 'green' | 'blue' | 'purple' | 'red' | 'yellow'
}

const ProgressBar: React.FC<ProgressBarProps> = ({ percentage, color = 'blue' }) => {
  const colorClasses = {
    green: 'bg-green-500',
    blue: 'bg-blue-500',
    purple: 'bg-purple-500',
    red: 'bg-red-500',
    yellow: 'bg-yellow-500'
  }

  return (
    <div className="w-full bg-gray-200 rounded-full h-2">
      <div
        className={`h-2 rounded-full ${colorClasses[color]}`}
        style={{ width: `${percentage}%` }}
      />
    </div>
  )
}

export default ProgressBar
