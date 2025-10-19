import React from 'react'
import PageLikePanel, { type PageLikePanelProps } from '@/components/panel/PageLikePanel'

interface SidebarItem {
  title?: string
  name?: string
  description?: string
  number?: string
}

type SidebarSectionProps = Omit<PageLikePanelProps, "children"> & {
  title: string
  items: SidebarItem[]
  showNumbers?: boolean
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items, showNumbers = false, bg }) => {
  return (
    <PageLikePanel title={title} bg={bg}>
      {items.map((item, index) => (
        <div key={index} className="text-sm">
          {showNumbers ? (
            <div className="flex items-center justify-between">
              <span className="text-gray-900">{item.name}</span>
              <span className="text-gray-500 text-xs">{item.number}</span>
            </div>
          ) : (
            <>
              <div className="font-medium text-gray-900 mb-1">{item.title}</div>
              <div className="text-gray-600">{item.description}</div>
            </>
          )}
        </div>
      ))}
    </PageLikePanel>
  )
}

export default SidebarSection
