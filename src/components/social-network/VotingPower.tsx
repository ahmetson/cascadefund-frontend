import React from 'react'
import type { PanelEvents } from '@/types/eventTypes'
import PanelStat from '../panel/PanelStat'

export type FollowingsProps = PanelEvents & {
  totalVotingPower: number
  bonusPoints?: number
}

const Followings: React.FC<FollowingsProps> = ({ totalVotingPower, bonusPoints = 0, onActionClick }) => {

  const content = (
    <div className="text-sm">
      {totalVotingPower} Voting Power in Total.
      {totalVotingPower > 0 && <span className="block text-xs text-gray-200">+50% bonus points by rating</span>}
      {totalVotingPower <= 0 && <span className="block text-xs text-gray-200">No voting power yet, you can get it by getting influencers into your projects or becoming an influencer yourself</span>}
    </div>
  )

  return (
    <PanelStat iconClassName='text-purple' iconType="energy" children={totalVotingPower} hint={content} fill={totalVotingPower > 0} />
  )
}

export default Followings
