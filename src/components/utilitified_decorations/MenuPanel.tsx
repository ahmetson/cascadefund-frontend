import React from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'
import NotificationBanner from '@/components/NotificationBanner'
import MenuItem from './MenuItem';

type MenuName = 'ihistory' | 'iwork' | 'balance' | 'cbalance' | 'project' | 'marketing' | 'work' | 'cwork';

type MenuType = 'influencer' | 'maintainer' | 'custom'
type ContentType = 'main' | 'collaboration' | 'custom'

interface Props {
  hoverable?: boolean
  title?: string
  activeMenuItem: MenuName
  onlyCustomChildren?: boolean
  children?: any
}

const isOnlyInfluencerMenu = (activeMenuItem: MenuName): boolean => {
  return activeMenuItem === 'ihistory' || activeMenuItem === 'iwork';
}

const maintainerMainItems = (activeMenuItem: MenuName): React.ReactNode[] => {
  return [
    <MenuItem
      icon={BalanceIcon()}
      label="Balance"
      url={"/maintainer/balance"}
      isActive={activeMenuItem === 'balance'}
    />,
    <MenuItem
      icon={CascadingBalanceIcon()}
      label="Cascading balance"
      url={"/maintainer/cbalance"}
      isActive={activeMenuItem === 'cbalance'}
    />,
    <MenuItem
      icon={ProjectInfoIcon()}
      label="Project Info"
      badge="2+"
      url={"/data/project"}
      isActive={activeMenuItem === 'project'}
    />,
  ]
}
const influencerMainItems = (activeMenuItem: MenuName): React.ReactNode[] => {
  return [
    <MenuItem
      icon={InfluencerHistoryIcon()}
      label="Transaction History"
      url="/influencer/history"
      isActive={activeMenuItem === 'ihistory'}
    />
  ]
}

const maintainerCollabItems = (activeMenuItem: MenuName): React.ReactNode[] => {
  return [
    <MenuItem
      icon={MarketingIcon()}
      label="Marketing"
      badge={1}
      url="/maintainer/marketing"
      isActive={activeMenuItem === 'marketing'}
    />,
    <MenuItem
      icon={WorkIcon()}
      label="Work"
      badge={3}
      url="/maintainer/work"
      isActive={activeMenuItem === 'work'}
    />,
    <MenuItem
      icon={CascadingWorkIcon()}
      label="Cascading work"
      badge="?"
      url="/maintainer/cwork"
      isActive={activeMenuItem === 'cwork'}
    />
  ]
}
const influencerCollabItems = (activeMenuItem: MenuName): React.ReactNode[] => {
  return [
    <MenuItem
      icon={InfluencerWorkIcon()}
      label="Influencer Work"
      url="/influencer/work"
      isActive={activeMenuItem === 'iwork'}
    />
  ]
}

const Panel: React.FC<Props> = ({ hoverable, activeMenuItem, title = 'Main Menu', onlyCustomChildren = false, children }) => {
  const titleC = <div className='text-sm font-medium text-gray-500'>{title}</div>

  return <PageLikePanel onHover={hoverable ? (hovered) => { } : undefined} title={titleC} className="bg-white rounded-lg shadow-sm p-4">
    {!onlyCustomChildren && (isOnlyInfluencerMenu(activeMenuItem) ? <NotificationBanner expandable={true} title='Maintainer Menu Not Available' type="error" icon="warning">
      <ul className="text-xs space-y-1 ml-6">
        <li>The project management is available for the maintainers</li>
        <li>It will be available if you are appointed as the maintainer</li>
      </ul>
    </NotificationBanner> : null)}
    <div>
      {children}
      {!onlyCustomChildren && (!isOnlyInfluencerMenu(activeMenuItem) ? maintainerMainItems(activeMenuItem) : influencerMainItems(activeMenuItem))}
      {!onlyCustomChildren &&
        (<><h3 className="text-sm font-medium text-gray-500 mb-3 mt-3">Collaboration Menu</h3>
          <div className="space-y-1">
            {!isOnlyInfluencerMenu(activeMenuItem) ? maintainerCollabItems(activeMenuItem) : influencerCollabItems(activeMenuItem)}
          </div>
        </>)}
    </div>
  </PageLikePanel>
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
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.58L19 8l-9 9z" />
  </svg>
)

const CascadingBalanceIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
)

const ProjectInfoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M11 17h2v-6h-2v6zm1-15C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM12 20c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zM11 9h2V7h-2v2z" />
  </svg>
)

const MarketingIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z" />
  </svg>
)

const WorkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M20 6h-2.18c.11-.31.18-.65.18-1a2.996 2.996 0 0 0-5.5-1.65l-.5.67-.5-.68C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2zm-5-2c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1zM9 4c.55 0 1 .45 1 1s-.45 1-1 1-1-.45-1-1 .45-1 1-1z" />
  </svg>
)

const CascadingWorkIcon = () => (
  <svg viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor">
    <path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" />
  </svg>
)


export default Panel
