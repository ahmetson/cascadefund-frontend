import React from 'react'

interface MenuItemProps {
  icon: string
  label: string
  badge?: number
  isActive?: boolean
}

const MenuItem: React.FC<MenuItemProps> = ({ icon, label, badge, isActive }) => {
  return (
    <div className={`flex items-center justify-between px-4 py-2 rounded-md cursor-pointer ${
      isActive ? 'bg-cascade-light-blue text-cascade-blue' : 'text-gray-700 hover:bg-gray-100'
    }`}>
      <div className="flex items-center space-x-3">
        <span className="text-lg">{icon}</span>
        <span className="text-sm">{label}</span>
      </div>
      {badge && (
        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-xs ${
          badge > 0 ? 'bg-red-500 text-white' : 'bg-gray-300 text-gray-600'
        }`}>
          {badge}
        </div>
      )}
    </div>
  )
}

const Sidebar: React.FC = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 p-4">
      <div className="mb-6">
        <h3 className="text-sm font-medium text-gray-500 mb-3">Main Menu</h3>
        <div className="space-y-1">
          <MenuItem icon="⚖️" label="Balance" />
          <MenuItem icon="=" label="Cascading balance" />
          <MenuItem icon="ℹ️" label="Project Info" badge={2} isActive />
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-3">Collaboration Menu</h3>
        <div className="space-y-1">
          <MenuItem icon="📢" label="Marketing" badge={1} />
          <MenuItem icon="💼" label="Work" badge={1} />
          <MenuItem icon="📋" label="Cascading work" badge={2} />
        </div>
      </div>
    </aside>
  )
}

export default Sidebar
