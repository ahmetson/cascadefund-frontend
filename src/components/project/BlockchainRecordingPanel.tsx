import React from 'react'
import ProgressStep from '@/components/ProgressStep'
import Card from '@/components/utilitified_decorations/PagelikeCard'

const ConnectionCard: React.FC = () => {
  const steps = [
    {
      id: 1,
      title: 'Preparing SBOM data for blockchain registration',
      description: 'Successfully prepared the data to submit',
      status: 'completed' as const,
      progress: 100
    },
    {
      id: 2,
      title: 'Submitting transaction to blockchain network',
      description: 'Sending the data on your behalf to the network',
      status: 'completed' as const,
      progress: 85
    },
    {
      id: 3,
      title: 'Waiting for blockchain confirmation',
      description: 'Blockchain takes few seconds to complete. Tx to check: 0x01..231',
      status: 'in-progress' as const,
      progress: 60
    },
    {
      id: 4,
      title: 'Preparing the project in the task system',
      description: 'Identified and categorized all project dependencies',
      status: 'in-progress' as const,
      progress: 3
    },
    {
      id: 5,
      title: 'Removing the session log',
      description: 'Compilation of repository data complete and ready for review',
      status: 'pending' as const,
      progress: 0
    }
  ]

  return (
    <Card title={<div className='flex justify-left'>
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M9 12L11 14L15 10M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="#10B981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        Registering the Blockchain Record</div>
      }
    
      actions={[{
          variant: 'blue',
          children: 'Complete',
          href: '/data/project/completed'
      }]}
    >
        <p className="text-gray-600 max-w-md mx-auto">
          Creating an immutable record of your SBOM data on the blockchain
        </p>

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
    </Card>
  )
}

export default ConnectionCard
