import React from 'react'
import BalanceCard from './cards/BalanceCard'
import TransactionsCard from './cards/TransactionsCard'

const MainContent: React.FC = () => {
  return (
    <div className="">
      <BalanceCard />
      <TransactionsCard />
    </div>
  )
}

export default MainContent
