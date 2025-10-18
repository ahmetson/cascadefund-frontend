import React from 'react'
import type { TabProps } from '@/components/utilitified_decorations/Tabs';
import Tabs from '@/components/utilitified_decorations/Tabs';
import AnalyticsPanel from './AnalyticsPanel';
import TrafficSources from './TrafficSourcePanel';
import ConversionFunnel from './ConversionInfoPanel';
import ContributorAnalytics from './ContributorAnalyticsPanel'

const DependenciesSection: React.FC = () => {
  const tabs: TabProps[] = [
    {
      label: 'Analytics Overview',
      key: "analytics",
      content: <AnalyticsPanel />
    },
    {
      label: 'Traffic Conversion',
      key: "traffic-conversion",
      content: <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <TrafficSources />
        <ConversionFunnel />
      </div>
    },
    {
      label: 'Contribution Analytics',
      key: "contribution-analytics",
      content: <ContributorAnalytics />
    }
  ]

  return (
    <Tabs id="marketing" activeTab='analytics' tabs={tabs} />
  )
}

export default DependenciesSection
