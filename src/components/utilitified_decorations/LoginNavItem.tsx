import React from 'react'
import MenuAvatar from '@/components/MenuAvatar'
import LinkBtn from '@/components/LinkBtn'

export const ActiveLoginNavItem = "loginItem"

interface Props {
  active?: boolean
  landingPageMenu?: boolean;
}

const C: React.FC<Props> = ({ landingPageMenu = true, active }) => {
  if (!landingPageMenu) {
    return <MenuAvatar active={active} />
  }

  return <LinkBtn href="/login" variant="purple" >Log In</LinkBtn>
}

export default C
