import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  onClick?: () => void
  disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '',
  onClick,
  disabled = false
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case 'primary':
        return 'bg-blue-600 text-white hover:bg-blue-700 disabled:bg-blue-300'
      case 'secondary':
        return 'bg-white text-blue-600 border border-blue-600 hover:bg-blue-50'
      case 'outline':
        return 'bg-transparent text-gray-700 border border-gray-300 hover:bg-gray-50'
      default:
        return 'bg-blue-600 text-white hover:bg-blue-700'
    }
  }

  const getSizeStyles = () => {
    switch (size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm'
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
      className={`
        ${getVariantStyles()} 
        ${getSizeStyles()} 
        font-medium rounded-lg transition-colors duration-200 
        disabled:cursor-not-allowed
        ${className}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
