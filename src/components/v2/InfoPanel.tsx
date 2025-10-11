import React from 'react'
import Card from '@/components/utilitified_decorations/PagelikeCard'

export interface InfoPanelProps {
  key?: number | string
  icon: React.ReactNode
  title: string
  description?: string
  iconBgColor?: string
  className?: string
}

const WorkflowCard: React.FC<InfoPanelProps> = ({ key, icon, title, description, iconBgColor, className }) => {
  return (
    <Card key={key} className={'border-none shadow-none ' + className} title={
      <div className={`inline-flex items-center justify-center w-full h-8 ${iconBgColor} rounded-lg`}>
        {icon}
        {title}
      </div>}>
      <p className="text-gray-600">{description}</p>
    </Card>
  )
}

export default WorkflowCard
