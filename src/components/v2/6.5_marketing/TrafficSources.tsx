import React from 'react'

const TrafficSources: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Traffic Sources</h3>
      <p className="text-sm text-gray-600 mb-6">Where clicks came from</p>
      
      <div className="flex justify-center mb-6">
        <div className="w-48 h-48 relative">
          <svg viewBox="0 0 200 200" className="w-full h-full">
            <circle cx="100" cy="100" r="80" fill="#6B7280" />
            <path d="M 100 20 A 80 80 0 0 1 180 100 L 100 100 Z" fill="#4B5563" />
            <path d="M 180 100 A 80 80 0 0 1 100 180 L 100 100 Z" fill="#9CA3AF" />
            <path d="M 100 180 A 80 80 0 0 1 20 100 L 100 100 Z" fill="#D1D5DB" />
          </svg>
        </div>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
          <span className="text-sm text-gray-700">GitHub README (48%)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-400 rounded-full"></div>
          <span className="text-sm text-gray-700">YouTube (27%)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-blue-300 rounded-full"></div>
          <span className="text-sm text-gray-700">Blog (15%)</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gray-400 rounded-full"></div>
          <span className="text-sm text-gray-700">Other (10%)</span>
        </div>
      </div>
    </div>
  )
}

export default TrafficSources
