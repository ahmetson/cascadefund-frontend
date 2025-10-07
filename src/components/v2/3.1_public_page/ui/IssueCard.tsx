import React from 'react'

interface IssueCardProps {
  title: string
  description: string
  supporters: number
  vp: number
}

const IssueCard: React.FC<IssueCardProps> = ({ title, description, supporters, vp }) => {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-2">
        <h3 className="font-medium text-gray-900 flex-1">{title}</h3>
        <span className="text-sm font-medium text-blue-600 ml-2">{vp} VP</span>
      </div>
      
      <p className="text-sm text-gray-600 mb-3">{description}</p>
      
      <div className="flex items-center text-xs text-gray-500">
        <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span>{supporters} supporters</span>
      </div>
    </div>
  )
}

export default IssueCard
