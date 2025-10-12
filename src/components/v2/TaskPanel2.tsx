import React from 'react'
import Card from './Card'
import TaskItem from './TaskItem'
import StarRating from './StarRating'

const TaskSection: React.FC = () => {
  const tasks = [
    {
      id: 1,
      title: "Complete project proposal",
      points: 50,
      time: "10:00 AM",
      type: "info" as const
    },
    {
      id: 2,
      title: "Review client feedback",
      points: 50,
      time: "11:30 AM",
      type: "success" as const
    },
    {
      id: 3,
      title: "Team meeting",
      points: 50,
      time: "1:00 PM",
      type: "info" as const
    },
    {
      id: 4,
      title: "Update documentation",
      points: 50,
      time: "3:00 PM",
      type: "info" as const
    },
    {
      id: 5,
      title: "Send weekly report",
      points: 50,
      time: "5:00 PM",
      type: "info" as const
    }
  ]

  return (
    <Card>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <h2 className="text-lg font-semibold">My Cascading Tasks</h2>
          <span className="bg-cascade-blue text-white rounded-full w-6 h-6 flex items-center justify-center text-sm">2</span>
        </div>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-600">App Rating:</span>
          <StarRating rating={6} maxRating={10} />
          <span className="text-sm font-medium">6/10</span>
        </div>
      </div>
      
      <div className="mb-4">
        <div className="text-sm text-gray-600">
          Points left to reach next star: <span className="font-semibold text-cascade-blue">650</span>
        </div>
      </div>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600">
          Complete the tasks below, to improve the rating, here are the quests for today:
        </p>
      </div>
      
      <div className="space-y-2">
        {tasks.map((task) => (
          <TaskItem
            key={task.id}
            title={task.title}
            points={task.points}
            time={task.time}
            type={task.type}
          />
        ))}
      </div>
    </Card>
  )
}

export default TaskSection
