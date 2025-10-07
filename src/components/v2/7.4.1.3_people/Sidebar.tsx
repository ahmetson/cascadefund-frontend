import React from 'react'
import IssueDetailsCard from './IssueDetailsCard'
import PeopleSection from './PeopleSection'
import RelatedIssues from './RelatedIssues'
import ActivitySection from './ActivitySection'

const Sidebar: React.FC = () => {
  return (
    <div className="space-y-6">
      <IssueDetailsCard />
      <PeopleSection />
      <RelatedIssues />
      <ActivitySection />
    </div>
  )
}

export default Sidebar
