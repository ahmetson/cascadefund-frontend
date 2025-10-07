import React from 'react'

interface SidebarItemProps {
  icon: React.ReactNode
  text: string
  href: string
  badge?: string
  badgeColor?: string
}

const SidebarItem: React.FC<SidebarItemProps> = ({ 
  icon, 
  text, 
  href, 
  badge, 
  badgeColor = "bg-blue-500" 
}) => {
  return (
    <a 
      href={href}
      className="flex items-center justify-between px-3 py-2 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors group"
    >
      <div className="flex items-center space-x-3">
        <div className="text-gray-500 group-hover:text-gray-700">
          {icon}
        </div>
        <span className="text-sm font-medium">{text}</span>
      </div>
      {badge && (
        <span className={`${badgeColor} text-white text-xs rounded-full w-5 h-5 flex items-center justify-center`}>
          {badge}
        </span>
      )}
    </a>
  )
}

export default SidebarItem
