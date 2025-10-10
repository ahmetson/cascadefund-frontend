import React from 'react'
import ProgressBar from './ProgressBar'

interface ProgressStepProps {
  title: string
  description: string
  status: 'completed' | 'in-progress' | 'pending'
  progress: number
}

const ProgressStep: React.FC<ProgressStepProps> = ({ title, description, status, progress }) => {
  const getStatusIcon = () => {
    switch (status) {
      case 'completed':
        return (
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M20 6L9 17L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        )
      case 'in-progress':
        return (
          <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
            <div className="w-2 h-2 bg-white rounded-full"></div>
            <div className="w-2 h-2 bg-white rounded-full ml-0.5"></div>
          </div>
        )
      default:
        return (
          <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        )
    }
  }

  return (
    <div className="flex items-start space-x-4">
      <div className="flex-shrink-0 mt-1">
        {getStatusIcon()}
      </div>
      <div className="flex-1 min-w-0">
        <h3 className="text-base font-medium text-gray-800 mb-1">{title}</h3>
        <p className="text-sm text-gray-600 mb-3">{description}</p>
        <ProgressBar percentage={progress} />
      </div>
    </div>
  )
}

export default ProgressStep
