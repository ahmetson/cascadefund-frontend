import React, { useState } from 'react'
import ForkDetectionCard from './ForkDetectionCard'
import RepositoryInfo from './RepositoryInfo'
import IssueSelector from './IssueSelector'
import Sidebar from './Sidebar'
import BackButton from '../4.2_topic/BackButton'

const ForkDetectionMain: React.FC = () => {
  const [selectedIssues, setSelectedIssues] = useState<string[]>([])

  const handleIssueSelect = (issueId: string) => {
    setSelectedIssues(prev => 
      prev.includes(issueId) 
        ? prev.filter(id => id !== issueId)
        : [...prev, issueId]
    )
  }

  return (
    <main className="max-w-7xl mx-auto mt-6 px-4 sm:px-6 lg:px-8  grid grid-cols-1 lg:grid-cols-4">
      <div className='lg:col-span-1 py-6 space-y-6'><BackButton /></div>
        <div className="lg:col-span-2">
          <ForkDetectionCard />
          <RepositoryInfo />
          <IssueSelector 
            selectedIssues={selectedIssues}
            onIssueSelect={handleIssueSelect}
          />
        </div>
        <div className="lg:col-span-1">
          <Sidebar selectedIssues={selectedIssues} />
        </div>
    </main>
  )
}

export default ForkDetectionMain
