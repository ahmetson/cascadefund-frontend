import React from 'react'
import Button from './ui/Button'

const HeroSection: React.FC = () => {
  return (
    <section className="gradient-bg text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Platform where Open Source Maintainers
          <br />
          <span className="text-blue-200">Connect, Collaborate, and Get Funded</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Discover similar projects, network with fellow maintainers and enhance your portfolio through quests
          — all while earning support from users in a reputation-driven ecosystem.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="bg-blue-500 hover:bg-blue-600">
            Sign Up as a Maintainer
          </Button>
          
          <button className="text-blue-200 hover:text-white transition-colors flex items-center">
            Learn more
            <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
