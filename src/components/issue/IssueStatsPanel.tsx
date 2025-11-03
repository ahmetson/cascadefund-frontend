import React, { useState } from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'
import Badge from '@/components/badge/Badge'
// import TimeAgo from 'timeago-react'
import Following from '../social-network/Followings'
import TokenInput from 'react-customize-token-input';
import '../../styles/react-customize-token-input.css';

interface IssueStatsProps {
  editable?: boolean
  tags?: string[]
  list?: string
  availableLists?: string[]
}

const IssueStatsPanel: React.FC<IssueStatsProps> = ({ editable = false, tags: _tags = [], list: _list, availableLists: _availableLists = [] }) => {
  const [tags, setTags] = useState<string[]>(_tags)
  const [list, setList] = useState<string | undefined>(_list);

  const tagsClassName = editable ? 'border-1 rounded-xs border-gray-300 hover:border-teal-400 hover:bg-white bg-teal-50' : ''

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
          {editable ?
            <select
              value={list || 'N/A'}
              onChange={(e) => setList(e.target.value)}
              className="border border-gray-300 rounded-xs hover:border-teal-400 hover:bg-gray-100 px-3 py-1 text-sm bg-white"
            >
              {_availableLists?.map((listOption) => (
                <option key={listOption} value={listOption}>
                  <Badge static={true} variant="info">{listOption}</Badge>
                </option>
              ))}
            </select>
            :
            <Badge static={true} variant="info">v2.12.3</Badge>}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 w-24">Created:</span>
          <i>N/A</i>
          {/* <TimeAgo datetime={1730457600000} className='text-gray-700' /> */}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 w-24">Updated:</span>
          <i>N/A</i>
          {/* <TimeAgo datetime={1730457600000} className='text-gray-700' /> */}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 w-24">Contributor:</span>
          <span>N/A</span>
          {/* <div className="flex items-center space-x-2 gap-1">
            <MenuAvatar imgClassName="w-5 h-5 rounded-full" alt="Emily W." uri="/profile/emily" />
            supervised by
            <MenuAvatar imgClassName="w-5 h-5 rounded-full" alt="Emily W." uri="/profile/emily" />
          </div> */}
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 w-24">Likes</span>
          <div className="flex items-center space-x-2">
            <Following following={true} followers={23} />
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-gray-600 w-24">Tags:</span>
          <TokenInput
            readOnly={!editable}
            tokenValues={tags}
            className={`flex w-full justify-end ${tagsClassName}`}
            onTokenValuesChange={(tags_) => setTags(tags_)}
          />
        </div>
      </div>
    </PageLikePanel>
  )
}

export default IssueStatsPanel
