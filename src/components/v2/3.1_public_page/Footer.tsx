import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white px-4 py-8">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg className="w-8 h-8 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <span className="text-xl font-bold">CascadeFund</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-400">Footer Navigation</span>
          <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"/>
            </svg>
          </div>
        </div>
      </div>
      
      <div className="mt-8 pt-8 border-t border-gray-800 text-center text-sm text-gray-400">
        © 2025 Are Foundation. All rights reserved.
      </div>
    </footer>
  )
}

export default Footer
