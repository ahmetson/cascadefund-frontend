import React from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'
import Badge from '@/components/badge/Badge'
import ProgressBar from '@/components/CustomProgressBar'

const TasksSection: React.FC = () => {
  return (
    <PageLikePanel title={<div className="flex items-center space-x-2">
      <h2 className="text-lg font-semibold text-gray-900">My Tasks</h2>
      <Badge variant="purple">1</Badge>
    </div>} rightHeader={<ProgressBar progress={65} total={650} label="Points left to reach next star:" />}
    >
      <p className="text-sm text-gray-600">Complete the tasks below, to improve the rating, here are the quests for today:</p>

      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-8 h-8 bg-blue-500 rounded-lg flex items-center justify-center">
              <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <span className="font-medium text-gray-900">Spend your voting powers for the issues</span>
          </div>
          <span className="text-sm text-gray-500">10:00 AM</span>
        </div>
      </div>
    </PageLikePanel>
  )
}

export default TasksSection
