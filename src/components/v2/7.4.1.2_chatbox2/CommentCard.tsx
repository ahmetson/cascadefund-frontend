import React from 'react'

interface CommentCardProps {
  author: string
  role: string
  time: string
  content: string
  avatar: string
}

const CommentCard: React.FC<CommentCardProps> = ({ 
  author, 
  role, 
  time, 
  content, 
  avatar 
}) => {
  const getRoleColor = (role: string) => {
    switch (role.toLowerCase()) {
      case 'maintainer':
        return 'bg-purple-100 text-purple-800'
      case 'contributor':
        return 'bg-orange-100 text-orange-800'
      case 'influencer':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="flex space-x-3">
      <img 
        src={avatar} 
        alt={author}
        className="w-10 h-10 rounded-full flex-shrink-0"
        referrerPolicy="no-referrer"
      />
      <div className="flex-1">
        <div className="flex items-center space-x-2 mb-1">
          <span className="font-semibold text-blue-600">{author}</span>
          <span className={`px-2 py-1 rounded text-xs font-medium ${getRoleColor(role)}`}>
            {role}
          </span>
          <span className="text-sm text-gray-500">{time}</span>
        </div>
        <div className={`p-3 rounded-lg ${role.toLowerCase() === 'maintainer' ? 'bg-purple-50' : 
          role.toLowerCase() === 'contributor' ? 'bg-orange-50' : 'bg-green-50'}`}>
          <p className="text-sm text-gray-700">{content}</p>
        </div>
      </div>
    </div>
  )
}

export default CommentCard
