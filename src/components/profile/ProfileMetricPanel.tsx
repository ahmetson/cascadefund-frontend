import React from 'react'
import type { TabProps } from '@/components/utilitified_decorations/Tabs'
import WorkStylePanel from './WorkStylePanel'
import ProjectTimeAllocation from './ProjectTimeAllocationPanel'
import Tabs from '@/components/utilitified_decorations/Tabs'
import Component from '@/components/utilitified_decorations/Panel'

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
    <Component>
      <Tabs id="profile-metrics" tabs={tabs} activeTab={activeTabeKey} />
    </Component>
  )
}

export default Panel
