import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-cascade-green px-6 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold text-gray-800">Cascade Fund</h1>
      <div className="w-12 h-12 bg-gray-300 rounded-full overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=48&h=48&fit=crop&crop=face" 
          alt="Profile" 
          className="w-full h-full object-cover"
        />
      </div>
    </header>
  )
}

export default Header
