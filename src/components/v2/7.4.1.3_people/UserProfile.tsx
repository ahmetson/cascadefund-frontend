import React from 'react'

const UserProfile: React.FC = () => {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-orange-500">620 rating</span>
        <img 
          src="https://dummyimage.com/32x32/4FC3F7/ffffff?text=A" 
          alt="User avatar" 
          className="w-8 h-8 rounded-full"
          referrerpolicy="no-referrer"
        />
        <span className="text-sm font-medium">ahmetbun</span>
      </div>
    </div>
  )
}

export default UserProfile
