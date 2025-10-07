import React from 'react'

const IssuePriority: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <h3 className="font-semibold text-gray-900 mb-4">Issue Priority</h3>
      <div className="space-y-4">
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-2xl font-bold text-green-600">2nd</span>
            <span className="text-sm text-gray-500">/10 issues</span>
          </div>
          <div className="text-sm text-gray-600">+ 0.2 Rating Score</div>
        </div>
        
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-600">Rating</span>
            <span className="text-gray-600">Forks</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="font-semibold">+ 0.2 Rating Score</span>
            <span className="font-semibold">1</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IssuePriority
