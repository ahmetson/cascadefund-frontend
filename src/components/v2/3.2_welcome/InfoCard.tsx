import React from 'react'

interface InfoCardProps {
  icon?: React.ReactNode
  title: string
  description: string
  subtitle?: string
}

const InfoCard: React.FC<InfoCardProps> = ({ icon, title, description, subtitle }) => {
  const defaultIcon = <svg className="w-6 h-6 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
              </svg>;
  
  return (
    <div className="border-2 border-dashed border-gray-400 rounded-lg p-6 bg-white">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0 mt-1">
          {icon || defaultIcon}
        </div>
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">
            {title}
          </h3>
          <p className="text-gray-700 text-sm leading-relaxed mb-3">
            {description}
          </p>
          {subtitle && (
            <p className="text-gray-800 text-sm font-medium">
              {subtitle}
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default InfoCard
