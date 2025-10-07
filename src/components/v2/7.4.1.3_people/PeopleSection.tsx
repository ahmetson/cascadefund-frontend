import React from 'react'
import PersonCard from './PersonCard'

const PeopleSection: React.FC = () => {
  const people = [
    {
      name: 'Sarah Johnson',
      role: 'Maintainer',
      avatar: 'https://dummyimage.com/40x40/4FC3F7/ffffff?text=SJ',
      hasNotification: false
    },
    {
      name: 'David Rodriguez',
      role: 'Contributor',
      avatar: 'https://dummyimage.com/40x40/26C6DA/ffffff?text=DR',
      hasNotification: true,
      taskCount: '2 tasks completed'
    },
    {
      name: 'Emily Wong',
      role: 'Influencer',
      avatar: 'https://dummyimage.com/40x40/9C27B0/ffffff?text=EW',
      hasNotification: false,
      points: '23VP'
    },
    {
      name: 'Michael Thompson',
      role: 'Influencer',
      avatar: 'https://dummyimage.com/40x40/FF9800/ffffff?text=MT',
      hasNotification: false,
      points: '23VP'
    },
    {
      name: 'Jessica Miller',
      role: 'Influencer',
      avatar: 'https://dummyimage.com/40x40/E91E63/ffffff?text=JM',
      hasNotification: false,
      points: '23VP'
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="flex border-b border-gray-200">
        <button className="flex-1 px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">
          Rating Issue
        </button>
        <button className="flex-1 px-4 py-3 text-sm font-medium text-gray-500 hover:text-gray-700">
          Messages
        </button>
        <button className="flex-1 px-4 py-3 text-sm font-medium text-white bg-purple-500 rounded-tr-lg">
          People
        </button>
      </div>
      
      <div className="p-4">
        <div className="space-y-3">
          {people.map((person, index) => (
            <PersonCard key={index} {...person} />
          ))}
        </div>
        
        <div className="mt-4 p-3 bg-gray-50 rounded text-center">
          <p className="text-sm text-gray-600">Anyone who invested, or anyone who messages are added here.</p>
          <p className="text-xs text-gray-500 mt-1">You can only delete contributors if not assigned any issue.</p>
        </div>
      </div>
    </div>
  )
}

export default PeopleSection
