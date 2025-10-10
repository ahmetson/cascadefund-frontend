import React from 'react'

const AraProject: React.FC = () => {
  return (
    <section className="py-20 network-bg text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-4 h-4 bg-blue-400 rounded-full"></div>
        <div className="absolute top-20 right-20 w-6 h-6 bg-purple-400 rounded-full"></div>
        <div className="absolute bottom-20 left-20 w-5 h-5 bg-green-400 rounded-full"></div>
        <div className="absolute bottom-10 right-10 w-3 h-3 bg-yellow-400 rounded-full"></div>
        <div className="absolute top-1/2 left-1/4 w-8 h-8 bg-pink-400 rounded-full"></div>
        <div className="absolute top-1/3 right-1/3 w-7 h-7 bg-indigo-400 rounded-full"></div>
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          CascadeFund is part of Ara project
        </h2>
        
        <p className="text-xl text-blue-100 max-w-3xl mx-auto">
          Together, we can make the internet open, affordable, and sustainable for 
          everyone — where collaborative tech innovation and maintainers thrive without 
          burnout.
        </p>
      </div>
    </section>
  )
}

export default AraProject
