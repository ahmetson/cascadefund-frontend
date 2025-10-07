import React from 'react'
import HeaderRight from './HeaderRight'

interface Props {
  activeRight?: number
  visibleRight?: number
}


const Header: React.FC<Props> = ({activeRight, visibleRight}) => {
  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">C</span>
          </div>
          <span className="text-xl font-semibold text-gray-800">CascadeFund</span>
        </div>
        
        <HeaderRight active={activeRight} visible={visibleRight} />
      </div>
    </header>
  )
}

export default Header
