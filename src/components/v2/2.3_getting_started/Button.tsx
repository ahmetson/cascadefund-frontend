import React from 'react'

interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  fullWidth?: boolean
  onClick?: () => void
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false,
  onClick 
}) => {
  const baseClasses = "px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center"
  const widthClasses = fullWidth ? "w-full" : ""
  
  const variantClasses = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-white hover:bg-gray-50 text-gray-700 border border-gray-200"
  }

  return (
    <button 
      className={`${baseClasses} ${widthClasses} ${variantClasses[variant]}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

export default Button
