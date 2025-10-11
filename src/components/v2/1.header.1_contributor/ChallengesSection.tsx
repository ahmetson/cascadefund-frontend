import React from 'react'
import ChallengeCard from '@/components/v2/InfoPanel'

const ChallengesSection: React.FC = () => {
  const challenges = [
    {
      icon: '🚀',
      title: 'Hard to start',
      description: 'Huge issue lists, unclear onboarding.'
    },
    {
      icon: '😰',
      title: 'Intimidating',
      description: 'Fear of making mistakes, harsh feedback.'
    },
    {
      icon: '👤',
      title: 'Low recognition',
      description: 'Efforts often go unnoticed, especially non-code work.'
    },
    {
      icon: '🤝',
      title: 'No mentorship',
      description: 'Hard to understand large codebases alone.'
    },
    {
      icon: '💀',
      title: 'Dead issues',
      description: 'PRs get ignored, contributors get demotivated.'
    },
    {
      icon: '☠️',
      title: 'Toxicity',
      description: 'Not all communities are welcoming.'
    }
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Contributors' Challenges</h2>
          <p className="text-xl text-gray-600">Open source is powerful, but being a contributor isn't always easy.</p>
        </div>

        <div className="flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <img 
              src="https://dummyimage.com/400x300/f5f5f5/333333?text=Developer+Illustration" 
              alt="Developer illustration"
              className="w-full max-w-md mx-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="lg:w-1/2 grid grid-cols-1 md:grid-cols-2 gap-4">
            {challenges.map((challenge, index) => (
              <ChallengeCard
                key={index}
                icon={challenge.icon}
                title={challenge.title}
                description={challenge.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChallengesSection
