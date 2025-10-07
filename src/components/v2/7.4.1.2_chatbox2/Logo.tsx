import React from 'react'

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="mr-2">
        <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#4FC3F7"/>
        <path d="M2 17L12 22L22 17" stroke="#4FC3F7" strokeWidth="2" fill="none"/>
        <path d="M2 12L12 17L22 12" stroke="#4FC3F7" strokeWidth="2" fill="none"/>
      </svg>
      <span className="text-xl font-semibold text-cascade-blue">CascadeFund</span>
    </div>
  )
}

export default Logo
