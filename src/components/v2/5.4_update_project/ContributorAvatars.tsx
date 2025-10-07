import React from 'react'

const ContributorAvatars: React.FC = () => {
  const contributors = [
    { id: 1, name: 'User 1', avatar: 'https://dummyimage.com/32x32/4FC3F7/ffffff?text=U1' },
    { id: 2, name: 'User 2', avatar: 'https://dummyimage.com/32x32/2C3E50/ffffff?text=U2' },
    { id: 3, name: 'User 3', avatar: 'https://dummyimage.com/32x32/E74C3C/ffffff?text=U3' },
    { id: 4, name: 'User 4', avatar: 'https://dummyimage.com/32x32/27AE60/ffffff?text=U4' },
  ]

  return (
    <div>
      <h4 className="text-sm font-medium text-gray-700 mb-2">Contributors</h4>
      <div className="flex items-center space-x-2">
        {contributors.map((contributor) => (
          <img
            key={contributor.id}
            src={contributor.avatar}
            alt={contributor.name}
            className="w-8 h-8 rounded-full border-2 border-white shadow-sm"
            referrerPolicy="no-referrer"
          />
        ))}
        <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white shadow-sm flex items-center justify-center">
          <span className="text-xs text-gray-600 font-medium">+</span>
        </div>
      </div>
    </div>
  )
}

export default ContributorAvatars
