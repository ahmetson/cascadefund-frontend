'use client'
import React, { useEffect, useState } from 'react'
import type { PanelEvents } from '@/types/eventTypes'
import ProfileRatingPanel from '../rating/ProfileRatingPanel'
import Followings from '../social-network/Followings'
import VotingPower from '../social-network/VotingPower'
import MenuAvatar from '../MenuAvatar'
import Link from '../custom-ui/Link'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'; // Import the LinkedIn icon from Font Awesome
import Badge from '../custom-ui/Badge'
import { getIcon } from '../icon'
import Tooltip from '../utilitified_decorations/Tooltip'
import { BasePanel } from '../panel'
import { ProfileProps } from './types'
import Editable from './Editable'
import { Editor } from '@tiptap/react'
import Kbd from '../custom-ui/Kbd'
import EditableMenuPanel from './EditableMenuPanel'
import YourProfileBadge from './badge/YourProfileBadge'
import EditableBadge from './badge/EditableBadge'

const ProfileSection: React.FC<ProfileProps & PanelEvents> = ({ onActionClick, ...props }) => {
  const [value, setValue] = useState<Record<string, any>>({
    'description': props.description,
    'name': props.name,
    'subtitle': props.subtitle,
    'socialLinks': props.socialLinks,
    'avatar': props.avatar,
    'followers': props.followers,
    'following': props.following,
  });
  const [saving, setSaving] = useState(false);
  const [showEditBar, setShowEditBar] = useState(false);
  const [editor, setEditor] = useState<Editor | null>(null);

  // Imitating a save operation.
  useEffect(() => {
    if (saving) {
      setTimeout(() => {
        setSaving(false);
      }, 2000);
    }
  }, [saving]);

  const eventProps = {
    onActivate: () => {
      setShowEditBar(!showEditBar);
    },
    onCancel: () => {
      setShowEditBar(false);
    },
    onBlur: (id: string, e: Editor | null) => {
      if (e !== null) {
        if (value[id] !== e.getHTML()) {
          value[id] = e.getHTML();
          setValue(value);
          setSaving(true);
        }
      }
    },
    onFocus: (id: string, nameEditor: Editor | null) => {
      setEditor(nameEditor);
    },
  }

  return (
    <BasePanel className={`${saving && 'cursor-progress'}`}>
      {showEditBar && editor !== null &&
        <EditableMenuPanel
          editor={editor}
          className='fixed top-0 left-0 right-0 h-28 z-999'
        />}
      <div className="flex items-start space-x-4">
        <div className="w-16 overflow-hidden flex flex-col space-y-2 items-center">
          <MenuAvatar className='w-16 h-16' imgClassName='w-full h-full' alt={`Profile avatar of ${value['name']}`} />
          <Followings selfProfile={props.selfProfile} following={props.following} followers={props.followers} onActionClick={() => { }} />
        </div>

        <div className="flex-1 w-full">
          <div className="flex items-center justify-between mb-2">
            <Tooltip
              openDelay={1000}
              content={
                <div className="text-sm">
                  Name is editable for your account.
                </div>
              }
            >
              <h1 className="text-xl font-bold text-gray-500 flex flex-row items-center space-x-1">
                {props.selfProfile ? <Editable id="name"
                  content={value['name']}
                  editable={!saving}
                  {...eventProps}
                /> : value['name']}
                {props.selfProfile && <YourProfileBadge saving={saving} />}
                {props.selfProfile && <EditableBadge showEditBar={showEditBar} setShowEditBar={setShowEditBar} />}
              </h1>
            </Tooltip>

            <div className="flex text-right flex-col">
              <ProfileRatingPanel
                ratings={props.ratings}
                topRating={props.topRating}
              />
            </div>
          </div>

          <Tooltip
            openDelay={1000}
            content={
              <div className="text-sm">
                Subtitle is editable for your account.
              </div>
            }
          >
            <div className="text-gray-600 text-sm mb-1 -mt-2">
              {props.selfProfile ? <Editable id="subtitle"
                content={value['subtitle']}
                editable={!saving}
                limit={64}
                {...eventProps}
              /> : value['subtitle']}
            </div>
          </Tooltip>

          <Tooltip
            openDelay={1000}
            content={
              <div className="text-sm">
                Description is editable for your account.
              </div>
            }
          >
            <div className="text-md mb-4">
              {props.selfProfile ? <Editable id="description"
                content={value['description']}
                editable={!saving}
                limit={2048}
                {...eventProps}
              /> : value['description']}
            </div>
          </Tooltip>

          <div className="flex items-center justify-between mb-2">
            <Tooltip
              openDelay={1000}
              content={
                <div className="text-sm">
                  Right click to edit the social links.
                  Only if you are the owner.
                </div>
              }
            >
              <div className='flex space-x-4'>
                {props.socialLinks.map((social) => (
                  <Link key={social.type} asNewTab={true} href={social.url} className="flex items-center space-x-2">
                    {social.type === 'linkedin' ?
                      <FaLinkedin color="gray" className="w-6 h-6 text-blue-500! hover:text-teal-800!" /> :
                      social.type === 'github' ?
                        <FaGithub color="gray" className="w-6 h-6 text-blue-500! hover:text-teal-800!" /> :
                        <FaTelegram color="gray" className="w-6 h-6 text-blue-500! hover:text-teal-800!" />
                    }
                  </Link>
                ))}
              </div>
            </Tooltip>

            <div className='flex items-center justify-center space-x-4'>
              <VotingPower totalVotingPower={props.totalVotingPower} onActionClick={() => { }} />
              <Tooltip
                content={
                  <div className="text-sm">
                    {value['name']} is involved in {props.projectAmount} projects.
                  </div>
                }
              >
                <Link className="flex items-center justify-center h-10 text-blue-500 mt-1" href={"/data/projects?userName=" + props.id || 'any'} >
                  {getIcon({ iconType: 'project', fill: 'currentColor', className: 'w-8 h-8' })}
                  <span className="text-lg -mt-2 -ml-1">
                    {props.projectAmount}
                  </span>
                </Link>
              </Tooltip>
            </div>
          </div>
        </div>
      </div>
    </BasePanel>
  )
}

export default ProfileSection
