import React from 'react'
import Card from './Card'
import Link from './Link'

const InfoCard: React.FC = () => {
  return (
    <Card className="bg-cyan-50 border-cyan-100">
      <div className="space-y-4">
        <h2 className="text-xl font-semibold text-gray-900">
          What if I don't want to use GitHub?
        </h2>
        <div className="text-gray-700 space-y-3">
          <p>
            CascadeFund alpha version works with GitHub for now. In the upcoming months we plan to make it independent from any third parties.
          </p>
          <p>
            If you want to speed it up, then fund the{' '}
            <Link href="#" className="text-blue-600 hover:text-blue-800 underline">
              cascadefund itself by prioritizing "non-github" sign in feature
            </Link>
            .
          </p>
        </div>
      </div>
    </Card>
  )
}

export default InfoCard
