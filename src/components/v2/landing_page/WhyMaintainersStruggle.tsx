import React from 'react'
import StruggleCard from './ui/StruggleCard'

const WhyMaintainersStruggle: React.FC = () => {
  const struggles = [
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Unsustainable work",
      description: "Maintaining open source often means unpaid overtime, burnout from constant demands, and inadequate support.",
      color: "text-green-600"
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
        </svg>
      ),
      title: "Burnout",
      description: "The pressure to keep projects running while balancing other responsibilities leads to exhaustion and decreased motivation.",
      color: "text-orange-600"
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Scalable priorities",
      description: "Balancing feature requests against maintenance and bug fixing, leading to challenging prioritization and frustration with users.",
      color: "text-purple-600"
    },
    {
      icon: (
        <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
      title: "Dependency struggles",
      description: "Managing complex dependency chains affects stability with other projects, creates technical debt and integration issues.",
      color: "text-gray-600"
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Maintainers Struggle
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <img 
              src="https://dummyimage.com/500x400/f8fafc/64748b?text=Struggling+Developer"
              alt="Struggling developer"
              className="w-full h-auto rounded-lg"
              referrerpolicy="no-referrer"
            />
          </div>
          
          <div className="order-1 md:order-2 space-y-6">
            {struggles.map((struggle, index) => (
              <StruggleCard
                key={index}
                icon={struggle.icon}
                title={struggle.title}
                description={struggle.description}
                iconColor={struggle.color}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyMaintainersStruggle
