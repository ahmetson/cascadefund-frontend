import React from 'react'
import Button from '@/components/custom-ui/Button'
import Badge from '@/components/custom-ui/Badge'
import PageLikePanel from '@/components/panel/PageLikePanel'
import IssueCard from '@/components/issue/IssueLinkPanel3'
import Link from '@/components/Link'

const IssuesSection: React.FC = () => {
  return (
    <PageLikePanel title="Issues" rightHeader={<div className="flex items-center space-x-2">
      <span className="text-sm text-gray-600">Last version / Total releases</span>
      <span className="text-sm font-medium">v1.0 / 23 tags</span>
      <Badge variant="success">avg: 5 day for release</Badge>
    </div>
    }>
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

      <div className="p-6">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6 space-y-4 lg:space-y-0">
          <h3 className="text-lg font-medium text-gray-900">All Issues</h3>

          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4">
            <div className="flex flex-wrap gap-1">
              <Button variant="secondary" size="sm">All</Button>
              <Button variant="danger" size="sm">Bug</Button>
              <Button variant="info" size="sm">Fix</Button>
              <Button variant="warning" size="sm">Urgent</Button>
              <Button variant="success" size="sm">Wish</Button>
              <Button variant="secondary" size="sm">Suggested</Button>
              <Button variant="primary" size="sm">Released</Button>
              <Button variant="secondary" size="sm">On Roadmap</Button>
            </div>

            <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-2 sm:space-y-0 sm:space-x-2">
              <div className="flex items-center space-x-2">
                <span className="text-sm text-gray-600">Sort by:</span>
                <select className="text-sm border border-gray-300 rounded px-2 py-1">
                  <option>Priority</option>
                </select>
              </div>

              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Dependencies..."
                  className="text-sm border border-gray-300 rounded px-3 py-1 pr-8 w-full sm:w-auto"
                />
                <svg className="w-4 h-4 text-gray-400 absolute right-2 top-1/2 transform -translate-y-1/2" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <IssueCard
            title="Fix responsive layout on tablet devices"
            author="Serkan Balgaliyev"
            description="The dashboard layout breaks on iPad and other tablet devices in landscape orientation. Elements overlap and some controls become inaccessible."
            date="Oct 5, 2023"
            followers={3}
            tags={3}
            type="bug"
            priority="high"
          />

          <IssueCard
            title="Data export feature crashes with large datasets"
            author=""
            description="When attempting to export data sets larger than 10,000 records, the application crashes. We need to implement pagination or streaming."
            date="Oct 3, 2023"
            followers={5}
            tags={1}
            type="wish"
            priority="medium"
          />
        </div>
      </div>
    </PageLikePanel>
  )
}

export default IssuesSection
