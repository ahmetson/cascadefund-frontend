import React from 'react'

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <svg className="w-8 h-8 mr-2" viewBox="0 0 32 32" fill="none">
        <path d="M8 4L24 4C26.2091 4 28 5.79086 28 8V24C28 26.2091 26.2091 28 24 28H8C5.79086 28 4 26.2091 4 24V8C4 5.79086 5.79086 4 8 4Z" fill="#4FC3F7"/>
        <path d="M12 12L20 12L16 20L12 12Z" fill="white"/>
      </svg>
      <span className="text-xl font-semibold text-cascade-blue">CascadeFund</span>
    </div>
  )
}

export default Logo
