import React from 'react'
import Tooltip from '../utilitified_decorations/Tooltip'

export interface ProjectRatingProps {
  rating: number
  pointsLeft: number
}

const ProjectRating: React.FC<ProjectRatingProps> = ({ rating = 1, pointsLeft }) => {
  return (
    <Tooltip
      content={
        <div className="flex items-center justify-between space-x-1 text-sm">
          <span className="text-gray-400">Points left to reach next star:</span>
          <span className="font-semibold text-gray-300">{pointsLeft}</span>
        </div>
      }
    >
      <div className="flex items-center space-x-1">
        <div className="flex space-x-1">
          {[1, 2, 3, 4, 5, 6].map((star) => (
            <svg key={star} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
          {[7, 8, 9, 10].map((star) => (
            <svg key={star} className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
          ))}
        </div>
        <span className="text-sm font-medium text-gray-900">{rating}/10</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2 mt-1">
        <div className="bg-teal-500 h-2 rounded-full" style={{ width: '30%' }}></div>
      </div>
    </Tooltip>
  )
}

export default ProjectRating
