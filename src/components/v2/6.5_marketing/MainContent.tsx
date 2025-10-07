import React from 'react'
import AnalyticsOverview from './AnalyticsOverview'
import TrafficSources from './TrafficSources'
import ConversionFunnel from './ConversionFunnel'
import ContributorAnalytics from './ContributorAnalytics'
import CommentFeedback from './CommentFeedback'
import CallToAction from './CallToAction'

const MainContent: React.FC = () => {
  return (
    <div className="">
      <div className="">
        <h1 className="text-2xl font-semibold text-gray-800 mb-2">CascadeFund Marketing Tools</h1>
        <p className="text-gray-600">
          This page is all about helping your project grow. Whether you want more users, donations, or
          contributors, CascadeFund gives you simple share tools to spread the word and onboard people.
        </p>
      </div>
      
      <AnalyticsOverview />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        <TrafficSources />
        <ConversionFunnel />
      </div>
      
      <ContributorAnalytics />
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <CommentFeedback />
        <CallToAction />
      </div>
    </div>
  )
}

export default MainContent
