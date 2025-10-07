import React from 'react'

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <svg className="w-8 h-8 text-cascade-blue mr-2" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
      </svg>
      <span className="text-xl font-semibold text-cascade-blue">CascadeFund</span>
    </div>
  )
}

export default Logo
