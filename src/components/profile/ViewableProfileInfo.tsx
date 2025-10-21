import React from 'react'
import Button from '@/components/custom-ui/Button'
import type { PanelEvents } from '@/types/eventTypes'
import ProfileRatingPanel, { AllPersonaRatings } from '../rating/ProfileRatingPanel'
import { RatingType } from '../rating/ProfileRating'
import Followings from '../social-network/Followings'
import VotingPower from '../social-network/VotingPower'
import MenuAvatar from '../MenuAvatar'
import Link from '../custom-ui/Link'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'; // Import the LinkedIn icon from Font Awesome
import Badge from '../custom-ui/Badge'
import { getIcon } from '../icon'
import Tooltip from '../utilitified_decorations/Tooltip'

export interface ProfileProps extends PanelEvents {
  selfProfile: boolean
  name: string
  description: string
  subtitle?: string
  socialLinks: SocialLink[]
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

interface SocialLink {
  type: 'telegram' | 'github' | 'linkedin'
  url: string

}

const ProfileSection: React.FC<ProfileProps> = ({ onActionClick, ...props }) => {

  return (
    <div className="flex items-start space-x-4">
      <div className="w-16 overflow-hidden flex flex-col space-y-2 items-center">
        <MenuAvatar className='w-16 h-16' imgClassName='w-full h-full' alt={`Profile avatar of ${props.name}`} />
        <VotingPower totalVotingPower={props.totalVotingPower} onActionClick={() => { }} />
        <Followings selfProfile={props.selfProfile} following={props.following} followers={props.followers} onActionClick={() => { }} />
      </div>

      <div className="flex-1">
        <div className="flex items-center justify-between mb-2">
          <h1 className="text-xl font-bold text-gray-500">{props.name} {props.selfProfile && <Badge variant='gray' active={true} static={true}>Your profile</Badge>}</h1>
          <div className="flex text-right flex-col">
            <ProfileRatingPanel
              ratings={props.ratings}
              topRating={props.topRating}
            />
          </div>
        </div>

        <p className="text-gray-600 text-sm mb-1 -mt-2">{props.subtitle}</p>
        <p className="text-md mb-4">
          {props.description}
        </p>

        <div className="flex items-center justify-between mb-2">
          <div className='flex space-x-4'>
            {props.socialLinks.map((social) => (
              <Link asNewTab={true} href={social.url} className="flex items-center space-x-2">
                {social.type === 'linkedin' ?
                  <FaLinkedin color="gray" className="w-6 h-6 text-blue-500! hover:text-teal-800!" /> :
                  social.type === 'github' ?
                    <FaGithub color="gray" className="w-6 h-6 text-blue-500! hover:text-teal-800!" /> :
                    <FaTelegram color="gray" className="w-6 h-6 text-blue-500! hover:text-teal-800!" />
                }
              </Link>
            ))}
          </div>
          <div className='flex items-center justify-center'>
            <Tooltip
              content={
                <div className="text-sm">
                  {props.name} is involved in {props.projectAmount} projects.
                </div>
              }
            >
              <Link className="flex items-center justify-center h-10 text-blue-500 mt-1" href={"/data/projects?userName=" + props.name} >
                {getIcon({ iconType: 'project', fill: 'currentColor', className: 'w-8 h-8' })}
                <span className="text-lg -mt-2 -ml-1">
                  {props.projectAmount}
                </span>
              </Link>
            </Tooltip>

          </div>
          <div className=" space-x-4">
            <div className="flex items-center space-x-1">
              <Button variant='primary' onClick={onActionClick} >
                Edit
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProfileSection
