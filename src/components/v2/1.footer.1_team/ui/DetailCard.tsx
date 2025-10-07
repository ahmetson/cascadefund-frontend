import React from 'react'

interface DetailCardProps {
  name: string
  image: string
  imagePosition: 'left' | 'right'
  children: React.ReactNode
}

const DetailCard: React.FC<DetailCardProps> = ({ name, image, imagePosition, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className={`flex flex-col ${imagePosition === 'right' ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8`}>
        <div className="lg:w-1/3">
          <img 
            src={image} 
            alt={name}
            className="w-full h-64 lg:h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="lg:w-2/3 p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-6">{name}</h3>
          <div className="prose prose-gray max-w-none">
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}

export default DetailCard
