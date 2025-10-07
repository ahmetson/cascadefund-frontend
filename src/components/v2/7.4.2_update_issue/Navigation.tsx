import React from 'react'
import Badge from './Badge'

const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center space-x-8">
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">Issues List</span>
        <span className="text-sm font-medium text-gray-800">Hard work</span>
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>
      
      <div className="flex items-center space-x-2">
        <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Cascading Work</a>
        <Badge count={2} />
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </div>

      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">Project</span>
        <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">"Blog Site"</a>
      </div>

      <div className="flex items-center space-x-2">
        <a href="#" className="text-blue-600 hover:text-blue-800 text-sm font-medium">Projects</a>
        <Badge count={2} />
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </nav>
  )
}

export default Navigation
