import React from 'react'
import Button from './ui/Button'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-cascade-blue" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="text-xl font-bold text-cascade-blue">CascadeFund</span>
        </div>
        <Button variant="primary" size="sm">
          Sign Up
        </Button>
      </div>
    </header>
  )
}

export default Header
