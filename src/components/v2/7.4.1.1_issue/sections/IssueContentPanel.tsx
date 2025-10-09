import React from 'react'
import Card from '@/components/utilitified_decorations/PagelikeCard'
import Badge from '@/components/v2/Badge'
import NotificationBanner from '@/components/v2/NotificationBanner'

const IssueContent: React.FC = () => {
  return (
      <Card title="OAuth Integration with Third-party Services" actions={[]} rightHeader={<Badge variant='gray'>Don't affect rating</Badge>}>
        <NotificationBanner type="warning" title='Not on Roadmap'>
          <p className="text-sm text-yellow-700 mt-1">
          This issue is on the "Funded Issues" list.<br />
          How to move out? Go to the working directory, and drag and drop the issue to another list.
          </p>
        </NotificationBanner>
                
        <div className="prose max-w-none">
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
          
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Requirements:</h3>
          <ul className="list-disc list-inside space-y-2 text-gray-700 mb-6">
            <li>Implement unified OAuth client library</li>
            <li>Create consistent token storage mechanism</li>
            <li>Design user permission management interface</li>
            <li>Develop automated token refresh process</li>
            <li>Ensure GDPR compliance for all data transfers</li>
          </ul>
        </div>
      </Card>
  )
}

export default IssueContent
