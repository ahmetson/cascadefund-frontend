import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-amber-900 via-orange-800 to-red-700 text-white overflow-hidden">
      <div className="absolute inset-0 floating-bubbles bubble-bg"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-20 flex items-center min-h-screen">
        <div className="grid md:grid-cols-2 gap-12 items-center w-full">
          <div className="space-y-4 md:ml-40">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-8">
              <span className="text-4xl">Donation platform for</span><br />
              <span className="text-amber-200">open source projects</span> 
              <span className="lg:visible sm:invisible"> that</span>
            </h1>
            
            {/* <button className="bg-green-500 hover:bg-green-600 hover:cursor-pointer text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
              Sign Up
            </button>
             */}
            <a href='https://t.me/arasangha' target='_blank' className='bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors'>
              Join Telegram for release
            </a>
            
            {/* <p className="text-amber-100 text-sm max-w-md mt-8">
              NOTE: To donate to your project community, you have to create your own 
              account first and then add your project.
            </p> */}
          </div>
          
          <div className="sm:text-center sm:mr-0 md:mr-20 md:text-right lg:mr-40  ">
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              Embarks<br />
              innovation<br />
              in the world
            </h2>
            
            <p className="text-amber-100 text-sm mt-8 max-w-md ml-auto">
              A donation is distributed to the project<br />
              and all third party open source projects automatically.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection
