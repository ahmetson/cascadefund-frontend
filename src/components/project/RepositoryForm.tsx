import React, { useState } from 'react'
import Panel from '@/components/utilitified_decorations/PagePanel'
import Input from '@/components/Input'
import { getIcon } from '../icon'
import { PanelEvents } from '@/types/eventTypes'

const C: React.FC<PanelEvents> = ({ onActionClick }) => {
  const [repositoryUrl, setRepositoryUrl] = useState<string>()

  return (
    <Panel
      icon='new-file'
      titleCenter={true}
      title={"Add GitHub Repository"}
      actions={[{ variant: 'blue', onClick: (() => { onActionClick && onActionClick(repositoryUrl) }), children: 'Next' }]}
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

    </Panel>
  )
}

export default C
