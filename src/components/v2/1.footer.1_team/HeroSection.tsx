import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-cascade text-white py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Meet the Team it's story and why CascadeFund?
        </h1>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          CascadeFund is built by two people who care about open source. No company 
          walls, no anonymous teams — just us, telling our story as it is.
        </p>
      </div>
    </section>
  )
}

export default HeroSection
