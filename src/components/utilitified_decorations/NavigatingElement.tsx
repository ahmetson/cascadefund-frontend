import React from 'react'
import Button from '../v2/6.4.3_cmaintainer/ui/Button'
import Link from '../v2/Link'

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
