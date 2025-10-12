import React from 'react'

interface FilterButtonProps {
  text: string
  active?: boolean
  color?: string
}

const FilterButton: React.FC<FilterButtonProps> = ({ text, active = false, color }) => {
  return (
    <button
      className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
        active 
          ? 'bg-blue-500 text-white' 
          : color 
            ? `${color} text-white hover:opacity-80`
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
      }`}
    >
      {text}
    </button>
  )
}

export default FilterButton
