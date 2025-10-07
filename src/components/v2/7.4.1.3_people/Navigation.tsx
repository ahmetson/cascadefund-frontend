import React from 'react'

const Navigation: React.FC = () => {
  return (
    <nav className="flex items-center space-x-6">
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">Issues List</span>
        <span className="text-sm font-medium text-gray-900">Hard work</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-blue-600 underline">Cascading Work</span>
        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">2</span>
      </div>
      <div className="flex flex-col">
        <span className="text-sm text-gray-500">Project</span>
        <span className="text-blue-600 underline">"Blog Site"</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-blue-600 underline">Projects</span>
        <span className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">2</span>
      </div>
    </nav>
  )
}

export default Navigation
