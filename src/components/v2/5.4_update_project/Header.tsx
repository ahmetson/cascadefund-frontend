import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center">
          <svg className="w-8 h-8 text-cascade-blue mr-2" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
          </svg>
          <h1 className="text-2xl font-bold text-cascade-blue">CascadeFund</h1>
        </div>
      </div>
    </header>
  )
}

export default Header
