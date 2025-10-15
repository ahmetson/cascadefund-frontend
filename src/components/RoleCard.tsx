import React from 'react'
import Button from '@/components/Button'
import Panel from '@/components/utilitified_decorations/Panel'
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
  icon?: React.ReactNode
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
  helpLinkLabel,
  helpLinkHref,
  icon,
  avatar,
  iconBgColor,
  href,
}) => {
  return (
    <Panel key={id} className={`${iconBgColor} card bg-base-100 image-full w-96 h-48 shadow-sm p-0!`}>
      <figure className='w-full h-full'>
        <img
          src={avatar}
          alt={`${title} avatar`}
          referrerPolicy="no-referrer"
          className='w-96 h-48'
        />
      </figure>
      <div className="card-body h-38">
        <h2 className="card-title justify-center">{icon &&
          <div >
            {icon}
          </div>
        }
          <span className="font-semibold text-gray-300">{title}</span>
        </h2>
        <p className='h-38 text-gray-400'>{description}
          {helpLinkHref &&
            <Link href={helpLinkHref} className=" flex items-center justify-center text-teal-200 underline hover:text-teal-100!">
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              {helpLinkLabel}
            </Link>
          }
        </p>
        <div className="card-actions justify-center">
          {buttonVariant === 'primary' ?
            (<LinkBtn href={href || '#'} variant='green' >{buttonText}</LinkBtn>) :
            buttonVariant === 'secondary' ?
              (<Button variant='gray'>{buttonText}</Button>) :
              (<Button className={buttonVariant}>{buttonText}</Button>)
          }

        </div>
      </div>
    </Panel>
  )
}

export default C
