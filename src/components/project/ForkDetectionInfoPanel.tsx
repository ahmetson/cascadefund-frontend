import React from 'react'
import Card from '@/components/utilitified_decorations/PagePanel'

const ForkDetectionCard: React.FC = () => {
  return (
    <Card title={
      <div className='flex text-left'>
        <svg className="w-8 h-8 text-green-500 mx-auto" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
        Fork Repository Detected
      </div>
    }>
      <p className="text-gray-600">
        We've identified that this repository is a fork. Please help us understand your changes.
      </p>
    </Card>
  )
}

export default ForkDetectionCard
