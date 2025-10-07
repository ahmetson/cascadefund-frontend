import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  icon?: React.ReactNode
  badge?: string
  onClick?: () => void
  className?: string
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  icon, 
  badge, 
  onClick, 
  className = '' 
}) => {
  const baseClasses = 'inline-flex items-center px-6 py-3 rounded-lg font-medium transition-colors duration-200 relative'
  
  const variantClasses = {
    primary: 'bg-purple-600 hover:bg-purple-700 text-white',
    secondary: 'bg-gray-200 hover:bg-gray-300 text-gray-800'
  }

  return (
    <button 
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      onClick={onClick}
    >
      {icon && (
        <span className="mr-2">
          {icon}
        </span>
      )}
      {children}
      {badge && (
        <span className="ml-2 bg-white text-purple-600 text-xs font-bold rounded-full w-6 h-6 flex items-center justify-center">
          {badge}
        </span>
      )}
    </button>
  )
}

export default Button
