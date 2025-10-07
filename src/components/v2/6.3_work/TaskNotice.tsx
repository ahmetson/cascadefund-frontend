import React from 'react'

const TaskNotice: React.FC = ({ 
}) => {
  return (
    <div className="p-4 border-t border-gray-200">
        <div className="bg-gray-50 rounded-lg p-4">
          <h3 className="text-sm font-medium text-gray-900 mb-2">How to work with tasks?</h3>
          <ul className="text-xs text-gray-600 space-y-1">
            <li>• A task describes the quest mission. Quest missions are designed to avoid overwhelming information, allowing you to work in the quickest feedback way, which reduces the burnout.</li>
            <li>• The icons next to each task helps to identify it.</li>
            <li>• Clicking on a task or pressing "Enter" will focus on that task.</li>
            <li>• Upon completing the task, you receive the rating points. The rating is to increase the rating of the project. Rating is the measurement of the satisfaction and attraction you get from customers.</li>
          </ul>
          <div className="mt-3">
            <strong className="text-xs">Learn how CascadeFund works</strong>
            <br />
            <a href="/v2/meta/work" className="text-xs text-blue-600 hover:underline">How does progress system work?</a>
          </div>
        </div>
      </div>
  )
}

export default TaskNotice
