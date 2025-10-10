import React from 'react'

interface WorkflowCardProps {
  icon: React.ReactNode
  title: string
  description: string
  iconBgColor: string
}

const WorkflowCard: React.FC<WorkflowCardProps> = ({ icon, title, description, iconBgColor }) => {
  return (
    <div className="text-center">
      <div className={`inline-flex items-center justify-center w-16 h-16 ${iconBgColor} rounded-lg mb-4`}>
        {icon}
      </div>
      <h3 className="text-lg font-semibold text-gray-900 mb-3">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default WorkflowCard
