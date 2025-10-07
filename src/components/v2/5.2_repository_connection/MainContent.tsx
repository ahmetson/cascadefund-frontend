import React from 'react'
import ConnectionCard from './ConnectionCard'
import InfoCard from './InfoCard'

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 px-6 py-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ConnectionCard />
          </div>
          <div className="lg:col-span-1">
            <InfoCard />
          </div>
        </div>
      </div>
    </main>
  )
}

export default MainContent
