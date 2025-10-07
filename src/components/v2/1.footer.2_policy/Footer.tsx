import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-cascade-dark text-white py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
          <div className="flex items-center space-x-2 mb-6 md:mb-0">
            <div className="w-8 h-8 bg-cascade-blue rounded-lg flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="text-xl font-semibold">CascadeFund</span>
          </div>
          
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <h3 className="text-lg font-medium">Footer Navigation</h3>
              <span className="text-cascade-blue">▲</span>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-600 my-8" />
        
        <div className="text-center text-gray-400 text-sm">
          © 2025 Ars Foundation. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
