import React from 'react'
import Card, {type Props} from '@/components/utilitified_decorations/PagelikeCard'

export type AvatarListProps = Omit<Props, "children"> & {
  title: string
}

const ContributorAvatars: React.FC<AvatarListProps> = ({title}) => {
  const contributors = [
    { id: 1, name: 'User 1', avatar: 'https://dummyimage.com/32x32/4FC3F7/ffffff?text=U1' },
    { id: 2, name: 'User 2', avatar: 'https://dummyimage.com/32x32/2C3E50/ffffff?text=U2' },
    { id: 3, name: 'User 3', avatar: 'https://dummyimage.com/32x32/E74C3C/ffffff?text=U3' },
    { id: 4, name: 'User 4', avatar: 'https://dummyimage.com/32x32/27AE60/ffffff?text=U4' },
  ]

  return (
    <Card title={title} className='border-none bg-none shadow-none'>
        <div className="w-full h-8 rounded-full flex items-center">
          {contributors.map((contributor) => (
            <img
              key={contributor.id}
              src={contributor.avatar}
              alt={contributor.name}
              className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
              referrerPolicy="no-referrer"
            />
          ))}
          <div className="w-8 h-8 text-gray-600 bg-gray-200 rounded-full text-xl text-center">+</div>
        </div>
    </Card>
  )
}

export default ContributorAvatars
