import React from 'react'
import Logo from './Logo'
import UserProfile from './UserProfile'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Logo />
          <nav className="flex items-center space-x-8">
            <div className="flex items-center space-x-2">
              <span className="text-gray-700">Projects</span>
              <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </div>
            <UserProfile />
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
