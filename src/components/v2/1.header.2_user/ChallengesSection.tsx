import React from 'react'
import Card from './ui/Card'

const challenges = [
  {
    icon: "🌍",
    text: "You know open source is helping the world, almost for free."
  },
  {
    icon: "💰",
    text: "You want to help, but finding funds like donating thru the wallet."
  },
  {
    icon: "🗣️",
    text: "It doesn't feel right to donate — why not, if others aren't donating and not say anything."
  },
  {
    icon: "🎯",
    text: "And if you really want to donate, you don't know which project to support among many."
  },
  {
    icon: "👥",
    text: "When you do donate, it's usually for the person behind the project, not because it helps you do better."
  },
  {
    icon: "💸",
    text: "But most maintainers can't even show they need money."
  },
  {
    icon: "⏰",
    text: "Your donation ends up being one-time, since it doesn't guarantee you'll be heard."
  }
]

const ChallengesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Challenges Users Face
        </h2>
        
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/3">
            <img 
              src="https://dummyimage.com/400x400/f5f5f5/333333?text=Statue+of+Liberty+with+Chains" 
              alt="Challenges illustration"
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="lg:w-2/3">
            <div className="space-y-4">
              {challenges.map((challenge, index) => (
                <Card key={index} className="p-4">
                  <div className="flex items-start space-x-3">
                    <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                    </div>
                    <p className="text-gray-700">{challenge.text}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ChallengesSection
