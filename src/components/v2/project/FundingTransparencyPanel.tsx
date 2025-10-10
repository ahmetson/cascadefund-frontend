import React from 'react'
import Card from '@/components/utilitified_decorations/PagelikeCard'
import ProgressBar from '@/components/v2/ProgressBar'

const FundingTransparency: React.FC = () => {
  return (
    <Card className="p-6" title='Funding Transparency'>
      <div className="mb-4">
        <p className="text-sm text-gray-600">Progress: $1,200 raised by 120 influencers</p>
      </div>
      
      <Card className="space-y-4" bg='green-50' title="How funds were spend in the last week">
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
    </Card>
    </Card>
  )
}

export default FundingTransparency
