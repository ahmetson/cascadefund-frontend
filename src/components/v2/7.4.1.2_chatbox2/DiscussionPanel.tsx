import React from 'react'
import DiscussionHeader from './DiscussionHeader'
import CommentCard from './CommentCard'
import CommentInput from './CommentInput'
import RelatedIssues from './RelatedIssues'
import ActivityFeed from './ActivityFeed'

const DiscussionPanel: React.FC = () => {
  const comments = [
    {
      id: 1,
      author: 'Emily Wong',
      role: 'Maintainer',
      time: 'Yesterday at 2:34 PM',
      content: "I've started researching the OAuth libraries we could use. Google's and Facebook's SDKs are well documented, but Twitter's API v2 might require some additional work.",
      avatar: 'https://dummyimage.com/40x40/4FC3F7/ffffff?text=EW'
    },
    {
      id: 2,
      author: 'David Rodriguez',
      role: 'Contributor',
      time: 'Yesterday at 3:15 PM',
      content: 'We should consider using Auth0 as a middleware to handle all these integrations. It would save us development time and provide a more consistent experience.',
      avatar: 'https://dummyimage.com/40x40/FF6B6B/ffffff?text=DR'
    },
    {
      id: 3,
      author: 'Sarah Johnson',
      role: 'Influencer',
      time: 'Today at 9:22 AM',
      content: '@David I agree with using Auth0, but we need to consider the cost implications. Let\'s prepare a comparison between building in-house vs using Auth0 for the next meeting.',
      avatar: 'https://dummyimage.com/40x40/4ECDC4/ffffff?text=SJ'
    }
  ]

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg">
        <DiscussionHeader />
        <div className="p-4 space-y-4">
          {comments.map(comment => (
            <CommentCard key={comment.id} {...comment} />
          ))}
          <CommentInput />
        </div>
      </div>
      
      <RelatedIssues />
      <ActivityFeed />
    </div>
  )
}

export default DiscussionPanel
