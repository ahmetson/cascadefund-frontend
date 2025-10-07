import React from 'react'

interface UserProfileProps {
  name: string
  avatar: string
}

const UserProfile: React.FC<UserProfileProps> = ({ name, avatar }) => {
  return (
    <div className="flex items-center space-x-3">
      <span className="text-sm text-gray-600">Jon Dillick</span>
      <img 
        src={avatar} 
        alt={name}
        className="w-8 h-8 rounded-full"
        referrerPolicy="no-referrer"
      />
    </div>
  )
}

export default UserProfile
