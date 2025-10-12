import React from 'react'
import type { TabProps } from '@/components/utilitified_decorations/Tabs'
import WorkStylePanel from './WorkStylePanel'
import ProjectTimeAllocation from './ProjectTimeAllocationPanel'
import Tabs from '@/components/utilitified_decorations/Tabs'
import Card from '@/components/Card'

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
    <Card>
      <Tabs tabs={tabs} activeTab={activeTabeKey} />
    </Card>
  )
}

export default Panel
