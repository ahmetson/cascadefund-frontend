import React from 'react'
import Card from './PagelikeCard'
import NotificationBanner from '@/components/v2/NotificationBanner'

interface MenuItemProps {
  icon: React.ReactNode
  label: string
  url: string
  badge?: number | string
  isActive?: boolean
}

type MenuName = 'ihistory' | 'iwork' | 'balance' | 'cbalance' | 'project' | 'marketing' | 'work' | 'cwork';


const MenuItem: React.FC<MenuItemProps> = ({ icon, label, badge, url, isActive = false }) => {
  return (
    <a href={url} className={`flex items-center justify-between px-3 py-2 rounded-md cursor-pointer ${
      isActive ? 'bg-blue-50 text-blue-700' : 'text-gray-700 hover:bg-gray-50'
    }`}>
      <div className="flex items-center space-x-3">
        {icon}
        <span className="text-sm font-medium">{label}</span>
      </div>
      {badge && (
        <span className={`px-2 py-1 text-xs font-medium rounded-full ${
          typeof badge === 'number' && badge > 0 
            ? 'bg-red-100 text-red-800' 
            : 'bg-blue-100 text-blue-800'
        }`}>
          {badge}
        </span>
      )}
    </a>
  )
}

interface SidebarProps {
  activeMenuItem: MenuName
}

const isOnlyInfluencerMenu = (activeMenuItem: MenuName): boolean => {
  return activeMenuItem === 'ihistory' || activeMenuItem === 'iwork';
}

const Sidebar: React.FC<SidebarProps> = ({activeMenuItem}) => {
  return <Card title="Main Menu" className="bg-white rounded-lg shadow-sm p-4">
      {isOnlyInfluencerMenu(activeMenuItem) ? <NotificationBanner dropdown={true} title='Maintainer Menu Not Available' type="error" >
          <ul className="text-xs space-y-1 ml-6">
              <li>The project management is available for the maintainers</li>
              <li>It will be available if you are appointed as the maintainer</li>
          </ul>
      </NotificationBanner> : null}
      <div className="space-y-1 mb-6">
          {!isOnlyInfluencerMenu(activeMenuItem) ? <MenuItem
            icon={BalanceIcon()}
            label="Balance"
            url={"/v2/maintainer/balance"}
            isActive={activeMenuItem === 'balance'}
          />: null}
          {!isOnlyInfluencerMenu(activeMenuItem) ? <MenuItem
            icon={CascadingBalanceIcon()}
            label="Cascading balance"
            url={"/v2/maintainer/cbalance"}
            isActive={activeMenuItem === 'cbalance'}
          />: null}
          {!isOnlyInfluencerMenu(activeMenuItem) ? <MenuItem
            icon={ProjectInfoIcon()}
            label="Project Info"
            badge="2+"
            url={"/v2/maintainer/project/update"}
            isActive={activeMenuItem === 'project'}
          />: null}
          {isOnlyInfluencerMenu(activeMenuItem) ? <MenuItem
            icon={InfluencerHistoryIcon()}
            label="Transaction History"
            url="/v2/influencer/history"
            isActive={activeMenuItem === 'ihistory'}
          />: null}
      </div>
      
      <div>
        <h3 className="text-sm font-medium text-gray-500 mb-3">Collaboration Menu</h3>
        <div className="space-y-1">
          {!isOnlyInfluencerMenu(activeMenuItem) ? <MenuItem
            icon={MarketingIcon()}
            label="Marketing"
            badge={1}
            url="/v2/maintainer/marketing"
            isActive={activeMenuItem === 'marketing'}
          />: null}
          {!isOnlyInfluencerMenu(activeMenuItem) ? <MenuItem
            icon={WorkIcon()}
            label="Work"
            badge={3}
            url="/v2/maintainer/work"
            isActive={activeMenuItem === 'work'}
          />: null}
          {!isOnlyInfluencerMenu(activeMenuItem) ? <MenuItem
            icon={CascadingWorkIcon()}
            label="Cascading work"
            badge="?"
            url="/v2/maintainer/cwork"
            isActive={activeMenuItem === 'cwork'}
          />: null}
          {isOnlyInfluencerMenu(activeMenuItem) ? <MenuItem
           icon={InfluencerWorkIcon()}
            label="Influencer Work"
            url="/v2/influencer/work"
            isActive={activeMenuItem === 'iwork'}
          />: null}
        </div>
      </div>
    </Card>
}

const InfluencerHistoryIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

const InfluencerWorkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
)

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
