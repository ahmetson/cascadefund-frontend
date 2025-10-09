import React from 'react'
import Panel from '../Panel'
import LinkBtn from '../v2/LinkBtn'

const ChatPanel: React.FC = () => {
  return (
    <Panel>
      <h3 className="font-semibold mb-2 text-gray-700">Messages</h3>
        <div className="space-y-4">
          <a href="/v2/issue/chatbox2">
            <h4 className="text-sm font-medium text-gray-900 mb-2">OAuth Integration Discussion</h4>
            <p className="text-sm text-gray-600 mb-4">Sarah: Let's discuss the implementation approach</p>
          </a>
        
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Project Timeline</h4>
            <p className="text-sm text-gray-600 mb-4">Alex: Updated the milestone dates</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Budget Planning</h4>
            <p className="text-xs text-gray-600">Michael: Q3 estimates attached</p>
          </div>
          
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Team Meeting Notes</h4>
            <div className="flex items-center justify-between">
              <p className="text-xs text-gray-600">Emily: Action items from yesterday</p>
              <svg className="w-4 h-4 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        
        <LinkBtn variant="blue" className="w-full mt-4" href="/v2/issue/topic" label="Add new chat" />
    </Panel>
  )
}

export default ChatPanel
