import React from 'react'
import { memo } from 'react'
import PagePanel from '@/components/utilitified_decorations/PagePanel'
import Panel from '@/components/utilitified_decorations/Panel'
import { getIcon } from '../icon'
import Link from '../Link'
import AvatarList from '../AvatarList'
import Badge from '../Badge'
import LinkBtn from '../LinkBtn'
import { DndProvider, useDrag } from 'react-dnd'
import { HTML5Backend } from "react-dnd-html5-backend";

interface IssueCardProps {
  id: string
  title: string
  author: string
  description: string
  likes: number
  date: string
  replies: number
  readTime: string
  fundedIssue?: boolean
  priority: 'Urgent' | 'Bug' | 'Wish'
  type: 'public' | 'funded'
  isDropped?: boolean
}

const IssueCard: React.FC<IssueCardProps> = memo(({
  id,
  title,
  author,
  likes,
  date,
  replies,
  priority,
  type,
  isDropped
}) => {
  const [{ opacity }, drag] = useDrag(
    () => ({
      type: 'issue',
      item: { id, title },
      collect: (monitor) => ({
        opacity: monitor.isDragging() ? 0.4 : 1,
      }),
    }),
    [id, title],
  )
  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'Urgent': return 'border border-orange-500'
      case 'Bug': return 'border border-red-500'
      case 'Wish': return 'border border-green-500'
      default: return 'border border-gray-500'
    }
  }

  return (
    <Link
      ref={drag} data-testid={id}
      className={`cursor-move! opacity-${opacity}`}
      href={`/data/issue?id=${id}&questId=1`}
    >
      <PagePanel title={title}
        rightHeader={type === 'funded' &&
          <div className="flex items-center space-x-1 text-blue-600 py-0! px-1! flex">
            {getIcon('energy')}
            <span className="text-sm">{likes}</span>
          </div>}
        className={`p-1! text-gray-800 rounded-lg border ${type === 'funded' ? 'bg-green-50 border-green-200 hover:bg-green-100 border-green-300' : 'bg-white border-gray-200 hover:bg-gray-200 hover:border-gray-300'
          }`}>
        {type === 'funded' ? <AvatarList /> :
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <span className="text-xs text-gray-600">{author}</span>
          </div>}

        <div className="flex items-center justify-between">
          <div className="flex space-x-4 text-xs text-gray-500">
            <span className="flex space-x-1">{getIcon('clock')} {date}</span>
            {type === 'funded' && <span className='flex space-x-1'>{getIcon('heart')} {replies}</span>}
            {type === 'funded' && <span className='flex space-x-1 text-blue-500'>{getIcon('likes')}
              <span className="text-gray-500">{likes}</span></span>}
          </div>
          <span className={`px-2 py-1 text-xs font-medium rounded ${getPriorityColor(priority)}`}>
            {priority}
          </span>
        </div>
      </PagePanel>
    </Link>
  )
})

const IssuesSection: React.FC = () => {
  return (
    <Panel className="bg-white rounded-lg shadow-sm border border-gray-200"
    >
      <p className='text-xs mb-2 -mt-2.5'>To clean the board, drag and drop the issues onto the tabs or onto roadmap.</p>
      <div className="flex items-center justify-between mb-4">
        <div className="flex space-x-2">
          <button className="px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded">All</button>
          <button className="px-3 py-1 text-xs font-medium bg-red-500 text-white rounded">Bug</button>
          <button className="px-3 py-1 text-xs font-medium bg-blue-500 text-white rounded">Fix</button>
          <button className="px-3 py-1 text-xs font-medium bg-orange-500 text-white rounded">Urgent</button>
          <button className="px-3 py-1 text-xs font-medium bg-green-500 text-white rounded">Wish</button>
          <button className="px-3 py-1 text-xs font-medium bg-gray-500 text-white rounded">Suggested</button>
        </div>
        <div>
          Sort:
          <select className="text-xs ml-1 border border-gray-300 rounded px-2 py-1">
            <option>All</option>
            <option>Priority</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="flex items-center space-x-2 h-5">
            <h4 className="text-sm text-gray-600">Public issues <Badge variant='gray'>20000</Badge></h4>
          </div>

          <div className="flex flex-col">
            <DndProvider backend={HTML5Backend}>
              <IssueCard
                id="1"
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
                id="2"
                title="Implement dark mode across all pages"
                author="Serkan Balguliyev"
                description="Many users have requested a dark mode option to reduce eye strain during night time usage. This would require implementing a theme toggle."
                likes={42}
                date="Oct 3, 2023"
                replies={5}
                readTime="5 min"
                priority="Urgent"
                type="public"
              />
            </DndProvider>
          </div>
        </div>

        <div>
          <div className="flex space-x-2 h-5">
            <h4 className="text-sm text-gray-600">Funded issues <Badge variant='blue'>20000</Badge></h4>

            <span className="text-xs text-gray-500">(+12 stars to rating)</span>
          </div>

          <div className="flex flex-col">
            <DndProvider backend={HTML5Backend}>
              <IssueCard
                id="3"
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
                id="4"
                title="Data export feature crashes with large datasets"
                author="Serkan Balguliyev"
                description="When attempting to export data sets larger than 10,000 records, the application crashes. We need to implement pagination or streaming."
                likes={37}
                date="Oct 5, 2023"
                replies={6}
                readTime="5 min"
                priority="Wish"
                type="funded"
              />            </DndProvider>

          </div>
        </div>
      </div>

      <div className='flex justify-center mt-4'>
        <LinkBtn variant={'gray'} href={'/data/issue/post'}>Add Issue</LinkBtn>
      </div>
    </Panel>
  )
}

export default IssuesSection
