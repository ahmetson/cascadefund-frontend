import React, { useState } from 'react'
import SearchBar from '@/components/SearchBar'
import IssueCard from './SelectableIssuePanel'
import PageLikePanel from '@/components/panel/PageLikePanel'
import { PanelEvents } from '@/types/eventTypes'
import Link from '../custom-ui/Link'

interface Issue {
  id: string
  number: string
  title: string
  description: string
  type: 'improvement' | 'feature' | 'bug' | 'enhancement' | 'custom'
}

export type IssueSelectorProps = PanelEvents & {
  selectedIssues: string[]
  className?: string
  onIssueSelect: (issueId: string) => void
}

const IssueSelector: React.FC<IssueSelectorProps> = ({ className, onActionClick, selectedIssues, onIssueSelect }) => {
  const [searchQuery, setSearchQuery] = useState('')

  const issues: Issue[] = [
    {
      id: '142',
      number: '#142',
      title: 'Improve blockchain verification performance',
      description: 'Transaction verification takes too long on large repositories',
      type: 'improvement'
    },
    {
      id: '156',
      number: '#156',
      title: 'Add support for Solana blockchain',
      description: 'Currently only supports Ethereum and Polygon networks',
      type: 'feature'
    },
    {
      id: '189',
      number: '#189',
      title: 'Fix dependency vulnerability in crypto module',
      description: 'Security issue identified in v2.3.1 of the crypto verification module',
      type: 'bug'
    },
    {
      id: '201',
      number: '#201',
      title: 'Implement batch processing for large SBOMs',
      description: 'Current implementation fails with memory errors on repositories with 1000+ dependencies',
      type: 'enhancement'
    },
    {
      id: 'custom',
      number: 'Other',
      title: 'Custom issue or enhancement',
      description: 'Describe your own contribution',
      type: 'custom'
    }
  ]

  const filteredIssues = issues.filter(issue =>
    issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <PageLikePanel
      className={className}
      title={"Issues"}
      rightHeader={<Link href={'/data/issue/post?projectId=1&notYetCreated=true&forkProject=git:ahmetson%2Fblockchain-verifier'} className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors">
        Create New Issue
      </Link>}
      actions={[{
        variant: 'blue',
        onClick: (() => { onActionClick && onActionClick({}) }),
        children: 'Next'
      }]}>
      <div>
        Your project is forked from
        <Link className='ml-1' href="https://github.com/ara-foundation/blockchain-verification-tool" >
          ara-foundation/blockchain-verification-tool
        </Link>
      </div>
      <p className="text-sm text-gray-600 mb-4">

        <span>
          Showing the `blockchain-verification-tool` issues. You can select multiple issues.
        </span>
      </p>

      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search for issues in the original repository..."
      />

      <div className="space-y-3 mb-6">
        {filteredIssues.map((issue) => (
          <IssueCard
            key={issue.id}
            issue={issue}
            isSelected={selectedIssues.includes(issue.id)}
            onSelect={() => onIssueSelect(issue.id)}
          />
        ))}
      </div>

      <p className="text-center text-sm text-red-500 mt-2">
        Select Issues first or create a new one
      </p>
    </PageLikePanel>
  )
}

export default IssueSelector
