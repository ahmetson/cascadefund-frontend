import React from 'react'
import Card from '@/components/utilitified_decorations/PagelikeCard'
import LinkBtn from '@/components/LinkBtn'

interface IssueCardProps {
  title: string
  author: string
  description: string
  likes: number
  date: string
  replies: number
  readTime: string
  priority: 'Urgent' | 'Bug' | 'Wish'
  type: 'public' | 'funded'
}

const IssueCard: React.FC<IssueCardProps> = ({ 
  title, 
  author, 
  description, 
  likes, 
  date, 
  replies, 
  readTime, 
  priority,
  type 
}) => {
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgent': return 'bg-orange-500'
      case 'Bug': return 'bg-red-500'
      case 'Wish': return 'bg-green-500'
      default: return 'bg-gray-500'
    }
  }

  return (
    <Card title={title} rightHeader={<LinkBtn href="#" className="flex items-center space-x-1 text-blue-600">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 10.5a1.5 1.5 0 113 0v6a1.5 1.5 0 01-3 0v-6zM6 10.333v5.43a2 2 0 001.106 1.79l.05.025A4 4 0 008.943 18h5.416a2 2 0 001.962-1.608l1.2-6A2 2 0 0015.56 8H12V4a2 2 0 00-2-2 1 1 0 00-1 1v.667a4 4 0 01-.8 2.4L6.8 7.933a4 4 0 00-.8 2.4z" />
            </svg>
            <span className="text-sm">{likes}</span>
          </LinkBtn>} className={`p-4 rounded-lg border ${
      type === 'funded' ? 'bg-green-50 border-green-200' : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center space-x-2 mb-2">
        <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
        <span className="text-xs text-gray-600">{author}</span>
      </div>
      
      <p className="text-xs text-gray-600 mb-3">{description}</p>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4 text-xs text-gray-500">
          <span>{date}</span>
          <span>{replies} followers</span>
          <span>{readTime} read</span>
        </div>
        <span className={`px-2 py-1 text-xs font-medium text-white rounded ${getPriorityColor(priority)}`}>
          {priority}
        </span>
      </div>
    </Card>
  )
}

const IssuesSection: React.FC = () => {
  return (
    <Card className="bg-white rounded-lg shadow-sm border border-gray-200" title="Issues">
        <div className="flex items-center justify-between mb-4">
          <div className="flex space-x-2">
            <button className="px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded">All</button>
            <button className="px-3 py-1 text-xs font-medium bg-red-500 text-white rounded">Bug</button>
            <button className="px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded">Fix</button>
            <button className="px-3 py-1 text-xs font-medium bg-orange-500 text-white rounded">Urgent</button>
            <button className="px-3 py-1 text-xs font-medium bg-green-500 text-white rounded">Wish</button>
            <button className="px-3 py-1 text-xs font-medium bg-gray-500 text-white rounded">Suggested</button>
          </div>
          <select className="text-xs border border-gray-300 rounded px-2 py-1">
            <option>Priority</option>
          </select>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <h4 className="text-sm font-medium text-gray-900">Public issues</h4>
              <span className="w-5 h-5 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs">2</span>
            </div>
            
            <div className="space-y-3">
              <IssueCard
                title="Authentication fails on slow connections"
                author="Serkan Balguliyev"
                description="Users are experiencing authentication failures when their connection speed drops below 100ms. The system needs to handle timeouts more gracefully."
                likes={24}
                date="Oct 5, 2023"
                replies={5}
                readTime="5 min"
                priority="Urgent"
                type="public"
              />
              
              <IssueCard
                title="Implement dark mode across all pages"
                author=""
                description="Many users have requested a dark mode option to reduce eye strain during night time usage. This would require implementing a theme toggle."
                likes={42}
                date="Oct 3, 2023"
                replies={5}
                readTime="5 min"
                priority="Urgent"
                type="public"
              />
            </div>

            <LinkBtn href="/issue/post">
              Add an issue
            </LinkBtn>
          </div>
          
          <div>
            <div className="flex items-center space-x-2 mb-3">
              <h4 className="text-sm font-medium text-gray-900">Funded issues</h4>
              <span className="w-5 h-5 bg-gray-400 text-white rounded-full flex items-center justify-center text-xs">2</span>
              <span className="text-xs text-gray-500">(+12 stars to rating)</span>
            </div>
            
            <div className="space-y-3">
              <IssueCard
                title="Fix responsive layout on tablet devices"
                author="Serkan Balguliyev"
                description="The dashboard layout breaks on iPad and other tablet devices in landscape orientation. Need to implement proper responsive breakpoints."
                likes={15}
                date="Oct 6, 2023"
                replies={6}
                readTime="5 min"
                priority="Bug"
                type="funded"
              />
              
              <IssueCard
                title="Data export feature crashes with large datasets"
                author=""
                description="When attempting to export data sets larger than 10,000 records, the application crashes. We need to implement pagination or streaming."
                likes={37}
                date="Oct 5, 2023"
                replies={6}
                readTime="5 min"
                priority="Wish"
                type="funded"
              />
            </div>
          </div>
        </div>
    </Card>
  )
}

export default IssuesSection
