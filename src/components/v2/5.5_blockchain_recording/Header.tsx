import React from 'react'
import Logo from './Logo'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="max-w-7xl mx-auto">
        <Logo />
      </div>
    </header>
  )
}

export default Header
