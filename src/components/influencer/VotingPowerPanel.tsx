import React from 'react'
import Card from '@/components/utilitified_decorations/PagePanel'
import LinkBtn from '@/components/LinkBtn'

const VotingPowerSection: React.FC = () => {
  const allocations = [
    { name: 'NodeDB Toolkit', points: 25, color: 'bg-blue-500' },
    { name: 'React Component Library', points: 25, color: 'bg-green-500' },
    { name: 'SecureAuth Framework', points: 25, color: 'bg-purple-500' },
    { name: 'CloudScale API', points: 25, color: 'bg-yellow-500' },
    { name: 'MobileUI Framework', points: 25, color: 'bg-red-500' }
  ]

  return (
    <Card className="space-y-6" title='Your Voting Power'>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-2xl font-bold text-blue-600">100</span>
          <LinkBtn
            variant="gray"
            className="w-sm h-sm"
            href="/influencer/project"
          >Add</LinkBtn>
        </div>
      </div>

      <p className="text-sm text-gray-600 mb-4">Total available</p>
      <p className="text-xs text-gray-500 mb-6">+50% bonus points by rating</p>

      <div className="mb-6">
        <h4 className="font-medium text-gray-900 mb-3">Current Allocation</h4>
        <div className="space-y-2 flex justify-center text-center">
          {allocations.map((allocation, index) => (
            <div key={index} className="flex items-center justify-between text-sm">
              <div className="flex items-center space-x-2">
                <div className={`w-3 h-3 rounded-full ${allocation.color}`}></div>
                <a href="#" className="text-blue-600 hover:underline">{allocation.name}</a>
              </div>
              <div className="flex items-center space-x-1">
                <span>+ {allocation.points} VP</span>
                <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M6 10a2 2 0 11-4 0 2 2 0 014 0zM12 10a2 2 0 11-4 0 2 2 0 014 0zM16 12a2 2 0 100-4 2 2 0 000 4z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="border-t pt-4">
        <div className="flex items-center justify-between mb-2">
          <span className="text-sm text-gray-600">Remaining</span>
          <div className="flex items-center space-x-1">
            <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" />
            </svg>
            <span className="font-medium text-green-600">10</span>
          </div>
        </div>
      </div>

      <LinkBtn
        variant="blue"
        className="w-full mt-4"
        href="/influencer/confirmed"
      >Confirm Votes</LinkBtn>

      <p className="text-xs text-gray-500 mt-2 text-center">
        It will create tasks for maintainers to work on the issues. You will be notified on this page.
      </p>
    </Card>
  )
}

export default VotingPowerSection
