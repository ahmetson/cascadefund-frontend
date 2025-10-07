import React from 'react'
import Card from './ui/Card'

interface Scenario {
  id: string
  title: string
  description: string
  characters: Array<{
    name: string
    role: string
    avatar: string
  }>
}

const scenarios: Scenario[] = [
  {
    id: '1',
    title: 'Delegate',
    description: 'Sometimes a maintainer gets busy. They delegate tasks to trusted contributors who can help manage the project and make decisions on their behalf.',
    characters: [
      {
        name: 'Maintainer',
        role: 'Project Owner',
        avatar: 'https://dummyimage.com/60x60/f3f4f6/374151?text=M'
      },
      {
        name: 'Core Contributor',
        role: 'Trusted Helper',
        avatar: 'https://dummyimage.com/60x60/dbeafe/1e40af?text=C'
      }
    ]
  },
  {
    id: '2',
    title: 'Discoverable Fork',
    description: 'If the project is abandoned or neglected, contributors can create discoverable forks that the community can find and support instead.',
    characters: [
      {
        name: 'New Maintainer',
        role: 'Fork Creator',
        avatar: 'https://dummyimage.com/60x60/ecfdf5/059669?text=N'
      },
      {
        name: 'Community',
        role: 'Supporters',
        avatar: 'https://dummyimage.com/60x60/fef3c7/d97706?text=C'
      },
      {
        name: 'Contributor',
        role: 'Helper',
        avatar: 'https://dummyimage.com/60x60/dbeafe/1e40af?text=H'
      }
    ]
  }
]

const MaintainerSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          When Maintainer Can't Do It All
        </h2>
        
        <div className="space-y-12">
          {scenarios.map((scenario) => (
            <Card key={scenario.id} className="p-8">
              <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {scenario.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {scenario.description}
                  </p>
                </div>
                
                <div className="flex items-center space-x-4">
                  {scenario.characters.map((character, index) => (
                    <div key={index} className="text-center">
                      <img
                        src={character.avatar}
                        alt={character.name}
                        className="w-16 h-16 rounded-full mx-auto mb-2"
                        referrerPolicy="no-referrer"
                      />
                      <p className="text-sm font-medium text-gray-900">
                        {character.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {character.role}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default MaintainerSection
