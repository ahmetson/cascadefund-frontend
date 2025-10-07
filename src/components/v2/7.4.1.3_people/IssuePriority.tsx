import React from 'react'

const IssuePriority: React.FC = () => {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-3">Issue Priority</h3>
      <div className="flex items-center space-x-2 mb-2">
        <span className="text-2xl font-bold text-green-600">2nd</span>
        <span className="text-gray-500">/10 issues</span>
      </div>
      <div className="flex items-center space-x-2 mb-4">
        <span className="text-sm text-gray-600">+ 0.2 Rating Score</span>
      </div>
      
      <h3 className="font-semibold text-gray-900 mb-3">Rating</h3>
      <div className="flex items-center space-x-2">
        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
        </svg>
        <span className="text-sm text-gray-600">1</span>
      </div>
      
      <h3 className="font-semibold text-gray-900 mb-3 mt-4">Forks</h3>
      <div className="flex items-center space-x-2">
        <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd"/>
        </svg>
        <span className="text-sm text-gray-600">1</span>
      </div>
    </div>
  )
}

export default IssuePriority
