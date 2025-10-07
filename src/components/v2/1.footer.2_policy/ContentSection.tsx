import React from 'react'
import ContentItem from './ContentItem'

interface ContentSectionProps {
  title: string
  subtitle?: string
  color: string
  icon?: string
  items: Array<{
    icon: string
    text: string
  }>
  footer?: string
  footerIcon?: string
}

const ContentSection: React.FC<ContentSectionProps> = ({
  title,
  subtitle,
  color,
  icon,
  items,
  footer,
  footerIcon
}) => {
  return (
    <section>
      <div className="flex items-center space-x-2 mb-6">
        <h2 className={`text-2xl font-bold ${color}`}>
          {title}
        </h2>
        {icon && <span className="text-xl">{icon}</span>}
      </div>
      
      {subtitle && (
        <p className="text-gray-600 mb-6 italic">
          {subtitle}
        </p>
      )}

      <div className="space-y-4">
        {items.map((item, index) => (
          <ContentItem
            key={index}
            icon={item.icon}
            text={item.text}
          />
        ))}
      </div>

      {footer && (
        <div className="flex items-center justify-center mt-6 space-x-2">
          {footerIcon === 'heart' && (
            <span className="text-red-500 text-lg">♥</span>
          )}
          <span className="text-gray-600 font-medium">{footer}</span>
        </div>
      )}
    </section>
  )
}

export default ContentSection
