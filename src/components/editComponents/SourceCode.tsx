import React from 'react'

const SourceCode: React.FC = () => {
  return (
    <section>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Source Code</h3>
      <div className="space-y-4">
        <div>
          <a href="#" className="text-blue-600 hover:text-blue-800">
            https://github.com/ars-foundation/web
          </a>
        </div>
        <div className="text-sm text-gray-600">
          <p>main* branch, commit id: <span className="font-mono">a4d5ea4</span></p>
          <p>The origin is a common cloud. This is not stored.</p>
        </div>
        <div className="flex items-center space-x-4">
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded text-sm">
            Sync
          </button>
          <span className="text-sm text-gray-600">
            Do you want to add more source locations?
          </span>
        </div>
      </div>
    </section>
  )
}

export default SourceCode
