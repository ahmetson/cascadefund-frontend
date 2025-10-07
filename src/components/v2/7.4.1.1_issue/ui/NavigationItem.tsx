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
    <div className={`flex items-center space-x-2 ${isActive ? 'text-cascade-blue' : 'text-gray-600'}`}>
      <div className="flex flex-col">
        <span className="text-sm font-medium">{label}</span>
        {sublabel && <span className="text-xs text-gray-500">{sublabel}</span>}
      </div>
      {count !== undefined && (
        <span className="bg-cascade-blue text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
          {count}
        </span>
      )}
    </div>
  )
}

export default NavigationItem
