import React from 'react'
import Button from './Button'
import LinkBtn from '../LinkBtn'

interface RoleCardProps {
  title: string
  description: string
  buttonText: string
  buttonVariant: 'primary' | 'secondary'
  linkText: string
  backgroundColor: string
  iconColor: string
  icon: React.ReactNode
  avatar: string
}

const RoleCard: React.FC<RoleCardProps> = ({
  title,
  description,
  buttonText,
  buttonVariant,
  linkText,
  backgroundColor,
  iconColor,
  icon,
  avatar
}) => {
  return (
    <div className={`${backgroundColor} rounded-lg p-6 text-center`}>
      <div className="mb-6">
        <img 
          src={avatar} 
          alt={`${title} avatar`} 
          className="w-24 h-24 mx-auto rounded-full mb-4"
          referrerPolicy="no-referrer"
        />
        <div className="bg-white rounded-lg py-2 px-4 inline-flex items-center space-x-2 shadow-sm">
          <div className={iconColor}>
            {icon}
          </div>
          <span className="font-semibold text-gray-900">{title}</span>
        </div>
      </div>

      <div className="mb-6">
        <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-line">
          {description}
        </p>
      </div>

      <div className="space-y-4">
        {buttonVariant !== 'secondary' ? 
        (<LinkBtn label='Add Project' href='/v2/maintainer/project/post' variant='blue' />) : 
        (<Button variant='secondary' fullWidth>
            <svg className="w-4 h-4 mr-2 text-cascade-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
          {buttonText}
        </Button>)
        }

        <div className="mt-4 flex items-center justify-center">
          <svg className="w-4 h-4 text-cascade-blue mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
          <button className="text-cascade-blue text-sm underline hover:no-underline">
            {linkText}
          </button>
        </div>
      </div>
    </div>
  )
}

export default RoleCard
