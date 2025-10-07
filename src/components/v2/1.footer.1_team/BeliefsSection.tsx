import React from 'react'
import BeliefCard from './ui/BeliefCard'

const BeliefsSection: React.FC = () => {
  const beliefs = [
    "Open source is the backbone of the internet.",
    "Developers should be able to survive and grow doing the work they love.",
    "Transparency and honesty are the foundation.",
    "CascadeFund was built because we needed it ourselves."
  ]

  const trustReasons = [
    "Sergey has shipped real products for decades.",
    "I left the \"safe path\" to chase an old dream of democratizing software ownership.",
    "We're not hiding — our names, faces, and stories are here.",
    "CascadeFund is not a theory — it's the result of years building Ara and seeing the real problems first-hand."
  ]

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12">
          <BeliefCard
            title="What we believe"
            items={beliefs}
            iconColor="text-cascade-purple"
          />
          <BeliefCard
            title="Why trust us"
            items={trustReasons}
            iconColor="text-cascade-purple"
          />
        </div>
      </div>
    </section>
  )
}

export default BeliefsSection
