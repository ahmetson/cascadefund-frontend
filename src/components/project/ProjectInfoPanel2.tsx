import React from 'react'
import Button from '@/components/Button'
import Badge from '@/components/Badge'
import StatCard from '@/components/StatInfoPanel2'
import CollaborationChart from '@/components/CollaborationChart'

export interface ProjectInfoProps {
  title: string
  isInfluencer: boolean
  rating: number
  forks: number
  likes: number
  isFollowing: boolean
  originalProject: string
  issue: string
  description: string
  license: string
  balance: string
  cascadeBalance: string
  totalAmount: string
  duration: string
  lastActivity: string
  totalCommits: string
  commitsPerDay: string
  openIssues: number
  closedIssues: number
  avgResponseTime: string
  collaborators: Array<{
    name: string
    percentage: number
    color: string
  }>
  activeYears: number
  maintainer: {
    name: string
    rating: string
  }
  influencers: Array<{
    avatar: string
  }>
}

const ProjectCard: React.FC<ProjectInfoProps> = ({
  title,
  isInfluencer,
  rating,
  forks,
  likes,
  isFollowing,
  originalProject,
  issue,
  description,
  license,
  balance,
  cascadeBalance,
  totalAmount,
  duration,
  lastActivity,
  totalCommits,
  commitsPerDay,
  openIssues,
  closedIssues,
  avgResponseTime,
  collaborators,
  activeYears,
  maintainer,
  influencers
}) => {
  return (
    <a href="/data/project" className="px-6 bg-white rounded-lg shadow-sm border-2 block border-blue-300 hover:bg-gray-200 hover:border-blue-400 p-6">
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center space-x-3 mb-2">
            <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
            {isInfluencer && (
              <Badge variant="info">You are influencer</Badge>
            )}
          </div>
          
          <div className="flex items-center space-x-4 text-sm text-gray-600 mb-2">
            <span>Fork of <span className="text-blue-600 underline">{originalProject}</span></span>
            <span className="flex items-center">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span className="text-blue-600 underline">{issue}</span>
            </span>
          </div>
          
          <p className="text-gray-700 mb-4">{description}</p>
          
          <div className="text-sm text-blue-600 underline mb-4">{license}</div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="font-medium">{rating}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
            </svg>
            <span>{forks}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span>{likes}</span>
          </div>
          
          <Button variant={isFollowing ? "secondary" : "primary"} size="sm">
            {isFollowing ? "Following" : "Follow"}
          </Button>
        </div>
      </div>
      
      <div className="grid grid-cols-4 gap-4 mb-6">
        <StatCard
          title="Balance / Cascade Balance"
          value={balance}
          subtitle={cascadeBalance}
          footer={`${totalAmount} / ${duration}`}
        />
        
        <StatCard
          title="Last Activity / Total Commits"
          value={lastActivity}
          subtitle={totalCommits}
          footer={commitsPerDay}
        />
        
        <StatCard
          title="Issues"
          value={`${openIssues} open`}
          subtitle={`${closedIssues} closed`}
          footer={`avg. ${avgResponseTime}`}
        />
        
        <div className="bg-gray-50 rounded-lg p-4">
          <h4 className="text-sm font-medium text-gray-700 mb-3">Collaboration</h4>
          <CollaborationChart collaborators={collaborators} />
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Active for {activeYears} years. By</span>
            <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
              <span className="text-xs font-medium">J</span>
            </div>
            <span className="text-sm font-medium">{maintainer.name}</span>
            <span className="text-xs text-yellow-500">{maintainer.rating}</span>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <div className="flex space-x-2">
            <Button variant="danger" size="sm">
              <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
              </svg>
              Work
              <span className="ml-1 bg-white text-red-600 text-xs px-1 rounded">3</span>
            </Button>
            
            <Button variant="info" size="sm">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Cascade Work
              <span className="ml-1 bg-white text-blue-600 text-xs px-1 rounded">6</span>
            </Button>
            
            <Button variant="secondary" size="sm">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              Influence
            </Button>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Influencers</span>
            <div className="flex -space-x-2">
              {influencers.map((influencer, index) => (
                <img
                  key={index}
                  src={influencer.avatar}
                  alt=""
                  className="w-8 h-8 rounded-full border-2 border-white"
                  referrerPolicy="no-referrer"
                />
              ))}
              <div className="w-8 h-8 bg-gray-200 rounded-full border-2 border-white flex items-center justify-center">
                <span className="text-xs text-gray-600">+4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </a>
  )
}

export default ProjectCard
