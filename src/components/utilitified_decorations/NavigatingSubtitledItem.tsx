import React from 'react'
import Button from '@/components/custom-ui/Button'
import Link from '@/components/custom-ui/Link'

interface Props {
  subtitle: string;
  children: any;
  active?: boolean;
  href?: string;
}

const NavLabelElement: React.FC<Props> = ({ children, subtitle, active, href = "#" }) => {
  return (
    <div className="text-sm text-gray-600">
      {subtitle}:<br />
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
