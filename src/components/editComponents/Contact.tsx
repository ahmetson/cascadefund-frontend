import React from 'react'

const Contact: React.FC = () => {
  return (
    <section>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact</h3>
      <div className="flex items-center space-x-4 mb-4">
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">
          Add
        </button>
        <span className="text-sm text-gray-600">telegram</span>
        <span className="text-sm text-gray-600">https://t.me/ars.group</span>
      </div>
      <div className="flex space-x-4">
        <button className="bg-cascade-red hover:bg-red-600 text-white px-4 py-2 rounded text-sm">
          Delete
        </button>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">
          Edit
        </button>
      </div>
    </section>
  )
}

export default Contact
