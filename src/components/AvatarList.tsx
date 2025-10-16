import React from 'react'
import { type Props } from '@/components/utilitified_decorations/PagePanel'

export type AvatarListProps = Omit<Props, "children" | "title"> & {
}

const ContributorAvatars: React.FC<AvatarListProps> = () => {
  const contributors = [
    { id: 1, name: 'User 1', avatar: 'https://dummyimage.com/32x32/4FC3F7/ffffff?text=U1' },
    { id: 2, name: 'User 2', avatar: 'https://dummyimage.com/32x32/2C3E50/ffffff?text=U2' },
    { id: 3, name: 'User 3', avatar: 'https://dummyimage.com/32x32/E74C3C/ffffff?text=U3' },
    { id: 4, name: 'User 4', avatar: 'https://dummyimage.com/32x32/27AE60/ffffff?text=U4' },
  ]

  return (
    <div className="w-full h-6 rounded-full flex items-center">
      {contributors.map((contributor) => (
        <img
          key={contributor.id}
          src={contributor.avatar}
          alt={contributor.name}
          className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
          referrerPolicy="no-referrer"
        />
      ))}
      <div className=" text-gray-700 bg-gray-200 border-1 border-gray-400 text-xs p-1/2 rounded-full text-center">+3</div>
    </div>
  )
}

export default ContributorAvatars
