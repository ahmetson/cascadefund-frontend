import React from 'react'

interface StatusBadgeProps {
  label: string
  variant: 'success' | 'warning' | 'error' | 'info'
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ label, variant }) => {
  const variants = {
    success: 'bg-green-100 text-green-800 border-green-200',
    warning: 'bg-yellow-100 text-yellow-800 border-yellow-200',
    error: 'bg-red-100 text-red-800 border-red-200',
    info: 'bg-blue-100 text-blue-800 border-blue-200'
  }

  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium border ${variants[variant]}`}>
      {label}
    </span>
  )
}

export default StatusBadge
