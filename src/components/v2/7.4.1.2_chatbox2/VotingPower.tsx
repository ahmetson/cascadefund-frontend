import React from 'react'

const VotingPower: React.FC = () => {
  return (
    <div className="bg-white rounded-lg p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="font-semibold text-gray-900">Your Voting Power</h3>
          <div className="text-3xl font-bold text-blue-600 mt-2">100</div>
          <div className="text-sm text-gray-600">Total available</div>
          <div className="text-xs text-gray-500">+50% bonus points by rating</div>
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Add More Voting</h3>
          <div className="mt-2">
            <div className="flex items-center space-x-2 text-sm">
              <span>Min</span>
              <span>1 BP</span>
              <span>| 123 VP</span>
              <span>2nd</span>
              <span>| 123 VP</span>
              <span>1st</span>
              <span>| 123 VP</span>
              <span>Max</span>
              <span>| 123 VP</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
              <div className="bg-blue-600 h-2 rounded-full" style={{width: '60%'}}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-500 mt-1">
              <span>+23 VP</span>
              <span>+ 0.02 Rating Score</span>
              <span>1nd / 20 Issues</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="text-xs text-gray-500 mb-4">
        Want to have more points?<br />
        Then fund using Donation
      </div>
      
      <button className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
        Save
      </button>
    </div>
  )
}

export default VotingPower
