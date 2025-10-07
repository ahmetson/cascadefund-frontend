import React from 'react'
import WorkflowCard from './ui/WorkflowCard'

const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
      title: "Users donate → Unlock better features",
      description: "When users support projects financially, they gain the ability to access premium features and priority support.",
      color: "bg-green-100 text-green-600"
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v10a2 2 0 002 2h8a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
      ),
      title: "Votes shape priorities & ratings",
      description: "Community input helps determine what features get built next and provides feedback on project quality and direction.",
      color: "bg-purple-100 text-purple-600"
    },
    {
      icon: (
        <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
        </svg>
      ),
      title: "Maintainers gain funding and recognition",
      description: "Direct lines, great rating for all maintainers, and sustainable funding for projects. Get helped to other devs as well.",
      color: "bg-blue-100 text-blue-600"
    }
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How It Works
          </h2>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => (
            <WorkflowCard
              key={index}
              icon={step.icon}
              title={step.title}
              description={step.description}
              iconBgColor={step.color}
            />
          ))}
        </div>
        
        <div className="bg-red-50 border border-red-200 rounded-lg p-6 text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-red-100 rounded-full p-3">
              <svg className="h-6 w-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">
            Be a User and send request to fund party Maintainer
          </h3>
          <p className="text-gray-600">
            Send direct funding requests to maintainers you want to support. Help them continue their valuable work by providing financial backing and encouragement.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
