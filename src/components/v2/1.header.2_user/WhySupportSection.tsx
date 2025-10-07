import React from 'react'
import Card from './ui/Card'

const benefits = [
  {
    icon: "🌱",
    title: "Sustainable open source",
    description: "Support maintainers and small business."
  },
  {
    icon: "🎯",
    title: "Influence priorities", 
    description: "Developers aren't clients they shape what gets built."
  },
  {
    icon: "🏆",
    title: "Build reputation",
    description: "Grow your influence by helping others."
  },
  {
    icon: "👥",
    title: "Connect with people",
    description: "Network with that future collaborators and like-minded."
  },
  {
    icon: "🚀",
    title: "From lurker to leader",
    description: "Move from a passive user to an influencer with real impact."
  },
  {
    icon: "🤝",
    title: "Long-term collaboration",
    description: "Use your reputation to grow projects and help contributors for your future app ideas."
  }
]

const WhySupportSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Why Support Through CascadeFund
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {benefit.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default WhySupportSection
