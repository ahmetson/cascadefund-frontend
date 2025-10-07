import React from 'react'

const UserProfile: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="flex items-center space-x-1">
        <span className="text-yellow-500 text-sm">★</span>
        <span className="text-sm text-gray-600">220 rating</span>
      </div>
      <div className="w-8 h-8 rounded-full overflow-hidden">
        <img 
          src="https://dummyimage.com/32x32/4FC3F7/ffffff?text=A" 
          alt="User Avatar"
          className="w-full h-full object-cover"
          referrerpolicy="no-referrer"
        />
      </div>
      <span className="text-sm text-blue-600 cursor-pointer hover:underline">Ahmetson</span>
    </div>
  )
}

export default UserProfile
