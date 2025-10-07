import React from 'react'
import BackButton from './BackButton'
import IssueDetails from './IssueDetails'
import Sidebar from './Sidebar'

const MainContent: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
      <BackButton />
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <IssueDetails />
        </div>
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
    </main>
  )
}

export default MainContent
