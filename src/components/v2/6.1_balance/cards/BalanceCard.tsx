import React from 'react'
import Button from '../ui/Button'

const BalanceCard: React.FC = () => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-0">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Balance</h2>
        <div className="flex items-center space-x-3">
          <span className="text-sm text-gray-500">Updated 2 min ago</span>
          <Button variant="secondary" size="sm">Refresh Data</Button>
        </div>
      </div>
      
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-700 mb-2">Withdrawing Wallet Address</h3>
        <div className="flex items-center justify-between">
          <div className="bg-gray-50 px-3 py-2 rounded-lg flex-1 mr-3">
            <span className="text-sm text-gray-600 font-mono">0x8F5a2bD707D9a654bbF5dFC3A27737BDc1d24A8</span>
          </div>
          <Button size="sm">Save</Button>
        </div>
      </div>
      
      <div className="mb-6">
        <p className="text-sm text-gray-600 mb-2">Learn more about wallet addresses</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
            <span>A wallet address must be on <a href="#" className="text-cascade-blue hover:underline">Polygon blockchain. Guide</a></span>
          </li>
          <li className="flex items-start">
            <span className="w-1 h-1 bg-gray-400 rounded-full mt-2 mr-2 flex-shrink-0"></span>
            <span><a href="#" className="text-cascade-blue hover:underline">Learn how to turn into fiat currency</a></span>
          </li>
        </ul>
      </div>
      
      <div className="border-t border-gray-200 pt-6">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-sm font-medium text-gray-700 mb-1">Balance (USDC)</h3>
            <div className="flex items-center">
              <svg className="w-5 h-5 text-gray-400 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16l-4-4m0 0l4-4m-4 4h18" />
              </svg>
            </div>
          </div>
          <div className="text-right">
            <div className="text-2xl font-bold text-gray-900">3.45928 USDC</div>
            <Button className="mt-2">Withdraw</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BalanceCard
