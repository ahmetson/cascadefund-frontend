import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-amber-800/50 text-white px-6 py-4 header z-40">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <h1 className="text-xl font-bold">Cascade Fund</h1>
          {/* <nav className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-amber-200 transition-colors">Guide</a>
            <a href="#" className="hover:text-amber-200 transition-colors">Check my balance</a>
          </nav> */}
        </div>
        <div className="flex items-center space-x-4">
          {/* <button className="hover:text-amber-200 transition-colors">My Projects</button>
          <div className="w-8 h-8 bg-amber-600 rounded-full flex items-center justify-center">
            <span className="text-sm">👤</span>
          </div> */}
        </div>
      </div>
    </header>
  )
}

export default Header
