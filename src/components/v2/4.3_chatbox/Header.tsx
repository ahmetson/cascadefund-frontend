import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center">
              <svg className="w-8 h-8 text-cascade-blue mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="text-xl font-semibold text-cascade-blue">CascadeFund</span>
            </div>
          </div>
          
          <nav className="flex items-center space-x-8">
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">Issues List</span>
              <span className="text-sm font-medium">Hard work</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-sm text-blue-600 underline mr-2">Cascading Work</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">2</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-sm text-gray-600 mr-2">Project</span>
              <span className="text-sm text-blue-600 underline">"Blog Site"</span>
            </div>
            
            <div className="flex items-center">
              <span className="text-sm text-blue-600 underline mr-2">Projects</span>
              <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2 py-1 rounded-full">2</span>
            </div>
            
            <div className="flex items-center">
              <div className="flex -space-x-2">
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://dummyimage.com/32x32/4A90E2/ffffff?text=A" alt="User" referrerpolicy="no-referrer" />
                <img className="w-8 h-8 rounded-full border-2 border-white" src="https://dummyimage.com/32x32/E74C3C/ffffff?text=B" alt="User" referrerpolicy="no-referrer" />
              </div>
              <span className="ml-2 text-sm text-gray-600">5.20 rating</span>
              <span className="ml-1 text-sm text-blue-600">Attention</span>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
