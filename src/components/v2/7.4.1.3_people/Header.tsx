import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import UserProfile from './UserProfile'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-8">
            <Logo />
            <Navigation />
          </div>
          <UserProfile />
        </div>
      </div>
    </header>
  )
}

export default Header
