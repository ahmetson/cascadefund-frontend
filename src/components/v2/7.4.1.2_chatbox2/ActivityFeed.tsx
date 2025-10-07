import React from 'react'

const ActivityFeed: React.FC = () => {
  const activities = [
    {
      user: 'Sarah Johnson',
      action: 'commented on this issue',
      time: 'Today at 9:22 AM'
    },
    {
      user: 'Michael Chen',
      action: 'added David Rodriguez to this issue',
      time: 'Yesterday at 1:15 PM'
    },
    {
      user: 'Emily Wong',
      action: 'added tags to this issue',
      time: '3 days ago'
    }
  ]

  return (
    <div className="bg-white rounded-lg p-4">
      <h3 className="font-semibold text-gray-900 mb-4">ACTIVITY</h3>
      <div className="space-y-3">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-blue-600 mt-0.5">
              <circle cx="8" cy="8" r="3"/>
            </svg>
            <div className="text-sm">
              <span className="font-medium text-blue-600">{activity.user}</span>
              <span className="text-gray-700"> {activity.action}</span>
              <div className="text-xs text-gray-500">{activity.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivityFeed
