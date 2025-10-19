import React from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'

const Sidebar: React.FC = () => {
  return (
    <PageLikePanel title="Recent Activity" actions={[]}>
      <div className="space-y-3">
        <div className="flex items-start space-x-2">
          <svg className="w-4 h-4 text-gray-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 13V5a2 2 0 00-2-2H4a2 2 0 00-2 2v8a2 2 0 002 2h3l3 3 3-3h3a2 2 0 002-2zM5 7a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1zm1 3a1 1 0 100 2h3a1 1 0 100-2H6z" clipRule="evenodd" />
          </svg>
          <div className="text-xs">
            <p className="text-gray-900">Sarah Johnson commented on this issue</p>
            <p className="text-gray-500">Today at 9:22 AM</p>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <svg className="w-4 h-4 text-gray-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
          </svg>
          <div className="text-xs">
            <p className="text-gray-900">Michael Chen added David Rodriguez to this issue</p>
            <p className="text-gray-500">Yesterday at 1:15 PM</p>
          </div>
        </div>

        <div className="flex items-start space-x-2">
          <svg className="w-4 h-4 text-gray-400 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M17.707 9.293a1 1 0 010 1.414l-7 7a1 1 0 01-1.414 0l-7-7A.997.997 0 012 10V5a3 3 0 013-3h5c.256 0 .512.098.707.293l7 7zM5 6a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
          </svg>
          <div className="text-xs">
            <p className="text-gray-900">Emily Wong added tags to this issue</p>
            <p className="text-gray-500">3 days ago</p>
          </div>
        </div>
      </div>
    </PageLikePanel>
  )
}

export default Sidebar
