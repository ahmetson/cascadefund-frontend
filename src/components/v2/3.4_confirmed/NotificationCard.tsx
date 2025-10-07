import React from 'react'

interface NotificationCardProps {
  icon: string
  title: string
  description: string
  variant: 'completed' | 'rating'
}

const NotificationCard: React.FC<NotificationCardProps> = ({ 
  icon, 
  title, 
  description, 
  variant 
}) => {
  const getIconBg = () => {
    switch (variant) {
      case 'completed':
        return 'bg-blue-100'
      case 'rating':
        return 'bg-yellow-100'
      default:
        return 'bg-gray-100'
    }
  }

  const getTitleColor = () => {
    switch (variant) {
      case 'rating':
        return 'text-yellow-600'
      default:
        return 'text-gray-800'
    }
  }

  return (
    <div className="bg-white border-2 border-dashed border-gray-300 rounded-lg p-6">
      <div className="flex items-start space-x-4">
        <div className={`w-12 h-12 ${getIconBg()} rounded-lg flex items-center justify-center text-2xl`}>
          {variant === 'completed' && (
            <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          )}
          {variant === 'rating' && (
            <svg className="w-6 h-6 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          )}
        </div>
        <div className="flex-1">
          <h3 className={`text-lg font-semibold ${getTitleColor()}`}>
            {title}
            {variant === 'rating' && <span className="text-yellow-600"> +2.0 rating</span>}
          </h3>
          <p className="text-gray-600 mt-2 leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  )
}

export default NotificationCard
