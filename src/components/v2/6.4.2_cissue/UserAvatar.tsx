import React from 'react'

interface UserAvatarProps {
  src: string
  alt: string
  size?: 'sm' | 'md' | 'lg'
}

const UserAvatar: React.FC<UserAvatarProps> = ({ src, alt, size = 'md' }) => {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  }

  return (
    <img 
      src={src} 
      alt={alt}
      className={`${sizeClasses[size]} rounded-full`}
      referrerpolicy="no-referrer"
    />
  )
}

export default UserAvatar
