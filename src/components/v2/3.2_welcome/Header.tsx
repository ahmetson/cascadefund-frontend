import React from 'react'
import Logo from './Logo'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <Logo />
      </div>
    </header>
  )
}

export default Header
