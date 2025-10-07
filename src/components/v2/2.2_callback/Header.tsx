import React from 'react'
import Logo from './Logo'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center h-16">
          <Logo />
        </div>
      </div>
    </header>
  )
}

export default Header
