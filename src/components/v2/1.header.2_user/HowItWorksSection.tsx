import React from 'react'
import Card from './ui/Card'

const steps = [
  {
    number: "1",
    title: "Donate → Voting Power",
    description: "Your donations turn into voting power for project decisions."
  },
  {
    number: "2", 
    title: "Voting Power → Guide project",
    description: "Use your voting power to influence project direction."
  },
  {
    number: "3",
    title: "Reputation Builds Networking",
    description: "Over time, by building your reputation and building trust with maintainers, you gain a reputation that network that helps you connect with other developers and may even help you should you ever own app ideas."
  },
  {
    number: "4",
    title: "Rating Multiplies Influence",
    description: "Your past donations carry more weight. Donations your rating strengthens them."
  },
  {
    number: "5",
    title: "Issues Resolved → Rating",
    description: "Once the issues is resolved, you get back rating."
  }
]

const HowItWorksSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          How CascadeFund Works
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="p-6 text-center">
              <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                {step.number}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">
                {step.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

export default HowItWorksSection
