import React from 'react'

const VotingSection: React.FC = () => {
  return (
    <div>
      <h3 className="font-semibold text-gray-900 mb-3">Your Voting Power</h3>
      <div className="flex items-center space-x-2 mb-4">
        <svg className="w-6 h-6 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
        </svg>
        <span className="text-2xl font-bold text-blue-600">100</span>
      </div>
      <p className="text-sm text-gray-600 mb-2">Total available</p>
      <p className="text-xs text-gray-500 mb-4">+50% bonus points by rating</p>
      
      <h3 className="font-semibold text-gray-900 mb-3">Add More Voting</h3>
      
      <div className="mb-4">
        <div className="flex justify-between text-xs text-gray-500 mb-1">
          <span>Min | 8th | 123 VP</span>
          <span>2nd | 123 VP</span>
          <span>1st | 123 VP</span>
          <span>Max | 123 VP</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
          <div className="bg-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
        </div>
        <div className="flex items-center space-x-2 text-sm">
          <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded">+23 VP</span>
          <span>+ 0.02 Rating Score</span>
          <span>1nd / 20 issues</span>
        </div>
      </div>
      
      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors">
        Save
      </button>
      
      <div className="mt-4 text-xs text-gray-500">
        <p>Want to have more points?</p>
        <p>Then fund using <span className="text-blue-600 underline">Donation</span></p>
      </div>
    </div>
  )
}

export default VotingSection
