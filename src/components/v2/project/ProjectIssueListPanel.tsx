import React, { useState } from 'react'
import SearchBar from '@/components/v2/SearchBar'
import IssueCard from './SelectableIssuePanel'
import Card from '@/components/utilitified_decorations/PagelikeCard'

interface Issue {
  id: string
  number: string
  title: string
  description: string
  type: 'improvement' | 'feature' | 'bug' | 'enhancement' | 'custom'
}

interface IssueSelectorProps {
  selectedIssues: string[]
  onIssueSelect: (issueId: string) => void
}

const IssueSelector: React.FC<IssueSelectorProps> = ({ selectedIssues, onIssueSelect }) => {
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
    <Card title={"Which issue or problem is your fork addressing?"}
    actions={[{
      variant: 'blue',
      href: '/v2/data/project/update',
      children: 'Next'
    }]}>
      <p className="text-sm text-gray-600 mb-4">
        Using the issues from GitHub, as CascadeFund issues doesn't exist yet. You can select multiple issues that you review.
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
    </Card>
  )
}

export default IssueSelector
