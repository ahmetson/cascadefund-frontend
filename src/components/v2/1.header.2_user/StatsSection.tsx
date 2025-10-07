import React from 'react'
import Card from './ui/Card'

const stats = [
  {
    number: "12",
    label: "signups",
    description: "In the last week, since the CascadeFund launch, there are 12 signups from people who want to be notified."
  },
  {
    number: "3", 
    label: "projects",
    description: "There are three projects added on CascadeFund since it launch, check them out."
  },
  {
    number: "28,465",
    label: "votes",
    description: "It's the number's close to releases, but we are confident it keeps the momentum going and more people will join."
  }
]

const StatsSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, index) => (
            <Card key={index} className="p-8 text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">
                {stat.number}
              </div>
              <div className="text-lg font-semibold text-gray-900 mb-4">
                {stat.label}
              </div>
              <p className="text-gray-600 text-sm">
                {stat.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default StatsSection
