import React, { useState } from 'react'
import Card from './Card'
import LinkBtn from '../LinkBtn'

const ChatCard: React.FC = () => {
  const [topic, setTopic] = useState('')
  const [autoGenerate, setAutoGenerate] = useState(true)

  return (
    <Card>
      <h3 className="font-semibold text-gray-900 mb-4">Chat Topic</h3>
      
      <div className="space-y-4">
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
        
        <div className="pt-4">
          <LinkBtn variant="green" href='/v2/issue/chatbox' className="w-full" label="Open Chat" />
          <p className="text-xs text-gray-500 text-center mt-2">
            (Todo) its a tooltip when button disabled: Either check the auto topic name, or type topic name
          </p>
        </div>
      </div>
    </Card>
  )
}

export default ChatCard
