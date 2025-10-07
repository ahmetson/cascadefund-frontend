import React from 'react'
import Button from './ui/Button'

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-4 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-blue-500" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="text-xl font-bold text-gray-900">CascadeFund</span>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6 text-sm text-gray-600">
          <a href="#" className="hover:text-gray-900">I'm a project maintainer</a>
          <a href="#" className="hover:text-gray-900">I'm a open source user</a>
          <a href="#" className="hover:text-gray-900">How it Works?</a>
          <a href="#" className="hover:text-gray-900">Did I receive donations?</a>
        </nav>
        
        <Button variant="primary" size="sm">
          Sign Up
        </Button>
      </div>
    </header>
  )
}

export default Header
