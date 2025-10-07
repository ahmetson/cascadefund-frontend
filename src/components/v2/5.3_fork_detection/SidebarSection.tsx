import React from 'react'

interface SidebarItem {
  title?: string
  name?: string
  description?: string
  number?: string
}

interface SidebarSectionProps {
  title: string
  items: SidebarItem[]
  showNumbers?: boolean
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items, showNumbers = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
      <h3 className="font-medium text-gray-900 mb-4">{title}</h3>
      <div className="space-y-3">
        {items.map((item, index) => (
          <div key={index} className="text-sm">
            {showNumbers ? (
              <div className="flex items-center justify-between">
                <span className="text-gray-900">{item.name}</span>
                <span className="text-gray-500 text-xs">{item.number}</span>
              </div>
            ) : (
              <>
                <div className="font-medium text-gray-900 mb-1">{item.title}</div>
                <div className="text-gray-600">{item.description}</div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default SidebarSection
