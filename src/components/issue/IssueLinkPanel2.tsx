import React from 'react'
import Badge from '@/components/custom-ui/Badge'
import Button from '@/components/custom-ui/Button'

interface Issue {
  id: number
  title: string
  description: string
  category: string
  date: string
  comments: number
  upvotes: number
  downvotes: number
  status: string
  priority: string
  author: string
  solved: boolean
}

interface IssueCardProps {
  issue: Issue
}

const IssueCard: React.FC<IssueCardProps> = ({ issue }) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Rating Issue':
        return 'bg-blue-100 text-blue-800'
      case 'Not rating':
        return 'bg-orange-100 text-orange-800'
      case 'Not enough VP':
        return 'bg-red-100 text-red-800'
      case 'Already Solved':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgent':
        return 'text-orange-600'
      case 'Prioritize':
        return 'text-purple-600'
      default:
        return 'text-gray-600'
    }
  }

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-medium text-gray-900 text-sm leading-tight">{issue.title}</h3>
        <span className={`px-2 py-1 rounded text-xs font-medium ${getStatusColor(issue.status)}`}>
          {issue.status}
        </span>
      </div>

      <div className="flex items-center space-x-2 mb-3">
        <div className="w-6 h-6 rounded-full overflow-hidden">
          <img
            src="https://dummyimage.com/24x24/4FC3F7/ffffff?text=B"
            alt="Author avatar"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="text-xs text-blue-600">{issue.author}</span>
        <div className="flex items-center space-x-1">
          <span className="text-xs text-gray-500">Category:</span>
          <span className="text-xs text-gray-700">{issue.category}</span>
        </div>
      </div>

      <p className="text-xs text-gray-600 mb-4 line-clamp-3">{issue.description}</p>

      <div className="flex items-center justify-between text-xs text-gray-500 mb-3">
        <span>{issue.date}</span>
        <div className="flex items-center space-x-3">
          <span>{issue.comments}</span>
          <div className="flex items-center space-x-1">
            <span className="text-blue-600">{issue.upvotes}</span>
            <span>/</span>
            <span className="text-red-600">{issue.downvotes}</span>
          </div>
          <span className={getPriorityColor(issue.priority)}>{issue.priority}</span>
        </div>
      </div>

      <div className="flex items-center justify-between">
        {!issue.solved ? (
          <Button variant="secondary" size="sm">
            Turn to Rating Issue
          </Button>
        ) : (
          <Badge variant="green">Already Solved</Badge>
        )}
        <div className="flex items-center space-x-1">
          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-xs text-gray-600">24</span>
        </div>
      </div>
    </div>
  )
}

export default IssueCard
