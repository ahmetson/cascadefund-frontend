import React from 'react'

interface PriorityBadgeProps {
  priority: number
  votes: string
}

const PriorityBadge: React.FC<PriorityBadgeProps> = ({ priority, votes }) => {
  return (
    <div className="flex items-center space-x-2">
      <div className="bg-blue-500 text-white px-2 py-1 rounded text-sm font-medium">
        {priority}
      </div>
      <span className="text-xs text-gray-500 uppercase">{votes}</span>
    </div>
  )
}

export default PriorityBadge
