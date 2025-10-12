import React from 'react'
import Tag from '@/components/Tag'

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

interface TransactionRowProps {
  transaction: Transaction
}

const TransactionRow: React.FC<TransactionRowProps> = ({ transaction }) => {
  return (
    <tr className="border-b border-gray-100 hover:bg-gray-50">
      <td className="py-4 px-2">
        <div className="text-sm text-gray-800">{transaction.date}</div>
      </td>
      <td className="py-4 px-2">
        <div className="text-sm font-medium text-gray-800">{transaction.sender}</div>
      </td>
      <td className="py-4 px-2">
        <div className="text-sm text-gray-800">{transaction.receiver}</div>
        <div className="flex flex-wrap gap-1 mt-2">
          {transaction.tags.map((tag, index) => (
            <Tag key={index} label={tag.label} variant={tag.color} score={tag.score} />
          ))}
        </div>
      </td>
      <td className="py-4 px-2">
        <div className="text-sm font-medium text-gray-800">{transaction.amount}</div>
      </td>
      <td className="py-4 px-2">
        <a href="#" className="text-sm text-cascade-blue hover:underline">
          {transaction.transactionId}
        </a>
      </td>
      <td className="py-4 px-2">
        <div className="text-sm text-gray-800">{transaction.position}</div>
        <div className="text-xs text-gray-500">($8,575.00)</div>
      </td>
      <td className="py-4 px-2">
        <div className="text-sm text-gray-800">{transaction.cascadeSteps}</div>
      </td>
    </tr>
  )
}

export default TransactionRow
