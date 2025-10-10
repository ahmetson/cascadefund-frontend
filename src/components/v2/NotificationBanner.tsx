import React from 'react'
import Card, {type Props} from '@/components/utilitified_decorations/PagelikeCard'

type NotificationBannerProps = {
  type: 'warning' | 'info' | 'success' | 'error'
  title: string
  children: any
  icon?: any
} & Omit<Props, "children" | "title">

const NotificationBanner: React.FC<NotificationBannerProps> = ({ icon, type, title, children, dropdown }) => {
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

  const getIcon = () => {
    switch (type) {
      case 'warning':
        return (
          <svg className="w-5 h-5 text-yellow-600" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        )
      case 'info': 
        return (
            <svg width="20" height="20" viewBox="0 0 20 20" className="w-5 h-5 text-gray-600" fill="currentColor">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
          )
      default:
        return icon !== undefined ? icon : (
            <svg width="20" className="w-5 h-5 text-blue-600" height="20" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M5 2a1 1 0 011 1v1h1a1 1 0 010 2H6v1a1 1 0 01-2 0V6H3a1 1 0 010-2h1V3a1 1 0 011-1zm0 10a1 1 0 011 1v1h1a1 1 0 110 2H6v1a1 1 0 11-2 0v-1H3a1 1 0 110-2h1v-1a1 1 0 011-1zM12 2a1 1 0 01.967.744L14.146 7.2 17.5 9.134a1 1 0 010 1.732L14.146 12.8l-1.179 4.456a1 1 0 01-1.934 0L9.854 12.8 6.5 10.866a1 1 0 010-1.732L9.854 7.2l1.179-4.456A1 1 0 0112 2z" clipRule="evenodd" />
            </svg>
        )
    }
  }

  return (
    <Card dropdown={dropdown} className={`p-4 border-2 border-dashed flex items-start rounded-lg rounded-r-0 shadow-md ${getStyles()}`} title={<>{title}{getIcon()}</>}>
        {children}
    </Card>
  )
}

export default NotificationBanner
