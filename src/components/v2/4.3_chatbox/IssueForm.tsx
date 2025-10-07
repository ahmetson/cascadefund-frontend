import React, { useState } from 'react'

const IssueForm: React.FC = () => {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [tags, setTags] = useState(['Suggested', 'Bug'])

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove))
  }

  return (
    <div className="bg-white rounded-lg shadow p-6">
      <div className="space-y-6">
        <div>
          <input
            type="text"
            placeholder="Title..."
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
        
        <div>
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows={12}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
          />
        </div>
        
        <div className="border-t pt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-sm font-medium text-gray-700 mb-4">ISSUE DETAILS</h3>
              <div>
                <label className="block text-sm text-gray-600 mb-2">Tags:</label>
                <div className="flex flex-wrap gap-2 mb-3">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${
                        tag === 'Suggested' 
                          ? 'bg-yellow-600 text-white' 
                          : 'bg-red-500 text-white'
                      }`}
                    >
                      {tag}
                      <button
                        onClick={() => removeTag(tag)}
                        className="ml-2 text-white hover:text-gray-200"
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
                <select className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                  <option>Add a Tag</option>
                </select>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Issue Priority</h4>
                  <div className="mt-2">
                    <span className="text-lg font-bold text-green-600">2nd</span>
                    <div className="text-xs text-gray-500">/10 issues</div>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Rating</h4>
                  <div className="mt-2">
                    <span className="text-sm text-green-600">+ 0.2 Rating Score</span>
                  </div>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-700">Forks</h4>
                  <div className="mt-2 flex items-center justify-center">
                    <svg className="w-4 h-4 text-gray-400 mr-1" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414L2.586 7l3.707-3.707a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-sm">1</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Your Voting Power</h4>
                <div className="flex items-center mb-2">
                  <svg className="w-5 h-5 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <span className="text-2xl font-bold text-blue-600">100</span>
                </div>
                <div className="text-xs text-gray-500 mb-2">
                  Total available<br />
                  +50% bonus points by rating
                </div>
                <div className="text-xs text-gray-500">
                  Want to have more points?<br />
                  Then fund using <span className="text-blue-600 underline">Donation</span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-medium text-gray-700 mb-2">Add More Voting</h4>
                <div className="bg-gray-100 rounded p-3">
                  <div className="flex justify-between text-xs text-gray-600 mb-1">
                    <span>1st | 8th | 123 VP</span>
                    <span>2nd | 132 VP</span>
                    <span>1st | 123 VP</span>
                    <span>Max | 123 VP</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                    <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-blue-600 font-medium">+23 VP</span>
                    <span className="text-green-600">+ 0.02 Rating Score</span>
                    <span className="text-gray-600">1nd / 20 issues</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col items-center pt-6">
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors">
            Add Issue
          </button>
          <p className="text-sm text-gray-500 mt-2">Issue will be automatically followed by you.</p>
        </div>
      </div>
    </div>
  )
}

export default IssueForm
