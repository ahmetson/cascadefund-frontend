import React, { useState } from 'react'
import LinkBtn from '../LinkBtn'

const ChatSection: React.FC = () => {
  const [comment, setComment] = useState('')

  return (
    <div className="bg-white rounded-lg shadow">
      <div className="p-4 border-b">
        <LinkBtn variant="blue" href="/v2/issue/post" label="<" className='w-sm inline mr-2' />
        <h3 className="font-medium text-gray-900 flex items-center inline">
          Chat Topic (Todo show on right a menu of peope and copy people from next pages)
        </h3>
      </div>
      
      <div className="p-4">
        <div className="bg-gradient-to-br from-pink-100 to-orange-100 rounded-lg h-64 mb-4"></div>
        
        <div className="flex items-start space-x-3">
          <img 
            className="w-8 h-8 rounded-full" 
            src="https://dummyimage.com/32x32/4A90E2/ffffff?text=U" 
            alt="User avatar" 
            referrerPolicy="no-referrer"
          />
          <div className="flex-1">
            <textarea
              placeholder="Add your comment..."
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
            />
            <div className="flex justify-end mt-3">
              <LinkBtn variant="blue" href="/v2/issue/post" className="text-white font-medium py-2 px-4" label="Post Comment" />              
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ChatSection
