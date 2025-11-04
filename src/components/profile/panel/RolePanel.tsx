import React from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'
import Link from '@/components/custom-ui/Link'
import { IconType } from '@/components/icon'

export interface RoleCardProps {
  id: string
  roleCard: boolean
  title: string
  description: string
  buttonText: string
  buttonVariant: 'primary' | 'secondary' | string
  helpLinkLabel?: string
  helpLinkHref?: string
  iconColor?: string
  icon?: string
  avatar: string
  iconBgColor?: string
  href?: string,
}

const C: React.FC<RoleCardProps> = ({
  id,
  title,
  description,
  buttonText,
  buttonVariant,
  icon,
  avatar,
  iconBgColor,
  href,
}) => {
  return (
    <PageLikePanel titleCenter={true} icon={icon as IconType} title={title} bg={{ src: avatar, label: `${title} avatar` }} key={id} className={`${iconBgColor} card image-full text-gray-100 w-36 h-60 shadow-sm p-0!`}>
      <p className='h-20 flex items-center text-gray-200 mt-8'>{description}</p>
      <div className="card-actions justify-center">
        {buttonVariant === 'primary' ?
          (<Link uri={href || '#'} className="inline-flex items-center bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded transition-colors" >{buttonText}</Link>) :
          (<Link uri={href || '#'} className={buttonVariant}>{buttonText}</Link>)
        }
      </div>
    </PageLikePanel>
  )
}

export default C
