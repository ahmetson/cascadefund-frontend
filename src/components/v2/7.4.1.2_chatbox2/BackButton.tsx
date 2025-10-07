import React from 'react'

const BackButton: React.FC = () => {
  return (
    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800">
      <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
        <path d="M10 12L6 8L10 4" />
      </svg>
      <span className="font-medium">Back</span>
    </button>
  )
}

export default BackButton
