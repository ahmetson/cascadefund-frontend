import React from 'react'

const IssueDetails: React.FC = () => {
  return (
    <div className="bg-gray-50 rounded-lg p-4">
      <h3 className="font-semibold text-gray-900 mb-4">ISSUE DETAILS</h3>
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-gray-600">Status:</span>
          <span className="font-medium">Open</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Created:</span>
          <span className="font-medium">3 days ago</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Updated:</span>
          <span className="font-medium">Today</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Assignee:</span>
          <span className="font-medium">Emily W.</span>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Likes:</span>
          <div className="flex items-center space-x-2">
            <span className="text-red-500">♥ 23</span>
            <button className="bg-pink-500 text-white px-3 py-1 rounded-full text-sm">
              Follow
            </button>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tags:</span>
          <div className="flex space-x-2">
            <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">
              Suggested
            </span>
            <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-sm">
              Bug
            </span>
          </div>
        </div>
      </div>
      <button className="w-full bg-gray-600 text-white py-2 rounded mt-4 hover:bg-gray-700">
        Edit
      </button>
    </div>
  )
}

export default IssueDetails
