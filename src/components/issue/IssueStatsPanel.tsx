import React from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'
import Badge from '@/components/badge/Badge'
import TimeAgo from 'timeago-react'
import Following from '../social-network/Followings'
import MenuAvatar from '../MenuAvatar'

const Panel: React.FC = () => {
  return (
    <PageLikePanel
      className="mb-8"
      interactive={false}
      title="Issue Stats" >
      <div className="space-y-3 text-sm py-4">
        <div className="flex justify-between items-center">
          <span className="text-gray-600 w-24">Status:</span>
          <Badge static={true} variant="success">Open</Badge>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 w-24">List/Roadmap:</span>
          <Badge static={true} variant="info">v2.12.3</Badge>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 w-24">Created:</span>
          <TimeAgo datetime={1730457600000} className='text-gray-700' />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 w-24">Updated:</span>
          <TimeAgo datetime={1730457600000} className='text-gray-700' />
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 w-24">Contributor:</span>
          <div className="flex items-center space-x-2 gap-1">
            <MenuAvatar imgClassName="w-5 h-5 rounded-full" alt="Emily W." uri="/profile/emily" />
            supervised by
            <MenuAvatar imgClassName="w-5 h-5 rounded-full" alt="Emily W." uri="/profile/emily" />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 w-24">Likes</span>
          <div className="flex items-center space-x-2">
            <Following following={true} followers={23} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 w-24">Tags:</span>
          <div className="flex space-x-1">
            <Badge static={true} variant="warning">Suggested</Badge>
            <Badge static={true} variant="danger">Bug</Badge>
          </div>
        </div>
      </div>
    </PageLikePanel>
  )
}

export default Panel
