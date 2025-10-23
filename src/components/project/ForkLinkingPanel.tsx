import React, { useState, useEffect } from 'react'
import SearchBar from '@/components/SearchBar'
import PageLikePanel, { PageLikePanelProps } from '@/components/panel/PageLikePanel'
import Link from '../custom-ui/Link'
import { ProjectInfo } from './types'
import { githubUrlToGit } from '@/lib/url'
import { getIcon, IconType } from '../icon'
import { Issue } from '../issue/types'
import List from '../list/List'
import SelectableItem from '../list/SelectableItem'
import { useSelectableList } from '../list/useSelectableList'
import Badge from '../custom-ui/Badge'
import Button from '../custom-ui/Button'

export type ForkLinkingPanelProps = Omit<PageLikePanelProps, 'title' | 'children'> & {
  project: Omit<ProjectInfo, 'forkId'>
  fork: Omit<ProjectInfo, 'forkId'>
  onSelectedIssuesChange?: (issueIds: string[]) => void
}

const ForkLinkingPanel: React.FC<ForkLinkingPanelProps> = ({ className, onActionClick, onSelectedIssuesChange, project, fork, ...props }) => {
  const [searchQuery, setSearchQuery] = useState('')
  const { selectedItem, setSelectedItem } = useSelectableList({ allowMany: true })

  useEffect(() => {
    onSelectedIssuesChange?.(selectedItem.asArray)
  }, [selectedItem, onSelectedIssuesChange])

  const issues: Issue[] = [
    {
      uri: 'https://github.com/example/repo/issues/142',
      number: '#142',
      title: 'Improve blockchain verification performance',
      description: 'Transaction verification takes too long on large repositories',
      type: 'improvement',
      storage: 'github',
      authorId: '',
      projectId: '',
      categoryId: ''
    },
    {
      uri: 'https://github.com/example/repo/issues/156',
      number: '#156',
      title: 'Add support for Solana blockchain',
      description: 'Currently only supports Ethereum and Polygon networks',
      type: 'feature',
      storage: 'github',
      authorId: '',
      projectId: '',
      categoryId: ''
    },
    {
      uri: 'https://github.com/example/repo/issues/189',
      number: '#189',
      title: 'Fix dependency vulnerability in crypto module',
      description: 'Security issue identified in v2.3.1 of the crypto verification module',
      type: 'bug',
      storage: 'github',
      authorId: '',
      projectId: '',
      categoryId: ''
    },
    {
      uri: 'https://github.com/example/repo/issues/201',
      number: '#201',
      title: 'Implement batch processing for large SBOMs',
      description: 'Current implementation fails with memory errors on repositories with 1000+ dependencies',
      type: 'enhancement',
      storage: 'github',
      authorId: '',
      projectId: '',
      categoryId: ''
    },
    {
      uri: 'https://cascadefund.org/issues/custom',
      number: 'Other',
      title: 'Custom issue or enhancement',
      description: 'Describe your own contribution',
      type: 'custom',
      storage: 'cascadefund',
      authorId: '',
      projectId: '',
      categoryId: ''
    }
  ]

  const filteredIssues = issues.filter(issue =>
    issue.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    issue.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <PageLikePanel
      {...props}
      interactive={false}
      className={className}
      title={"Reason of the forking"}
      rightHeader={
        <Link
          href={`/data/issue/post?project=${githubUrlToGit(fork.repository)}&notYetCreated=true&fork=${githubUrlToGit(project.repository)}`}
        >
          Create New Issue
        </Link>
      }
      actions={<div className="">
        <p className={`text-center text-sm mt-2 mb-1 border-t-1 border-gray-300 ${selectedItem.amount === 0 ? 'text-rose-500' : 'text-sky-600'}`}>
          {selectedItem.amount === 0 ?
            <span>Select the issue. Didn't find the issue you want? <Link href={`/data/issue/post?project=${githubUrlToGit(fork.repository)}&notYetCreated=true&fork=${githubUrlToGit(project.repository)}`}>Create a new issue</Link></span> :
            <span>Fork is related to {selectedItem.amount} issues</span>}
        </p>
        <div className="flex justify-center">
          <Button
            variant='primary'
            disabled={selectedItem.amount === 0}
            onClick={() => { onActionClick && onActionClick({}) }}
          >Next</Button>
        </div>
      </div>}>
      <div>
        <strong className='inline-flex items-center gap-1 h-2'>Your project has been forked from
          <Link className='ml-1' href={fork.repository} >
            <div className='inline-flex items-center gap-1'>{getIcon('github')} {fork.name}</div>
          </Link></strong>
      </div>
      <p className="text-sm text-gray-600 mb-4">
        <span>
          Choose one or many issues that explains why you forked.<br />
          The issues will be attached to the original project to make your fork <b>discoverable</b>.
        </span>
      </p>

      <SearchBar
        value={searchQuery}
        onChange={setSearchQuery}
        placeholder="Search for issues in the original repository..."
      />

      <List className="mb-6" contentHeight="min-h-48 max-h-96">
        {filteredIssues.map((issue) => (
          <SelectableItem
            iconClassName={issue.type === 'bug' ? 'border-red-300' : issue.type === 'feature' ? 'border-blue-300' : issue.type === 'improvement' ? 'border-green-300' : issue.type === 'enhancement' ? 'border-purple-300' : 'border-gray-300'}
            key={issue.uri}
            id={issue.uri}
            onClick={setSelectedItem}
            selectedId={selectedItem.has(issue.uri) ? issue.uri : undefined}
          >
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-row gap-1 items-start">
                <div className="flex items-center space-x-3 mt-0.5">
                  <Link href={issue.uri} asNewTab={issue.storage !== 'cascadefund'}>
                    <Badge variant='info' static={true}>
                      <div className="flex items-center space-x-1">
                        {getIcon(issue.storage as IconType)}
                        <span className="text-xs font-medium">{issue.number}</span>
                      </div>
                    </Badge>
                  </Link>
                </div>
                <div>
                  <span className="text-sm font-medium">{issue.title}</span>
                  <p className="text-sm text-gray-600">{issue.description}</p>
                </div>
              </div>
              <div className="mt-1 text-sm text-gray-600">
                <span className={`px-2 py-1 text-xs rounded-full ${issue.type === 'bug' ? 'bg-red-100 text-red-800' :
                  issue.type === 'feature' ? 'bg-blue-100 text-blue-800' :
                    issue.type === 'improvement' ? 'bg-green-100 text-green-800' :
                      issue.type === 'enhancement' ? 'bg-purple-100 text-purple-800' :
                        'bg-gray-100 text-gray-800'
                  }`}>
                  {issue.type}
                </span>
              </div>
            </div>

          </SelectableItem>
        ))}
      </List>
    </PageLikePanel >
  )
}

export default ForkLinkingPanel
