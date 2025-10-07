import React from 'react'
import Card from './Card'

const IssueCard: React.FC = () => {
  return (
    <Card>
      <h2 className="text-xl font-semibold text-gray-900 mb-4">
        OAuth Integration with Third-party Services
      </h2>
      
      <div className="space-y-4">
        <p className="text-gray-700 text-sm leading-relaxed">
          We need to implement OAuth 2.0 integration with major third-party services 
          (Google, Facebook, Twitter, GitHub) to streamline the user authentication 
          process. Current implementation requires separate authentication flows for 
          each service, creating inconsistent user experiences.
        </p>
        
        <p className="text-gray-700 text-sm leading-relaxed">
          The integration should handle token refresh, permission scopes, and 
          user profile data synchronization across all platforms.
        </p>
        
        <div className="mt-6">
          <h3 className="font-semibold text-gray-900 mb-3">Technical Requirements:</h3>
          <ul className="space-y-2 text-sm text-gray-700">
            <li>• Implement unified OAuth client library</li>
            <li>• Create consistent token storage mechanism</li>
            <li>• Design user permission management interface</li>
            <li>• Develop automated token refresh process</li>
            <li>• Ensure GDPR compliance for all data transfers</li>
          </ul>
        </div>
      </div>
    </Card>
  )
}

export default IssueCard
