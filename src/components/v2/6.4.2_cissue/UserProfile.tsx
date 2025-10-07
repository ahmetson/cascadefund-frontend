import React from 'react'

const UserProfile: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative">
        <img 
          src="https://dummyimage.com/32x32/4FC3F7/ffffff?text=A" 
          alt="User Avatar" 
          className="w-8 h-8 rounded-full"
          referrerpolicy="no-referrer"
        />
        <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
          <span className="text-xs text-white font-bold">2</span>
        </div>
      </div>
      <span className="text-sm text-gray-600">Ahmeson</span>
    </div>
  )
}

export default UserProfile
