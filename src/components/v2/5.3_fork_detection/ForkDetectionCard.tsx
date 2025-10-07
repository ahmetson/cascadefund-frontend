import React from 'react'

const ForkDetectionCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-8 mb-6 text-center">
      <div className="mb-4">
        <svg className="w-16 h-16 text-green-500 mx-auto" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
        </svg>
      </div>
      <h1 className="text-2xl font-semibold text-gray-800 mb-2">Fork Repository Detected</h1>
      <p className="text-gray-600">
        We've identified that this repository is a fork. Please help us understand your changes.
      </p>
    </div>
  )
}

export default ForkDetectionCard
