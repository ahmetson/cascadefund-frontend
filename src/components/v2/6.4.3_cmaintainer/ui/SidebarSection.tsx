import React from 'react'

interface SidebarSectionProps {
  title: string
  children: React.ReactNode
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children }) => {
  return (
    <div className="mb-8">
      <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-3">
        {title}
      </h3>
      <nav className="space-y-1">
        {children}
      </nav>
    </div>
  )
}

export default SidebarSection
