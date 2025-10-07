import React from 'react'
import Tag from './Tag'

interface PersonCardProps {
  name: string
  role: string
  avatar: string
  hasNotification?: boolean
  taskCount?: string
  points?: string
}

const PersonCard: React.FC<PersonCardProps> = ({ 
  name, 
  role, 
  avatar, 
  hasNotification = false, 
  taskCount, 
  points 
}) => {
  const getRoleVariant = (role: string) => {
    switch (role.toLowerCase()) {
      case 'maintainer': return 'green'
      case 'contributor': return 'blue'
      case 'influencer': return 'gray'
      default: return 'gray'
    }
  }

  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <div className="relative">
          <img 
            src={avatar} 
            alt={name} 
            className="w-10 h-10 rounded-full"
            referrerpolicy="no-referrer"
          />
          {hasNotification && (
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">!</span>
            </div>
          )}
        </div>
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-blue-600 hover:underline cursor-pointer">
              {name}
            </span>
            <Tag variant={getRoleVariant(role)}>{role}</Tag>
          </div>
          {taskCount && (
            <p className="text-xs text-gray-500">{taskCount}</p>
          )}
          {points && (
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-xs text-gray-600">{points}</span>
            </div>
          )}
        </div>
      </div>
      {hasNotification && (
        <div className="flex space-x-1">
          <div className="w-3 h-3 bg-red-500 rounded"></div>
          <div className="w-3 h-3 bg-orange-500 rounded"></div>
        </div>
      )}
    </div>
  )
}

export default PersonCard
