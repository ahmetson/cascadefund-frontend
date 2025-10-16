import React from 'react'
import Panel from '@/components/utilitified_decorations/Panel'
import PagePanel from '@/components/utilitified_decorations/PagePanel'
import Tabs, { TabProps } from '../utilitified_decorations/Tabs'
import Badge from '../Badge'
import { ActionProps } from '@/types/eventTypes'
import LinkBtn from '../LinkBtn'
import Button from '../Button'
import DropTarget from '../DropTarget'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import AvatarList from '../AvatarList'
import { getIcon } from '../icon'

interface VersionProps {
  version: string
  date: string
  status: 'completed' | 'active' | 'planned'
  features: string[]
  completedIssues?: number
  totalIssues?: number
  authors: string[]
}

const VersionPanel: React.FC<VersionProps> = ({
  version,
  date,
  status,
  features,
  completedIssues,
  totalIssues,
  authors
}) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-100 border-green-300'
      case 'active': return 'bg-blue-100 border-blue-300'
      case 'planned': return 'bg-purple-100 border-purple-300'
      default: return 'bg-gray-100 border-gray-300'
    }
  }

  const getStatusButton = (status: string) => {
    switch (status) {
      case 'completed': return 'bg-green-500 text-white'
      case 'active': return 'bg-blue-500 text-white'
      case 'planned': return 'bg-purple-500 text-white'
      default: return 'bg-gray-500 text-white'
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case 'completed': return 'Archived'
      case 'active': return 'Mark as released'
      case 'planned': return 'Check'
      default: return 'Check'
    }
  }

  return (
    <PagePanel title={version} rightHeader={
      status !== 'completed' &&
      <Button className={`py-1 px-2 text-sm rounded-sm ${getStatusButton(status)}`} variant='gray'>
        {getStatusText(status)}
      </Button>
    }
      className={`p-2! w-full! rounded-lg border-2 ${getStatusColor(status)} mb-4`}>
      <div className="flex items-center justify-between mb-2">
        {status === 'active' ? <AvatarList /> :
          <div className="flex items-center space-x-2">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <span className="text-xs text-gray-600">{authors[0]}</span>
          </div>}
      </div>

      {completedIssues !== undefined && totalIssues !== undefined && (
        <div className="mb-3">
          <div className="flex items-center justify-between text-sm mb-1">
            <span className="text-gray-600">Completed Issues:</span>
            <span className="font-medium">{completedIssues}/{totalIssues}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-500 h-2 rounded-full"
              style={{ width: `${(completedIssues / totalIssues) * 100}%` }}
            ></div>
          </div>
        </div>
      )}

      <div className="mb-3">
        <h4 className="text-sm font-medium text-gray-900 mb-2">
          {status === 'completed' ? 'Completed Issues:' : 'Planned Features:'}
        </h4>
        <ul className="space-y-1">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center space-x-2">
              <div className="w-4 h-4 bg-gray-300 rounded-sm flex items-center justify-center">
                {status === 'completed' && (
                  <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </div>
              <span className="text-sm text-gray-700">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between space-x-4 text-xs text-gray-500">
        <span className="flex space-x-1">{getIcon('clock')} {date}</span>
        <span className='flex space-x-1'>{getIcon({ iconType: 'heart', fill: 'currentColor' })} 15</span>
        <span className='flex space-x-1 text-blue-500'>
          {getIcon('energy')}
          <span className="text-gray-500">12</span>
        </span>
        {status === 'completed' ? <span className='flex space-x-1'>{getIcon({ iconType: 'star', fill: 'currentColor' })} + 1.2</span> :
          <span className='flex space-x-1'>{getIcon('project')} {status}</span>}
      </div>

    </PagePanel>
  )
}

interface RoadmapProps {
  actions?: ActionProps[]
  versions: VersionProps[]
}

const RoadmapPanel: React.FC<RoadmapProps> = ({ actions, versions }) => {
  return (
    <Panel className="space-y-6 p-0! border-none!">
      <div>
        {versions.map((version) =>
          version.status === 'completed' ? <VersionPanel {...version} /> :
            <DndProvider backend={HTML5Backend}><DropTarget id={version.version} accept={["issue"]} onDrop={(e) => console.log(e)}>
              <VersionPanel
                {...version}
              />
            </DropTarget>
            </DndProvider>)}
      </div>
      <div className='flex justify-center mt-4'>
        {actions && actions.map((action) => (
          action.href ?
            <LinkBtn variant={action.variant} href={action.href} className={action.className || ""} >{action.children}</LinkBtn>
            :
            <Button variant={action.variant} onClick={action.onClick!} className={action.className || ""} >{action.children}</Button>
        ))}
      </div>
    </Panel>
  )
}

const C: React.FC = () => {
  const notificationBanner = <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-4">
    <div className="flex items-center space-x-2 mb-2">
      <div className="w-4 h-4 bg-green-500 rounded-full"></div>
      <span className="text-sm font-medium text-green-800">Marked as complete!</span>
    </div>
    <p className="text-xs text-green-700">
      Wow! Informed 5 people who were waiting for this release.
    </p>
  </div>

  const archive: VersionProps[] = [
    {
      version: "v2.4.0",
      authors: ["ahmetson"],
      date: "Oct 13, 2023",
      status: "completed",
      features: [
        "Discovered authentication system",
        "New dashboard experience",
        "Performance optimizations"
      ],
      completedIssues: 3,
      totalIssues: 3
    }
  ]
  const versions: VersionProps[] = [{
    version: "v2.5.0",
    authors: ["ahmetson"],
    date: "Oct 12, 2023",
    status: "active",
    features: [
      "Dark mode implementation",
      "Tablet responsive layout fixes",
      "Google Calendar integration"
    ],
    completedIssues: 1,
    totalIssues: 3
  }, {
    version: "v2.6.0",
    date: "Oct 12, 2023",
    authors: ["ahmetson"],
    status: "planned",
    features: [
      "Advanced filtering options",
      "API rate limit improvements"
    ],
    completedIssues: 0,
    totalIssues: 2
  }]

  const actions = [{ className: "border-2 border-dashed border-gray-300", children: "Add another version", href: "#" }]

  const tabs: TabProps[] = [
    {
      label: <div className='flex items-center justify-left'>Roadmap <Badge variant='gray'>{versions.length}</Badge></div>,
      key: "roadmap",
      content: <RoadmapPanel actions={actions} versions={versions} />
    },
    {
      label: <div className='flex items-center justify-left'>Archive <Badge variant='gray'>{archive.length}</Badge></div>,
      key: "archive",
      content: <RoadmapPanel versions={archive} />
    },
  ]

  return (
    <Tabs activeTab='roadmap' tabs={tabs} />
  )
}

export default C
