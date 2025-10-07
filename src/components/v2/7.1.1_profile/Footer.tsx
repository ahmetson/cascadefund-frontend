import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-cascade-blue rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">C</span>
            </div>
            <span className="text-xl font-semibold">CascadeFund</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <span className="text-gray-400">Footer Navigation</span>
            <div className="w-6 h-6 bg-cascade-blue rounded-full flex items-center justify-center">
              <span className="text-white text-xs">?</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700 text-center text-gray-400 text-sm">
          © 2025 Ara Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
