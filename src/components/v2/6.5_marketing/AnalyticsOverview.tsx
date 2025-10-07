import React from 'react'

interface MetricCardProps {
  icon: string
  title: string
  value: string
  color: string
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, title, value, color }) => {
  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200">
      <div className="flex items-center space-x-3 mb-2">
        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${color}`}>
          <span className="text-white text-sm">{icon}</span>
        </div>
        <span className="text-sm text-gray-600">{title}</span>
      </div>
      <div className="text-2xl font-bold text-gray-800">{value}</div>
    </div>
  )
}

const AnalyticsOverview: React.FC = () => {
  return (
    <section className="mb-6">
      <h2 className="text-lg font-medium text-gray-800 mb-4">Analytics Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
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
      </div>
    </section>
  )
}

export default AnalyticsOverview
