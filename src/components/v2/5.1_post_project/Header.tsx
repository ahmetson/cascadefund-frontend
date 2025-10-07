import React from 'react'
import Logo from './Logo'

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-4">
      <div className="max-w-6xl mx-auto">
        <Logo />
      </div>
    </header>
  )
}

export default Header
