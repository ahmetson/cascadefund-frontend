import React from 'react'
import Card from '@/components/utilitified_decorations/PagelikeCard'
import Link from '@/components/v2/Link'

const InfoCard: React.FC = () => {
  return (
    <Card title={
      <div className="flex-shrink-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600 mt-0.5">
            <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
            <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M12 17h.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Want to check blockchain data?
        </div>
    }>
      <div className="flex items-start space-x-3">
        <div className="flex-1">
          <p className="text-sm text-gray-600 mb-4">
            Transaction ID:
          <Link
            href="https://www.hyperpayment.org/specification/opensource-hyperpayment-specification" 
            className="inline-flex items-center text-sm text-blue-600 hover:text-blue-700 font-medium"
          >
            0x7f9e8d...
          </Link>
          </p>
        </div>
      </div>
    </Card>
  )
}

export default InfoCard
