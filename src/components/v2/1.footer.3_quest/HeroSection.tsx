import React from 'react'
import QuestCard from './QuestCard'
import TaskCard from './TaskCard'

const HeroSection: React.FC = () => {
  return (
    <section className="mb-8">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-purple-600 mb-4">CascadeFund – Quest Task List</h1>
        <p className="text-gray-600 max-w-4xl mx-auto">
          CascadeFund is a quest based social network for the open-source communities. We as CascadeFund prioritize the transparency. Every quest (task) is public, trackable — so maintainers, contributors and influencers could verify and check how the rating of the project was presented.
        </p>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6">
        <QuestCard
          title="Communication Quests"
          description="Got idea about new quest tasks? Add a new issue and be a CascadeFund influencer"
          buttonText="Add an issue"
          buttonVariant="primary"
        />
        
        <QuestCard
          title="Design the Tasks"
          description="Want to help to make CascadeFund successful? Follow for updates. If others raise issue, help to improve and receive the rating."
          buttonText=""
          buttonVariant="secondary"
        />
        
        <TaskCard
          title="Tasks in CascadeFund"
          author="Medel Ahuasson"
          description="List of tasks and their categories"
          date="Oct 5, 2023"
          stats="1/3"
          likes="3 likes"
          followers="Follow"
          rating="18 of 20"
        />
      </div>
    </section>
  )
}

export default HeroSection
