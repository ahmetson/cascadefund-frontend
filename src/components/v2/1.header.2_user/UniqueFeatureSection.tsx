import React from 'react'

const UniqueFeatureSection: React.FC = () => {
  return (
    <section className="py-16 bg-blue-600 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex items-center justify-center mb-6">
          <svg className="w-8 h-8 mr-3" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
          </svg>
          <h2 className="text-2xl font-bold">Unique feature</h2>
        </div>
        
        <p className="text-lg text-blue-100 max-w-3xl mx-auto">
          CascadeFund's open-source, transparent management system makes it easy to track progress. And if a maintainer 
          doesn't want to continue on a project, your voting power will even help make a fork that builds your vision.
        </p>
      </div>
    </section>
  )
}

export default UniqueFeatureSection
