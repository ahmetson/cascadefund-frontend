import React from 'react'
import { getIcon, IconName } from './icons'

interface MenuItemProps {
  icon: IconName
  label: string
  url: string
  badge?: number | string
  isActive?: boolean
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, badge, url, isActive = false }) => {
  return (
    <a href={url} className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer ${isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-200  hover:text-blue-900'
      }`}>
      <div className="flex items-center space-x-3">
        {getIcon(icon)}
        <span className="text-sm font-medium">{label}</span>
      </div>
      {badge && (
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${typeof badge === 'number' && badge > 0
            ? 'bg-red-100 text-red-800'
            : 'bg-blue-100 text-blue-800'
          }`}>
          {badge}
        </span>
      )}
    </a>
  )
}

export default MenuItem
