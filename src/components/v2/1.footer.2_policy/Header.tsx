import React from 'react'
import Button from './Button'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm px-4 py-3">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-cascade-blue rounded-lg flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <span className="text-xl font-semibold text-cascade-blue">CascadeFund</span>
        </div>
        <Button variant="primary" size="sm">
          Sign Up
        </Button>
      </div>
    </header>
  )
}

export default Header
