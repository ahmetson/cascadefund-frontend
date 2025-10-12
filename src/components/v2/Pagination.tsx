import React from 'react'

const Pagination: React.FC = () => {
  return (
    <div className="flex items-center justify-center space-x-2 py-4">
      <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">
        Previous
      </button>
      
      <button className="px-3 py-2 text-sm bg-blue-500 text-white rounded">
        1
      </button>
      
      <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">
        2
      </button>
      
      <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">
        3
      </button>
      
      <button className="px-3 py-2 text-sm text-gray-500 hover:text-gray-700">
        Next
      </button>
    </div>
  )
}

export default Pagination
