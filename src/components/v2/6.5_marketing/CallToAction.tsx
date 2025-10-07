import React from 'react'

interface ActionButtonProps {
  text: string
  variant: 'primary' | 'secondary'
}

const ActionButton: React.FC<ActionButtonProps> = ({ text, variant }) => {
  const baseClasses = "px-4 py-2 rounded-md text-sm font-medium transition-colors"
  const variantClasses = variant === 'primary' 
    ? "bg-blue-500 text-white hover:bg-blue-600" 
    : "bg-blue-100 text-blue-700 hover:bg-blue-200"
  
  return (
    <button className={`${baseClasses} ${variantClasses} w-full mb-2`}>
      {text}
    </button>
  )
}

const CallToAction: React.FC = () => {
  return (
    <div className="bg-white p-6 rounded-lg border border-gray-200">
      <h3 className="text-lg font-medium text-gray-800 mb-4">Call to Action</h3>
      
      <div className="text-center mb-6">
        <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <span className="text-2xl">🚀</span>
        </div>
        <h4 className="text-lg font-medium text-gray-800 mb-2">Now that you know what works</h4>
        <p className="text-sm text-gray-600 mb-4">— share smarter.</p>
        <p className="text-sm text-gray-600 mb-6">
          Use these insights to optimize your outreach strategy and grow your project community.
        </p>
      </div>
      
      <div className="space-y-2">
        <ActionButton text="Copy Share Button" variant="primary" />
        <ActionButton text="Copy Contribution Link" variant="secondary" />
        <ActionButton text="Copy Donation Link" variant="secondary" />
      </div>
      
      <p className="text-xs text-gray-500 mt-4 text-center">
        Guests to help marketing will be prepared in the upcoming versions. If you want to help, become the CascadeFund influencer for the best.
      </p>
    </div>
  )
}

export default CallToAction
