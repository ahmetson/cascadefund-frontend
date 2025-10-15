import React from 'react'
import Card from '@/components/utilitified_decorations/PagePanel'

const Sidebar: React.FC = () => {
  return (
    <Card title={
      <div className="w-full h-8 flex items-center justify-center flex-shrink-0">
        <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
        Collaborate on improving CascadeFund
      </div>
    } actions={[{
      href: '#',
      children: <>
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
          <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
        </svg>
        <span>CascadeFund's Influence page</span>
      </>
    }]}>
      <p className="text-sm text-gray-600 mb-4">
        Have some questions or requests about CascadeFund?
        Become our influencer as well.
      </p>
    </Card>
  )
}

export default Sidebar
