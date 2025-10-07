import React from 'react'

interface StatusBadgeProps {
  status: 'open' | 'closed' | 'in-progress'
  className?: string
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status, className = '' }) => {
  const getStatusStyles = () => {
    switch (status) {
      case 'open':
        return 'bg-green-100 text-green-800'
      case 'closed':
        return 'bg-red-100 text-red-800'
      case 'in-progress':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles()} ${className}`}>
      {status === 'open' && 'Open'}
      {status === 'closed' && 'Closed'}
      {status === 'in-progress' && 'In Progress'}
    </span>
  )
}

export default StatusBadge
