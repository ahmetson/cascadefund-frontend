import React from 'react'
import LinkBtn from '../LinkBtn'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <svg className="h-8 w-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
            </div>
            <div className="ml-2">
              <span className="text-xl font-bold text-gray-900">CascadeFund</span>
              <span className="text-sm text-gray-500 ml-1">by Ara project</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Find maintainers
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              Get funded
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              How it works
            </a>
            <a href="#" className="text-gray-700 hover:text-blue-600 transition-colors">
              All funded projects
            </a>
          </nav>

          <div className="flex items-center space-x-4">
            <LinkBtn label='Log In' href="/v2/login" variant="purple" />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
