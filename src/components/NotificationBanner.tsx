import React from 'react'
import { type PageLikePanelProps } from '@/components/panel/PageLikePanel'
import { type IconType } from '@/components/icon'
import InfoPanel from './panel/InfoPanel'

export type NotificationBannerProps = {
  type: 'warning' | 'info' | 'success' | 'error'
  title: string
  children?: any
  icon?: IconType
  className?: string
  titleClassName?: string
} & Omit<PageLikePanelProps, "children" | "title">

const NotificationBanner: React.FC<NotificationBannerProps> = ({ className, titleClassName, icon, type, title, children, expandable }) => {
  const getStyles = () => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-50 border-yellow-100 border-l-yellow-500'
      case 'info':
        return 'bg-blue-50/1 border-slate-300 border-l-blue-500'
      case 'success':
        return 'bg-green-50 border-green-100 border-l-green-500'
      case 'error':
        return 'bg-red-50 border-red-100 border-l-red-500'
      default:
        return 'bg-gray-50 border-gray-50 border-l-gray-500'
    }
  }

  const getDefaultIcon = (): IconType => {
    switch (type) {
      case 'warning':
        return 'warning'
      case 'info':
        return 'info'
      case 'success':
        return 'success'
      case 'error':
        return 'warning'
      default:
        return 'info'
    }
  }

  const getIconComponent = () => {
    const iconType = icon || getDefaultIcon()
    return { iconType, width: 'w-5', height: 'h-5' }
  }

  const fullClassName = `p-4 
    border-2
    border-dashed 
    flex 
    items-start 
    rounded-xs 
    rounded-r-0 
    shadow-md
    ${getStyles()} 
    ${className}
  `
  const titleColor = type === 'info' ? 'text-gray-200 dark:text-gray-100' : 'text-gray-400 dark:text-gray-200';
  const contentColor = type === 'info' ? 'text-gray-200 dark:text-gray-100' : 'text-gray-600 dark:text-gray-200';

  return (
    <InfoPanel title={title}
      titleClassName={`${titleColor} ${titleClassName}`}
      icon={getIconComponent()}
      expandable={expandable}
      className={`${fullClassName} ${contentColor} ${className}`}>
      {children}
    </InfoPanel>
  )
}

export default NotificationBanner
