import React from 'react'
import Card from '@/components/utilitified_decorations/PagelikeCard'
import Link from '@/components/Link'

const TaskNotice: React.FC = ({ 
}) => {
  return (
    <Card title='How to work with tasks?'>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• A task describes the quest mission. Quest missions are designed to avoid overwhelming information, allowing you to work in the quickest feedback way, which reduces the burnout.</li>
            <li>• The icons next to each task helps to identify it.</li>
            <li>• Clicking on a task or pressing "Enter" will focus on that task.</li>
            <li>• Upon completing the task, you receive the rating points. The rating is to increase the rating of the project. Rating is the measurement of the satisfaction and attraction you get from customers.</li>
          </ul>
          <div className="mt-3">
            <strong className="text-xs">Learn how CascadeFund works</strong>
            <br />
            <Link href="/meta/work" className="text-xs text-blue-600 hover:underline">How does progress system work?</Link>
          </div>
      </Card>
  )
}

export default TaskNotice
