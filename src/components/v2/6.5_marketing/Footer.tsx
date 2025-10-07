import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-cascade-blue rounded flex items-center justify-center">
              <span className="text-white text-sm font-bold">C</span>
            </div>
            <span className="text-xl font-semibold">CascadeFund</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-sm text-gray-300">Footer Navigation</span>
            <div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center">
              <span className="text-white text-xs">📧</span>
            </div>
          </div>
        </div>
        
        <div className="mt-6 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-400">© 2025 Ara Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
