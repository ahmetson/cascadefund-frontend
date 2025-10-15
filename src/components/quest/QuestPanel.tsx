import React from 'react'
import ProjectRating from '@/components/rating/ProjectRating'
import Panel from '@/components/utilitified_decorations/PagePanel'
import Badge from '@/components/Badge'
import TaskItem from './TaskItem'

const TasksSection: React.FC = () => {
  return (
    <Panel title={<>My Tasks<Badge variant='red'>2</Badge></>} rightHeader={<ProjectRating />}>
      <p className="text-sm text-gray-900 mb-4 text-center">
        Complete the management tasks.
      </p>

      <div className="p-4 space-y-3">
        <TaskItem title="Complete project proposal" points={50} time="10:00 AM" />
        <TaskItem title="Review client feedback" points={50} time="11:30 AM" isHighlighted />
        <TaskItem title="Team meeting" points={50} time="1:00 PM" />
        <TaskItem title="Update documentation" points={50} time="3:00 PM" />
        <TaskItem title="Send weekly report" points={50} time="5:00 PM" />
      </div>
    </Panel>
  )
}

export default TasksSection
