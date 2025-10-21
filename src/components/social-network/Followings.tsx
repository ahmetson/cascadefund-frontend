import React, { useState } from 'react'
import Button from '@/components/custom-ui/Button'
import type { PanelEvents } from '@/types/eventTypes'
import Tooltip from '../utilitified_decorations/Tooltip'
import { getIcon } from '../icon'
import { Spinner, type SpinnerProps } from '@/components/ui/shadcn-io/spinner';

export type FollowingsProps = PanelEvents & {
  following: boolean
  followers: number
  selfProfile?: boolean
}

const Followings: React.FC<FollowingsProps> = ({ following, followers, selfProfile = false, onActionClick }) => {
  const [isFollowing, setIsFollowing] = useState(following)
  const [isLoading, setIsLoading] = useState(false)
  const [followerCount, setFollowerCount] = useState(followers)

  const onClick = async () => {
    setIsLoading(true)

    setTimeout(() => {
      setIsFollowing(!isFollowing)
      setFollowerCount(followerCount + 1)
      setIsLoading(false)
    }, 1000)
  }

  return (
    <Tooltip
      content={
        <div className="text-sm">
          {selfProfile ? 'How many people follow you?' : isFollowing ? 'Unsubscribe' : 'Like & Subscribe'}
        </div>
      }
    >
      <Button
        variant={isFollowing ? "danger" : "secondary"}
        disabled={isLoading}
        onClick={onClick}
        className={`cursor flex items-center space-x-1 ${isFollowing && 'opacity-70'} h-8`}
      >
        {isLoading ?
          <Spinner className='w-5 h-5' key={'ellipsis'} variant={'ellipsis'} /> :
          (<>{getIcon({
            iconType: 'heart',
            fill: (following ? 'currentColor' : 'none'),
            className: 'text-white w-5 h-5 mt-0.5'
          })}
          </>)}
        <span>{followerCount}</span>
      </Button>
    </Tooltip>
  )
}

export default Followings
