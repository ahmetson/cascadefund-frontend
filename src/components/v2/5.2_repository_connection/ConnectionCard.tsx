import React from 'react'
import ProgressStep from './ProgressStep'
import LinkBtn from '../LinkBtn'

const ConnectionCard: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Initiating a session',
      description: 'Successfully established a secure connection to GitHub\'s API',
      status: 'completed' as const,
      progress: 100
    },
    {
      id: 2,
      title: 'Downloading project information from GitHub',
      description: 'Retrieved repository metadata, commit history, and contributor information',
      status: 'completed' as const,
      progress: 85
    },
    {
      id: 3,
      title: 'Fetching the SBOM',
      description: 'Software Bill of Materials successfully generated and analyzed',
      status: 'in-progress' as const,
      progress: 60
    },
    {
      id: 4,
      title: 'Analyzing dependencies',
      description: 'Identified and categorized all project dependencies',
      status: 'in-progress' as const,
      progress: 75
    },
    {
      id: 5,
      title: 'Preparing project summary',
      description: 'Compilation of repository data complete and ready for review',
      status: 'in-progress' as const,
      progress: 40
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8">
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Connecting to Repo Host</h2>
        <p className="text-gray-600 max-w-md mx-auto">
          We're establishing a connection to GitHub and retrieving information about your repository. This process may take a few moments.
        </p>
      </div>

      <div className="space-y-6 mb-8">
        {steps.map((step) => (
          <ProgressStep
            key={step.id}
            title={step.title}
            description={step.description}
            status={step.status}
            progress={step.progress}
          />
        ))}
      </div>

      <div className="flex justify-center">
        <LinkBtn variant="blue" label="Next" href='/v2/maintainer/project/fork' />
      </div>
    </div>
  )
}

export default ConnectionCard
