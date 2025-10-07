import React from 'react'
import ProjectRating from './ProjectRating'

interface TaskItemProps {
  title: string
  points: number
  time: string
  isCompleted?: boolean
  isHighlighted?: boolean
}

const TaskItem: React.FC<TaskItemProps> = ({ title, points, time, isCompleted = false, isHighlighted = false }) => {
  return (
    <div className={`flex items-center justify-between p-3 rounded-lg border ${
      isHighlighted ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center space-x-3">
        <div className={`w-4 h-4 rounded-full border-2 ${
          isCompleted ? 'bg-green-500 border-green-500' : 'border-gray-300'
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

const TasksSection: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200">
      <div className="p-4 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            <h2 className="text-lg font-semibold text-gray-900">My Tasks</h2>
            <span className="w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center text-xs font-medium">
              2
            </span>
          </div>
          <div className='justify-right w-1/4'>
            <ProjectRating />
          </div>
        </div>
        
        <div className="mb-4">
          <div className="flex items-center justify-between text-sm">
            <span className="text-gray-600">Points left to reach next star:</span>
            <span className="font-semibold text-gray-900">650</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
            <div className="bg-blue-500 h-2 rounded-full" style={{ width: '30%' }}></div>
          </div>
        </div>
        
        <p className="text-sm text-gray-600 mb-4">
          Complete the tasks below to improve the rating. Here are the quests for today:
        </p>
      </div>
      
      <div className="p-4 space-y-3">
        <TaskItem title="Complete project proposal" points={50} time="10:00 AM" />
        <TaskItem title="Review client feedback" points={50} time="11:30 AM" isHighlighted />
        <TaskItem title="Team meeting" points={50} time="1:00 PM" />
        <TaskItem title="Update documentation" points={50} time="3:00 PM" />
        <TaskItem title="Send weekly report" points={50} time="5:00 PM" />
      </div>
    </div>
  )
}

export default TasksSection
