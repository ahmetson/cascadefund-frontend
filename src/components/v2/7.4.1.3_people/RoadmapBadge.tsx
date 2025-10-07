import React from 'react'

const RoadmapBadge: React.FC = () => {
  return (
    <div className="border-2 border-dashed border-green-300 rounded-lg p-4 bg-green-50">
      <div className="flex items-center">
        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
        <div>
          <span className="text-green-700 font-medium">On the Roadmap</span>
          <p className="text-sm text-green-600 mt-1">
            This issue is on the "v2.0.0" roadmap.
          </p>
          <p className="text-sm text-green-600">
            How to move out? Go to the working directory, and drag and drop the issue to another list.
          </p>
        </div>
      </div>
    </div>
  )
}

export default RoadmapBadge
