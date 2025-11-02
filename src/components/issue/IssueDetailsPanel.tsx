import React from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'
import Button from '@/components/custom-ui/Button'
import Badge from '@/components/badge/Badge'

const Panel: React.FC = () => {
  return (
    <PageLikePanel title="Issue Details" className="mb-8" actions={[{
      variant: "blue",
      href: "/data/issue/update",
      children: "Edit"
    }]} >
      <div className="space-y-3 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-600">Status:</span>
          <Badge variant="success">Open</Badge>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Created:</span>
          <span className="text-gray-900">3 days ago</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Updated:</span>
          <span className="text-gray-900">Today</span>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Assignee:</span>
          <div className="flex items-center space-x-2">
            <img
              src="https://dummyimage.com/20x20/4A90E2/ffffff?text=E"
              alt="Emily W."
              className="w-5 h-5 rounded-full"
              referrerPolicy="no-referrer"
            />
            <span className="text-gray-900">Emily W.</span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600">Likes</span>
          <div className="flex items-center space-x-2">
            <span className="text-red-500">23</span>
            <Button variant="danger" size="sm">Follow</Button>
          </div>
        </div>
        <div className="flex justify-between">
          <span className="text-gray-600">Tags:</span>
          <div className="flex space-x-1">
            <Badge variant="warning">Suggested</Badge>
            <Badge variant="danger">Bug</Badge>
          </div>
        </div>
      </div>
    </PageLikePanel>
  )
}

export default Panel
