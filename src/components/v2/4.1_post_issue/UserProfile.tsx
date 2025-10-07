import React from 'react'

const UserProfile: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
        <span className="text-white text-sm font-medium">A</span>
      </div>
      <div className="flex flex-col text-xs">
        <span className="text-yellow-600">220 rating</span>
        <span className="text-gray-500">Almation</span>
      </div>
    </div>
  )
}

export default UserProfile
