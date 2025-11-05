import React from 'react'

export interface BadgeProps {
  children: React.ReactNode | number | string
  variant?: 'gray' | 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'orange' | 'default' | 'success' | 'warning' | 'danger' | 'info'
  active?: boolean
  static?: boolean
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'gray', active = false, static: disableAnimation = true }) => {
  const baseClasses = 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium'

  const variantClasses = {
    gray: active ? 'bg-slate-700 text-white shadow-lg dark:shadow-none ' : 'bg-slate-200 dark:bg-slate-600 text-slate-800 dark:text-slate-300 shadow-sm dark:shadow-none',
    blue: active ? 'bg-blue-600 text-white shadow-lg dark:shadow-none ' : 'bg-blue-200 dark:bg-blue-600 text-blue-800 dark:text-blue-300 shadow-sm dark:shadow-none',
    green: active ? 'bg-green-600 text-white shadow-lg dark:shadow-none ' : 'bg-green-100 dark:bg-green-600 text-green-800 dark:text-green-300 shadow-sm dark:shadow-none  dark:text-green-300',
    red: active ? 'bg-red-600 text-white shadow-lg dark:shadow-none' : 'bg-red-100 dark:bg-red-600 text-red-800 dark:text-red-300 shadow-sm dark:shadow-none dark:text-red-300',
    yellow: active ? 'bg-yellow-600 text-white shadow-lg dark:shadow-none ' : 'bg-yellow-100 dark:bg-yellow-600 text-yellow-800 dark:text-yellow-300 shadow-sm dark:shadow-none dark:text-yellow-300',
    purple: active ? 'bg-purple-600 text-white shadow-lg dark:shadow-none ' : 'bg-purple-100 dark:bg-purple-600 text-purple-800 dark:text-purple-300 shadow-sm dark:shadow-none dark:text-purple-300 ',
    orange: active ? 'bg-orange-600 text-white shadow-lg dark:shadow-none ' : 'bg-orange-100 dark:bg-orange-600 text-orange-800 dark:text-orange-300 shadow-sm dark:shadow-none    dark:text-orange-300',
    success: active ? 'bg-green-600 text-white shadow-lg dark:shadow-none ' : 'bg-green-100 dark:bg-green-600 text-green-800 dark:text-green-300 shadow-sm dark:shadow-none    dark:text-green-300',
    warning: active ? 'bg-yellow-600 text-white shadow-lg dark:shadow-none ' : 'bg-yellow-100 dark:bg-yellow-600 text-yellow-800 dark:text-yellow-300 shadow-sm dark:shadow-none dark:text-yellow-300',
    danger: active ? 'bg-red-600 text-white shadow-lg dark:shadow-none ' : 'bg-red-100 dark:bg-red-600 text-red-800 dark:text-red-300 shadow-sm dark:shadow-none dark:text-red-300',
    info: active ? 'bg-blue-600 text-white shadow-lg dark:shadow-none ' : 'bg-blue-100 dark:bg-blue-600 text-blue-800 dark:text-blue-300 shadow-sm dark:shadow-none dark:text-blue-300',
    default: active ? 'bg-gray-600 text-white shadow-lg dark:shadow-none ' : 'bg-gray-100 dark:bg-gray-600 text-gray-800 dark:text-gray-300 shadow-sm dark:shadow-none    dark:text-gray-300',
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
