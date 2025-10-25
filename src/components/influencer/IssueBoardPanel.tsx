import React from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'
import Link from '@/components/custom-ui/Link'
import Badge from '@/components/custom-ui/Badge'
import IssueCard from '@/components/issue/IssueLink'

const IssuesSection: React.FC = () => {
  const issues = [
    {
      id: 1,
      title: "Authentication fails on slow connections",
      description: "Users are experiencing authentication failures when their connection speed drops below 1Mbps. The system needs to handle timeouts more gracefully.",
      category: "Postponed Issues",
      date: "Oct 5, 2023",
      comments: 5,
      upvotes: 24,
      downvotes: 2,
      status: "Not rating",
      priority: "Urgent",
      author: {
        uri: "/profile/brian-barajas",
        name: "Brian Barajas",
        avatar: "/avatars/brian-barajas.jpg"
      },
      solved: false,
      uri: "/issue/1",
      number: "1",
      type: "bug" as const,
      storage: "github" as const,
      projectId: "project-1",
      categoryId: "category-1",
      vpAmount: 100,
      currentVP: 0,
      topVP: 0,
      minVP: 10
    },
    {
      id: 2,
      title: "Fix responsive layout on tablet devices",
      description: "The dashboard layout breaks on iPad and other tablet devices. Landscape orientation: Elements overlap and some controls become inaccessible.",
      category: "Postponed Issues",
      date: "Oct 4, 2023",
      comments: 0,
      upvotes: 19,
      downvotes: 0,
      status: "Rating Issue",
      priority: "Prioritize",
      author: {
        uri: "/profile/brian-barajas",
        name: "Brian Barajas",
        avatar: "/avatars/brian-barajas.jpg"
      },
      solved: false,
      uri: "/issue/2",
      number: "2",
      type: "improvement" as const,
      storage: "cascadefund" as const,
      projectId: "project-1",
      categoryId: "category-1",
      vpAmount: 100,
      currentVP: 15,
      topVP: 45,
      minVP: 10
    },
    {
      id: 3,
      title: "Implement dark mode across all pages",
      description: "Many users have requested a dark mode option to reduce eye strain during night-time usage. This would require implementing a theme toggle.",
      category: "Postponed Issues",
      date: "Oct 5, 2023",
      comments: 5,
      upvotes: 24,
      downvotes: 2,
      status: "Not enough VP",
      priority: "Urgent",
      author: {
        uri: "/profile/brian-barajas",
        name: "Brian Barajas",
        avatar: "/avatars/brian-barajas.jpg"
      },
      solved: false,
      uri: "/issue/3",
      number: "3",
      type: "feature" as const,
      storage: "cascadefund" as const,
      projectId: "project-1",
      categoryId: "category-1",
      vpAmount: 100,
      currentVP: 0,
      topVP: 0,
      minVP: 10
    },
    {
      id: 4,
      title: "Data export feature crashes with large datasets",
      description: "When attempting to export data sets larger than 50,000 records, the application crashes. We need to implement pagination or streaming.",
      category: "Postponed Issues",
      date: "Oct 4, 2023",
      comments: 5,
      upvotes: 23,
      downvotes: 0,
      status: "Already Solved",
      priority: "Urgent",
      author: {
        uri: "/profile/brian-barajas",
        name: "Brian Barajas",
        avatar: "/avatars/brian-barajas.jpg"
      },
      solved: true,
      uri: "/issue/4",
      number: "4",
      type: "bug" as const,
      storage: "github" as const,
      projectId: "project-1",
      categoryId: "category-1",
      vpAmount: 100,
      currentVP: 0,
      topVP: 0,
      minVP: 10
    }
  ]

  return (
    <PageLikePanel title={<>Issues <Badge variant="gray">4</Badge></>} rightHeader={<Link href="/data/issue/post" className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors" >Add Issue</Link>}>
      <div className="p-6">
        <div className="mb-6">
          <div className="flex items-center space-x-2 mb-4">
            <div className="flex-1">
              <div className="relative">
                <svg className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
                <input
                  type="text"
                  placeholder="Search and upvote similar issue"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
          </div>

          <div className="flex items-center justify-between mb-4">
            <div className="flex flex-wrap gap-2">
              <Badge variant="gray" active>All</Badge>
              <Badge variant="red">Bug</Badge>
              <Badge variant="blue">Fix</Badge>
              <Badge variant="orange">Urgent</Badge>
              <Badge variant="green">Wish</Badge>
              <Badge variant="gray">Suggested</Badge>
              <Badge variant="gray">Following</Badge>
              <Badge variant="purple">My</Badge>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-600">Sort by:</span>
              <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
                <option>Priority</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {issues.map((issue) => (
            <IssueCard key={issue.id} {...issue} />
          ))}
        </div>
      </div>
    </PageLikePanel>
  )
}

export default IssuesSection
