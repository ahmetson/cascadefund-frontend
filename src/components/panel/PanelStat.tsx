/**
 * PanelStat is to show stats in the footer
 */
import React from 'react'
import Tooltip from '../utilitified_decorations/Tooltip'
import { getIcon, IconType } from '../icon'
import Link from '@/components/custom-ui/Link'
import Button from '@/components/custom-ui/Button'

export type Props = {
  triggerClassName?: string
  iconType: IconType
  iconClassName?: string
  children: React.ReactNode
  fill?: boolean
  hint: React.ReactNode
  href?: string
  asNewTab?: boolean
  onClick?: () => void
}

const Followings: React.FC<Props> = ({ href, onClick = undefined, ...props }) => {

  const content = (
    <div className="text-sm">
      {props.hint}
    </div>
  )

  const trigger = (
    <div className={`flex items-center space-x-1 justify-center ${onClick === undefined && href === undefined && 'text-gray-500'} ${props.triggerClassName}`}>
      {getIcon({ iconType: props.iconType, fill: props.fill ? 'currentColor' : 'none', className: `w-5 h-5 mt-0.5 mr-1 ${props.iconClassName}` })}
      {props.children}
    </div>
  )

  return (
    <Tooltip content={content} openDelay={500}>
      {href ?
        <Link href={href} asNewTab={props.asNewTab ?? false}>
          {trigger}
        </Link> :
        onClick ?
          <Button onClick={onClick}>
            {trigger}
          </Button> :
          trigger}
    </Tooltip>
  )
}

export default Followings
