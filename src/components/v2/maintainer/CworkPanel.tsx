import React from 'react'
import DepList from './DepListPanel'
import type { TabProps } from '@/components/utilitified_decorations/Tabs';
import Tabs from '@/components/utilitified_decorations/Tabs';
import IssueList from '@/components/v2/maintainer/IssueListPanel2'
import ProfileList from '@/components/v2/maintainer/ProfileListPanel'

const DependenciesSection: React.FC = () => {
    const tabs: TabProps[] = [
      {
        label: 'Dependencies',
        key: "dependencies",
        content: <DepList />
      },
      {
        label: 'Following Issues',
        key: "following-issues",
        content: <IssueList />
      },
      {
        label: 'Following Rockstars',
        key: "following-rockstars",
        content: <ProfileList />
      }
  ]

  return (
    <Tabs activeTab='dependencies' tabs={tabs} />
  )
}

export default DependenciesSection
