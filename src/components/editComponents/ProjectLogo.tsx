import React from 'react'

const ProjectLogo: React.FC = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center mb-2">
        <svg className="w-12 h-12 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      </div>
      <span className="text-sm text-gray-600">Project Logo</span>
    </div>
  )
}

export default ProjectLogo
