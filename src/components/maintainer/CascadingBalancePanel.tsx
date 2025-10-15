import React from 'react'
import Card from '@/components/utilitified_decorations/PagePanel'
import Button from '@/components/Button'

const CascadingBalance: React.FC = () => {
  return (
    <Card className="mb-6" title="Cascading Balance" rightHeader={<>
      <p className="text-sm text-gray-600">Updated 2 min ago</p>
      <Button variant="secondary" size="sm">
        Refresh Data
      </Button></>}>
      <p className="text-sm text-gray-600 mb-4">
        Indirectly received funds from other projects. Withdraw, and transfer or use for yourself. Check out{' '}
        <a href="#" className="text-cascade-blue hover:underline">Work page</a>{' '}
        to improve the rating to have more funds.
      </p>

      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Withdrawing Wallet Address
        </label>
        <div className="flex space-x-2">
          <input
            type="text"
            value="0x8F5a2b0707D9aC64b8F5dFC3A27737B06C1d24A8"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md text-sm"
            readOnly
          />
          <Button variant="primary" size="sm">
            Save
          </Button>
        </div>
      </div>

      <div className="mb-4">
        <p className="text-sm text-gray-600 mb-2">Learn more about wallet addresses</p>
        <ul className="text-sm text-gray-600 space-y-1">
          <li>• A wallet address must be <a href="#" className="text-cascade-blue hover:underline">on Polygon blockchain. Guide</a></li>
          <li>• Learn how to turn into fiat currency</li>
        </ul>
      </div>

      <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
        <div>
          <span className="text-sm text-gray-600">Balance (USDC)</span>
          <div className="text-2xl font-bold text-gray-800">3.45928 USDC</div>
        </div>
        <Button variant="primary">
          Withdraw
        </Button>
      </div>
    </Card>
  )
}

export default CascadingBalance
