import React from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'

const Sidebar: React.FC = () => {
  return (
    <PageLikePanel title='How to work with the issues?' className="space-y-8">
      <ul className="text-sm text-gray-600 space-y-2">
        <li>• It's recommended first to look for the issue, and work on common idea</li>
        <li>• If there is nothing similar, then add a new issue</li>
      </ul>
    </PageLikePanel>
  )
}

export default Sidebar
