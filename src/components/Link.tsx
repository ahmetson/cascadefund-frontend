import React from 'react'
import { type Props as ComponentProps } from '@/types/eventTypes'

type Props = ComponentProps & {
  href: string
  active?: boolean
  asNewTab?: boolean
  ref?: any
}

const Component: React.FC<Props> = ({ ref, asNewTab = false, className, href, children }) => {
  return (
    <a ref={ref} target={asNewTab ? '_blank' : '_self'} href={href} className={`hyperlink text-blue-500 hover:text-teal-900 py-2 transition-colors ${className}`}>
      {children}
    </a>
  )
}

export default Component
