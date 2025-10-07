import React from 'react'

const ActivitySection: React.FC = () => {
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
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h3 className="font-semibold text-gray-900 mb-4">ACTIVITY</h3>
      
      <div className="space-y-4">
        {activities.map((activity, index) => (
          <div key={index} className="flex items-start space-x-3">
            <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
            <div>
              <p className="text-sm text-gray-900">
                <span className="font-medium">{activity.user}</span> {activity.action}
              </p>
              <p className="text-xs text-gray-500">{activity.time}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ActivitySection
