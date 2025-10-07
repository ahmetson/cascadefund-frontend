import React from 'react'
import Logo from './Logo'
import NavigationItem from './NavigationItem'
import UserProfile from './UserProfile'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
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
                label="Project" 
                sublabel="Blog Site" 
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
      </div>
    </header>
  )
}

export default Header
