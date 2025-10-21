import React from 'react'
import { getIcon, IconName } from './icons'
import Link from '../custom-ui/Link'
import Badge, { BadgeProps } from '../custom-ui/Badge'

interface MenuItemProps {
  icon: IconName
  label: string
  href: string
  badges?: BadgeProps[]
  active?: boolean
  focus?: boolean
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, badges, href: url, active: active = false, focus = false }) => {
  return (
    <Link focus={focus} active={active} href={url} className={`no-underline! flex items-center justify-between px-3 py-2 rounded-md cursor-pointer ${active ? 'bg-blue-50 text-blue-700 hover:bg-blue-100' : 'text-gray-700 hover:bg-gray-300 hover:text-blue-900!'
      }`}>
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center space-x-3">
          {getIcon(icon)}
          <span className="text-sm font-medium">{label}</span>
        </div>
        <div className="flex items-center ml-1 -space-x-2">
          {badges && badges.map((badge) => (
            <Badge {...badge}>{badge.children}</Badge>
          ))}
        </div>
      </div>
    </Link>
  )
}

export default MenuItem
