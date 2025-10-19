import React from 'react'
import type { TabProps } from '@/components/utilitified_decorations/Tabs'
import Tabs from '@/components/utilitified_decorations/Tabs'
import BasePanel from '@/components/panel/BasePanel'
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
    <BasePanel>
      <Tabs id="discover-profiles" tabs={tabs} activeTab={activeTabeKey} />
    </BasePanel>
  )
}

export default Panel
