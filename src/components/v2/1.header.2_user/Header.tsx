import React from 'react'
import Button from './ui/Button'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">CascadeFund</span>
            </div>
          </div>
          
          <nav className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">Log in</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Find a Project</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">How it Works</a>
          </nav>
          
          <Button variant="primary">Sign Up</Button>
        </div>
      </div>
    </header>
  )
}

export default Header
