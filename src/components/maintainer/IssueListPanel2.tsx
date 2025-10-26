import React from 'react'
import FilterableList from '@/components/list/FilterableList'
import IssueLink from '@/components/issue/IssueLink'
import BasePanel from '@/components/panel/BasePanel'
import { Issue } from '@/components/issue/types'
import TimeAgo from 'timeago-react'

const ContentArea: React.FC = () => {
  const issues: Issue[] = [
    {
      id: 1,
      uri: '/issues/1',
      number: '#1234',
      title: "Fix responsive layout on tablet devices",
      description: "The dashboard layout breaks on iPad and other tablet devices in landscape orientation. Elements overlap and some controls become inaccessible.",
      type: 'bug',
      storage: 'cascadefund',
      author: {
        uri: '/profile/serkan',
        name: 'Serkan Bulgurcu',
        avatar: 'https://dummyimage.com/32x32/4FC3F7/ffffff?text=S',
        rating: {
          ratingType: 'maintainer',
          lvl: 3,
          maxLvl: 5,
          top: 10
        }
      },
      projectId: 'project-1',
      categoryId: 'category-1',
      createdTime: '2023-10-05T00:00:00Z',
      stats: {
        'follower': {
          type: 'follower',
          hint: 'Followers',
          children: 5
        },
        'chat': {
          type: 'chat',
          hint: 'Messages',
          children: 5
        }
      }
    },
    {
      id: 2,
      uri: '/issues/2',
      number: '#1235',
      title: "Data export feature crashes with large datasets",
      description: "When attempting to export data sets larger than 10,000 records, the application crashes. We need to implement pagination or streaming.",
      type: 'wish',
      storage: 'cascadefund',
      author: {
        uri: '/profile/serkan',
        name: 'Serkan Bulgurcu',
        avatar: 'https://dummyimage.com/32x32/4FC3F7/ffffff?text=S',
        rating: {
          ratingType: 'maintainer',
          lvl: 4,
          maxLvl: 5,
          top: 5
        }
      },
      projectId: 'project-1',
      categoryId: 'category-1',
      createdTime: '2023-10-05T00:00:00Z',
      stats: {
        'follower': {
          type: 'follower',
          hint: 'Followers',
          children: 5
        },
        'chat': {
          type: 'chat',
          hint: 'Messages',
          children: 5
        }
      }
    }
  ]

  return (
    <BasePanel className="max-w-6xl mx-auto">
      <FilterableList
        items={issues}
        itemComponent={IssueLink}
        title={<h2 className="text-xl font-semibold">Issues</h2>}
        searchPlaceholder="Search issues..."
        searchableFields={['title', 'description']}
      />
    </BasePanel>
  )
}

export default ContentArea
