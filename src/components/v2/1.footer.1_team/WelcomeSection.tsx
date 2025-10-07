import React from 'react'

const WelcomeSection: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Welcome</h2>
        <p className="text-lg text-gray-700 mb-4">
          That's us. Two people from two generations. From startup grind, to blockchain, to 
          open source, to Ara, and now CascadeFund.
        </p>
        <p className="text-lg text-gray-700 mb-6">
          The journey is messy. But it's real.
        </p>
        <p className="text-xl font-semibold text-cascade-purple">
          Welcome to CascadeFund.
        </p>
      </div>
    </section>
  )
}

export default WelcomeSection
