import React from 'react'
import BackButton from './BackButton'
import IssueCard from './IssueCard'
import IssueDetails from './IssueDetails'
import ChatSection from './ChatSection'
import VotingSection from './VotingSection'
import Button from './Button'

const IssueForm: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto mt-6 px-4 sm:px-6 lg:px-8  grid grid-cols-1 lg:grid-cols-4">
      <div className='col-span-1 py-6 space-y-6'><BackButton /></div>
      
      <div className="lg:col-span-2 space-y-6">
        
        <IssueCard />
        <VotingSection />
        <div className="flex justify-center mt-8">
          <Button variant="primary" size="lg">
            Add Issue
          </Button>
        </div>
        <p className="text-center text-sm text-gray-500 mt-2">
            Issue will be automatically followed by you.
        </p>
      </div>

      <div className="lg:col-span-1 space-y-6">
        <IssueDetails />
        <ChatSection />
      </div>
    </main>
  )
}

export default IssueForm
