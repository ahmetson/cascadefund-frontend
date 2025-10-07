import React from 'react'

const InfoCard: React.FC = () => {
  return (
    <div className="bg-blue-50 rounded-lg border border-blue-200 p-6">
      <div className="flex items-start space-x-3">
        <div className="flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 mt-0.5">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        <div className="flex-1">
          <h3 className="text-sm font-medium text-gray-800 mb-2">
            What if your repository hosted elsewhere besides GitHub?
          </h3>
          <p className="text-sm text-gray-600 mb-4">
            For now we only support GitHub due it's popularity and API for SBOM. Other git servers are on the roadmap. Consider to upvote with the voting power and be the CascadeFund influencer to speed it up.
          </p>
          <a 
            href="#" 
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-1">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="currentColor"/>
              <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            CascadeFund's Influence page
          </a>
        </div>
      </div>
    </div>
  )
}

export default InfoCard
