import React from 'react'

interface StatusBadgeProps {
  status: string
}

const StatusBadge: React.FC<StatusBadgeProps> = ({ status }) => {
  const getStatusColor = (status: string) => {
    switch (status.toLowerCase()) {
      case 'bug':
        return 'bg-red-500 text-white'
      case 'wish':
        return 'bg-green-500 text-white'
      case 'fix':
        return 'bg-blue-500 text-white'
      case 'urgent':
        return 'bg-orange-500 text-white'
      case 'suggested':
        return 'bg-yellow-600 text-white'
      default:
        return 'bg-gray-500 text-white'
    }
  }

  return (
    <span className={`px-3 py-1 rounded-lg text-sm font-medium ${getStatusColor(status)}`}>
      {status}
    </span>
  )
}

export default StatusBadge
