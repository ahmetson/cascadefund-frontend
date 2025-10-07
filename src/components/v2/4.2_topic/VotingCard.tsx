import React from 'react'
import Card from './Card'

const VotingCard: React.FC = () => {
  return (
    <Card>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Your Voting Power</h3>
          <div className="flex items-center mb-2">
            <svg className="w-6 h-6 text-blue-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span className="text-2xl font-bold text-blue-600">100</span>
          </div>
          <div className="text-sm text-gray-600 mb-1">Total available</div>
          <div className="text-xs text-gray-500">+50% bonus points by rating</div>
          <div className="mt-4">
            <p className="text-xs text-gray-600 mb-1">Want to have more points?</p>
            <p className="text-xs text-gray-600">
              Then fund using <span className="text-blue-600 underline">Donation</span>
            </p>
          </div>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-900 mb-4">Add More Voting</h3>
          <div className="space-y-3">
            <div className="flex justify-between text-sm">
              <span>Jan | 8th | 123 VP</span>
              <span>2nd | 123 VP</span>
              <span>1st | 123 VP</span>
              <span>Max | 123 VP</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div className="bg-blue-500 h-2 rounded-full" style={{width: '60%'}}></div>
            </div>
            <div className="flex justify-between text-xs text-gray-600">
              <span className="bg-blue-100 px-2 py-1 rounded">+23 VP</span>
              <span>+ 0.02 Rating Score</span>
              <span>1nd / 20 issues</span>
            </div>
          </div>
        </div>
      </div>
    </Card>
  )
}

export default VotingCard
