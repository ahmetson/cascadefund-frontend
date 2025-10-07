import React from 'react'
import Button from './Button'

const CollaborationSection: React.FC = () => {
  return (
    <section className="bg-gray-100 rounded-lg p-8 text-center">
      <h2 className="text-2xl font-bold text-gray-900 mb-4">
        Start collaboration quest
      </h2>
      <p className="text-gray-700 mb-4">
        Spend your Voting Power to raise issues, or vote to the issues if others raised it.
      </p>
      <p className="text-gray-700 mb-8">
        You already have 1 quest, to navigate the collaboration in the easier manner. Jump and start it.
      </p>
      {/* <Button
        variant="primary"
        icon={
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z" clipRule="evenodd" />
          </svg>
        }
        badge="1"
      >
        Influencer Work
      </Button> */}
      <a href="/v2/influencer/work" className="relative inline-flex items-center bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 border border-slate-700 rounded transition-colors">
        Influencer Work
        <div className="absolute inline-flex items-center justify-center w-6 h-6 text-xs font-bold text-white bg-purple-500 border-2 border-white rounded-full -top-2 -end-2 dark:border-gray-900">1</div>
      </a>
    </section>
  )
}

export default CollaborationSection
