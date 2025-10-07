import React from 'react'

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  isActive?: boolean
  badge?: string
  hasInfo?: boolean
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  isActive = false, 
  badge,
  hasInfo = false 
}) => {
  return (
    <div className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition-colors duration-200 ${
      isActive 
        ? 'bg-cascade-light-blue text-cascade-blue' 
        : 'text-gray-600 hover:bg-gray-50'
    }`}>
      <div className="flex items-center space-x-3">
        <div className={`${isActive ? 'text-cascade-blue' : 'text-gray-400'}`}>
          {icon}
        </div>
        <span className="text-sm font-medium">{label}</span>
      </div>
      
      <div className="flex items-center space-x-2">
        {badge && (
          <div className="w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-medium">
            {badge}
          </div>
        )}
        {hasInfo && (
          <div className="w-4 h-4 border border-gray-300 rounded-full flex items-center justify-center">
            <svg className="w-2 h-2 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          </div>
        )}
      </div>
    </div>
  )
}

export default SidebarItem
