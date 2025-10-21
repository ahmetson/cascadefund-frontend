import React from 'react'
import Link from '@/components/custom-ui/Link'
import Tooltip from './utilitified_decorations/Tooltip'

interface MenuAvatarProps {
  src?: string
  alt?: string
  className?: string
  imgClassName?: string
}

const MenuAvatar: React.FC<MenuAvatarProps> = ({ src, alt, className, imgClassName }) => {
  const defaultSrc = 'https://api.backdropbuild.com/storage/v1/object/public/avatars/9nFM8HasgS.jpeg'
  const defaultAlt = 'Avatar'

  return (
    <Tooltip
      content={
        <div className="text-sm">
          View <code className='code'>Ahmetson</code> profile
        </div>
      }
    >
      <Link href="/data/profile" className={`hover:bg-teal-300 bg-blue-200 rounded-full h-8 w-8 flex items-center p-1! ${className}`}>
        <img src={src || defaultSrc} alt={alt || defaultAlt} className={`w-7 h-full rounded-full ${imgClassName}`} />
      </Link>
    </Tooltip>

  )
}

export default MenuAvatar
