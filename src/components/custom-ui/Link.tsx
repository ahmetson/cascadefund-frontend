import React from 'react'
import { LinkProps, type ComponentProps } from '@/types/eventTypes'
import ElectricBorder from '../ElectricBorder'

export type LinkComponentProps = Omit<LinkProps, 'children'> & ComponentProps & {
  active?: boolean
  asNewTab?: boolean
  focus?: boolean
}

const Component: React.FC<LinkComponentProps> = ({ ref, asNewTab = false, className, uri, children, focus = false }) => {
  return (
    <a key={uri} ref={ref} target={asNewTab ? '_blank' : '_self'} href={uri} className={`hyperlink text-blue-500 hover:text-teal-900 ${focus ? '' : 'py-2'} transition-colors ${className}`}>
      <ElectricBorder
        color="#0ea5e950"
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 2 }}
        className="py-2 px-2 w-full"
        disabled={!focus}
      >
        {children}
      </ElectricBorder>
    </a>
  )
}

export default Component
