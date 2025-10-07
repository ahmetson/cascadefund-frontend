import React from 'react'

interface ActivityListProps {
  activities: string[]
}

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
  return (
    <div className="bg-gray-400 rounded-lg p-4">
      <h4 className="text-sm font-medium text-gray-700 mb-3">Recent Activity</h4>
      <div className="space-y-2">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-center text-sm text-gray-600">
            {index === 2 && (
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
            )}
            <span className={index !== 2 ? 'ml-4' : ''}>{activity}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityList
