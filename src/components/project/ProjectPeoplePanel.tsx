import React from 'react'
import Avatar from '@/components/Avatar'
import Card from '@/components/utilitified_decorations/PagePanel'

const Sidebar: React.FC = () => {
  const people = [
    { name: 'Sarah Johnson', role: 'Maintainer', avatar: 'https://dummyimage.com/32x32/4FC3F7/ffffff?text=SJ' },
    { name: 'David Rodriguez', role: 'Influencer', avatar: 'https://dummyimage.com/32x32/4FC3F7/ffffff?text=DR' },
    { name: 'Echo Ma', role: 'Contributor', avatar: 'https://dummyimage.com/32x32/4FC3F7/ffffff?text=EM' },
    { name: 'Michael Thompson', role: 'Influencer', avatar: 'https://dummyimage.com/32x32/4FC3F7/ffffff?text=MT' },
    { name: 'Jessica Miller', role: 'Influencer', avatar: 'https://dummyimage.com/32x32/4FC3F7/ffffff?text=JM' }
  ]

  return (
    <Card title="People">
      {people.map((person, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar src={person.avatar} alt={person.name} size="sm" />
            <div>
              <div className="text-sm font-medium text-gray-900">{person.name}</div>
            </div>
          </div>
          <span className={`text-xs px-2 py-1 rounded-full ${person.role === 'Maintainer' ? 'bg-green-100 text-green-800' :
              person.role === 'Influencer' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
            }`}>
            {person.role}
          </span>
        </div>
      ))}
    </Card>
  )
}

export default Sidebar
