import React from 'react'
import MenuAvatar from '@/components/MenuAvatar'
import LinkBtn from '@/components/LinkBtn'

export const ActiveLoginNavItem = "loginItem"

interface Props {
  active?: boolean
  className?: string
}

const C: React.FC<Props> = ({ className, active }) => {
  if (Math.random() < 0.5) {
    return <MenuAvatar active={active} />
  }

  return <LinkBtn className={className || ''} href="/login" variant="purple" >Log In</LinkBtn>
}

export default C
