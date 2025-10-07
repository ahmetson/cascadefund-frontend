import React from 'react'

interface TagProps {
  label: string
  color: string
  score?: number
}

const Tag: React.FC<TagProps> = ({ label, color, score }) => {
  const getColorClasses = (color: string) => {
    switch (color) {
      case 'blue':
        return 'bg-blue-100 text-blue-800'
      case 'orange':
        return 'bg-orange-100 text-orange-800'
      case 'purple':
        return 'bg-purple-100 text-purple-800'
      case 'green':
        return 'bg-green-100 text-green-800'
      case 'red':
        return 'bg-red-100 text-red-800'
      case 'gray':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${getColorClasses(color)}`}>
      {label}
      {score && (
        <span className="ml-1 px-1.5 py-0.5 bg-white rounded-full text-xs font-bold">
          {score}
        </span>
      )}
    </span>
  )
}

export default Tag
