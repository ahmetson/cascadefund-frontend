import React from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'
import Button from '@/components/Button'
import Tag from '@/components/Tag'

const Panel: React.FC = () => {
  return (
    <PageLikePanel title="Updateable Issue Details" actions={[{
      variant: "blue",
      href: "/data/issue",
      children: "Save"
    }]} >
      <div className="space-y-4">
        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Status:</span>
          <span className="text-sm font-medium text-green-600">Open</span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Created:</span>
          <span className="text-sm text-gray-900">3 days ago</span>
        </div>

        <div className="flex justify-between">
          <span className="text-sm text-gray-600">Updated:</span>
          <span className="text-sm text-gray-900">Today</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Assignee:</span>
          <button className="text-sm text-gray-500 border border-gray-300 rounded px-2 py-1 hover:bg-gray-50">
            Search teammates, people
          </button>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-sm text-gray-600">Likes</span>
          <div className="flex items-center space-x-2">
            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
            </svg>
            <span className="text-sm font-medium text-gray-900">23</span>
            <Button variant="primary" size="sm">
              Follow
            </Button>
          </div>
        </div>

        <div>
          <span className="text-sm text-gray-600 block mb-2">Tags</span>
          <div className="flex flex-wrap gap-2 mb-3">
            <Tag label="Suggested" variant="orange" removable />
            <Tag label="Bug" variant="red" removable />
          </div>

          <select className="w-full text-sm border border-gray-300 rounded px-3 py-2 bg-white">
            <option>Add a tag</option>
          </select>
        </div>
      </div>
    </PageLikePanel>
  )
}

export default Panel
