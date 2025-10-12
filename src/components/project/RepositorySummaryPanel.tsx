import React from 'react'
import Card from '@/components/utilitified_decorations/PagelikeCard'
import StatCard from '@/components/StatInfoPanel'
import ContributorAvatars from '@/components/AvatarList'

const RepositorySummary: React.FC = () => {
  const stats = [
    { label: 'Stars', value: '247', icon: 'star', color: 'yellow' },
    { label: 'Forks', value: '58', icon: 'fork', color: 'blue' },
    { label: 'Open Issues', value: '12', icon: 'issue', color: 'red' }
  ]

  return (
    <Card bg='gray-100' title={<div className="flex items-center">
        <svg className="w-5 h-5 text-green-600 mr-2" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" clipRule="evenodd" />
        </svg>
        <h3 className="text-lg font-semibold text-gray-900">Repository Summary</h3>
      </div>}>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {stats.map((stat) => (
          <StatCard key={stat.label} {...stat} />
        ))}
      </div>
      
      <ContributorAvatars title="Top Contributors" />
    </Card>
  )
}

export default RepositorySummary
