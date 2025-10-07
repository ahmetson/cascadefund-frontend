import React from 'react'
import Button from './ui/Button'

const CTASection: React.FC = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-4">
          Ready to Join the CascadeFund Ecosystem?
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Be part of a growing community where Maintainers, Contributors, and Influencers work together.
        </p>
        
        <Button variant="success" size="lg">
          Apply as a Maintainer
        </Button>
      </div>
    </section>
  )
}

export default CTASection
