import React from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'

const ConversionFunnel: React.FC = () => {
  return (
    <PageLikePanel title="Conversion Funnel">
      <div className="flex justify-center mb-6">
        <div className="w-full max-w-xs">
          <svg viewBox="0 0 300 200" className="w-full h-full">
            <rect x="50" y="20" width="200" height="20" fill="#6B7280" />
            <rect x="60" y="50" width="180" height="20" fill="#6B7280" />
            <rect x="70" y="80" width="160" height="20" fill="#6B7280" />
            <rect x="80" y="110" width="140" height="20" fill="#6B7280" />
            <rect x="90" y="140" width="120" height="20" fill="#6B7280" />
            <rect x="100" y="170" width="100" height="20" fill="#6B7280" />
          </svg>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4 text-center">
        <div>
          <div className="text-sm text-gray-600 mb-1">Clicks</div>
          <div className="text-lg font-semibold text-gray-800">3,240</div>
          <div className="text-sm text-gray-600 mb-1">Users</div>
          <div className="text-lg font-semibold text-gray-800">1,120</div>
        </div>
        <div>
          <div className="text-sm text-gray-600 mb-1">Contributors</div>
          <div className="text-lg font-semibold text-gray-800">210</div>
          <div className="text-sm text-gray-600 mb-1">Influencers</div>
          <div className="text-lg font-semibold text-gray-800">45</div>
        </div>
      </div>
    </PageLikePanel>
  )
}

export default ConversionFunnel
