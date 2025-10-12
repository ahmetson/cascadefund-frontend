import React from 'react'
import Card from '@/components/utilitified_decorations/PagelikeCard'

interface InsightCardProps {
  icon: string
  title: string
  description: string
  recommendation: string
}

const InsightCard: React.FC<InsightCardProps> = ({ 
  icon, 
  title, 
  description, 
  recommendation 
}) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
      <div className="flex items-start space-x-3">
        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
          <span className="text-blue-600 text-sm">{icon}</span>
        </div>
        <div className="flex-1">
          <h4 className="text-sm font-medium text-gray-800 mb-1">{title}</h4>
          <p className="text-xs text-gray-600 mb-2">{description}</p>
          <p className="text-xs text-blue-600">{recommendation}</p>
        </div>
      </div>
    </div>
  )
}

const ShareTools: React.FC = () => {
  return (
      <Card className="mt-6" title="User Behavior Insights">
        <InsightCard
          icon="📖"
          title="README Impact"
          description="Most sign-ups come from README links"
          recommendation="Recommendation: Keep your README badges prominent and updated"
        />
        
        <InsightCard
          icon="📺"
          title="Video Engagement"
          description="YouTube clicks turn into donors more often"
          recommendation="Recommendation: Create more video content explaining your project's impact"
        />
        
        <InsightCard
          icon="💬"
          title="User Feedback"
          description="Top comments: requests for better docs, more tutorials"
          recommendation="Recommendation: Prioritize documentation improvements"
        />
      </Card>
  )
}

export default ShareTools
