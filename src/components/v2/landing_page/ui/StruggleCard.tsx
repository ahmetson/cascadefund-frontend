import React from 'react'

interface StruggleCardProps {
  icon: React.ReactNode
  title: string
  description: string
  iconColor: string
}

const StruggleCard: React.FC<StruggleCardProps> = ({ icon, title, description, iconColor }) => {
  return (
    <div className="flex items-start space-x-4">
      <div className={`flex-shrink-0 ${iconColor}`}>
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}

export default StruggleCard
