import React from 'react'
import IssueDetails from './IssueDetails'
import TechnicalRequirements from './TechnicalRequirements'
import IssuePriority from './IssuePriority'
import VotingPower from './VotingPower'

const IssueContent: React.FC = () => {
  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg p-6">
        <p className="text-gray-700 mb-4">
          We need to implement OAuth 2.0 integration with major third-party services 
          (Google, Facebook, Twitter, GitHub) to streamline the user authentication 
          process. Current implementation requires separate authentication flows for 
          each service, creating inconsistent user experiences.
        </p>
        <p className="text-gray-700 mb-6">
          The integration should handle token refresh, permission scopes, and 
          user profile data synchronization across all platforms.
        </p>
        
        <TechnicalRequirements />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <IssuePriority />
        <VotingPower />
      </div>
    </div>
  )
}

export default IssueContent
