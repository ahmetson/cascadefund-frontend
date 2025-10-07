import React from 'react'
import Card from './Card'

const InfoPanel: React.FC = () => {
  return (
    <Card className="bg-gray-50">
      <div className="flex items-start space-x-3 mb-4">
        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" fill="#6B7280"/>
          </svg>
        </div>
        <div>
          <h3 className="font-medium text-gray-800 mb-1">What if your repository hosted elsewhere besides GitHub?</h3>
        </div>
      </div>
      
      <p className="text-sm text-gray-600 mb-4">
        For now we only support GitHub due it's popularity and API (for SBOM). Other git servers are on the roadmap. Consider to upvote with the voting power and be the CascadeFund influencer to speed it up:
      </p>
      
      <a 
        href="#" 
        className="inline-flex items-center space-x-2 text-sm text-cascade-blue hover:text-blue-700 transition-colors"
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M8 2L10 6H14L11 9L12 13L8 11L4 13L5 9L2 6H6L8 2Z" fill="currentColor"/>
        </svg>
        <span>CascadeFund's Influence page</span>
      </a>
    </Card>
  )
}

export default InfoPanel
