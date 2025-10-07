import React from 'react'
import StatusBadge from './StatusBadge'
import TechnicalRequirements from './TechnicalRequirements'

const IssueCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <h1 className="text-xl font-semibold text-gray-900">
            OAuth Integration with Third-party Services
          </h1>
        </div>

        <div className="bg-green-50 border-l-4 border-green-400 p-4 mb-6">
          <div className="flex">
            <div className="flex-shrink-0">
              <svg className="h-5 w-5 text-green-400" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="ml-3">
              <h3 className="text-sm font-medium text-green-800">
                On the Roadmap
              </h3>
              <div className="mt-1 text-sm text-green-700">
                This issue is on the <strong>v2.0.0</strong> roadmap.
              </div>
              <div className="mt-1 text-sm text-green-700">
                How to move out? Go to the working directory, and drag and drop the issue to another list.
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-4 mb-6">
          <p className="text-gray-700">
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
      </div>
    </div>
  )
}

export default IssueCard
