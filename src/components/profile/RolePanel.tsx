import React from 'react'
import Panel from '@/components/utilitified_decorations/PagePanel'
import LinkBtn from '@/components/LinkBtn'
import Link from '@/components/Link'

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
    <Panel titleCenter={true} icon={icon} title={title} bgImgUrl={avatar} bgImgLabel={`${title} avatar`} key={id} className={`${iconBgColor} card image-full text-gray-100 w-36 h-60 shadow-sm p-0!`}>
      <p className='h-20 flex items-center text-gray-200 mt-8'>{description}</p>
      <div className="card-actions justify-center">
        {buttonVariant === 'primary' ?
          (<LinkBtn href={href || '#'} variant='red' >{buttonText}</LinkBtn>) :
          (<Link href={href || '#'} className={buttonVariant}>{buttonText}</Link>)
        }
      </div>
    </Panel>
  )
}

export default C
