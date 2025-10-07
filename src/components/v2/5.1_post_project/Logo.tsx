import React from 'react'

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 2L26 8V24L16 30L6 24V8L16 2Z" fill="#4A90E2"/>
        <path d="M16 8L22 12V20L16 24L10 20V12L16 8Z" fill="#87CEEB"/>
      </svg>
      <span className="text-xl font-semibold text-gray-800">CascadeFund</span>
    </div>
  )
}

export default Logo
