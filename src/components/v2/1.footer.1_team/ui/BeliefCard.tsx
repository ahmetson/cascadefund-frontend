import React from 'react'

interface BeliefCardProps {
  title: string
  items: string[]
  iconColor: string
}

const BeliefCard: React.FC<BeliefCardProps> = ({ title, items, iconColor }) => {
  return (
    <div className="bg-white rounded-lg p-8 shadow-lg">
      <h3 className="text-2xl font-bold text-cascade-purple mb-6">{title}</h3>
      <ul className="space-y-4">
        {items.map((item, index) => (
          <li key={index} className="flex items-start space-x-3">
            <svg className={`w-5 h-5 mt-0.5 ${iconColor} flex-shrink-0`} viewBox="0 0 24 24" fill="currentColor">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
            <span className="text-gray-700">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default BeliefCard
