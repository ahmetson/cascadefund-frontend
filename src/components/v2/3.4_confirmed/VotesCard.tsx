import React from 'react'
import AllocationItem from './AllocationItem'
import LinkBtn from '../LinkBtn'

interface Allocation {
  name: string
  votes: number
  link?: string
}

const VotesCard: React.FC = () => {
  const allocations: Allocation[] = [
    { name: 'NodeDB Toolkit', votes: 25, link: '#' },
    { name: 'React Component Library', votes: 15, link: '#' },
    { name: 'SecureAuth Framework', votes: 30, link: '#' },
    { name: 'CloudScale API', votes: 20, link: '#' },
    { name: 'MobileUI Framework', votes: 10, link: '#' }
  ]

  const totalVotes = allocations.reduce((sum, item) => sum + item.votes, 0)

  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-3 mb-6">
        <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
          <svg className="w-5 h-5 text-green-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        </div>
        <h2 className="text-xl font-semibold text-gray-800">Votes Confirmed!</h2>
      </div>
      
      <div className="text-center mb-6">
        <p className="text-gray-600 mb-2">Thank you for participating in the project development.</p>
        <p className="text-gray-600">Your votes have been successfully recorded.</p>
      </div>

      <div className="bg-gray-50 rounded-lg p-4">
        <h3 className="text-sm font-medium text-gray-700 mb-4">Allocation</h3>
        
        <div className="space-y-3">
          {allocations.map((allocation, index) => (
            <AllocationItem
              key={index}
              name={allocation.name}
              votes={allocation.votes}
              link={allocation.link}
            />
          ))}
        </div>
        
        <div className="border-t border-gray-200 mt-4 pt-4">
          <div className="flex justify-between items-center">
            <span className="font-medium text-gray-700">Total:</span>
            <div className="flex items-center space-x-2">
              <span className="text-purple-600 font-semibold">$1</span>
              <span className="text-gray-400">•</span>
              <div className="flex items-center space-x-1">
                <svg className="w-4 h-4 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span className="text-blue-600 font-semibold">{totalVotes}</span>
              </div>
            </div>
          </div>
          <p className="text-xs text-gray-500 text-right mt-1">+0.0 Bonus by your rating</p>
        </div>
      </div>
      <div className='flex justify-center'>
          <LinkBtn variant="blue" href="/v2/influencer/history" label="View Transaction History" />
      </div>
    </div>
  )
}

export default VotesCard
