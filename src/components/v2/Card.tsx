import React from 'react'
import type { PanelEvents } from '@/types/eventTypes';

export type CardProps = PanelEvents & {
  children: React.ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  bg?: string
}

const Card: React.FC<CardProps> = ({ children, className = '', padding = 'md', bg = 'white' }) => {
  const getPaddingStyles = () => {
    switch (padding) {
      case 'none':
        return ''
      case 'sm':
        return 'p-3'
      case 'md':
        return 'p-4'
      case 'lg':
        return 'p-6'
      default:
        return 'p-4'
    }
  }

  return (
    <div className={`bg-${bg} rounded-lg border border-gray-200 shadow-sm ${getPaddingStyles()} ${className}`}>
      {children}
    </div>
  )
}

export default Card
