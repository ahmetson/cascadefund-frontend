import React from 'react'

const SoftwareBillOfMaterials: React.FC = () => {
  const dependencies = [
    { name: 'react.js', version: '18.2.0' },
    { name: 'next.js', version: '13.4.0' },
    { name: 'tailwind', version: '3.3.0' },
    { name: 'typescript', version: '5.0.0' }
  ]

  return (
    <section>
      <h3 className="text-xl font-semibold text-gray-800 mb-4">Software bill of materials</h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="package or dependency name"
          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
        <div className="flex flex-wrap gap-2">
          {dependencies.map((dep, index) => (
            <span
              key={index}
              className="bg-green-500 text-white px-3 py-1 rounded-full text-sm"
            >
              {dep.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SoftwareBillOfMaterials
