import React from 'react'
import TeamCard from './ui/TeamCard'

const TeamGlance: React.FC = () => {
  const teamMembers = [
    {
      name: "Medet Ahmetson",
      description: "Startup kid who flipped into open source. Turned blockchain games into libraries for devs.",
      image: "https://dummyimage.com/80x80/4A90E2/ffffff?text=MA",
      socialLinks: [
        { type: 'telegram', url: '#' },
        { type: 'github', url: '#' },
        { type: 'linkedin', url: '#' }
      ]
    },
    {
      name: "Sergey Pak",
      description: "Built CRMs before Medet was even born. Still shipping useful code decades later.",
      image: "https://dummyimage.com/80x80/6B46C1/ffffff?text=SP",
      socialLinks: [
        { type: 'telegram', url: '#' },
        { type: 'github', url: '#' },
        { type: 'linkedin', url: '#' }
      ]
    }
  ]

  return (
    <section className="bg-gradient-cascade py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          First, Meet the Team at a Glance
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {teamMembers.map((member, index) => (
            <TeamCard key={index} {...member} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default TeamGlance
