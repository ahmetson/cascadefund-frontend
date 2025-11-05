import React from 'react'

interface SliderProps {
  label?: string
  leftLabel?: string
  rightLabel?: string
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
    <div className={`space-y-1 ${className}`}>
      {label || (leftLabel && rightLabel) && (
        <div className="flex justify-between text-xs text-gray-600 dark:text-gray-400">
          <span>{leftLabel}</span>
          <span>{rightLabel}</span>
          <span>{label}</span>
        </div>
      )}
      <div className="relative">
        <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
          <div
            className="bg-blue-500 dark:bg-blue-600 h-2 rounded-full relative"
            style={{ width: `${value}%` }}
          >
            <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-blue-600 dark:bg-blue-400 rounded-full border-2 border-white dark:border-gray-400 shadow"></div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Slider
