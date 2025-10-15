import React from 'react'
import Button from '@/components/Button'
import Link from '@/components/Link'

interface Props {
  active?: boolean;
  children?: any;
  href?: string;
}

export type Navigation = { [key in string]?: React.ReactNode };


const C: React.FC<Props> = ({ active, children, href = "#" }) => {
  return (
    !active ?
      (<Link href={href}>{children}</Link>) :
      (<Button variant="secondary" size="sm">
        {children}
      </Button>)
  )
}

export default C
