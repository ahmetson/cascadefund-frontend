import React from 'react'
import Card from './ui/Card'

const RatingsSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          How Ratings and Voting Work
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Voting Power
              </h3>
              <p className="text-gray-600">
                The more impact a contributor makes, the more voting power they earn to influence project decisions.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Quest Completion
              </h3>
              <p className="text-gray-600">
                Users earn reputation and voting power by completing quests and contributing meaningfully to projects.
              </p>
            </Card>
            
            <Card className="p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Transparency
              </h3>
              <p className="text-gray-600">
                All ratings and contributions are visible to the community to ensure fairness and accountability.
              </p>
            </Card>
          </div>
          
          <div className="flex justify-center">
            <div className="relative">
              <div className="w-64 h-64 rounded-full border-8 border-gray-200 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">VOTE</div>
                  <div className="text-sm text-gray-500">Community Driven</div>
                </div>
              </div>
              
              <div className="absolute top-4 right-4 w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                A
              </div>
              <div className="absolute bottom-4 left-4 w-12 h-12 bg-green-500 rounded-full flex items-center justify-center text-white font-bold">
                B
              </div>
              <div className="absolute top-1/2 left-0 w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold transform -translate-y-1/2">
                C
              </div>
              <div className="absolute top-1/2 right-0 w-12 h-12 bg-purple-500 rounded-full flex items-center justify-center text-white font-bold transform -translate-y-1/2">
                D
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default RatingsSection
