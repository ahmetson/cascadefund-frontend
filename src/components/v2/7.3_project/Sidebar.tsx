import React from 'react'
import Avatar from './ui/Avatar'
import LinkBtn from '../LinkBtn'

const Sidebar: React.FC = () => {
  const people = [
    { name: 'Sarah Johnson', role: 'Maintainer', avatar: 'https://dummyimage.com/32x32/4FC3F7/ffffff?text=SJ' },
    { name: 'David Rodriguez', role: 'Influencer', avatar: 'https://dummyimage.com/32x32/4FC3F7/ffffff?text=DR' },
    { name: 'Echo Ma', role: 'Contributor', avatar: 'https://dummyimage.com/32x32/4FC3F7/ffffff?text=EM' },
    { name: 'Michael Thompson', role: 'Influencer', avatar: 'https://dummyimage.com/32x32/4FC3F7/ffffff?text=MT' },
    { name: 'Jessica Miller', role: 'Influencer', avatar: 'https://dummyimage.com/32x32/4FC3F7/ffffff?text=JM' }
  ]

  return (
    <aside className="w-full lg:w-80 space-y-6">
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">People</h3>
        <div className="space-y-3">
          {people.map((person, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <Avatar src={person.avatar} alt={person.name} size="sm" />
                <div>
                  <div className="text-sm font-medium text-gray-900">{person.name}</div>
                </div>
              </div>
              <span className={`text-xs px-2 py-1 rounded-full ${
                person.role === 'Maintainer' ? 'bg-green-100 text-green-800' :
                person.role === 'Influencer' ? 'bg-blue-100 text-blue-800' :
                'bg-gray-100 text-gray-800'
              }`}>
                {person.role}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-gray-900">Highlighted Interaction</h3>
          <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        </div>
        
        <div className="flex items-start space-x-3">
          <Avatar src="https://dummyimage.com/32x32/4FC3F7/ffffff?text=SJ" alt="Sarah Johnson" size="sm" />
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-1">
              <span className="text-sm font-medium text-gray-900">Sarah Johnson</span>
              <span className="text-xs text-green-600 font-medium">+341</span>
            </div>
            <div className="bg-gray-50 rounded-lg p-3 mb-2">
              <p className="text-sm text-gray-700">"@David your code is really good..."</p>
            </div>
            <div className="text-xs text-gray-500">today at 9:22 PM</div>
          </div>
        </div>
      </div>
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
        <h3 className="text-lg font-medium text-gray-900 mb-4">Interact</h3>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span className="text-sm font-medium">60 Voting Points</span>
          </div>
        </div>
        <p className="text-xs text-gray-500 mb-4">How does this affect the rating of the project</p>
        <LinkBtn variant="blue" className="w-full" label="Add Issue" href="/v2/issue/post" />
      </div>
    </aside>
  )
}

export default Sidebar
