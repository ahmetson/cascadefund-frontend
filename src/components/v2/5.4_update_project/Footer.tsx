import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-cascade-dark text-white py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <svg className="w-8 h-8 text-cascade-blue mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
            </svg>
            <h2 className="text-xl font-bold">CascadeFund</h2>
          </div>
          
          <div className="flex items-center space-x-4">
            <span className="text-cascade-blue font-medium">Footer Navigation</span>
            <div className="w-6 h-6 bg-cascade-blue rounded flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-600 text-center text-gray-400">
          <p>© 2025 Ara Foundation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
