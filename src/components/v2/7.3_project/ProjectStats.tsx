import React from 'react'
import StatsCard from './ui/StatsCard'

const ProjectStats: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
      <StatsCard
        title="Balance / Cascade Balance"
        value="$0.00 / $0.00"
        subtitle="$23.00 Total / 23 days"
      />
      
      <StatsCard
        title="Last commit / Total commits"
        value="2 days ago / 23"
        subtitle="5 commits / day"
      />
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-sm font-medium text-gray-700 mb-4">Collaboration</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Core Maintainers (2): 35%</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-400 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">Recent Contributors (5): 25%</span>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div className="w-3 h-3 bg-blue-300 rounded-full mr-2"></div>
              <span className="text-sm text-gray-600">One-time Contributors (12): 40%</span>
            </div>
          </div>
        </div>
        <div className="mt-4 text-xs text-gray-500">
          A high percentage of contributors from core maintainers (80%) indicates potential risk. Better risk. Consider mentoring recent contributors to take on more responsibility.
        </div>
      </div>
    </div>
  )
}

export default ProjectStats
