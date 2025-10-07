import React, { useState } from 'react'
import Card from './Card'
import Input from './Input'
import InfoBox from './InfoBox'
import InfoPanel from './InfoPanel'
import LinkBtn from '../LinkBtn'

const AddRepositoryCard: React.FC = () => {
  const [repositoryUrl, setRepositoryUrl] = useState('https://github.com/username/repository')

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2">
        <Card>
          <div className="text-center mb-8">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C13.1 2 14 2.9 14 4C14 5.1 13.1 6 12 6C10.9 6 10 5.1 10 4C10 2.9 10.9 2 12 2ZM21 9V7L15 1H5C3.89 1 3 1.89 3 3V21C3 22.11 3.89 23 5 23H11V21H5V3H13V9H21Z" fill="#22C55E"/>
              </svg>
            </div>
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">Add GitHub Repository</h2>
            <p className="text-gray-600">Enter the URL of the repository you want to add</p>
          </div>

          <div className="space-y-6">
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

            <InfoBox
              type="info"
              title="Repository Ownership Required"
              description="You must be the owner or have admin rights to the repository to proceed. This is necessary to verify ownership and enable integration with our platform."
            />

            <div className="text-center">
              <LinkBtn variant='blue' label='Next' href='/v2/maintainer/project/repository' />
            </div>

            <InfoBox
              type="neutral"
              title="Why we need repository access:"
              items={[
                "Generate Software Bill of Materials (SBOM)",
                "Verify code integrity and ownership",
                "Create blockchain records for your open source contributions"
              ]}
            />
          </div>
        </Card>
      </div>

      <div className="lg:col-span-1">
        <InfoPanel />
      </div>
    </div>
  )
}

export default AddRepositoryCard
