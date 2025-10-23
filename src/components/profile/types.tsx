import { AllPersonaRatings } from '../rating/ProfileRatingPanel'
import { RatingType } from '../rating/ProfileRating'

export interface ProfileProps {
  selfProfile: boolean
  id?: string
  name: string
  description: string
  subtitle?: string
  socialLinks: ProfileSocialLink[]
  avatar: string
  ratings: AllPersonaRatings
  topRating: RatingType
  followers: number
  following: boolean
  myAccount: boolean
  totalVotingPower: number
  bonusPoints: number
  projectAmount: number
}

export interface ProfileSocialLink {
  type: 'telegram' | 'github' | 'linkedin'
  url: string
}

