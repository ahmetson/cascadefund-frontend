import React from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'

interface ActivityListProps {
  activities: string[]
}

const ActivityList: React.FC<ActivityListProps> = ({ activities }) => {
  return (
    <PageLikePanel title="Recent Activity on Repository">
      {activities.map((activity, index) => (
        <div key={index} className="flex items-center text-sm text-gray-600">
          {index === 2 && (
            <div className="w-2 h-2 bg-green-500 rounded-full mr-2 flex-shrink-0"></div>
          )}
          <span className={index !== 2 ? 'ml-4' : ''}>{activity}</span>
        </div>
      ))}
    </PageLikePanel>
  )
}

export default ActivityList
