import React from 'react'
import Button from './ui/Button'

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-purple-900 text-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Help Open Source Thrive — become an influencer, and connect with people
        </h1>
        
        <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
          Your support goes beyond donations. With CascadeFund, you can help 
          maintainers, influence priorities, and network with the projects you may want to 
          work with.
        </p>
        
        <p className="text-lg mb-10 text-blue-200 max-w-3xl mx-auto">
          CascadeFund has maintainer's workflow features only. Subscribe when the app profile and 
          project pages are ready. You can still browse projects, see what maintainers want to 
          be spread out, and tell us your favorite project maintainers to join once launched. If they joined, 
          you can see their public posts in Discord.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="primary" size="lg">Subscribe for Updates</Button>
          <Button variant="secondary" size="lg">Browse on GitHub</Button>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
