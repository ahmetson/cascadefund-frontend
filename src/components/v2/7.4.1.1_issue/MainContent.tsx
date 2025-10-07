import React from 'react'
import BackButton from './ui/BackButton'
import NotificationBanner from './ui/NotificationBanner'
import IssueHeader from './sections/IssueHeader'
import IssueContent from './sections/IssueContent'
import Sidebar from './sections/Sidebar'

const MainContent: React.FC = () => {
  return (
    <main className="max-w-7xl mx-auto px-4 py-6">
      <div className="mb-4">
        <BackButton />
      </div>
      
      <NotificationBanner 
        type="warning"
        title="Complete a quest..."
        message='Please reply to the "Project Timeline" chat.'
      />
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
        <div className="lg:col-span-2">
          <IssueHeader />
          <IssueContent />
        </div>
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
    </main>
  )
}

export default MainContent
