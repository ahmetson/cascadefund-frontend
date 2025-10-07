import React from 'react'
import StatusBadge from './StatusBadge'

const IssueHeader: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex items-start justify-between mb-4">
        <h1 className="text-2xl font-bold text-gray-900">
          OAuth Integration with Third-party Services
        </h1>
        <StatusBadge label="Rating Issue" variant="success" />
      </div>
      
      <div className="border-2 border-dashed border-green-300 rounded-lg p-4 bg-green-50">
        <div className="flex items-center space-x-2 mb-2">
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          <span className="font-semibold text-green-800">Completed</span>
        </div>
        <p className="text-sm text-gray-600 mb-2">
          This issue is on the "v2.0.0" roadmap. Completed 2 days ago. + 0.02 Rating Score
        </p>
        <p className="text-sm text-gray-600">
          How to move out? Go to the working directory, and drag and drop the issue to another list.
        </p>
      </div>
    </div>
  )
}

export default IssueHeader
