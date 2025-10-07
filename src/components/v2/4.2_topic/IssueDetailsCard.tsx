import React from 'react'
import Card from './Card'
import Tag from './Tag'
import Button from './Button'

const IssueDetailsCard: React.FC = () => {
  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Issue Priority</h3>
          <div className="text-green-600 font-semibold">2nd</div>
          <div className="text-sm text-gray-500">/10 issues</div>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Rating</h3>
          <div className="text-sm text-gray-700">+ 0.2 Rating Score</div>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Forks</h3>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414L2.586 7l3.707-3.707a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>1</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 pt-6 border-t border-gray-200">
        <h3 className="font-semibold text-gray-900 mb-3">ISSUE DETAILS</h3>
        <div className="mb-4">
          <span className="text-sm text-gray-600 mb-2 block">Tags:</span>
          <div className="flex flex-wrap gap-2">
            <Tag variant="orange" removable>Suggested</Tag>
            <Tag variant="red" removable>Bug</Tag>
          </div>
        </div>
        
        <div className="mb-6">
          <select className="w-full p-2 border border-gray-300 rounded-md text-sm">
            <option>Add a Tag</option>
          </select>
        </div>
        
        <Button variant="primary" className="w-full">
          Add Issue
        </Button>
        <p className="text-xs text-gray-500 text-center mt-2">
          Issue will be automatically followed by you.
        </p>
      </div>
    </Card>
  )
}

export default IssueDetailsCard
