import React, { useState, useEffect } from 'react'

interface BadgeProps {
  children: React.ReactNode
  variant?: 'gray' | 'blue' | 'green' | 'red' | 'yellow' | 'purple' | 'orange' | 'default' | 'success' | 'warning' | 'danger' | 'info'
  active?: boolean
  disableAnimation?: boolean
}

// Timing helper functions
const getUniqueRandomDelay = (): number => {
  return Math.random() * 10 // 0-10 seconds
}

const getLongDuration = (): number => {
  return 20 + Math.random() * 10 // 20-30 seconds
}

const getTiming = (seed?: number) => {
  const randomSeed = seed || Math.random()
  return {
    delay: randomSeed * 10,
    duration: 20 + (randomSeed * 10)
  }
}

const Badge: React.FC<BadgeProps> = ({ children, variant = 'gray', active = false, disableAnimation = false }) => {
  const baseClasses = 'inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium '

  const variantClasses = {
    gray: active ? 'bg-gray-600 text-white shadow-lg' : 'bg-gray-200 text-gray-800 shadow-sm',
    blue: 'bg-blue-100 text-blue-800 shadow-sm',
    green: 'bg-green-100 text-green-800 shadow-sm',
    red: 'bg-red-100 text-red-800 shadow-sm',
    yellow: 'bg-yellow-100 text-yellow-800 shadow-sm',
    purple: 'bg-purple-100 text-purple-800 shadow-sm',
    orange: 'bg-orange-100 text-orange-800 shadow-sm',
    success: 'bg-green-100 text-green-800 shadow-sm',
    warning: 'bg-yellow-100 text-yellow-800 shadow-sm',
    danger: 'bg-red-100 text-red-800 shadow-sm',
    info: 'bg-blue-100 text-blue-800 shadow-sm',
    default: 'bg-gray-100 text-gray-800 shadow-sm',
  }

  // Animation classes
  const animationClasses = 'animate-ping'

  return (
    <span
      className={`relative`}
    >
      {
        disableAnimation ? null : (
          <span className={`${animationClasses}  inset-0 ${baseClasses} ${variantClasses[variant]} absolute`}></span>)}
      <span
        className={`${baseClasses} ${variantClasses[variant]} relative`}
      >
        {children}</span>
    </span >
  )
}

export default Badge
