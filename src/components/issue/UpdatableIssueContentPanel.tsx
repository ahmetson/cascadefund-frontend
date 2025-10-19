import React, { useState } from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'
import Badge from '@/components/Badge'
import { Input } from '@/components/ui/input'
import type { ActionProps } from '@/types/eventTypes'

interface Props {
  panelTitle?: string
  title?: string
  description?: string
  actions?: ActionProps[]
}

const IssueContent: React.FC<Props> = (props) => {
  const [title, setTitle] = useState(props.title || '');
  const [description, setDescription] = useState(props.description || '');

  return (
    <PageLikePanel title={props.panelTitle || "Update The Issue"} actions={props.actions || []} rightHeader={<Badge variant='gray'>Don't affect rating</Badge>}>
      <Input
        type="text"
        placeholder="Title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        rows={12}
        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
      />
    </PageLikePanel>
  )
}

export default IssueContent
