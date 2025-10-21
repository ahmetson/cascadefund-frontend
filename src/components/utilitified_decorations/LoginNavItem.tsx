import React from 'react'
import MenuAvatar from '@/components/MenuAvatar'
import Link from '@/components/custom-ui/Link'

export const ActiveLoginNavItem = "loginItem"

interface Props {
  active?: boolean
  className?: string
}

const C: React.FC<Props> = ({ className, active }) => {
  if (Math.random() < 0.5) {
    return <MenuAvatar active={active} />
  }

  return <Link className={`${className || ''} inline-flex items-center bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded transition-colors`} href="/login" >Log In</Link>
}

export default C
