import React from 'react'
import LinkBtn from '../LinkBtn'

const ChatSection: React.FC = () => {
  return (
    <div className="bg-cascade-teal rounded-lg p-6 bg-white border border-gray-200">
      <h3 className="font-semibold mb-2 text-gray-700">Messages</h3>
      
      <div className="bg-white rounded-lg p-4 text-gray-900 mb-4">
        <h4 className="font-medium mb-2">Write with the AI's help</h4>
        <p className="text-sm text-gray-600">
          Sever AI can help you write the task together, I know all project context
        </p>
      </div>
      
      <LinkBtn label="Add a new Chat" href="/v2/issue/topic" variant="green" className="w-full" />
      
      <p className="text-xs mt-2 text-gray-600">
        Create new chat to discuss the issue with the maintainer. 
        All your comments must be here, instead the issue
      </p>
    </div>
  )
}

export default ChatSection
