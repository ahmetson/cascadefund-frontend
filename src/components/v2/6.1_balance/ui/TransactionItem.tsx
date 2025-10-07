import React from 'react'

interface TransactionItemProps {
  date: string
  name: string
  type: string
  amount: string
  txHash: string
  isPositive: boolean
}

const TransactionItem: React.FC<TransactionItemProps> = ({
  date,
  name,
  type,
  amount,
  txHash,
  isPositive
}) => {
  return (
    <div className="flex items-center justify-between py-3 border-b border-gray-100 last:border-b-0">
      <div className="flex items-center space-x-4">
        <div className="text-sm text-gray-500 w-20">{date}</div>
        <div className="flex items-center space-x-2">
          <span className="text-sm font-medium text-cascade-blue">{name}</span>
        </div>
        <div className="flex items-center space-x-2">
          <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd" />
          </svg>
          <span className="text-sm text-gray-600">{type}</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="text-right">
          <div className={`text-sm font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
            {amount}
          </div>
          <div className="text-xs text-gray-500">Tx: {txHash}</div>
        </div>
      </div>
    </div>
  )
}

export default TransactionItem
