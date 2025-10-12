import React from 'react'

interface QuestRowProps {
  task: string
  category: string
  description: string
  reward: string
  rewardDetail: string
  startCondition: string
  goal: string
  likes: number
  dislikes: number
  discussion: string
  issue: string
}

const getCategoryColor = (category: string) => {
  switch (category) {
    case 'Communication':
      return 'bg-blue-100 text-blue-800'
    case 'Project':
      return 'bg-green-100 text-green-800'
    case 'Visibility':
      return 'bg-purple-100 text-purple-800'
    default:
      return 'bg-gray-100 text-gray-800'
  }
}

const QuestRow: React.FC<QuestRowProps> = ({
  task,
  category,
  description,
  reward,
  rewardDetail,
  startCondition,
  goal,
  likes,
  dislikes,
  discussion,
  issue
}) => {
  return (
    <tr className="border-b hover:bg-gray-50 border-gray-400">
      <td className="px-4 py-4 text-sm text-gray-900">{task}</td>
      <td className="px-4 py-4">
        <span className={`inline-block px-2 py-1 rounded text-xs font-medium ${getCategoryColor(category)}`}>
          {category}
        </span>
      </td>
      <td className="px-4 py-4 text-sm text-gray-600 max-w-xs">
        <div className="flex items-start">
          <span>{description}</span>
          <button className="ml-2 text-gray-400 hover:text-gray-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </td>
      <td className="px-4 py-4 text-sm">
        <div className="font-semibold text-gray-900">{reward}</div>
        <div className="text-xs text-gray-500">{rewardDetail}</div>
      </td>
      <td className="px-4 py-4 text-sm">
        <div className="text-gray-900">{startCondition}</div>
        <div className="text-xs text-gray-500">{goal}</div>
      </td>
      <td className="px-4 py-4 text-sm">
        <div className="flex items-center space-x-2">
          <span className="flex items-center text-green-600">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            {likes}
          </span>
          <span>•</span>
          <span className="flex items-center text-red-600">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 9.5a1.5 1.5 0 11-3 0v-6a1.5 1.5 0 013 0v6zM14 9.667v-5.43a2 2 0 00-1.106-1.79l-.05-.025A4 4 0 0011.057 2H5.64a2 2 0 00-1.962 1.608l-1.2 6A2 2 0 004.44 12H8v4a2 2 0 002 2 1 1 0 001-1v-.667a4 4 0 01.8-2.4l1.4-1.866a4 4 0 00.8-2.4z" />
            </svg>
            {dislikes}
          </span>
        </div>
      </td>
      <td className="px-4 py-4 text-sm">
        <span className="text-blue-600">{discussion}</span>
      </td>
      <td className="px-4 py-4 text-sm">
        <button className="text-blue-600 hover:text-blue-800">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
          </svg>
        </button>
        <span className="ml-1 text-gray-500">{issue}</span>
      </td>
    </tr>
  )
}

export default QuestRow
