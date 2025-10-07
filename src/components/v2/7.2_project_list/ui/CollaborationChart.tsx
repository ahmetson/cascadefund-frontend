import React from 'react'

interface CollaboratorData {
  name: string
  percentage: number
  color: string
}

interface CollaborationChartProps {
  collaborators: CollaboratorData[]
}

const CollaborationChart: React.FC<CollaborationChartProps> = ({ collaborators }) => {
  return (
    <div className="space-y-3">
      <div className="relative w-16 h-16 mx-auto">
        <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
          <path
            d="M18 2.0845
              a 15.9155 15.9155 0 0 1 0 31.831
              a 15.9155 15.9155 0 0 1 0 -31.831"
            fill="none"
            stroke="#e5e7eb"
            strokeWidth="2"
          />
          {collaborators.map((collaborator, index) => {
            const offset = collaborators.slice(0, index).reduce((sum, c) => sum + c.percentage, 0)
            const circumference = 100
            const strokeDasharray = `${collaborator.percentage} ${circumference - collaborator.percentage}`
            const strokeDashoffset = -offset
            
            return (
              <path
                key={index}
                d="M18 2.0845
                  a 15.9155 15.9155 0 0 1 0 31.831
                  a 15.9155 15.9155 0 0 1 0 -31.831"
                fill="none"
                stroke={collaborator.color === 'bg-blue-500' ? '#3b82f6' : 
                       collaborator.color === 'bg-blue-400' ? '#60a5fa' : '#9ca3af'}
                strokeWidth="2"
                strokeDasharray={strokeDasharray}
                strokeDashoffset={strokeDashoffset}
              />
            )
          })}
        </svg>
      </div>
      
      <div className="space-y-1">
        {collaborators.map((collaborator, index) => (
          <div key={index} className="flex items-center text-xs">
            <div className={`w-2 h-2 rounded-full mr-2 ${
              collaborator.color === 'bg-blue-500' ? 'bg-blue-500' :
              collaborator.color === 'bg-blue-400' ? 'bg-blue-400' : 'bg-gray-400'
            }`}></div>
            <span className="text-gray-600">{collaborator.name} ({collaborator.percentage}%)</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default CollaborationChart
