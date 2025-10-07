import React from 'react'
import Button from './ui/Button'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </div>
          <div>
            <h1 className="text-xl font-bold text-blue-600">CascadeFund</h1>
            <p className="text-xs text-gray-500">for open source maintainers</p>
          </div>
        </div>
        
        <nav className="hidden md:flex items-center space-x-6">
          <div className="text-sm text-gray-600">
            I'm a <a href="#" className="text-blue-500 underline">open source contributor</a>
          </div>
          <div className="text-sm text-gray-600">
            I'm a <a href="#" className="text-blue-500 underline">open source user</a>
          </div>
          <a href="#" className="text-sm text-blue-500 underline">How it Works?</a>
          <a href="#" className="text-sm text-gray-600 flex items-center">
            Did I receive donations? 
            <span className="ml-1 w-4 h-4 bg-gray-300 rounded-full flex items-center justify-center text-xs">?</span>
          </a>
        </nav>
        
        <Button variant="primary" size="sm">
          Sign Up
        </Button>
      </div>
    </header>
  )
}

export default Header
