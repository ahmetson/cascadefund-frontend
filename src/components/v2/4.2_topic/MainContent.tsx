import React from 'react'
import BackButton from './BackButton'
import IssueCard from './IssueCard'
import ChatCard from './ChatCard'
import IssueDetailsCard from './IssueDetailsCard'
import VotingCard from './VotingCard'

const MainContent: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto mt-6 px-4 sm:px-6 lg:px-8  grid grid-cols-1 lg:grid-cols-4">
      <div className='col-span-1 py-6 space-y-6'><BackButton /></div>
      
      <div className="lg:col-span-2 space-y-6">
          <IssueCard />
          <IssueDetailsCard />
          <VotingCard />
        </div>
        
        <div className="lg:col-span-1 space-y-6">
          <ChatCard />
        </div>
    </main>
  )
}

export default MainContent
