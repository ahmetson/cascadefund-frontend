import React from 'react'

interface UserProfileProps {
  name: string
  rating: string
  avatar: string
}

const UserProfile: React.FC<UserProfileProps> = ({ name, rating, avatar }) => {
  return (
    <div className="flex items-center space-x-3">
      <div className="flex flex-col text-right">
        <span className="text-sm text-orange-500">{rating}</span>
        <span className="text-sm font-medium text-gray-700">{name}</span>
      </div>
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
