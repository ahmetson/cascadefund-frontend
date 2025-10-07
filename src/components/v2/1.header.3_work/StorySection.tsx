import React from 'react'
import StoryStep from './ui/StoryStep'

interface Step {
  id: string
  number: number
  title: string
  description: string
  icon: string
}

const steps: Step[] = [
  {
    id: '1',
    number: 1,
    title: 'Maintainer signs up',
    description: 'Open source maintainer creates an account to start receiving funding for their projects.',
    icon: 'user-plus'
  },
  {
    id: '2',
    number: 2,
    title: 'Adds repository',
    description: 'Maintainer connects their GitHub repository to the platform.',
    icon: 'code'
  },
  {
    id: '3',
    number: 3,
    title: 'Gets share links — spreads word',
    description: 'Maintainer receives shareable links and starts promoting their project to potential supporters.',
    icon: 'share'
  },
  {
    id: '4',
    number: 4,
    title: 'CascadeFund analyzes repo — creates quests',
    description: 'Platform analyzes the repository and creates meaningful quests and contribution opportunities.',
    icon: 'search'
  },
  {
    id: '5',
    number: 5,
    title: 'User creates — gains voting power',
    description: 'Users create accounts and gain voting power by contributing to projects and completing quests.',
    icon: 'users'
  },
  {
    id: '6',
    number: 6,
    title: 'User provides issues',
    description: 'Users can submit issues and feature requests to help improve the project.',
    icon: 'exclamation'
  },
  {
    id: '7',
    number: 7,
    title: 'Maintainer works on issues',
    description: 'Maintainer addresses submitted issues based on community feedback and voting.',
    icon: 'cog'
  },
  {
    id: '8',
    number: 8,
    title: 'Issues become quests',
    description: 'Issues are transformed into actionable quests that contributors can work on.',
    icon: 'flag'
  },
  {
    id: '9',
    number: 9,
    title: 'Issues resolved — ratings distributed',
    description: 'Completed issues result in ratings and rewards being distributed to contributors.',
    icon: 'check-circle'
  },
  {
    id: '10',
    number: 10,
    title: 'Repeat cycle',
    description: 'The process continues with new issues, quests, and contributions.',
    icon: 'refresh'
  }
]

const StorySection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          The Story in 10 Steps
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {steps.map((step) => (
            <StoryStep
              key={step.id}
              number={step.number}
              title={step.title}
              description={step.description}
              icon={step.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default StorySection
