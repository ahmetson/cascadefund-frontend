import React from 'react'
import Card from './ui/Card'

const RecentActivity: React.FC = () => {
  return (
    <Card title="Recent Activity">
      <div className="space-y-4">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full"></div>
          <div className="flex-1">
            <p className="text-sm text-gray-700">
              Completed task "Fix responsive layout" in UI Framework
            </p>
            <p className="text-xs text-gray-500">4 days ago</p>
          </div>
        </div>
        
        <div className="text-center py-4">
          <p className="text-sm text-gray-500">Average visit: Once in a week</p>
        </div>
        
        <div className="border-t pt-4">
          <div className="flex items-center space-x-1 mb-2">
            <span className="text-yellow-500">★</span>
            <span className="text-sm font-medium">Highlighted Interaction</span>
          </div>
          
          <div className="flex items-start space-x-3">
            <img 
              src="https://dummyimage.com/32x32/4A5568/ffffff?text=SJ"
              alt="Sarah Johnson"
              className="w-8 h-8 rounded-full"
              referrerpolicy="no-referrer"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-2">
                <span className="text-sm font-medium">Sarah Johnson</span>
                <span className="text-yellow-500 text-xs">★ 220 rating</span>
              </div>
              <p className="text-sm text-gray-700">@David your code is really good.</p>
              <p className="text-xs text-gray-500">Today at 9:27 AM</p>
              <div className="flex space-x-1 mt-1">
                <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                <div className="w-1 h-1 bg-green-500 rounded-full"></div>
                <div className="w-1 h-1 bg-green-500 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default RecentActivity
