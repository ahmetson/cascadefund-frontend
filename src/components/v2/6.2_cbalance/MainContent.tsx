import React from 'react'
import CascadingBalance from './CascadingBalance'
import TransactionHistory from './TransactionHistory'

const MainContent: React.FC = () => {
  return (
    <main className="">
      <CascadingBalance />
      <TransactionHistory />
    </main>
  )
}

export default MainContent
