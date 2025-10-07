import React from 'react'

const UserProfile: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-1">
        <span className="text-yellow-500 text-sm">5.00 rating</span>
      </div>
      <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center">
        <span className="text-white text-sm font-medium">A</span>
      </div>
      <span className="text-sm text-gray-600">Annotation</span>
    </div>
  )
}

export default UserProfile
