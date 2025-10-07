import React from 'react'
import Tag from './Tag'

const IssueDetails: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="font-semibold text-gray-900 mb-4">ISSUE DETAILS</h3>
      
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Tags:</label>
          <div className="flex flex-wrap gap-2 mb-3">
            <Tag label="Suggested" variant="gray" removable />
            <Tag label="Bug" variant="red" removable />
          </div>
          <select className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm">
            <option>Add a Tag</option>
          </select>
        </div>
      </div>
    </div>
  )
}

export default IssueDetails
