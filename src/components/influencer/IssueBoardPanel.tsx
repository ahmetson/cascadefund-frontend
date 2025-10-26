import React from 'react'
import Link from '@/components/custom-ui/Link'
import IssueCard from '@/components/issue/IssueLink'
import FilterableList from '@/components/list/FilterableList'
import { FilterOption } from '@/components/list/FilterToggle'

const IssuesSection: React.FC = () => {
  // Filter configuration for FilterableList
  const filters: FilterOption[] = [
    {
      id: 'all',
      label: 'All',
      sortIds: [
        { id: 'priority', label: 'Priority' },
        { id: 'date', label: 'Date' },
        { id: 'upvotes', label: 'Upvotes' },
        { id: 'comments', label: 'Comments' }
      ]
    },
    {
      id: 'bug',
      label: 'Bug',
      sortIds: [
        { id: 'priority', label: 'Priority' },
        { id: 'date', label: 'Date' }
      ]
    },
    {
      id: 'fix',
      label: 'Fix',
      sortIds: [
        { id: 'priority', label: 'Priority' },
        { id: 'date', label: 'Date' }
      ]
    },
    {
      id: 'urgent',
      label: 'Urgent',
      sortIds: [
        { id: 'priority', label: 'Priority' },
        { id: 'date', label: 'Date' }
      ]
    },
    {
      id: 'wish',
      label: 'Wish',
      sortIds: [
        { id: 'upvotes', label: 'Upvotes' },
        { id: 'date', label: 'Date' }
      ]
    },
    {
      id: 'suggested',
      label: 'Suggested',
      sortIds: [
        { id: 'upvotes', label: 'Upvotes' },
        { id: 'date', label: 'Date' }
      ]
    },
    {
      id: 'following',
      label: 'Following',
      sortIds: [
        { id: 'date', label: 'Date' },
        { id: 'upvotes', label: 'Upvotes' }
      ]
    },
    {
      id: 'my',
      label: 'My',
      sortIds: [
        { id: 'date', label: 'Date' },
        { id: 'priority', label: 'Priority' }
      ]
    }
  ]

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
    <FilterableList
      items={issues}
      itemComponent={IssueCard}
      filters={filters}
      searchPlaceholder="Search and upvote similar issue"
      searchableFields={['title', 'description']}
      showNumber={true}
    >
      <div className="flex justify-center mt-4">
        <Link href="/data/issue/post" className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
          Add Issue
        </Link>
      </div>
    </FilterableList>
  )
}

export default IssuesSection
