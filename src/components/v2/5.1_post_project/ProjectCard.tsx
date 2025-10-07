import React from 'react'
import Card from './Card'

const ProjectCard: React.FC = () => {
  return (
    <Card className="mb-8 border-2 border-dashed border-gray-300">
      <div className="flex items-start space-x-4">
        <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M10 2L15 7H12V13H8V7H5L10 2Z" fill="#22C55E"/>
            <path d="M4 15H16V17H4V15Z" fill="#22C55E"/>
          </svg>
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Your first project</h2>
          <p className="text-gray-600">
            You just signed up, and choose to be a maintainer. Adding the project is the first step in the CascadeFund.
          </p>
        </div>
      </div>
    </Card>
  )
}

export default ProjectCard
