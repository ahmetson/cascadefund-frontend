import React from 'react'
import Logo from './Logo'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="flex items-center">
              <svg className="w-8 h-8 mr-2" viewBox="0 0 32 32" fill="none">
                <path d="M8 4L24 4C26.2091 4 28 5.79086 28 8V24C28 26.2091 26.2091 28 24 28H8C5.79086 28 4 26.2091 4 24V8C4 5.79086 5.79086 4 8 4Z" fill="#4FC3F7"/>
                <path d="M12 12L20 12L16 20L12 12Z" fill="white"/>
              </svg>
              <span className="text-xl font-semibold text-cascade-blue">CascadeFund</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Footer Navigation</span>
            <svg className="w-6 h-6 text-cascade-teal" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>© 2025 Ara Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
