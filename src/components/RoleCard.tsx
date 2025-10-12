import React from 'react'
import Button from '@/components/Button'
import Card from '@/components/Card'
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

const RoleCard: React.FC<RoleCardProps> = ({
  id,
  title,
  description,
  buttonText,
  buttonVariant,
  helpLinkLabel,
  helpLinkHref,
  iconColor,
  icon,
  avatar,
  iconBgColor,
  href,
}) => {
  return (
    <Card key={id} className={`${iconBgColor} rounded-lg p-6 text-center`}>
      <div className="mb-6">
        <img 
          src={avatar} 
          alt={`${title} avatar`} 
          className="w-24 h-24 mx-auto rounded-full mb-4"
          referrerPolicy="no-referrer"
        />
        <div className="bg-white rounded-lg py-2 px-4 inline-flex items-center space-x-2 shadow-sm">
          {icon && 
          <div className={iconColor}>
            {icon}
          </div>
          }
          <span className="font-semibold text-gray-900">{title}</span>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>

      <div className="space-y-4">
        {buttonVariant === 'primary' ? 
        (<LinkBtn href={href || '#'} variant='green' >{buttonText}</LinkBtn>) : 
        buttonVariant === 'secondary' ?
        (<Button variant='gray'>{buttonText}</Button>) :
        (<Button className={buttonVariant}>{buttonText}</Button>)
        }

        {helpLinkHref && 
        <Link href={helpLinkHref} className="mt-4 flex items-center justify-center">
          <svg className="w-4 h-4 text-cascade-blue mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
            {helpLinkLabel}
        </Link>
        }
      </div>
    </Card>
  )
}

export default RoleCard
