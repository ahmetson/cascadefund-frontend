import React, { useState } from 'react'

const FilterTabs: React.FC = () => {
  const [activeTab, setActiveTab] = useState('By Issue...')

  const tabs = [
    { id: 'all', label: 'All' },
    { id: 'explore', label: 'Explore' },
    { id: 'my-projects', label: 'My Projects' },
    { id: 'following', label: 'Following' },
    { id: 'recommended', label: 'Recommended' },
    { id: 'by-issue', label: 'By Issue...', hasDropdown: true },
    { id: 'by-user', label: 'By User...', hasDropdown: true },
    { id: 'fork-of', label: 'Fork of...', hasDropdown: true }
  ]

  return (
    <div className="flex items-center space-x-2 border-b border-gray-200 overflow-x-hidden">
      {tabs.map((tab) => (
        <button
          key={tab.id}
          onClick={() => setActiveTab(tab.label)}
          className={`px-4 py-2 text-sm font-medium border-b-2 transition-colors ${
            activeTab === tab.label
              ? 'border-blue-500 text-blue-600 bg-blue-50'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          } ${tab.hasDropdown ? 'flex items-center space-x-1' : ''}`}
        >
          <span>{tab.label}</span>
          {tab.hasDropdown && (
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </button>
      ))}
    </div>
  )
}

export default FilterTabs
