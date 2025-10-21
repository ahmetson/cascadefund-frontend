import React, { useState } from 'react'
import { ConversationHeader } from '@chatscope/chat-ui-kit-react'
import Button from '../custom-ui/Button';

export interface Props {
  onBackClick?: (arg0: boolean) => void;
  onActionClick?: (arg0: boolean) => void;
}

const ChatCard: React.FC<Props> = ({ onBackClick, onActionClick }) => {
  const [topic, setTopic] = useState('')
  const [autoGenerate, setAutoGenerate] = useState(true)

  return (
    <div style={{
      height: '300px'
    }}>
      <ConversationHeader>
        <ConversationHeader.Back onClick={() => { onBackClick && onBackClick(false) }} />
        <ConversationHeader.Content
          info="Enter the topic to discussAbout"
          userName="New Discussion"
        />
      </ConversationHeader>
      <div className="space-y-4 mt-2">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
          <input
            type="text"
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
            placeholder="Title of the chat, so that participants know it."
            className="w-full p-3 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            id="auto-generate"
            checked={autoGenerate}
            onChange={(e) => setAutoGenerate(e.target.checked)}
            className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
          />
          <label htmlFor="auto-generate" className="text-sm text-gray-700">
            Generate the Topic by the message and issue automatically
          </label>
        </div>

        <div className='flex justify-center flex-column mt-4'>
          <Button onClick={() => onActionClick && onActionClick(true)} className='bg-blue-300 w-60 mr-2'>Open Chat</Button><br />
        </div>
        <p className="text-xs text-gray-500 text-center -mt-4">
          (Todo) its a tooltip when button disabled: Either check the auto topic name, or type topic name
        </p>
      </div>
    </div>
  )
}

export default ChatCard
