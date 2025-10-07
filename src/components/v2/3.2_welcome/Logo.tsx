import React from 'react'

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <svg className="w-8 h-8 text-cascade-blue" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
      <span className="text-xl font-semibold text-gray-800">
        <span className="text-cascade-blue">Cascade</span>Fund
      </span>
    </div>
  )
}

export default Logo
