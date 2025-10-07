import React from 'react'
import Badge from './Badge'

interface SidebarItemProps {
  icon: React.ReactNode
  label: string
  active?: boolean
  badge?: string
  badgeColor?: 'blue' | 'green' | 'purple' | 'orange' | 'red' | 'yellow' | 'gray'
  onClick?: () => void
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  label, 
  active = false, 
  badge, 
  badgeColor = 'blue',
  onClick 
}) => {
  const baseClasses = 'flex items-center justify-between px-3 py-2 text-sm font-medium rounded-lg transition-colors cursor-pointer'
  const activeClasses = active 
    ? 'bg-blue-50 text-blue-700 border-r-2 border-blue-700' 
    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
  
  return (
    <div className={`${baseClasses} ${activeClasses}`} onClick={onClick}>
      <div className="flex items-center space-x-3">
        <span className={active ? 'text-blue-700' : 'text-gray-400'}>
          {icon}
        </span>
        <span>{label}</span>
      </div>
      {badge && (
        <Badge variant={badgeColor} size="sm">
          {badge}
        </Badge>
      )}
    </div>
  )
}

export default SidebarItem
