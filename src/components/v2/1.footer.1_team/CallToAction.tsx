import React from 'react'
import Button from './ui/Button'

const CallToAction: React.FC = () => {
  return (
    <section className="bg-gradient-cascade py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-white mb-4">
          Ready to Join the CascadeFund Ecosystem?
        </h2>
        <p className="text-lg text-white opacity-90 mb-8">
          Be part of a growing community that's changing how open source development works.
        </p>
        <Button variant="secondary" size="lg">
          Sign Up as a Maintainer
        </Button>
      </div>
    </section>
  )
}

export default CallToAction
