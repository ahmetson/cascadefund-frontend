import React from 'react'

interface FeatureCardProps {
  icon: React.ReactNode
  title: string
  iconColor: string
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, iconColor }) => {
  return (
    <div className="flex items-center space-x-3 p-4 bg-white rounded-lg shadow-sm">
      <div className={`flex-shrink-0 ${iconColor}`}>
        {icon}
      </div>
      <span className="text-gray-900 font-medium">{title}</span>
    </div>
  )
}

export default FeatureCard
