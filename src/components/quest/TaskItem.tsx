import React from 'react'

interface TaskItemProps {
  title: string
  points: number
  time: string
  isCompleted?: boolean
  isHighlighted?: boolean
}

const TaskItem: React.FC<TaskItemProps> = ({ title, points, time, isCompleted = false, isHighlighted = false }) => {
  return (
    <div className={`flex items-center justify-between p-3 rounded-lg border ${isHighlighted ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'
      }`}>
      <div className="flex items-center space-x-3">
        <div className={`w-4 h-4 rounded-full border-2 ${isCompleted ? 'bg-green-500 border-green-500' : 'border-gray-300'
          }`}>
          {isCompleted && (
            <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
          )}
        </div>
        <span className={`text-sm ${isCompleted ? 'line-through text-gray-500' : 'text-gray-900'}`}>
          {title}
        </span>
      </div>
      <div className="flex items-center space-x-3">
        <span className="text-xs font-medium text-green-600">+{points} pts</span>
        <span className="text-xs text-gray-500">{time}</span>
      </div>
    </div>
  )
}

export default TaskItem
