import React from 'react'
import Badge from './6.4.3_cmaintainer/ui/Badge'
import Link from './Link'

interface Props {
  active?: boolean
}

const MenuAvatar: React.FC<Props> = ({active = false}) => {
  return (
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 rounded-full bg-orange-400 flex items-center justify-center">
              <span className="text-white text-xs font-medium">A</span>
            </div>
            <div className='text-center'>
              <Badge variant="yellow" size="sm">220 rating</Badge><br />
              {!active ? (
              <Link href="/v2/data/profile" className="text-gray-600 text-sm" label="Ahmetcan" />
              ): (<strong className='text-gray-900 text-sm'>Ahmetson</strong>)} 
            </div>
          </div>
  )
}

export default MenuAvatar
