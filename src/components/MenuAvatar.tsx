import React from 'react'
import Badge from '@/components/Badge'
import Link from '@/components/Link'

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
              <Badge variant="yellow">220 rating</Badge><br />
              {!active ? (
              <Link href="/data/profile" className="hover:bg-gray-200 text-sm">
                Ahmetson
              </Link>
              ): (<strong className='text-gray-900 text-sm'>Ahmetson</strong>)} 
            </div>
          </div>
  )
}

export default MenuAvatar
