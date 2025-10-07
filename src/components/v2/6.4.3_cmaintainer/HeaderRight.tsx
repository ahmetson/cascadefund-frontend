import React from 'react'
import Button from './ui/Button'
import Badge from './ui/Badge'
import MenuAvatar from '../MenuAvatar'
import Link from '../Link'

interface Props {
  active?: number
  visible?: number
}

const HeaderRight: React.FC<Props> = ({active = -1, visible = -1}) => {
  const navigations = [
    <div className='border-r-2 pr-2 border-gray-300'>
      {active !== 2 ? <Link label='Reflect' href='/v2/data/project'></Link> : <Button variant="secondary" size="sm">
        Reflect
      </Button>}
    </div>,
    <div className='border-r-2 pr-2 border-gray-300'>
      <div className="items-center space-x-2">
        {active !== 1 ? <Link label='Projects' href='/v2/data/projects'></Link> : <Button variant="secondary" size="sm">
        Projects
      </Button>}
        <Badge variant="blue">2</Badge>
        <Badge variant="red">2</Badge>
      </div>
    </div>,
    <MenuAvatar active={active === 0} />
  ]
  
  return (
        <div className="flex items-center space-x-4">

        {navigations.reverse().filter((el, index) => visible === -1 || index <= visible ).reverse().map((el) => el)}          
          
        </div>
  )
}

export default HeaderRight
