import React from 'react'
import Logo from './Logo'
import NavigationItem from './NavigationItem'
import UserProfile from './UserProfile'

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-8">
          <Logo />
          <nav className="flex items-center space-x-6">
            <NavigationItem 
              label="Issues List" 
              sublabel="Hard work" 
              isActive={false}
            />
            <NavigationItem 
              label="Cascading Work" 
              count={2} 
              isActive={true}
            />
            <NavigationItem 
              label="Project 'Blog Site'" 
              isActive={false}
            />
            <NavigationItem 
              label="Projects" 
              count={2} 
              isActive={false}
            />
          </nav>
        </div>
        <UserProfile />
      </div>
    </header>
  )
}

export default Header
