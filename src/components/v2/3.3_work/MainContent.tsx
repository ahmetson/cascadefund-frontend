import React from 'react'
import Sidebar from './Sidebar'
import TasksSection from './TasksSection'
import IssuesSection from './IssuesSection'
import VotingPowerSection from './VotingPowerSection'

const MainContent: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
        
        <div className="lg:col-span-2">
          <div className="space-y-6">
            <TasksSection />
            <IssuesSection />
          </div>
        </div>
        
        <div className="lg:col-span-1">
          <VotingPowerSection />
        </div>
      </div>
    </div>
  )
}

export default MainContent
