import React from 'react'
import Button from './ui/Button'

const CallToAction: React.FC = () => {
  return (
    <section className="py-20 network-bg text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-16 h-16 border border-yellow-400 rounded-lg transform rotate-12"></div>
        <div className="absolute top-20 right-20 w-12 h-12 border border-blue-400 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-20 h-20 border border-green-400 rounded-lg transform -rotate-12"></div>
        <div className="absolute bottom-10 right-10 w-8 h-8 border border-purple-400 rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-yellow-500 rounded-lg mb-6">
            <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Shape the Future of Open Source?
        </h2>
        
        <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
          Join a growing community of maintainers who are changing how open source development works.
        </p>
        
        <Button size="lg" className="bg-blue-600 hover:bg-blue-700">
          Sign Up as a Maintainer Today
        </Button>
      </div>
    </section>
  )
}

export default CallToAction
