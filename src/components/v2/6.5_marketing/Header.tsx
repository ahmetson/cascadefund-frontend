import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-cascade-blue rounded flex items-center justify-center">
            <span className="text-white text-sm font-bold">C</span>
          </div>
          <span className="text-xl font-semibold text-cascade-blue">CascadeFund</span>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded-md hover:bg-gray-200">
            Reflect
          </button>
          <div className="flex items-center space-x-2">
            <span className="text-gray-700">Projects</span>
            <div className="w-6 h-6 bg-cascade-blue text-white rounded-full flex items-center justify-center text-sm">
              2
            </div>
          </div>
          <div className="w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center">
            <span className="text-white text-sm font-bold">A</span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
