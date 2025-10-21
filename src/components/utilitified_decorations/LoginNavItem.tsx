import React from 'react'
import MenuAvatar from '@/components/MenuAvatar'
import Link from '@/components/custom-ui/Link'

interface Props {
  className?: string
}

const C: React.FC<Props> = ({ className }) => {
  if (Math.random() < 0.5) {
    return <MenuAvatar />
  }

  return <Link className={`${className || ''} inline-flex items-center rounded transition-colors`} href="/login" >Log In</Link>
}

export default C
