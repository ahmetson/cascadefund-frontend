import React from 'react'

interface NavigationItemProps {
  label: string
  sublabel?: string
  count?: number
  isActive?: boolean
}

const NavigationItem: React.FC<NavigationItemProps> = ({ 
  label, 
  sublabel, 
  count, 
  isActive = false 
}) => {
  return (
    <div className={`flex items-center space-x-2 ${isActive ? 'text-blue-600' : 'text-gray-700'}`}>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{label}</span>
        {sublabel && <span className="text-xs text-gray-500">{sublabel}</span>}
      </div>
      {count && (
        <span className="bg-blue-600 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
          {count}
        </span>
      )}
    </div>
  )
}

export default NavigationItem
