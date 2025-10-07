import React from 'react'

const CommentInput: React.FC = () => {
  return (
    <div className="flex space-x-3">
      <img 
        src="https://dummyimage.com/40x40/4FC3F7/ffffff?text=YU" 
        alt="Your avatar"
        className="w-10 h-10 rounded-full flex-shrink-0"
        referrerPolicy="no-referrer"
      />
      <div className="flex-1">
        <div className="border border-gray-300 rounded-lg p-3 mb-3">
          <textarea 
            placeholder="Add your comment..."
            className="w-full resize-none border-none outline-none text-sm"
            rows={3}
          />
        </div>
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor" className="text-red-500">
              <path d="M8 2L10.5 6H14L11 9L12 14L8 11L4 14L5 9L2 6H5.5L8 2Z"/>
            </svg>
          </div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            Post Comment
          </button>
        </div>
      </div>
    </div>
  )
}

export default CommentInput
