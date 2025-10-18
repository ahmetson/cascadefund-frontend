import React from 'react'
import type { TabProps } from '@/components/utilitified_decorations/Tabs'
import Tabs from '@/components/utilitified_decorations/Tabs'
import Component from '@/components/utilitified_decorations/Panel'
import NetworkingPanel from './NetworkingPanel'

const Panel: React.FC = () => {
  const activeTabeKey = "topSupporters";

  const tabs: TabProps[] = [
    {
      label: 'Top Supporters',
      key: "topSupporters",
      content: <NetworkingPanel />,
    },
    {
      label: 'Similar Profiles',
      key: "similarProfiles",
      content: <NetworkingPanel />,
    }
  ]

  return (
    <Component>
      <Tabs id="discover-profiles" tabs={tabs} activeTab={activeTabeKey} />
    </Component>
  )
}

export default Panel
