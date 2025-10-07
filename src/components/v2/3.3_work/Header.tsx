import React from 'react'
import Button from './ui/Button'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
                </svg>
              </div>
              <span className="text-xl font-semibold text-primary">CascadeFund</span>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <select className="border border-gray-300 rounded-md px-3 py-1 text-sm">
              <option>Reflect</option>
            </select>
            
            <div className="flex items-center space-x-2">
              <Button variant="secondary" size="sm">
                Projects
              </Button>
              <div className="w-6 h-6 bg-purple-600 rounded-full flex items-center justify-center">
                <span className="text-white text-xs font-medium">2</span>
              </div>
            </div>
            
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 rounded-full overflow-hidden">
                <img 
                  src="https://dummyimage.com/32x32/4FC3F7/ffffff?text=U" 
                  alt="User avatar"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-sm">
                <div className="text-yellow-500 text-xs">★ 20 rating</div>
                <div className="text-gray-600 text-xs">Ahmedson</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
