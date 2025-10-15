import React from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'gray' | 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'orange' | 'default' | 'success' | 'warning' | 'danger' | 'info'

  active?: boolean
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'gray', active = false }) => {
  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium'

  const variantClasses = {
    gray: active ? 'bg-gray-800 text-white' : 'bg-gray-100 text-gray-800',
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    red: 'bg-red-100 text-red-800',
    yellow: 'bg-yellow-100 text-yellow-800',
    purple: 'bg-purple-100 text-purple-800',
    orange: 'bg-orange-100 text-orange-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800',
    info: 'bg-blue-100 text-blue-800',
    default: 'bg-gray-100 text-gray-800',
  }

  return (
    <span className={`${baseClasses} ${variantClasses[variant]}`}>
      {children}
    </span>
  )
}

export default Badge
