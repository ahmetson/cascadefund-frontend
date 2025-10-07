import React from 'react'

const BackButton: React.FC = () => {
  return (
    <button className="flex items-center space-x-2 text-cascade-blue hover:text-blue-700">
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M9.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l4.293 4.293a1 1 0 010 1.414z" clipRule="evenodd" />
      </svg>
      <span className="text-sm font-medium">Back</span>
    </button>
  )
}

export default BackButton
