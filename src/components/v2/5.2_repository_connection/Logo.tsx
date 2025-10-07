import React from 'react'

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#4FC3F7"/>
        <path d="M2 17L12 22L22 17" stroke="#4FC3F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 12L12 17L22 12" stroke="#4FC3F7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
      <span className="text-xl font-semibold text-gray-800">CascadeFund</span>
    </div>
  )
}

export default Logo
