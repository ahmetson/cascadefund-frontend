import React from 'react'
import Card from '@/components/utilitified_decorations/PagelikeCard'
import Button from '@/components/Button'
import TransactionRow from './CTransactionRow'

interface Transaction {
  id: string
  date: string
  sender: string
  receiver: string
  amount: string
  transactionId: string
  position: string
  cascadeSteps: number
  tags: Array<{
    label: string
    color: string
    score?: number
  }>
}

const transactions: Transaction[] = [
  {
    id: '1',
    date: 'Jan 21, 2023',
    sender: 'Michael Thompson',
    receiver: 'Riverfront Development',
    amount: '$24,500.00',
    transactionId: 'TX78945612',
    position: '35%',
    cascadeSteps: 2,
    tags: [
      { label: 'Ongoing Projects', color: 'blue', score: 14 },
      { label: 'Communication Skills', color: 'orange', score: 8 },
      { label: 'Client Collaboration', color: 'blue', score: 23 }
    ]
  },
  {
    id: '2',
    date: 'Jan 18, 2023',
    sender: 'Sarah Johnson',
    receiver: 'Greenfield Initiative',
    amount: '$12,750.00',
    transactionId: 'TX65432198',
    position: '50%',
    cascadeSteps: 2,
    tags: [
      { label: 'Expedited Processing', color: 'purple', score: 19 },
      { label: 'Sustainability Focus', color: 'green', score: 31 }
    ]
  },
  {
    id: '3',
    date: 'Jan 15, 2023',
    sender: 'Robert Williams',
    receiver: 'Urban Solutions',
    amount: '$36,200.00',
    transactionId: 'TX12345678',
    position: '25%',
    cascadeSteps: 1,
    tags: [
      { label: 'Finance Verified', color: 'blue', score: 12 },
      { label: 'High Value', color: 'red', score: 27 },
      { label: 'Partner Split', color: 'orange', score: 9 }
    ]
  },
  {
    id: '4',
    date: 'Jan 12, 2023',
    sender: 'Jennifer Martinez',
    receiver: 'Coastal Restoration',
    amount: '$18,300.00',
    transactionId: 'Tx. 87654321',
    position: '40%',
    cascadeSteps: 1,
    tags: [
      { label: 'Regulatory Compliance', color: 'orange', score: 24 },
      { label: 'Environmental Focus', color: 'green', score: 42 },
      { label: 'Complex Structure', color: 'gray', score: 17 }
    ]
  },
  {
    id: '5',
    date: 'Jan 10, 2023',
    sender: 'David Anderson',
    receiver: 'Tech Innovation Fund',
    amount: '$42,800.00',
    transactionId: 'Tx. 24681357',
    position: '15%',
    cascadeSteps: 2,
    tags: [
      { label: 'Negotiated Rate', color: 'red', score: 46 },
      { label: 'Strategic Partner', color: 'blue', score: 35 }
    ]
  }
]

const TransactionHistory: React.FC = () => {
  return (
    <Card title="Transaction History">
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Date</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Sender</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Receiver</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Amount</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Transaction ID</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Your Position</th>
              <th className="text-left py-3 px-2 text-sm font-medium text-gray-600">Cascade Steps</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <TransactionRow key={transaction.id} transaction={transaction} />
            ))}
          </tbody>
        </table>
      
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
        <span className="text-sm text-gray-600">Showing 5 of 42 transactions</span>
        <div className="flex space-x-2">
          <Button variant="secondary" size="sm">
            Previous
          </Button>
          <Button variant="secondary" size="sm">
            Next
          </Button>
        </div>
      </div>
    </Card>
  )
}

export default TransactionHistory
