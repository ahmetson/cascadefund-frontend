import React from 'react'
import Button from './ui/Button'

const DevelopmentSection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-blue-500 to-cyan-400 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-8">
          <svg className="w-16 h-16 mx-auto mb-4 text-white" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 2L3 7v11h4v-6h6v6h4V7l-7-5z"/>
          </svg>
        </div>
        
        <h2 className="text-3xl font-bold mb-8">
          Users platform is still in development.
        </h2>
        
        <div className="space-y-6 mb-10">
          <div className="flex items-center justify-center space-x-4">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">1</span>
            </div>
            <div className="text-left">
              <h3 className="font-semibold">Upgrade the Donor chat with activities</h3>
              <p className="text-blue-100">Set up coming and messaging for a registered user and check how CascadeFund works!</p>
            </div>
          </div>
          
          <div className="flex items-center justify-center space-x-4">
            <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold">2</span>
            </div>
            <div className="text-left">
              <h3 className="font-semibold">Then up the user marketplace</h3>
              <p className="text-blue-100">To get notified the moment it goes live.</p>
            </div>
          </div>
        </div>
        
        <Button variant="secondary" size="lg">Notify Me</Button>
        
        <p className="text-sm text-blue-100 mt-6 max-w-2xl mx-auto">
          Note: We will never spam you or share your email when the CascadeFund policy is ready, because we want to make sure you get the best experience.
        </p>
        
        <p className="text-xs text-blue-200 mt-4">
          We appreciate if you spread it because we just believe in your favorite projects.
        </p>
      </div>
    </section>
  )
}

export default DevelopmentSection
