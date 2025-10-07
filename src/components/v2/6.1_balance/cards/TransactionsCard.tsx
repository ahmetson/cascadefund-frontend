import React from 'react'
import TransactionItem from '../ui/TransactionItem'

const TransactionsCard: React.FC = () => {
  const transactions = [
    {
      date: 'Jan 21, 2023',
      name: 'Alex Johnson',
      type: 'Monthly dividend payment',
      amount: '+$1,250.00',
      txHash: '0x3f8e2094...601c',
      isPositive: true
    },
    {
      date: 'Jan 18, 2023',
      name: 'Sarah Williams',
      type: 'Project milestone payment',
      amount: '+$3,750.00',
      txHash: '0x3f8e2094...601c',
      isPositive: true
    },
    {
      date: 'Jan 15, 2023',
      name: 'Michael Chen',
      type: 'Consulting fee',
      amount: '+$850.00',
      txHash: '0x3f8e2094...601c',
      isPositive: true
    }
  ]

  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Recent Transactions</h2>
        <button className="text-cascade-blue hover:underline text-sm font-medium">
          View All
        </button>
      </div>
      
      <div className="space-y-4">
        {transactions.map((transaction, index) => (
          <TransactionItem key={index} {...transaction} />
        ))}
      </div>
    </div>
  )
}

export default TransactionsCard
