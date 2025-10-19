import React from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'
import TransactionItem from './TransactionItem'

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
    <PageLikePanel title="Recent Transactions (todo add pagination)">
      {transactions.map((transaction, index) => (
        <TransactionItem key={index} {...transaction} />
      ))}
    </PageLikePanel>
  )
}

export default TransactionsCard
