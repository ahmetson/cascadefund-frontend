import React from 'react'
import Card from './ui/Card'
import Badge from './ui/Badge'

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      <Card>
        <div className="p-4">
          <h3 className="font-medium text-gray-900 mb-4">Main Menu</h3>
          <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-sm text-gray-600">
            <div className="flex items-center space-x-2 mb-2">
              <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>You are an influencer.</span>
            </div>
            <ul className="text-xs space-y-1 ml-6">
              <li>• The project management</li>
              <li>• Is available for the maintainers.</li>
              <li>• It will be available if you are appointed.</li>
            </ul>
          </div>
          
          <div className="mt-4">
            <div className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 cursor-pointer">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm">Influence history</span>
            </div>
          </div>
        </div>
        <div className="p-4">
          <h3 className="font-medium text-gray-900 mb-4">Collaboration Menu</h3>
          <div className="flex items-center justify-between bg-gray-200 p-2">
            <div className="flex items-center space-x-2">
              <svg className="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-sm text-gray-900">Influencer Work</span>
            </div>
            <Badge variant="purple">1</Badge>
          </div>
        </div>
      </Card>

      <Card>
        <div className="p-4">
          <div className="flex items-center space-x-2 mb-3">
            <h3 className="font-medium text-gray-900">How to work with issues?</h3>
            <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" />
            </svg>
          </div>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• It's recommended first to look for the issue, and work on common idea</li>
            <li>• If there is nothing similar, then add a new issue</li>
          </ul>
        </div>
      </Card>
    </div>
  )
}

export default Sidebar
