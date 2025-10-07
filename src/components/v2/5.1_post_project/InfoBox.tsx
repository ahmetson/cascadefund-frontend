import React from 'react'

interface InfoBoxProps {
  type: 'info' | 'neutral'
  title: string
  description?: string
  items?: string[]
}

const InfoBox: React.FC<InfoBoxProps> = ({ type, title, description, items }) => {
  const bgColor = type === 'info' ? 'bg-green-50' : 'bg-gray-100'
  const iconColor = type === 'info' ? 'text-green-600' : 'text-gray-600'
  
  return (
    <div className={`${bgColor} rounded-lg p-4`}>
      <div className="flex items-start space-x-3">
        <div className={`${iconColor} flex-shrink-0 mt-0.5`}>
          {type === 'info' ? (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          ) : (
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <div className="flex-1">
          <h4 className="font-medium text-gray-800 mb-1">{title}</h4>
          {description && (
            <p className="text-sm text-gray-600 mb-2">{description}</p>
          )}
          {items && (
            <ul className="space-y-1">
              {items.map((item, index) => (
                <li key={index} className="flex items-center space-x-2 text-sm text-gray-600">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" fill="#22C55E"/>
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  )
}

export default InfoBox
