import React from 'react'

const BackButton: React.FC = () => {
  return (
    <button className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 transition-colors">
      <div className="w-6 h-6 bg-blue-600 text-white rounded flex items-center justify-center text-sm font-bold">
        f
      </div>
      <span className="font-medium">Back</span>
    </button>
  )
}

export default BackButton
