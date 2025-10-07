import React from 'react'

interface TagProps {
  children: React.ReactNode
  variant: 'orange' | 'red' | 'blue' | 'green' | 'gray'
}

const Tag: React.FC<TagProps> = ({ children, variant }) => {
  const variants = {
    orange: 'bg-orange-100 text-orange-800',
    red: 'bg-red-100 text-red-800',
    blue: 'bg-blue-100 text-blue-800',
    green: 'bg-green-100 text-green-800',
    gray: 'bg-gray-100 text-gray-800'
  }

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}

export default Tag
