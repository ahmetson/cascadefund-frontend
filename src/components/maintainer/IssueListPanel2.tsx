import React from 'react'
import FilterBar from '@/components/issue/IssueFilterBar'
import IssueCard from '@/components/issue/IssuePanel'
import BasePanel from '@/components/panel/BasePanel';


const ContentArea: React.FC = () => {
  const issues = [
    {
      id: 1,
      title: "Fix responsive layout on tablet devices",
      author: "Serkan Bulgurcu",
      authorAvatar: "https://dummyimage.com/32x32/4FC3F7/ffffff?text=S",
      rating: 270,
      roadmapVersion: "v23.0",
      description: "The dashboard layout breaks on iPad and other tablet devices in landscape orientation. Elements overlap and some controls become inaccessible.",
      date: "Oct 5, 2023",
      followers: 5,
      messages: 5,
      status: "Bug",
      priority: 18,
      votes: "VP"
    },
    {
      id: 2,
      title: "Data export feature crashes with large datasets",
      author: "Serkan Bulgurcu",
      authorAvatar: "https://dummyimage.com/32x32/4FC3F7/ffffff?text=S",
      rating: 290,
      roadmapVersion: "v23.0",
      description: "When attempting to export data sets larger than 10,000 records, the application crashes. We need to implement pagination or streaming.",
      date: "Oct 5, 2023",
      followers: 5,
      messages: 5,
      status: "Wish",
      priority: 23,
      votes: "VP"
    }
  ]

  return (
    <BasePanel className="max-w-6xl mx-auto">
      <FilterBar />
      <div className="grid gap-6 mt-6">
        {issues.map(issue => (
          <IssueCard key={issue.id} issue={issue} />
        ))}
      </div>
    </BasePanel>
  )
}

export default ContentArea
