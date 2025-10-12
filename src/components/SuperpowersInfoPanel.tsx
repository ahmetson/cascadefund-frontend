import React from 'react'
import Button from '@/components/Button'
import Card from '@/components/utilitified_decorations/PagelikeCard'

const SuperpowersCard: React.FC = () => {
  return (
    <Card title={
      <>Your Superpowers <span className="text-yellow-500">▲</span></>
    } className="bg-white rounded-lg shadow-sm p-6">
      <p className="text-sm text-gray-600 mb-6">
        You're in control of your data. At any point you can:
      </p>
      <div className="space-y-3 grid grid-cols-1">
        <Button variant="blue" size="sm">
          <span className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <span className="text-blue-500 text-xs">?</span>
            </span>
            <span>Ask us what we know about you</span>
          </span>
        </Button>

        <Button variant="green" size="sm">
          <span className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-500 text-xs">↓</span>
            </span>
            <span>Get a copy of your data</span>
          </span>
        </Button>

        <Button variant="red" size="sm">
          <span className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-white rounded-full flex items-center justify-center">
              <span className="text-red-500 text-xs">×</span>
            </span>
            <span>Tell us to delete your data</span>
          </span>
        </Button>
      </div>

      <p className="text-xs text-gray-500 mt-6 leading-relaxed">
        We'll do it. No questions asked (well, maybe one to confirm it's really you).
      </p>
    </Card>
  )
}

export default SuperpowersCard
