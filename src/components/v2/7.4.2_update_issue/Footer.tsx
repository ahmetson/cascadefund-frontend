import React from 'react'
import Logo from './Logo'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-8 h-8 bg-gradient-to-r from-cascade-teal to-cascade-blue rounded mr-2"></div>
            <span className="text-xl font-semibold text-white">CascadeFund</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">Footer Navigation</span>
            <div className="w-8 h-8 bg-cascade-teal rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-400 text-sm">© 2025 Ara Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
