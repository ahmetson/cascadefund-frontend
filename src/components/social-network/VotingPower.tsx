import React, { useState } from 'react'
import type { PanelEvents } from '@/types/eventTypes'
import Tooltip from '../utilitified_decorations/Tooltip'
import { getIcon } from '../icon'

export type FollowingsProps = PanelEvents & {
  totalVotingPower: number
  bonusPoints?: number
}

const Followings: React.FC<FollowingsProps> = ({ totalVotingPower, bonusPoints = 0, onActionClick }) => {
  return (
    <Tooltip
      content={
        <div className="text-sm">
          {totalVotingPower} Voting Power in Total.
          {totalVotingPower > 0 && <span className="block text-xs text-gray-200">+50% bonus points by rating</span>}
          {totalVotingPower <= 0 && <span className="block text-xs text-gray-200">No voting power yet, you can get it by getting influencers into your projects or becoming an influencer yourself</span>}
        </div>
      }
    >
      <div
        className={`flex items-center space-x-1 h-8`}
      >
        {getIcon({
          iconType: 'energy',
          fill: (totalVotingPower > 0 ? 'currentColor' : 'none'),
          className: 'text-purple w-5 h-5 mt-0.5'
        })}
        <span>{totalVotingPower}</span>
      </div>
    </Tooltip>
  )
}

export default Followings
