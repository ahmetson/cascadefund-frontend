import React from 'react'

export interface BadgeProps {
  children: React.ReactNode | number | string
  variant?: 'gray' | 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'orange' | 'default' | 'success' | 'warning' | 'danger' | 'info' | 'teal'
  active?: boolean
  static?: boolean
  className?: string
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'gray', active = false, static: disableAnimation = true, className = '' }) => {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium'

  const variantClasses = {
    gray: active ? 'bg-slate-700 text-white shadow-lg dark:shadow-none ' : 'bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-200 shadow-sm dark:shadow-none',
    blue: active ? 'bg-blue-600 text-white shadow-lg dark:shadow-none ' : 'bg-blue-200 dark:bg-blue-600 text-blue-800 dark:text-blue-200 shadow-sm dark:shadow-none',
    green: active ? 'bg-green-600 text-white shadow-lg dark:shadow-none ' : 'bg-green-100 dark:bg-green-600 text-green-800 dark:text-green-200 shadow-sm dark:shadow-none',
    red: active ? 'bg-red-600 text-white shadow-lg dark:shadow-none' : 'bg-red-100 dark:bg-red-600 text-red-800 dark:text-red-200 shadow-sm dark:shadow-none',
    yellow: active ? 'bg-yellow-600 text-white shadow-lg dark:shadow-none ' : 'bg-yellow-100 dark:bg-yellow-600 text-yellow-800 dark:text-yellow-200 shadow-sm dark:shadow-none',
    purple: active ? 'bg-purple-600 text-white shadow-lg dark:shadow-none ' : 'bg-purple-100 dark:bg-purple-600 text-purple-800 dark:text-purple-200 shadow-sm dark:shadow-none ',
    orange: active ? 'bg-orange-600 text-white shadow-lg dark:shadow-none ' : 'bg-orange-100 dark:bg-orange-600 text-orange-800 dark:text-orange-200 shadow-sm dark:shadow-none',
    success: active ? 'bg-green-600 text-white shadow-lg dark:shadow-none ' : 'bg-green-100 dark:bg-green-600 text-green-800 dark:text-green-100 shadow-sm dark:shadow-none ',
    warning: active ? 'bg-yellow-600 text-white shadow-lg dark:shadow-none ' : 'bg-yellow-100 dark:bg-yellow-600 text-yellow-800 dark:text-yellow-200 shadow-sm dark:shadow-none ',
    danger: active ? 'bg-red-600 text-white shadow-lg dark:shadow-none ' : 'bg-red-100 dark:bg-red-600 text-red-800 dark:text-red-200 shadow-sm dark:shadow-none ',
    info: active ? 'bg-blue-600 text-white shadow-lg dark:shadow-none ' : 'bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-blue-200 shadow-sm dark:shadow-none ',
    teal: active ? 'bg-teal-600 text-white shadow-lg dark:shadow-none ' : 'bg-teal-100 dark:bg-teal-600 text-teal-800 dark:text-teal-200 shadow-sm dark:shadow-none ',
    default: active ? 'bg-gray-600 text-white shadow-lg dark:shadow-none ' : 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-200 shadow-sm dark:shadow-none ',
  }

  // Animation classes
  const animationClasses = 'animate-ping'

  return (
    <span
      className={`relative ${className}`}
    >
      {
        disableAnimation ? null :
          (
            <span className={`${animationClasses} inset-0 rounded-full text-xs w-100/50 ${variantClasses[variant]} absolute`}>
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
