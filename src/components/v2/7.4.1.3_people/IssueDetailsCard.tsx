import React from 'react'
import Tag from './Tag'

const IssueDetailsCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h3 className="font-semibold text-gray-900 mb-4">ISSUE DETAILS</h3>
      
      <div className="space-y-3">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Status:</span>
          <span className="text-sm font-medium text-green-600">Open</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Created:</span>
          <span className="text-sm text-gray-900">3 days ago</span>
        </div>
        
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Updated:</span>
          <span className="text-sm text-gray-900">Today</span>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Assignee:</span>
          <div className="flex items-center space-x-2">
            <img 
              src="https://dummyimage.com/24x24/4FC3F7/ffffff?text=E" 
              alt="Emily W." 
              className="w-6 h-6 rounded-full"
              referrerpolicy="no-referrer"
            />
            <span className="text-sm text-gray-900">Emily W.</span>
          </div>
        </div>
        
        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Likes</span>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd"/>
            </svg>
            <span className="text-sm text-red-500">23</span>
            <button className="bg-red-100 text-red-600 px-2 py-1 rounded text-xs hover:bg-red-200 transition-colors">
              Follow
            </button>
          </div>
        </div>
        
        <div>
          <span className="text-sm text-gray-600 block mb-2">Tags:</span>
          <div className="flex space-x-2">
            <Tag variant="orange">Suggested</Tag>
            <Tag variant="red">Bug</Tag>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IssueDetailsCard
