import React from 'react'
import DetailCard from './ui/DetailCard'

const TeamDetails: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto space-y-16">
        <DetailCard
          name="Medet Ahmetson"
          image="https://dummyimage.com/400x300/4A90E2/ffffff?text=Medet+Working"
          imagePosition="left"
        >
          <p className="text-gray-700 mb-4">
            I'm Medet. Born in Turkmenistan, living abroad for over a decade, most of it spent chasing startups. I was a 
            classic startup kid — pitch decks, investors, products, the usual.
          </p>
          <p className="text-gray-700 mb-4">
            Eventually, I ended up in blockchain around 2018. While most people were running into it for money, 
            blockchain flipped me the other way: it pulled me into an open-source guy.
          </p>
          <p className="text-gray-700 mb-4">
            <strong>Here's why:</strong> In crypto there's this unwritten law — the code must be open. That principle hit me harder 
            than the hype around tokens. While others were trading tokens, I was building games. And instead of 
            cashing out, I was taking the game logic, documenting it, and turning it into libraries so other devs could use 
            it. That felt like the right thing to do.
          </p>
          <p className="text-gray-700 mb-4">
            But there was a fork in the road. My team was focused on the game business. I kept asking the 
            philosophical "why" questions — why games, why ownership, why closed systems at all? I realized my old 
            dream: computers should work with IT — no software engines. And what really matters isn't hardware or 
            corporations, it's who owns the software.
          </p>
          <p className="text-gray-700">
            That's how Ara was born — an attempt to connect people directly with open-source developers, bypassing 
            the giants that lock everything down. For three years, I worked on Ara.
          </p>
          <p className="text-gray-700 mt-4">
            The culmination of all that work became CascadeFund. If Ara was the dream, CascadeFund is the tool that 
            makes it practical.
          </p>
        </DetailCard>

        <DetailCard
          name="Sergey Pak"
          image="https://dummyimage.com/400x300/6B46C1/ffffff?text=Sergey+Coding"
          imagePosition="right"
        >
          <p className="text-gray-700 mb-4">
            Sergey has been in IT since the mid-90s — before I was even born. He built CRMs and hotel booking apps 
            back when the internet was dial-up.
          </p>
          <p className="text-gray-700 mb-4">
            If I bring the restless startup kid energy, Sergey brings decades of perspective. He's the one who takes my 
            messy vision and says, "Okay, let's strip it down, simplify it, and actually ship it."
          </p>
          <p className="text-gray-700">
            He believed in CascadeFund early on, and helped cut through the noise to make it real. Where I'm the "big 
            idea" person, he's the "make it work" person.
          </p>
        </DetailCard>
      </div>
    </section>
  )
}

export default TeamDetails
