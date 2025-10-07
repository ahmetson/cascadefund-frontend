import React from 'react'

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr-2">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#4FC3F7"/>
              <path d="M2 17L12 22L22 17" stroke="#4FC3F7" strokeWidth="2" fill="none"/>
              <path d="M2 12L12 17L22 12" stroke="#4FC3F7" strokeWidth="2" fill="none"/>
            </svg>
            <span className="text-xl font-semibold text-cascade-blue">CascadeFund</span>
          </div>
          <div className="flex items-center space-x-4">
            <span className="text-gray-400">Footer Navigation</span>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor" className="text-cascade-teal">
              <path d="M5 10L10 15L15 10H5Z"/>
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
