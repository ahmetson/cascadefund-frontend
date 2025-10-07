import React from 'react'

const InfoBanner: React.FC = () => {
  return (
    <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 rounded-r-md">
      <div className="flex items-start">
        <div className="flex-shrink-0">
          <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3 flex-1">
          <h3 className="text-sm font-medium text-yellow-800">Projects by issue</h3>
          <div className="mt-1 text-sm text-yellow-700">
            <p>
              <strong>Quest:</strong> Enter the issue text, the issues will appear below. • 
              <strong>Pick the Issue in the below</strong> • 
              <strong>Projects are shown. Click on "X" on top right to reset.</strong>
            </p>
            <p className="mt-1">
              <strong>Picked Issue:</strong> <span className="text-blue-600 underline">Issue: Windows support</span>
            </p>
          </div>
        </div>
        <button className="flex-shrink-0 ml-4 text-yellow-400 hover:text-yellow-600">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  )
}

export default InfoBanner
