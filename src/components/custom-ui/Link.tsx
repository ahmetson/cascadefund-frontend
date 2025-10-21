import React from 'react'
import { type Props as ComponentProps } from '@/types/eventTypes'
import ElectricBorder from '../ElectricBorder'

type Props = ComponentProps & {
  href: string
  active?: boolean
  asNewTab?: boolean
  focus?: boolean
  ref?: any
}

const Component: React.FC<Props> = ({ ref, asNewTab = false, className, href, children, focus = false }) => {
  return (
    <a ref={ref} target={asNewTab ? '_blank' : '_self'} href={href} className={`hyperlink text-blue-500 hover:text-teal-900 ${focus ? '' : 'py-2'} transition-colors ${className}`}>
      {focus ? <ElectricBorder
        color="#0ea5e950"
        speed={1}
        chaos={0.5}
        thickness={2}
        style={{ borderRadius: 2 }}
        className="py-2 px-2 w-full"
      >
        {children}
      </ElectricBorder> : children}
    </a>
  )
}

export default Component
