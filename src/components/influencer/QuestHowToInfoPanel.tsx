import React from 'react'
import Card from '@/components/utilitified_decorations/PagelikeCard'

const VotingPowerSection: React.FC = () => {
  return (
      <Card className="space-y-6" title='How to work with tasks?'>
          <ul className="text-sm text-gray-600 space-y-2">
            <li>• A task describes the quest mission. Quest missions are intended to reduce overwhelming information, and do the work in the quickest feedback way, which reduces the burnout.</li>
            <li>• Upon completing the task, you receive the rating points. The points increase the rating of the project. Rating is the measurement of the satisfaction and attraction you get from customers.</li>
          </ul>
          <div>
            <p className="text-xs text-gray-500">Learn how CascadeFund works:</p>
            <a href="#" className="text-xs text-blue-600 hover:underline">How does progress system work?</a>
          </div>
      </Card>
  )
}

export default VotingPowerSection
