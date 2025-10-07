import React from 'react'
import SidebarSection from './SidebarSection'
import LinkBtn from '../LinkBtn'

interface SidebarProps {
  selectedIssues: string[]
}

const Sidebar: React.FC<SidebarProps> = ({ selectedIssues }) => {
  const discoveryItems = [
    {
      title: 'What is issue?',
      description: 'In CascadeFund, an issue is any message such as a feature, idea, bug, question or discussion.'
    },
    {
      title: 'Why to attach an issue?',
      description: 'By attaching an issue, you make your app discoverable via the issue on the original project.'
    }
  ]

  const selectedIssueItems = [
    { name: 'NodeDB Toolkit', number: '#142' },
    { name: 'React Component Library', number: '#12' },
    { name: 'SecureAuth Framework', number: '#12' },
    { name: 'CloudScale API', number: '#12' },
    { name: 'MobileUI Framework', number: 'Custom' }
  ]

  return (
    <div className="space-y-6">
      <SidebarSection title="Discovery" items={discoveryItems} />
      
      <SidebarSection 
        title="Selected Issues" 
        items={selectedIssueItems}
        showNumbers={true}
      />
      
      <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-4">
        <p className="text-sm text-gray-600 mb-4">
          GitHub doesn't have the issue that you are addressing?
        </p>
        <LinkBtn variant="purple" className="w-full" label="Create Issue" href="/v2/issue/post" />
      </div>
    </div>
  )
}

export default Sidebar
