import React from 'react'

interface SliderProps {
  label: string
  leftLabel: string
  rightLabel: string
  value: number
  className?: string
}

const Slider: React.FC<SliderProps> = ({ 
  label, 
  leftLabel, 
  rightLabel, 
  value, 
  className = '' 
}) => {
  return (
    <div className={`space-y-2 ${className}`}>
      <div className="flex justify-between text-xs text-gray-600">
        <span>{leftLabel}</span>
        <span>{rightLabel}</span>
      </div>
      <div className="relative">
        <div className="w-full h-2 bg-gray-200 rounded-full">
          <div 
            className="h-2 bg-cascade-blue rounded-full relative"
            style={{ width: `${value}%` }}
          >
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-cascade-blue rounded-full border-2 border-white shadow"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
