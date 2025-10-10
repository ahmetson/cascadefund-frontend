import React from 'react'
import Card from '@/components/utilitified_decorations/PagelikeCard'

const InfoCard: React.FC = () => {
  return (
    <Card title={
      <div className="flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 mt-0.5">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          What if your repository hosted<br /> elsewhere besides GitHub?
        </div>
      }
    
      actions={[{
        variant: 'gray',
        children: <>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            CascadeFund's Influence page
          </>,
        href: '#'
      }]}
    >
      <p className="text-sm text-gray-600 mb-4">
        For now we only support GitHub due it's popularity and API for SBOM. Other git servers are on the roadmap. Consider to upvote with the voting power and be the CascadeFund influencer to speed it up.
      </p>
    </Card>
  )
}

export default InfoCard
