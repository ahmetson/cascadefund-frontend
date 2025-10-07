import React from 'react'
import Logo from './Logo'
import Button from './Button'
import UserProfile from './UserProfile'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Logo />
        
        <div className="flex items-center space-x-6">
          <Button variant="secondary">Reflect</Button>
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Projects</span>
            <span className="bg-purple-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-medium">
              2
            </span>
          </div>
          <UserProfile />
        </div>
      </div>
    </header>
  )
}

export default Header
