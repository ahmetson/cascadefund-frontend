import React, { useState } from 'react'
import Card from '@/components/utilitified_decorations/PagelikeCard'
import Input from '@/components/Input'
import NotificationBanner from '@/components/NotificationBanner'

const AddRepositoryCard: React.FC = () => {
  const [repositoryUrl, setRepositoryUrl] = useState('https://github.com/username/repository')

  return (
        <Card 
          title={<>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H11V21H5V3H13V9H21Z" fill="#22C55E"/>
            </svg> Add GitHub Repository</>
          }
        
          actions={[{variant: 'blue', href: '/data/project/repository', children: 'Next'}]}          
        >
          <p className="text-gray-600">Enter the URL of the repository you want to add</p>
            <div>
              <label htmlFor="repository-url" className="block text-sm font-medium text-gray-700 mb-2">
                Repository URL
              </label>
              <Input
                id="repository-url"
                type="url"
                value={repositoryUrl}
                onChange={(e) => setRepositoryUrl(e.target.value)}
                placeholder="https://github.com/username/repository"
                className="w-full"
              />
            </div>

            <NotificationBanner type="info"
              title="Repository Ownership Required">
                You must be the owner or have admin rights to the repository to proceed. This is necessary to verify ownership and enable integration with our platform.
              </NotificationBanner>
            <NotificationBanner type="info"
              title="Why we need repository access:">
                Generate Software Bill of Materials (SBOM)<br />
                Verify code integrity and ownership<br />
                Create blockchain records for your open source contributions
              </NotificationBanner>
        </Card>
  )
}

export default AddRepositoryCard
