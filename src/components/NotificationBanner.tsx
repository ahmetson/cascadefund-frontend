import React from 'react'
import PageLikePanel, { type PageLikePanelProps } from '@/components/panel/PageLikePanel'
import { getIcon, type IconType } from '@/components/icon'

type NotificationBannerProps = {
  type: 'warning' | 'info' | 'success' | 'error'
  title: string
  children?: any
  icon?: IconType
  className?: string
} & Omit<PageLikePanelProps, "children" | "title">

const NotificationBanner: React.FC<NotificationBannerProps> = ({ className, icon, type, title, children, expandable }) => {
  const getStyles = () => {
    switch (type) {
      case 'warning':
        return 'bg-yellow-50 border-yellow-300 border-l-yellow-500'
      case 'info':
        return 'bg-blue-50 border-blue-300 border-l-blue-500'
      case 'success':
        return 'bg-green-50 border-green-300 border-l-green-500'
      case 'error':
        return 'bg-red-50 border-red-300 border-l-red-500'
      default:
        return 'bg-gray-50 border-gray-300 border-l-gray-500'
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
    return getIcon({ iconType, width: 'w-5', height: 'h-5' })
  }

  return (
    <PageLikePanel expandable={expandable} className={`p-4 border-2 border-dashed flex items-start rounded-lg rounded-r-0 shadow-md ${getStyles()} ${className}`} title={<>{title}{getIconComponent()}</>}>
      {children}
    </PageLikePanel>
  )
}

export default NotificationBanner
