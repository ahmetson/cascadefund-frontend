import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'danger' | 'success' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  disabled?: boolean
  className?: string
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  onClick, 
  disabled = false,
  className = ''
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-cascade-blue text-white hover:bg-blue-600'
      case 'secondary':
        return 'bg-gray-500 text-white hover:bg-gray-600'
      case 'danger':
        return 'bg-red-500 text-white hover:bg-red-600'
      case 'success':
        return 'bg-orange-500 text-white hover:bg-orange-600'
      case 'outline':
        return 'border border-gray-300 text-gray-700 hover:bg-gray-50'
      default:
        return 'bg-cascade-blue text-white hover:bg-blue-600'
    }
  }

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1 text-sm'
      case 'md':
        return 'px-4 py-2 text-sm'
      case 'lg':
        return 'px-6 py-3 text-base'
      default:
        return 'px-4 py-2 text-sm'
    }
  }

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        ${getVariantStyles()} 
        ${getSizeStyles()} 
        rounded font-medium transition-colors duration-200
        ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
        ${className}
      `}
    >
      {children}
    </button>
  )
}

export default Button
