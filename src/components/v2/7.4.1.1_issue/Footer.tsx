import React from 'react'
import Logo from './ui/Logo'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Logo variant="dark" />
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-lg font-semibold">Footer Navigation</span>
            <div className="w-6 h-6 bg-cascade-teal rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center text-gray-400">
          © 2025 Ara Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
