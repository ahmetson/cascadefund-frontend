import React from 'react'

const IssueCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6 ">
      <h2 className="text-xl font-semibold text-gray-900 mb-4 w-full">
        OAuth Integration with Third-party Services
      </h2>
      
        <div className="space-y-4 text-gray-700 w-3/4 flex-none">
          <p>
            We need to implement OAuth 2.0 integration with major third-party services 
            (Google, Facebook, Twitter, GitHub) to streamline the user authentication 
            process. Current implementation requires separate authentication flows for 
            each service, creating inconsistent user experiences.
          </p>
          
          <p>
            The integration should handle token refresh, permission scopes, and 
            user profile data synchronization across all platforms.
          </p>
          
          <div className="mt-6">
            <h3 className="font-semibold text-gray-900 mb-3">Technical Requirements:</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Implement unified OAuth client library
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Create consistent token storage mechanism
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Design user permission management interface
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Develop automated token refresh process
              </li>
              <li className="flex items-start">
                <span className="w-2 h-2 bg-gray-400 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                Ensure GDPR compliance for all data transfers
              </li>
            </ul>
          </div>
      </div>
    </div>
  )
}

export default IssueCard
