import React from 'react'
import type { PanelEvents } from '@/types/eventTypes';

export type Props = PanelEvents & {
  key?: string | number
  children: React.ReactNode
  className?: string
  padding?: 'none' | 'sm' | 'md' | 'lg'
  bg?: string
  bgImgUrl?: string
  bgImgLabel?: string
  bgImgClassName?: string
}

const Component: React.FC<Props> = ({ key, children, className = '', padding = 'md', bg = 'white', bgImgUrl, bgImgClassName, bgImgLabel }) => {
  const getPaddingStyles = () => {
    switch (padding) {
      case 'none':
        return ''
      case 'sm':
        return 'p-3'
      case 'md':
        return 'p-4'
      case 'lg':
        return 'p-6'
      default:
        return 'p-4'
    }
  }

  return (
    <div key={key} className={` bg-${bg} rounded-lg border border-gray-200 shadow-sm ${getPaddingStyles()} ${className}`}>
      {bgImgUrl && <figure className='w-full h-full z-0 absolute'>
        <img
          src={bgImgUrl}
          alt={bgImgLabel}
          referrerPolicy="no-referrer"
          className={bgImgClassName || ''}
        />
      </figure>}
      <div className='z-1'>
        {children}
      </div>
    </div>
  )
}

export default Component
