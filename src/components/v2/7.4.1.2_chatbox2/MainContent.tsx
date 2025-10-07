import React from 'react'
import BackButton from "../../../components/v2/4.2_topic/BackButton";
import IssueHeader from './IssueHeader'
import IssueContent from './IssueContent'
import DiscussionPanel from './DiscussionPanel'
import Footer from './Footer'

const MainContent: React.FC = () => {
  return (
    <div className="bg-gray-200 min-h-screen">
            <div className='col-span-1 py-6 space-y-6 mr-6'><BackButton /></div>

      
      <main className="px-6 pb-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <IssueHeader />
            <IssueContent />
          </div>
          <div className="lg:col-span-1">
            <DiscussionPanel />
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  )
}

export default MainContent
