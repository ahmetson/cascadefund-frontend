import React, { useState } from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'
import Input from '@/components/Input'
import { getIcon } from '../icon'
import { PanelEvents } from '@/types/eventTypes'

type Props = PanelEvents & {
  repositoryUrl?: string
  setRepositoryUrl: (arg0: string) => void;
}

const C: React.FC<Props> = ({ repositoryUrl, setRepositoryUrl }) => {

  return (
    <PageLikePanel
      icon='new-file'
      titleCenter={true}
      title={"Add GitHub Repository"}
    >
      <div className='mb-2'>
        <label htmlFor="repository-url" className="block text-sm text-gray-700">
          Repository URL
          <Input
            id="repository-url"
            type="url"
            value={repositoryUrl || ''}
            onChange={(e) => setRepositoryUrl(e.target.value)}
            placeholder="https://github.com/username/repository"
            className="w-full mt-1"
          />
        </label>
        <div className='flex items-center justify-center'>
          {getIcon('info')} <span>You can add only your projects.</span>
        </div>
      </div>

    </PageLikePanel>
  )
}

export default C
