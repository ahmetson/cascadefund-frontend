import React from 'react'
import Card from '@/components/utilitified_decorations/PagelikeCard'

interface KeywordTagProps {
  text: string
}

const KeywordTag: React.FC<KeywordTagProps> = ({ text }) => {
  return (
    <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-md mr-2 mb-2">
      {text}
    </span>
  )
}

interface SuggestionItemProps {
  number: number
  text: string
}

const SuggestionItem: React.FC<SuggestionItemProps> = ({ number, text }) => {
  return (
    <div className="flex items-start space-x-3 mb-3">
      <div className="w-6 h-6 bg-blue-500 text-white rounded-full flex items-center justify-center text-sm font-medium">
        {number}
      </div>
      <span className="text-sm text-gray-700">{text}</span>
    </div>
  )
}

const CommentFeedback: React.FC = () => {
  return (
    <Card title="Comment & Feedback Summary">
      
      <div className="mb-6">
        <div className="flex items-center space-x-2 mb-3">
          <span className="text-sm text-gray-600">✏️ Common Keywords How people find your project</span>
        </div>
        <div>
          <KeywordTag text="onboarding" />
          <KeywordTag text="docs" />
          <KeywordTag text="UI" />
          <KeywordTag text="community" />
          <KeywordTag text="tutorials" />
          <KeywordTag text="setup" />
          <KeywordTag text="videos" />
          <KeywordTag text="roadmap" />
        </div>
      </div>
      
      <div>
        <h4 className="text-sm font-medium text-gray-700 mb-3">Top 3 suggestions:</h4>
        <SuggestionItem number={1} text="Better documentation for setup." />
        <SuggestionItem number={2} text="Roadmap clarity." />
        <SuggestionItem number={3} text="Video tutorials for contributors." />
      </div>
    </Card>
  )
}

export default CommentFeedback
