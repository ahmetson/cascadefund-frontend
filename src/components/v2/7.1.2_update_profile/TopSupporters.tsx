import React from 'react'
import Card from './ui/Card'

const TopSupporters: React.FC = () => {
  return (
    <div className="bg-yellow-100 rounded-lg p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Top Supporters</h3>
        <span className="text-sm text-blue-600 cursor-pointer">Similar Profiles</span>
      </div>
      
      <div className="space-y-3">
        <div className="bg-white rounded-lg p-3 flex items-center space-x-3">
          <img 
            src="https://dummyimage.com/40x40/4A5568/ffffff?text=SJ"
            alt="Sarah Johnson"
            className="w-10 h-10 rounded-full"
            referrerpolicy="no-referrer"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Sarah Johnson</span>
              <span className="text-green-600 text-xs">+$64</span>
            </div>
            <p className="text-xs text-gray-500">2 days ago</p>
          </div>
        </div>
        
        <div className="bg-white rounded-lg p-3 flex items-center space-x-3">
          <img 
            src="https://dummyimage.com/40x40/4A5568/ffffff?text=DR"
            alt="David Rodriguez"
            className="w-10 h-10 rounded-full"
            referrerpolicy="no-referrer"
          />
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">David Rodriguez</span>
              <span className="text-green-600 text-xs">+$48</span>
            </div>
            <div className="flex items-center space-x-1">
              <span className="text-yellow-500 text-xs">★ 220 rating</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TopSupporters
