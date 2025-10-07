import React from 'react'

const VotingSection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Issue Priority</h3>
          <div className="text-green-600 font-semibold text-lg">2nd</div>
          <div className="text-sm text-gray-500">/10 issues</div>
          <div className="text-sm text-gray-600 mt-1">+ 0.2 Rating Score</div>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Rating</h3>
          <div className="text-sm text-gray-600">+ 0.2 Rating Score</div>
        </div>
        
        <div>
          <h3 className="font-semibold text-gray-900 mb-2">Forks</h3>
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M7.707 3.293a1 1 0 010 1.414L5.414 7H11a7 7 0 017 7v2a1 1 0 11-2 0v-2a5 5 0 00-5-5H5.414l2.293 2.293a1 1 0 11-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span>1</span>
          </div>
        </div>
      </div>
      
      <div className="mt-6 border-t pt-6">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-semibold text-gray-900">Your Voting Power</h3>
            <div className="flex items-center mt-1">
              <svg className="w-5 h-5 text-blue-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span className="text-2xl font-bold text-blue-600">100</span>
            </div>
            <div className="text-sm text-gray-500">
              Total available<br />
              +50% bonus points by rating
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-gray-900">Add More Voting</h3>
            <div className="text-sm text-gray-600 mb-2">
              Want to have more points?<br />
              Then fund using <span className="text-blue-600">Donation</span>
            </div>
          </div>
        </div>
        
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">+23 VP</span>
            <span className="text-sm text-gray-600">+ 0.02 Rating Score</span>
            <span className="text-sm text-gray-600">1nd / 20 issues</span>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
            <div className="bg-blue-600 h-2 rounded-full" style={{ width: '60%' }}></div>
          </div>
          
          <div className="flex justify-between text-xs text-gray-500">
            <span>1st | 8th | 123 VP</span>
            <span>2nd | 123 VP</span>
            <span>1st | 123 VP</span>
            <span>Max | 123 VP</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default VotingSection
