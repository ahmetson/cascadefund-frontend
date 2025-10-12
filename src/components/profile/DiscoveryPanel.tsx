import React from 'react'
import type { TabProps } from '@/components/utilitified_decorations/Tabs'
import Tabs from '@/components/utilitified_decorations/Tabs'
import Card from '@/components/Card'
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
    <Card>
      <Tabs tabs={tabs} activeTab={activeTabeKey} />
    </Card>
  )
}

export default Panel
