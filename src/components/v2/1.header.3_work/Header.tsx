import React from 'react'
import Button from './ui/Button'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-xl font-bold text-blue-600">CascadeFund</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="primary" size="sm">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
