import React from 'react'
import Card from '@/components/utilitified_decorations/PagelikeCard'

const Sidebar: React.FC = () => {

  return (
      <Card title="GitHub doesn't have the issue that you are addressing?" actions={[{
        href: "/issue/post",
        children: 'Add New Issue',
        variant: 'purple'
      }]}>
        Notice: Issues for forks won't require Voting Power.
      </Card>
  )
}

export default Sidebar
