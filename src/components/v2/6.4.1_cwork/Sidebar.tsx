import React from 'react'
import SidebarSection from './ui/SidebarSection'
import SidebarItem from './ui/SidebarItem'

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-sidebar-gray border-r border-gray-200 p-4">
      <SidebarSection title="Main Menu">
        <SidebarItem 
          icon={<BalanceIcon />}
          label="Balance"
          href="#"
        />
        <SidebarItem 
          icon={<CascadingBalanceIcon />}
          label="Cascading balance"
          href="#"
        />
        <SidebarItem 
          icon={<ProjectInfoIcon />}
          label="Project Info"
          href="#"
          badge="2+"
        />
      </SidebarSection>

      <SidebarSection title="Collaboration Menu">
        <SidebarItem 
          icon={<MarketingIcon />}
          label="Marketing"
          href="#"
          badge="1"
        />
        <SidebarItem 
          icon={<WorkIcon />}
          label="Work"
          href="#"
          badge="2"
          isActive
        />
        <SidebarItem 
          icon={<CascadingWorkIcon />}
          label="Cascading work"
          href="#"
          badge="3"
        />
      </SidebarSection>
    </aside>
  )
}

// Icon components
const BalanceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.58L19 8l-9 9z"/>
            </svg>
)

const CascadingBalanceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
)

const ProjectInfoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z"/>
            </svg>
)

const MarketingIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
            </svg>
)

const WorkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z"/>
            </svg>
)

const CascadingWorkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
              <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z"/>
            </svg>
)

export default Sidebar
