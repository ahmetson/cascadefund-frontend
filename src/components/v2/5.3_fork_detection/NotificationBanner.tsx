import React from 'react'

const NotificationBanner: React.FC = () => {
  return (
    <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
      <div className="flex">
        <div className="flex-shrink-0">
          <svg className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        </div>
        <div className="ml-3">
          <h3 className="text-sm font-medium text-yellow-800">Not registered on CascadeFund</h3>
          <div className="mt-2 text-sm text-yellow-700">
            <p>The project you have forked doesn't exist on CascadeFund.</p>
            <p>Cascade should reach them first.</p>
          </div>
          <div className="mt-3">
            <button className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700">
              Reach out
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationBanner
