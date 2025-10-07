import React from 'react'
import Button from './Button'

const SuperpowersCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6">
      <div className="flex items-center space-x-2 mb-4">
        <h3 className="text-lg font-semibold text-gray-900">Your Superpowers</h3>
        <span className="text-yellow-500">▲</span>
      </div>
      
      <p className="text-sm text-gray-600 mb-6">
        You're in control of your data. At any point you can:
      </p>

      <div className="space-y-3">
        <Button variant="outline" size="sm" fullWidth>
          <span className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">?</span>
            </span>
            <span>Ask us what we know about you</span>
          </span>
        </Button>

        <Button variant="outline" size="sm" fullWidth>
          <span className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">↓</span>
            </span>
            <span>Get a copy of your data</span>
          </span>
        </Button>

        <Button variant="outline" size="sm" fullWidth>
          <span className="flex items-center space-x-2">
            <span className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white text-xs">×</span>
            </span>
            <span>Tell us to delete your data</span>
          </span>
        </Button>
      </div>

      <p className="text-xs text-gray-500 mt-6 leading-relaxed">
        We'll do it. No questions asked (well, maybe one to confirm it's really you).
      </p>
    </div>
  )
}

export default SuperpowersCard
