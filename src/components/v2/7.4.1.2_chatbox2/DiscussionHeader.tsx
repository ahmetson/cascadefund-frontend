import React from 'react'
import BackButton from "../../../components/v2/4.2_topic/BackButton";

const DiscussionHeader: React.FC = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center space-x-3">
        <BackButton href='/v2/issue/' />
        <span className="font-semibold text-gray-900">"OAuth Integration Discussion" Disc...</span>
      </div>
      <div className="flex items-center space-x-2">
        <span className="text-sm text-gray-500">Participants:</span>
        <div className="flex -space-x-2">
          <img src="https://dummyimage.com/24x24/4FC3F7/ffffff?text=EW" alt="Participant" className="w-6 h-6 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
          <img src="https://dummyimage.com/24x24/FF6B6B/ffffff?text=DR" alt="Participant" className="w-6 h-6 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
          <img src="https://dummyimage.com/24x24/4ECDC4/ffffff?text=SJ" alt="Participant" className="w-6 h-6 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
          <img src="https://dummyimage.com/24x24/FFD93D/ffffff?text=MJ" alt="Participant" className="w-6 h-6 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
          <img src="https://dummyimage.com/24x24/A8E6CF/ffffff?text=TK" alt="Participant" className="w-6 h-6 rounded-full border-2 border-white" referrerPolicy="no-referrer" />
        </div>
      </div>
    </div>
  )
}

export default DiscussionHeader
