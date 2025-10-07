import React from 'react'
import BackButton from './BackButton'
import NotificationCard from './NotificationCard'
import VotesCard from './VotesCard'
import Sidebar from './Sidebar'

const MainContent: React.FC = () => {
  return (
    <main className="flex-1 max-w-7xl mx-auto px-6 py-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <div className='lg:col-span-1 space-y-6'>
          <BackButton />
        </div>
        <div className="lg:col-span-2 space-y-6">
          <NotificationCard
            icon="✉️"
            title="You completed the quest"
            description="You are now following these projects and will receive notification once the maintainer or contributor replies. The maintainers of the project received the quest, expect the reply within the upcoming hours/days."
            variant="completed"
          />
          
          <NotificationCard
            icon="⭐"
            title="Potentially earning +2.0 rating"
            description="You are now following these projects and will receive notification once the maintainer or contributor replies. The maintainers of the project received the quest, expect the reply within the upcoming hours/days."
            variant="rating"
          />
          
          <VotesCard />
        </div>
        
        <div className="lg:col-span-1">
          <Sidebar />
        </div>
      </div>
    </main>
  )
}

export default MainContent
