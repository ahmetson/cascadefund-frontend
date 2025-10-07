import React from 'react'
import FilterTabs from './FilterTabs'
import ProjectCard from './ProjectCard'
import Pagination from './Pagination'
import InfoBanner from './InfoBanner'

const ProjectsSection: React.FC = () => {
  const projectData = {
    title: "Hyperpayment",
    isInfluencer: true,
    rating: 4.8,
    forks: 1,
    likes: 23,
    isFollowing: true,
    originalProject: "Original project",
    issue: "Issue: Windows support",
    description: "A protocol and it's implementation to transfer a resource between arbitrary amount parties. Used for example in the CascadeFund to distribute donations",
    license: "MIT License",
    balance: "$1,240.00",
    cascadeBalance: "$350.00",
    totalAmount: "$45.00 Total",
    duration: "38 days",
    lastActivity: "1 day ago",
    totalCommits: "2,000",
    commitsPerDay: "8 commits / day",
    openIssues: 12,
    closedIssues: 45,
    avgResponseTime: "1 day for reply",
    collaborators: [
      { name: "Core Maintainers", percentage: 65, color: "bg-blue-500" },
      { name: "Repeat Contributors", percentage: 25, color: "bg-blue-400" },
      { name: "One-time Contributors", percentage: 10, color: "bg-gray-400" }
    ],
    activeYears: 8,
    maintainer: {
      name: "Jhansson",
      rating: "220 rating"
    },
    influencers: [
      { avatar: "https://dummyimage.com/32x32/4A90E2/ffffff?text=A" },
      { avatar: "https://dummyimage.com/32x32/4A90E2/ffffff?text=B" },
      { avatar: "https://dummyimage.com/32x32/4A90E2/ffffff?text=C" },
      { avatar: "https://dummyimage.com/32x32/4A90E2/ffffff?text=D" }
    ]
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <h1 className="text-2xl font-semibold text-gray-900">Projects</h1>
          <span className="bg-gray-200 text-gray-600 text-sm px-2 py-1 rounded">1</span>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <input
              type="text"
              placeholder="Search projects..."
              className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button className="p-2 text-gray-400 hover:text-gray-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>
          <select className="px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Sort by: Rating</option>
          </select>
        </div>
      </div>

      <FilterTabs />
      
      <InfoBanner />
      
      <div className="space-y-4">
        <ProjectCard {...projectData} />
        <ProjectCard {...projectData} />
      </div>
      
      <Pagination />
    </div>
  )
}

export default ProjectsSection
