import React from 'react'
import Button from './ui/Button'

const DevelopmentSection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-gradient text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <svg className="w-16 h-16 text-white mx-auto mb-6" fill="currentColor" viewBox="0 0 20 20">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
          </svg>
          <h2 className="text-3xl font-bold mb-4">The Contributor platform is still in development.</h2>
        </div>

        <div className="space-y-6 mb-8">
          <div className="flex items-start space-x-4 text-left max-w-2xl mx-auto">
            <div className="w-8 h-8 bg-yellow-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <span className="text-yellow-900 font-bold text-sm">!</span>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Upvote the issue that will relaunch it</h3>
              <p className="text-blue-100">
                But to upvote, you need to be a registered user of CascadeFund.
                Check how CascadeFund works!
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 text-left max-w-2xl mx-auto">
            <div className="w-8 h-8 bg-green-400 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-4 h-4 text-green-900" fill="currentColor" viewBox="0 0 20 20">
                <path d="M16 12.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-1.5-1.5a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
            </div>
            <div>
              <h3 className="font-semibold mb-2">Sign up for our newsletter</h3>
              <p className="text-blue-100">to get notified the moment it goes live.</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Button variant="secondary" size="lg">
            Notify Me
          </Button>
          <p className="text-sm text-blue-200 max-w-md">
            Note: We will send you exactly one email when the Contributor page is ready. Nothing else. No spam.
          </p>
        </div>
      </div>
    </section>
  )
}

export default DevelopmentSection
