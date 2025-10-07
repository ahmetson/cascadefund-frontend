import React from 'react'

const BackButton: React.FC = () => {
  return (
    <button className="flex items-center text-blue-600 hover:text-blue-800 mb-4">
      <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
      </svg>
      Back
    </button>
  )
}

export default BackButton
