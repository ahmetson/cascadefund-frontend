import React from 'react'
import Card from '@/components/utilitified_decorations/PagelikeCard'

interface ShareToolCardProps {
  icon: string
  title: string
  description: string
  link?: string
  buttonText?: string
}

const ShareToolCard: React.FC<ShareToolCardProps> = ({ 
  icon, 
  title, 
  description, 
  link, 
  buttonText 
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
          {link && (
            <div className="text-xs text-blue-600 bg-blue-50 p-2 rounded mb-2 font-mono">
              {link}
            </div>
          )}
          {buttonText && (
            <button className="w-full bg-blue-500 text-white text-xs py-2 px-3 rounded hover:bg-blue-600">
              {buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

const ShareTools: React.FC = () => {
  return (
    <Card title="Share Tools" className="w-80 bg-gray-50 p-4 border-l border-gray-200">
      <ShareToolCard
        icon="🎯"
        title="Goal: Onboard Users & Contributors"
        description="This marketing tool is not only about when people know about it. The link to your page reviews, tell to people about your project, and configuration goes on the CascadeFund."
      />
      
      <ShareToolCard
        icon="📋"
        title="GitHub Issue for Users"
        description="The 'Issues and support moved to CascadeFund' Description: Hey, my time is scarce, for providing the best support, I moved to CascadeFund where I will help them. Sign up."
        buttonText="📋"
      />
      
      <ShareToolCard
        icon="📄"
        title="Share Button for README"
        description=""
        link="[CascadeFund](https://badge.cascad efund.io/project/)"
        buttonText="📋"
      />
      
      <ShareToolCard
        icon="👥"
        title="Contributors Outreach Issue"
        description="Title: 'Contributors' On CascadeFund to help with this code base. Description: I need help with this code base. CascadeFund: I will help if code when you have questions or issues."
        buttonText="📋"
      />
      
      <ShareToolCard
        icon="💰"
        title="Donation Link"
        description="Support us and influence the project on CascadeFund."
        link="https://cascadefund.org/donate/reflect"
        buttonText="📋"
      />
    </Card>
  )
}

export default ShareTools
