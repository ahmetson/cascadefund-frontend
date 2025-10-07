import React from 'react'
import Logo from './Logo'
import Navigation from './Navigation'
import UserProfile from './UserProfile'

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Logo />
          <Navigation />
          <UserProfile />
        </div>
      </div>
    </header>
  )
}

export default Header
