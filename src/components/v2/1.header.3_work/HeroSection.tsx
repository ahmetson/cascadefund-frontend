import React from 'react'
import Button from './ui/Button'

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-teal-500 text-white py-20">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          How CascadeFund Works
        </h1>
        <p className="text-xl mb-8 opacity-90">
          A story of Maintainers, Contributors, and Influencers working together.
        </p>
        
        <div className="mb-12">
          <div className="flex justify-center items-center space-x-4">
            <div className="w-16 h-16 bg-orange-400 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-16 h-16 bg-blue-400 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
            <div className="w-16 h-16 bg-teal-400 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        <Button variant="success" size="lg">
          Get Started
        </Button>
      </div>
    </section>
  )
}

export default HeroSection
