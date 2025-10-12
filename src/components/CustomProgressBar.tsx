import React from 'react'

interface ProgressBarProps {
  progress: number
  total: number
  label: string
}

const ProgressBar: React.FC<ProgressBarProps> = ({ progress, total, label }) => {
  const percentage = (progress / total) * 100
  
  return (
    <div>
      <div className="flex justify-between text-sm text-gray-600 mb-2">
        <span>{label}</span>
        <span>{total}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div 
          className="bg-blue-600 h-2 rounded-full transition-all duration-300"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </div>
  )
}

export default ProgressBar
