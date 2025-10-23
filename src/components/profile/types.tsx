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

export interface FinanceInfoProps {
  balance: number;
  cascadingBalance: number;
  totalDonated: number;
  totalReceived: number;
}

export interface WorkStyleProps {
  availabilityStatus?: string;
  // Communication style metrics
  directness?: number;
  verbal?: number;
  approach?: number;
  ideas?: number;
  // Work methodology metrics
  faceToFace?: number;
  bigPicture?: number;
  workEthics?: number;
  // Collaboration style metrics
  research?: number;
  teamwork?: number;
  creativity?: number;
}