import React from 'react'
import { getIcon, IconName } from './icons'
import Link from '../Link'
import Badge, { BadgeProps } from '../custom-ui/Badge'

interface MenuItemProps {
  icon: IconName
  label: string
  url: string
  badges?: BadgeProps[]
  isActive?: boolean
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, badges, url, isActive = false }) => {
  return (
    <Link href={url} className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer ${isActive ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' : 'text-gray-700 hover:bg-gray-300 hover:text-blue-900!'
      }`}>
      <div className="flex items-center space-x-3">
        {getIcon(icon)}
        <span className="text-sm font-medium">{label}</span>
      </div>
      {badges && badges.map((badge) => (
        <Badge {...badge}>{badge.children}</Badge>
      ))}
    </Link>
  )
}

export default MenuItem
