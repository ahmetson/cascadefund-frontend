import React from 'react'

const AboutSection: React.FC = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-8">What is Cascade Fund?</h2>
        <p className="text-lg text-gray-600 leading-relaxed">
          Cascade Fund is a donation platform for open source projects that distributes tips across all involved softwares. 
          It embarks innovation, creates the top notch libraries with the best documentation comparable to proprietary. 
          Enables world to work on favorite projects
        </p>
      </div>
    </section>
  )
}

export default AboutSection
