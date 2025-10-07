import React from 'react'
import Card from './ui/Card'

const HelpSection: React.FC = () => {
  return (
      <Card>
        <h3 className="font-semibold mb-3">How to work with the cascading tasks?</h3>
        <div className="text-sm text-gray-600 space-y-2">
          <p>Cascading Work aims to improve the depends quality in the quest based system, via tasks:</p>
          <ul className="list-disc list-inside space-y-1 ml-2">
            <li>A task describes the quest mission. Quest missions are intended to reduce overwhelming information, and do the work in the quickest feedback way, which reduces the burnout.</li>
            <li>Each quest item to each task helps to identify it.</li>
            <li>Clicking on the task or pressing "Enter" will focus the browser into that task.</li>
            <li>Upon completing the task, you receive the rating points. The points increase the rating of the project. Rating is the measurement of the satisfaction and attraction you get from customers.</li>
          </ul>
          <div className="mt-4">
            <p className="text-cascade-blue font-medium">Learn how CascadeFund work.</p>
            <p className="text-cascade-blue font-medium">How does progress system work?</p>
          </div>
        </div>
      </Card>
  )
}

export default HelpSection
