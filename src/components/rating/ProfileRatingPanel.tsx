import React from 'react'
import ProfileRating, { ProfileRatingProps, RatingType } from './ProfileRating'
import Tooltip from '../utilitified_decorations/Tooltip'
import { Popover } from '@base-ui-components/react/popover'
import { getIcon } from '../icon'


export type AllPersonaRatings = {
  [key in RatingType]: ProfileRatingProps
}

interface ProfileRatingTooltipProps {
  ratings: AllPersonaRatings,
  topRating: RatingType
}

const Component: React.FC<ProfileRatingTooltipProps> = ({ ratings, topRating }) => {
  // Helper function to capitalize first letter
  const capitalizeFirstLetter = (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1)
  }

  // Get star color for max level display
  const getMaxLevelColor = (maxLvl: number): string => {
    if (maxLvl <= 1) return '#FFD700' // Yellow for max level
    return '#FFD700' // Gold for max level
  }

  // Get trophy label based on top ranking
  const getTrophyLabel = (top: string | number): string => {
    const topNumber = typeof top === 'string' ? parseInt(top, 10) : top

    if (topNumber <= 10) return 'Gold'
    if (topNumber <= 50) return 'Silver'
    if (topNumber <= 100) return 'Bronze'
    return 'Green'
  }

  return (
    <Popover.Root>
      <Popover.Trigger className="hyperlink flex items-center justify-center shadow-none">
        <ProfileRating {...ratings[topRating]} />
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Positioner sideOffset={8} side='bottom' className={'z-700!'}>
          <Popover.Popup className="origin-[var(--transform-origin)]  rounded-xs bg-[canvas] px-6 py-4 text-gray-900 shadow-sm shadow-gray-900 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0 ">
            <Popover.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
              {getIcon('arrow')}
            </Popover.Arrow>
            <Popover.Title className="text-gray-500 font-medium text-sm">Ratings</Popover.Title>
            <Popover.Description className="text-gray-600">
              {/* Rating List */}
              <div className="space-y-4">
                {Object.entries(ratings).map(([ratingType, rating]) => {
                  const maxColor = getMaxLevelColor(rating.maxLvl)
                  const trophyLabel = getTrophyLabel(rating.top)

                  return (
                    <div key={ratingType} className="space-y-1">
                      {/* Top Ranking Info */}
                      <div className="text-sm text-gray-600">
                        Top <span className="font-semibold" style={{ color: maxColor }}>{rating.top}</span> {ratingType}
                      </div>

                      {/* Rating Display */}
                      <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <span>Rating:</span>
                        <span className="text-xl" style={{ color: '#FFD700' }}>★</span>
                        <span className="font-semibold">{rating.lvl}</span>
                        <span>/</span>
                        <span className="text-xl" style={{ color: '#FFD700' }}>★</span>
                        <span className="font-semibold">
                          {rating.maxLvl}
                        </span>
                        <span>, Trophy:</span>
                        <span className="text-xl" style={{ color: maxColor }}>🏆</span>
                        <span className="font-semibold">
                          {trophyLabel}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </Popover.Description>
          </Popover.Popup>
        </Popover.Positioner>
      </Popover.Portal>
    </Popover.Root>
  )
}

export default Component
