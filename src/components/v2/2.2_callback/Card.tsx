import React from 'react'

interface CardProps {
  children: React.ReactNode
  className?: string
}

const Card: React.FC<CardProps> = ({ children, className = '' }) => {
  return (
    <div className={`bg-cascade-light-blue rounded-lg shadow-sm p-8 ${className}`}>
      {children}
    </div>
  )
}

export default Card
