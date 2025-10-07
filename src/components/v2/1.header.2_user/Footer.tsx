import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
              </svg>
            </div>
            <span className="text-xl font-bold">CascadeFund</span>
          </div>
          
          <div className="flex items-center space-x-6">
            <span className="text-sm text-gray-400">Footer Navigation</span>
            <div className="w-6 h-6 bg-red-500 rounded"></div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-sm text-gray-400">
            © 2024 CascadeFund. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
