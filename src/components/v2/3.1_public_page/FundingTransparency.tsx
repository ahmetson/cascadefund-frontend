import React from 'react'
import Card from './ui/Card'
import ProgressBar from './ui/ProgressBar'

const FundingTransparency: React.FC = () => {
  return (
    <Card className="p-6">
      <h2 className="text-xl font-semibold mb-4">Funding Transparency</h2>
      
      <div className="mb-4">
        <p className="text-sm text-gray-600">Progress: $1,200 raised by 120 influencers</p>
      </div>
      
      <div className="space-y-4">
        <h3 className="font-medium">How funds were spend in the last week:</h3>
        
        <div className="space-y-3">
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Maintainer time</span>
              <span>50%</span>
            </div>
            <ProgressBar percentage={50} color="green" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Infrastructure & hosting</span>
              <span>30%</span>
            </div>
            <ProgressBar percentage={30} color="blue" />
          </div>
          
          <div>
            <div className="flex justify-between text-sm mb-1">
              <span>Community & support</span>
              <span>20%</span>
            </div>
            <ProgressBar percentage={20} color="purple" />
          </div>
        </div>
      </div>
    </Card>
  )
}

export default FundingTransparency
