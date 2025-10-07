import React from 'react'
import RoadmapBadge from './RoadmapBadge'
import TechnicalRequirements from './TechnicalRequirements'
import IssuePriority from './IssuePriority'
import VotingSection from './VotingSection'

const IssueDetails: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="mb-6">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">OAuth Integration with Third-party Services</h1>
        <RoadmapBadge />
      </div>

      <div className="prose max-w-none mb-8">
        <p className="text-gray-700 mb-4">
          We need to implement OAuth 2.0 integration with major third-party services 
          (Google, Facebook, Twitter, GitHub) to streamline the user authentication 
          process. Current implementation requires separate authentication flows for 
          each service, creating inconsistent user experiences.
        </p>
        <p className="text-gray-700">
          The integration should handle token refresh, permission scopes, and 
          user profile data synchronization across all platforms.
        </p>
      </div>

      <TechnicalRequirements />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <IssuePriority />
        <VotingSection />
      </div>
    </div>
  )
}

export default IssueDetails
