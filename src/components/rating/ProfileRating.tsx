import React from 'react'

export type RatingType = 'influencer' | 'maintainer' | 'contributor' | 'persona'

export interface ProfileRatingProps {
  ratingType: RatingType
  lvl: number
  maxLvl: number
  top: string | number
}

const ProfileRating: React.FC<ProfileRatingProps> = ({ ratingType, lvl, maxLvl, top }) => {
  // Calculate star color based on level progression (dark rose to yellow)
  const getStarColor = (lvl: number, maxLvl: number): string => {
    if (maxLvl <= 1) return '#FFD700' // Yellow for max level

    const colorProgress = (lvl - 1) / (maxLvl - 1)

    // HSL: Dark Rose (0°) to Yellow (60°)
    const hue = colorProgress * 60
    const saturation = 100
    const lightness = 50

    return `hsl(${hue}, ${saturation}%, ${lightness}%)`
  }

  // Calculate trophy color based on top ranking (Dota 2 style)
  const getTrophyColor = (top: string | number): string => {
    const topNumber = typeof top === 'string' ? parseInt(top, 10) : top

    if (topNumber <= 10) return '#FFD700' // Gold
    if (topNumber <= 50) return '#C0C0C0' // Silver
    if (topNumber <= 100) return '#CD7F32' // Bronze
    return '#4CAF50' // Green (Herald style for 101+)
  }

  const starColor = getStarColor(lvl, maxLvl)
  const trophyColor = getTrophyColor(top)

  return (
    <div className="flex items-center space-x-1 font-noto-sans">
      <span className="font-medium text-xl" style={{ color: starColor }}>★</span>
      <span className="-ml-0.5 mr-2">{lvl}</span>
      <span style={{ color: trophyColor }}>🏆</span>
      <span className="-ml-1.5 mr-2 " style={{ color: trophyColor }}>{top}</span>
      <span className='font-medium font-georgia' style={{ color: trophyColor }}>{ratingType.charAt(0).toUpperCase() + ratingType.slice(1)}</span>
    </div>
  )
}

export default ProfileRating
