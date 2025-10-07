import React from 'react'
import SidebarItem from './SidebarItem'

const Sidebar: React.FC = () => {
  const items = [
    { icon: "github", label: "GitHub and repos stuff", active: true },
    { icon: "analytics", label: "Analytics" },
    { icon: "money", label: "Money" },
    { icon: "email", label: "Email" }
  ]

  return (
    <nav className="bg-white rounded-lg shadow-sm p-6">
      <h3 className="text-sm font-medium text-gray-500 mb-4">Navigation</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <SidebarItem
            key={index}
            icon={item.icon}
            label={item.label}
            active={item.active}
          />
        ))}
      </ul>
    </nav>
  )
}

export default Sidebar
