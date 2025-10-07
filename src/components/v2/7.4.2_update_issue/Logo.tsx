import React from 'react'

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="w-8 h-8 bg-gradient-to-r from-cascade-teal to-cascade-blue rounded mr-2"></div>
      <span className="text-xl font-semibold text-gray-800">CascadeFund</span>
    </div>
  )
}

export default Logo
