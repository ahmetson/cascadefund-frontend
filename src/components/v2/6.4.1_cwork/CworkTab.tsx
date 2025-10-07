import React from 'react'
import TabButton from './ui/TabButton'

interface CworkTabProps {
  activeTab: 'dependencies' | 'following-issues' | 'following-rockstars'
}

const CworkTab: React.FC<CworkTabProps> = ({activeTab}) => {
  return (
    <div>
      <div className="flex space-x-8 mb-6">
        <TabButton 
          active={activeTab === 'dependencies'} 
          label={'Dependencies'}
          href='/v2/maintainer/cwork'
          // onClick={() => setActiveTab('dependencies')}
        />
        <TabButton
          label='Following Issues'
          active={activeTab === 'following-issues'} 
          href='/v2/maintainer/cissue'
        />
        <TabButton
          label='Following Rockstars'
          href='/v2/maintainer/cmaintainer'
          active={activeTab === 'following-rockstars'} 
        />
      </div>
    </div>
  )
}

export default CworkTab
