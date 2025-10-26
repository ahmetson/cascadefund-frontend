import React from 'react'
import Badge from '@/components/custom-ui/Badge'
import PageLikePanel from '@/components/panel/InfoPanel'
import Link from '@/components/custom-ui/Link'

const IssuesSection: React.FC = () => {
  return (
    <PageLikePanel title="Issues" >
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-600">Last version / Total releases</span>
        <span className="text-sm font-medium">v1.0 / 23 tags</span>
        <Badge variant="success">avg: 5 day for release</Badge>
      </div>
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-4">
          <div className="text-sm text-gray-600">
            <span className="text-red-600 font-medium">8 open</span> / 23 closed
          </div>
          <div className="text-sm text-gray-600">avg: 1 day for reply</div>
        </div>

        <div className="flex items-center space-x-4 mb-4 w-full">
          <Link href="/maintainer/work" className="text-blue-600 hover:underline">
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>Issues and roadmap</Link>

          <Link href="/influencer/project" className="text-blue-600 hover:underline">
            <svg className="w-5 h-5 text-blue-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>Become an Influencer</Link>
        </div>
      </div>
    </PageLikePanel>
  )
}

export default IssuesSection
