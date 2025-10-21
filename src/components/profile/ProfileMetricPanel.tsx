import React from 'react'
import type { TabProps } from '@/components/Tabs'
import WorkStylePanel from './WorkStylePanel'
import ProjectTimeAllocation from './ProjectTimeAllocationPanel'
import Tabs from '@/components/Tabs'
import BasePanel from '@/components/panel/BasePanel'

const Panel: React.FC = () => {
  const activeTabeKey = "workStyle";

  const tabs: TabProps[] = [
    {
      label: 'Availability & Work Style',
      key: "workStyle",
      content: <WorkStylePanel />,
    },
    {
      label: 'Project Time Allocation',
      key: "projectTimeAllocation",
      content: <ProjectTimeAllocation />,
    }
  ]

  return (
    <Tabs id="profile-metrics" tabs={tabs} activeTab={activeTabeKey} />
  )
}

export default Panel
