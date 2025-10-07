import React from 'react'
import Logo from './Logo'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start">
          <div className="mb-8 md:mb-0">
            <div className="flex items-center mb-4">
              <svg className="w-8 h-8 text-cascade-blue mr-2" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
              </svg>
              <span className="text-xl font-bold text-white">CascadeFund</span>
            </div>
          </div>

          <div className="flex items-center space-x-4">
            <h3 className="text-lg font-semibold text-gray-300">Footer Navigation</h3>
            <div className="bg-cascade-blue rounded p-1">
              <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
              </svg>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8">
          <p className="text-center text-gray-400 text-sm">
            © 2025 Ara Foundation. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
