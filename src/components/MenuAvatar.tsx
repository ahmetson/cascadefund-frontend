import React from 'react'
import Badge from '@/components/custom-ui/Badge'
import Link from '@/components/custom-ui/Link'
import Tooltip from './utilitified_decorations/Tooltip'

const MenuAvatar: React.FC = () => {
  return (
    <Tooltip
      content={
        <div className="text-sm">
          View <code className='code'>Ahmetson</code> profile
        </div>
      }
    >
      <Link href="/data/profile" className="hover:bg-teal-300 bg-blue-200 rounded-full h-8 w-8 flex items-center p-1!">
        <img src="https://api.backdropbuild.com/storage/v1/object/public/avatars/9nFM8HasgS.jpeg" alt="Avatar" className="w-7 h-full rounded-full" />
      </Link>
    </Tooltip>

  )
}

export default MenuAvatar
