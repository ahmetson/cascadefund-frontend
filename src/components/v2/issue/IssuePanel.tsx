import React from 'react'
import StatusBadge from '@/components/v2/StatusBadge'
import PriorityBadge from '@/components/v2/PriorityBadge'
import UserAvatar from '@/components/v2/UserAvatar'

interface Issue {
  id: number
  title: string
  author: string
  authorAvatar: string
  rating: number
  roadmapVersion: string
  description: string
  date: string
  followers: number
  messages: number
  status: string
  priority: number
  votes: string
}

interface IssueCardProps {
  issue: Issue
}

const IssueCard: React.FC<IssueCardProps> = ({ issue }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            {issue.title}
          </h3>
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-3">
            <div className="flex items-center space-x-2">
              <UserAvatar src={issue.authorAvatar} alt={issue.author} size="sm" />
              <span>{issue.author}</span>
            </div>
            <span className="text-yellow-600">{issue.rating} rating</span>
            <span>Reflect</span>
            <span>{issue.roadmapVersion} roadmap</span>
          </div>
          <p className="text-gray-700 text-sm leading-relaxed">
            {issue.description}
          </p>
        </div>
        <div className="flex items-center space-x-3 ml-6">
          <PriorityBadge priority={issue.priority} votes={issue.votes} />
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-sm text-gray-500">
          <span>{issue.date}</span>
          <span>{issue.followers} followers</span>
          <span>{issue.messages} msg</span>
        </div>
        <StatusBadge status={issue.status} />
      </div>
    </div>
  )
}

export default IssueCard
