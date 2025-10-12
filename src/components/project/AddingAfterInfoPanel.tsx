import React from 'react'
import Card from "@/components/utilitified_decorations/PagelikeCard"

const CollaborationSection: React.FC = () => {
  const buttonWithIcon = <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-purple-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">1</div>;

  return (
    <Card 
      title="Start Collaboration Quest!"
      actions={[{variant: "transparent", children: <div className='relative inline-flex items-center bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4  rounded transition-colors'>Influencer Work {buttonWithIcon}</div>, 
        href: '/influencer/work',
       }]}
    >
      <p className="text-gray-700 mb-4">
        Spend your Voting Power to raise issues, or vote to the issues if others raised it.
      </p>
      <p className="text-gray-700 mb-8">
        You already have 1 quest, to navigate the collaboration in the easier manner. Jump and start it.
      </p>
    </Card>
  )
}

export default CollaborationSection
