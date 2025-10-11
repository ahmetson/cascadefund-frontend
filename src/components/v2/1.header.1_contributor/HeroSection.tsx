import React from 'react'
import Button from './ui/Button'

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            Turn your contributions into quests. Grow your skills.
            Get maintainer's support, become part of greater
            project.
          </h1>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            We're building the Contributor experience on CascadeFund — a new way to join
            open source projects, level up through quests, and get mentorship and
            recognition.
          </p>
        </div>

        <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 mb-8">
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-yellow-400 rounded-full mt-1 flex-shrink-0"></div>
              <p className="text-blue-100">The Contributor feature is still in development.</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-blue-400 rounded-full mt-1 flex-shrink-0"></div>
              <p className="text-blue-100">
                Upvote the "contributor page" issue on our roadmap to prioritize — to upvote, you need to be CascadeFund's user.
                <a href="#" className="text-blue-300 underline ml-1">Check how CascadeFund works!</a>
              </p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-5 h-5 bg-green-400 rounded-full mt-1 flex-shrink-0"></div>
              <p className="text-blue-100">Sign up for our newsletter to get notified the moment it goes live.</p>
            </div>
          </div>
          
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between">
            <Button variant="primary" className="mb-4 sm:mb-0">
              Notify Me
            </Button>
            <p className="text-sm text-blue-200">
              Note: We will send you exactly one email when the Contributor page is ready. Nothing else. No spam.
            </p>
          </div>
        </div>

        <div className="text-center">
          <button className="text-blue-200 hover:text-white flex items-center mx-auto">
            Learn more
            <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
