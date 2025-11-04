import React from 'react'

export interface BadgeProps {
  children: React.ReactNode | number | string
  variant?: 'gray' | 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'orange' | 'default' | 'success' | 'warning' | 'danger' | 'info'
  active?: boolean
  static?: boolean
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'gray', active = false, static: disableAnimation = true }) => {
  const baseClasses = 'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium'

  const variantClasses = {
    gray: active ? 'bg-gray-600 text-white shadow-lg' : 'bg-gray-200 text-gray-800 shadow-sm',
    blue: active ? 'bg-blue-600 text-white shadow-lg' : 'bg-blue-100 text-blue-800 shadow-sm',
    green: active ? 'bg-green-600 text-white shadow-lg' : 'bg-green-100 text-green-800 shadow-sm',
    red: active ? 'bg-red-600 text-white shadow-lg' : 'bg-red-100 text-red-800 shadow-sm',
    yellow: active ? 'bg-yellow-600 text-white shadow-lg' : 'bg-yellow-100 text-yellow-800 shadow-sm',
    purple: active ? 'bg-purple-600 text-white shadow-lg' : 'bg-purple-100 text-purple-800 shadow-sm',
    orange: active ? 'bg-orange-600 text-white shadow-lg' : 'bg-orange-100 text-orange-800 shadow-sm',
    success: active ? 'bg-green-600 text-white shadow-lg' : 'bg-green-100 text-green-800 shadow-sm',
    warning: active ? 'bg-yellow-600 text-white shadow-lg' : 'bg-yellow-100 text-yellow-800 shadow-sm',
    danger: active ? 'bg-red-600 text-white shadow-lg' : 'bg-red-100 text-red-800 shadow-sm',
    info: active ? 'bg-blue-600 text-white shadow-lg' : 'bg-blue-100 text-blue-800 shadow-sm',
    default: active ? 'bg-gray-600 text-white shadow-lg' : 'bg-gray-100 text-gray-800 shadow-sm',
  }

  // Animation classes
  const animationClasses = 'animate-ping'

  return (
    <span
      className={`relative`}
    >
      {
        disableAnimation ? null :
          (
            <span className={`${animationClasses}  inset-0 ${baseClasses} ${variantClasses[variant]} absolute`}>
            </span>)
      }
      <span
        className={`${baseClasses} ${variantClasses[variant]} relative flex items-center ${disableAnimation ? 'shadow-none!' : ''}`}
      >
        {children}</span>
    </span >
  )
}

export default Badge
