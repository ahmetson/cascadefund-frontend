import React from 'react'
import MetricCard from '@/components/StatInfoPanel2'
import RowGrid from '@/components/grid/RowGrid'
import BasePanel from '@/components/panel/BasePanel'

const MainContent: React.FC = () => {
  return (
    <BasePanel >
      <RowGrid cols={3} >
        <MetricCard
          icon="👆"
          title="Total Clicks"
          value="3,240"
          color="bg-blue-500"
        />
        <MetricCard
          icon="👥"
          title="New Users"
          value="1,120"
          color="bg-blue-500"
        />
        <MetricCard
          icon="💰"
          title="Donors from Clicks"
          value="340"
          color="bg-blue-500"
        />
        <MetricCard
          icon="👁️"
          title="Contributors View"
          value="210"
          color="bg-blue-500"
        />
        <MetricCard
          icon="📈"
          title="Influencers Created"
          value="45"
          color="bg-blue-500"
        />
      </RowGrid>
    </BasePanel>
  )
}

export default MainContent
