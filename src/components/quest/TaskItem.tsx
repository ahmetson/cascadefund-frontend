import React from 'react'

interface TaskItemProps {
  title: string
  points: number
  time: string
  isHighlighted?: boolean
  id?: string
  selectedTaskId?: string
  completedTaskId?: string
  onTaskClick: (id: string) => void
  ref?: any
}

const TaskItem: React.FC<TaskItemProps> = ({ ref, onTaskClick, selectedTaskId, completedTaskId, id, title, points, time, isHighlighted = false }) => {
  isHighlighted = isHighlighted || selectedTaskId === id;
  const isCompleted = completedTaskId === id;

  return (
    <div ref={ref} onClick={() => onTaskClick(id!)} className={`flex items-center justify-between p-3 rounded-lg border hover:cursor-pointer shadow-lg ${isHighlighted ? 'bg-green-100 border-green-600 hover:bg-green-200' : 'bg-white border-gray-300 hover:bg-gray-200 hover:border-green-400'
      }`}>
      <div className="flex items-center space-x-3">
        <div className={`w-4 h-4 rounded-full border-2 ${isCompleted ? 'bg-green-700 border-green-700' : 'border-green-300'
          }`}>
          {isHighlighted && (
            <svg className="w-3 h-3 text-green" fill="currentColor" viewBox="0 0 20 20">
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
