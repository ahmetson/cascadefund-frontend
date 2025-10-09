import React from 'react'
import Button from '@/components/v2/Button'
import Link from '@/components/v2/Link'

interface Props {
  active?: boolean;
  children?: any;
  href?: string;
}

const NavLabelElement: React.FC<Props> = ({active, children, href = "#"}) => {
  return (
    <div className='border-r-2 pr-2 border-gray-300'>
      {!active ? 
        (<Link href={href}>{children}</Link>) : 
        (<Button variant="secondary" size="sm">
          {children}
        </Button>)
      }
    </div>
  )
}

export default NavLabelElement
