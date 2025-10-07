import React from 'react'

const BackButton: React.FC = () => {
  return (
    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 font-medium">
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
      </svg>
      <span>Back</span>
    </button>
  )
}

export default BackButton
