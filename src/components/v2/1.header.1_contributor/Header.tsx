import React from 'react'
import Button from './ui/Button'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-cascade-blue rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
                </svg>
              </div>
              <span className="text-xl font-bold text-gray-900">CascadeFund</span>
            </div>
            <span className="ml-2 text-sm text-gray-500">for open source contributors</span>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-gray-600 hover:text-gray-900">I'm a maintainer</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">I'm a open source user</a>
            <a href="#" className="text-cascade-blue hover:text-blue-700">How it Works?</a>
            <Button variant="primary">Sign Up</Button>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
