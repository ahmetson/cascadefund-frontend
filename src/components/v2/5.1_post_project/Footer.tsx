import React from 'react'
import Logo from './Logo'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div className="text-white">
            <Logo />
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-gray-300">Footer Navigation</span>
            <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6 1L9 4H7V8H5V4H3L6 1Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-gray-400 text-sm text-center">
            © 2025 Ara Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
