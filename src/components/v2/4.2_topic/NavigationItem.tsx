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
    <div className={`flex flex-col ${isActive ? 'text-blue-600' : 'text-gray-700'}`}>
      <div className="flex items-center space-x-1">
        <span className="text-sm font-medium">{label}</span>
        {count && (
          <span className="bg-blue-500 text-white text-xs rounded-full px-2 py-0.5 min-w-[20px] text-center">
            {count}
          </span>
        )}
      </div>
      {sublabel && (
        <span className="text-xs text-gray-500">{sublabel}</span>
      )}
    </div>
  )
}

export default NavigationItem
