import React from 'react'
import Button from '@/components/custom-ui/Button'
import Badge from '@/components/custom-ui/Badge'
import InfoPair from '../InfoPair'
import BasePanel from '../panel/BasePanel'
import Followings from '../social-network/Followings'
import ProjectRating, { ProjectRatingProps } from '../rating/ProjectRating'
import PanelFooter from '../panel/PanelFooter'
import PanelStat from '../panel/PanelStat'
import Link from '../custom-ui/Link'
import { ProfileLink } from '../profile/types'
import MenuAvatar from '../MenuAvatar'
import ProfileRating from '../rating/ProfileRating'
import TimeAgo from 'timeago-react'
import MenuItem from '../menu/MenuItem'
import { ActionProps } from '@/types/eventTypes'
import PanelAction from '../panel/PanelAction'
import AvatarList from '../AvatarList'
import { Popover } from '@base-ui-components/react/popover'
import { getIcon } from '../icon'

export interface ProjectInfoProps {
  title: string
  isInfluencer: boolean
  rating: ProjectRatingProps
  forks: number
  likes: number
  isFollowing: boolean
  originalProject: string
  originalProjectUrl: string
  followers: number
  issue: string
  description: string
  license: string
  balance: number
  cascadeBalance: number
  totalAmount: number
  duration: string
  lastActivity: number
  totalCommits: number
  commitsPerDay: string
  openIssues: number
  closedIssues: number
  avgResponseTime: string
  collaborators: Array<{
    name: string
    percentage: number
    color: string
  }>
  createdTime: number
  author: ProfileLink
  influencers: Array<ProfileLink>
  actions: ActionProps[]  // Comes links to the work, and cascade work along with their badges
}

const ProjectCard: React.FC<ProjectInfoProps> = ({
  title,
  isInfluencer,
  rating,
  forks,
  likes,
  isFollowing,
  followers,
  originalProject,
  originalProjectUrl,
  issue,
  description,
  license,
  balance,
  cascadeBalance,
  totalAmount,
  duration,
  lastActivity,
  totalCommits,
  commitsPerDay,
  openIssues,
  closedIssues,
  avgResponseTime,
  createdTime,
  author,
  influencers,
  actions
}) => {
  return (

    <a href="/data/project">
      <BasePanel>
        <div className="flex items-start space-x-4">
          <div className="w-16 overflow-hidden flex flex-col space-y-2 items-center">
            <Followings following={isFollowing} followers={followers} onActionClick={() => { }} />
          </div>

          <div className="flex-1 w-full">
            <div className="flex items-center justify-between mb-2">
              <h1 className="text-xl font-bold text-gray-500 flex flex-row items-center space-x-1">
                {title}
                {isInfluencer && (
                  <Badge variant="info">You are influencer</Badge>
                )}
              </h1>

              <div className="flex text-right flex-col">
                <ProjectRating
                  {...rating}
                />
              </div>
            </div>

            <div className="text-md mb-4">
              {description}
            </div>

            {/* Issue author and created time */}
            <div className="flex justify-end items-center space-x-1 text-gray-500 gap-1 text-xs">
              By <MenuAvatar src={author?.icon} uri={author?.uri} className='w-7! h-7!' />
              {createdTime &&
                <TimeAgo datetime={createdTime} />
              }
            </div>


            <PanelFooter className='flex flex-row justify-between items-center space-x-4 mt-2'>
              <div className="flex items-center gap-2">
                <PanelAction className='' actions={actions} />
              </div>
              <PanelStat iconType="project" hint={`License of this project.`} fill={true}>{license} Llicense</PanelStat>
              <PanelStat
                iconType="fork"
                hint={`How many forks this project has.`}
                fill={true}
              >
                {forks} Forks
              </PanelStat>
              <PanelStat
                iconType="heart"
                hint={`How many people has interest in this project`}
                fill={true}
              >
                {likes} Likes
              </PanelStat>

              <Popover.Root>
                <Popover.Trigger onClick={(e) => { e.stopPropagation(); e.preventDefault(); }} className="hyperlink flex items-center justify-center shadow-none">
                  <PanelStat
                    iconType="info"
                    hint={`Additional stats`}
                    fill={true} children={'More'}              >
                  </PanelStat>
                </Popover.Trigger>
                <Popover.Portal>
                  <Popover.Positioner sideOffset={8} side='bottom' className={'z-700!'}>
                    <Popover.Popup className="w-96 origin-[var(--transform-origin)] rounded-xs bg-[canvas] px-6 py-4 text-gray-900 shadow-sm shadow-gray-900 transition-[transform,scale,opacity] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:scale-90 data-[starting-style]:opacity-0">
                      <Popover.Arrow className="data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180">
                        {getIcon('arrow')}
                      </Popover.Arrow>

                      <Popover.Title className="text-gray-500 font-medium text-md flex items-center flex-row p-1 mb-4">
                        Additional statistics
                      </Popover.Title>

                      <Popover.Description className="text-gray-600">
                        <div className="text-gray-600 text-sm mb-2 flex flex-row justify-start items-center gap-2">
                          <PanelStat iconType="fork" hint={`Fork of ${originalProject}`} fill={true}>Fork of <Link uri={originalProjectUrl} asNewTab={true}>{originalProject}</Link></PanelStat>
                          <PanelStat iconType="issue" hint={`Original project issue that this project addresses.`} fill={true}>{issue} Issue</PanelStat>
                        </div>
                        <InfoPair
                          title1="Balance"
                          value1={balance}
                          title2="Cascade Balance"
                          value2={cascadeBalance}
                          belowThresholdColor={10}
                          footer={`${totalAmount} / ${duration}`}
                        />

                        <InfoPair
                          title1="Online"
                          value1={lastActivity}
                          type1="time"
                          title2="Commits"
                          value2={totalCommits}
                          type2="number"
                          footer={`${commitsPerDay} commits / day`}
                        />

                        <InfoPair
                          title1="Issues"
                          value1={openIssues}
                          type1="number"
                          title2="Closed Issues"
                          value2={closedIssues}
                          type2="number"
                          footer={`avg. ${avgResponseTime}`}
                        />
                        <PanelFooter>
                          <PanelStat
                            iconType="info"
                            hint={`Project influencers`}
                            fill={true}
                          >
                            <AvatarList contributors={influencers} />
                          </PanelStat>
                        </PanelFooter>
                      </Popover.Description>
                    </Popover.Popup>
                  </Popover.Positioner>
                </Popover.Portal>
              </Popover.Root>

            </PanelFooter>
          </div>
        </div>
      </BasePanel>
    </a >
  )
}

export default ProjectCard
