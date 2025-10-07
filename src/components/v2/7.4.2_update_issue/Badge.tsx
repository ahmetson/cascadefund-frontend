import React from 'react'

interface BadgeProps {
  count: number
  variant?: 'blue' | 'gray'
}

const Badge: React.FC<BadgeProps> = ({ count, variant = 'blue' }) => {
  const baseClasses = "inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none rounded-full"
  const variantClasses = variant === 'blue' 
    ? "text-white bg-blue-600" 
    : "text-gray-600 bg-gray-200"

  return (
    <span className={`${baseClasses} ${variantClasses}`}>
      {count}
    </span>
  )
}

export default Badge
