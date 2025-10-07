import React from 'react'
import Card from './ui/Card'

const ProjectTimeAllocation: React.FC = () => {
  return (
    <Card title="Project Time Allocation">
      <div className="space-y-4">
        <div className="relative w-32 h-32 mx-auto">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#E5E7EB"
              strokeWidth="8"
              fill="none"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#374151"
              strokeWidth="8"
              fill="none"
              strokeDasharray="113"
              strokeDashoffset="56"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#6B7280"
              strokeWidth="8"
              fill="none"
              strokeDasharray="113"
              strokeDashoffset="90"
            />
            <circle
              cx="50"
              cy="50"
              r="40"
              stroke="#9CA3AF"
              strokeWidth="8"
              fill="none"
              strokeDasharray="113"
              strokeDashoffset="96"
            />
          </svg>
        </div>
        
        <div className="space-y-2 text-sm">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-700 rounded-full"></div>
              <span>UI Framework (45%)</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-500 rounded-full"></div>
              <span>Data Processing API (30%)</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
              <span>Documentation Portal (15%)</span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
              <span>Other projects (10%)</span>
            </div>
          </div>
        </div>
        
        <div className="border-t pt-4">
          <p className="text-sm font-medium mb-2">Top 3 projects of the user:</p>
          <div className="flex space-x-2 text-xs">
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">All</span>
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">Maintainer</span>
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">Contributor</span>
            <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded">Influencer</span>
          </div>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
              UI
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">UI Framework</span>
                <span className="text-purple-600 text-xs">Influencer</span>
              </div>
              <p className="text-xs text-gray-500">Impact: 45%</p>
              <p className="text-xs text-gray-600">Primary focus: Accessibility improvements and responsive design issues</p>
              <p className="text-xs text-gray-500">Last contribution: 2 days ago • 23 issues solved / 504 given</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
              DA
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Data Processing API</span>
                <span className="text-green-600 text-xs">Contributor</span>
              </div>
              <p className="text-xs text-gray-500">Impact: 30%</p>
              <p className="text-xs text-gray-600">Primary focus: Performance optimization and error handling</p>
              <p className="text-xs text-gray-500">Last contribution: 1 week ago • 42 commits</p>
            </div>
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white text-xs">
              DO
            </div>
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Documentation Portal</span>
                <span className="text-blue-600 text-xs">Maintainer</span>
              </div>
              <p className="text-xs text-gray-500">Impact: 15%</p>
              <p className="text-xs text-gray-600">Primary focus: Content structure and API documentation</p>
              <p className="text-xs text-gray-500">Last contribution: 3 days ago • 17 docs updated</p>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default ProjectTimeAllocation
