import React from 'react'

interface StepProps {
  number: number
  title: string
  description: string
  illustration: string
  bgColor: string
}

const Step: React.FC<StepProps> = ({ number, title, description, illustration, bgColor }) => {
  return (
    <div className="flex flex-col items-center text-center space-y-4 max-w-sm mx-auto">
      <div className={`w-16 h-16 ${bgColor} rounded-full flex items-center justify-center text-white font-bold text-xl`}>
        {number}
      </div>
      <div className="w-48 h-48 bg-gray-200 rounded-lg flex items-center justify-center text-6xl">
        {illustration}
      </div>
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm">{description}</p>
    </div>
  )
}

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      number: 1,
      title: "Sign up on Cascade Fund",
      description: "Create your account to get started",
      illustration: "👥",
      bgColor: "bg-purple-400"
    },
    {
      number: 2,
      title: "Add your project repository on Cascade Fund",
      description: "Connect your open source project",
      illustration: "🔧",
      bgColor: "bg-purple-400"
    },
    {
      number: 3,
      title: "Share your donation link on social media channels",
      description: "Promote your project to potential donors",
      illustration: "📱",
      bgColor: "bg-purple-400"
    },
    {
      number: 4,
      title: "User tips your work",
      description: "Receive donations from supporters",
      illustration: "💰",
      bgColor: "bg-purple-400"
    },
    {
      number: 5,
      title: "Get 80%, while 20% to all libraries around globe",
      description: "Cascade Fund receives 2%",
      illustration: "📊",
      bgColor: "bg-purple-400"
    },
    {
      number: 6,
      title: "Cascade Fund tracks the rating of the projects",
      description: "Tips will motivate the best fork to have friendliest libraries possible",
      illustration: "⭐",
      bgColor: "bg-purple-400"
    }
  ]

  return (
    <section className="py-20 bg-gray-200 relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-gray-400 rounded-full"></div>
        <div className="absolute top-32 right-20 w-16 h-16 bg-gray-400 rounded-full"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-gray-400 rounded-full"></div>
        <div className="absolute bottom-40 right-1/3 w-12 h-12 bg-gray-400 rounded-full"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {steps.map((step) => (
            <Step key={step.number} {...step} />
          ))}
        </div>
        
        <div className="text-center mt-16">
          <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
            Sign Up
          </button>
        </div>
      </div>
    </section>
  )
}

export default ProcessSteps
