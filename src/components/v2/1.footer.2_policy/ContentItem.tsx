import React from 'react'

interface ContentItemProps {
  icon: string
  text: string
}

const ContentItem: React.FC<ContentItemProps> = ({ icon, text }) => {
  const getBackgroundColor = (iconLetter: string) => {
    const colors = {
      'G': 'bg-gray-700',
      'R': 'bg-red-600',
      'E': 'bg-green-600',
      'P': 'bg-purple-600',
      'A': 'bg-blue-600',
      'X': 'bg-orange-600',
      'H': 'bg-indigo-600'
    }
    return colors[iconLetter as keyof typeof colors] || 'bg-gray-500'
  }

  return (
    <div className="flex items-start space-x-4">
      <div className={`w-8 h-8 rounded-full ${getBackgroundColor(icon)} flex items-center justify-center flex-shrink-0`}>
        <span className="text-white text-sm font-bold">{icon}</span>
      </div>
      <p className="text-gray-700 leading-relaxed flex-1">{text}</p>
    </div>
  )
}

export default ContentItem
