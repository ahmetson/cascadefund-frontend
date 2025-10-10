import React from 'react'
import Badge from '@/components/v2/Badge'

interface IssueCardProps {
  title: string
  author: string
  description: string
  date: string
  followers: number
  tags: number
  type: 'bug' | 'wish' | 'feature'
  priority: 'low' | 'medium' | 'high'
}

const IssueCard: React.FC<IssueCardProps> = ({
  title,
  author,
  description,
  date,
  followers,
  tags,
  type,
  priority
}) => {
  const typeColors = {
    bug: 'danger',
    wish: 'success',
    feature: 'info'
  } as const
  
  const priorityIcons = {
    low: '▼',
    medium: '■',
    high: '▲'
  }
  
  return (
    <a className="bg-white border border-blue-200 hover:blue-400 hover:bg-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow" href="/v2/issue">
      <div className="flex items-start justify-between mb-3">
        <div className="flex items-center space-x-2">
          <span className="text-lg">{priorityIcons[priority]}</span>
          <span className="text-sm text-gray-500">H</span>
        </div>
        <Badge variant={typeColors[type]}>
          {type === 'bug' ? 'Bug' : type === 'wish' ? 'Wish' : 'Feature'}
        </Badge>
      </div>
      
      <h3 className="font-medium text-gray-900 mb-2">{title}</h3>
      {author && <div className="text-sm text-gray-600 mb-2">{author}</div>}
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      
      <div className="flex items-center justify-between text-xs text-gray-500">
        <div className="flex items-center space-x-4">
          <span>{date}</span>
          <span>{followers} followers</span>
          <span>{tags} tags</span>
        </div>
      </div>
    </a>
  )
}

export default IssueCard
