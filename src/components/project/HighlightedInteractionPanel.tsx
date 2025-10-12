import React from 'react'
import Avatar from '@/components/Avatar'
import Card from '@/components/utilitified_decorations/PagelikeCard'

const Sidebar: React.FC = () => {
  return (
      <Card title="Highlighted Interaction" rightHeader={<svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>}>
        <div className="flex items-start space-x-3">
          <Avatar src="https://dummyimage.com/32x32/4FC3F7/ffffff?text=SJ" alt="Sarah Johnson" size="sm" />
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-sm font-medium text-gray-900">Sarah Johnson</span>
              <span className="text-xs text-green-600 font-medium">+341</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 mb-2">
              <p className="text-sm text-gray-700">"@David your code is really good..."</p>
            </div>
            <div className="text-xs text-gray-500">today at 9:22 PM</div>
          </div>
        </div>
      </Card>
  )
}

export default Sidebar
