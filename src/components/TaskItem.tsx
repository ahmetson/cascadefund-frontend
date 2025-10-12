import React from 'react'

interface TaskItemProps {
  title: string
  points: number
  time: string
  type: 'info' | 'success' | 'warning'
}

const TaskItem: React.FC<TaskItemProps> = ({ title, points, time, type }) => {
  const typeClasses = {
    info: 'bg-task-blue border-blue-200',
    success: 'bg-task-green border-green-200',
    warning: 'bg-task-yellow border-yellow-200'
  }
  
  const iconClasses = {
    info: 'text-blue-500',
    success: 'text-green-500',
    warning: 'text-yellow-500'
  }
  
  return (
    <div className={`flex items-center justify-between p-3 rounded-lg border ${typeClasses[type]}`}>
      <div className="flex items-center space-x-3">
        <div className={`w-6 h-6 rounded-full flex items-center justify-center ${iconClasses[type]}`}>
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        </div>
        <span className="font-medium text-gray-900">{title}</span>
      </div>
      <div className="flex items-center space-x-4 text-sm text-gray-600">
        <span className="font-medium">+{points} pts</span>
        <span>{time}</span>
      </div>
    </div>
  )
}

export default TaskItem
