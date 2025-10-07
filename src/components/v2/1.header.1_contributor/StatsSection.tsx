import React from 'react'
import StatCard from './ui/StatCard'

const StatsSection: React.FC = () => {
  const stats = [
    {
      number: '12',
      label: 'signups',
      period: 'In a week',
      description: 'In the last week, we had 12 signups and there are 12 people signed up for newsletters.'
    },
    {
      number: '3',
      label: 'projects',
      period: 'In a week',
      description: 'There are three projects added on CascadeFund. Find out more and vote for the next one.'
    },
    {
      number: '28,465',
      label: 'votes',
      period: 'Voted for release',
      description: 'In the last week, we had 12 signups and we are working on it asap. To track its progress visit the issue page.'
    }
  ]

  return (
    <section className="py-16 bg-blue-gradient">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              number={stat.number}
              label={stat.label}
              period={stat.period}
              description={stat.description}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
