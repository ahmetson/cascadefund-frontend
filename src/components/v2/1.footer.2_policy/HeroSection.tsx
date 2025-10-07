import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <section className="bg-gradient-purple text-white py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          CascadeFund Privacy Policy
        </h1>
        <p className="text-lg opacity-90 mb-6">
          (the no-boring-lawyer edition)
        </p>
        <p className="text-base opacity-80 max-w-2xl mx-auto leading-relaxed">
          We believe privacy should be simple and transparent. So here's the deal, no fine print, no trickery.
        </p>
        <p className="text-sm opacity-70 mt-8">
          Written and responsible for it is Modest Ahmetson,<br />
          The author of CascadeFund
        </p>
      </div>
    </section>
  )
}

export default HeroSection
