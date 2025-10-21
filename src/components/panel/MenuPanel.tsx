import React from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'
import MenuItem from './MenuItem';

type MenuName = 'ihistory' | 'iwork' | 'balance' | 'cbalance' | 'project' | 'marketing' | 'work' | 'cwork';

interface Props {
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
      icon="balance"
      label="Balance"
      href={"/maintainer/balance"}
      isActive={activeMenuItem === 'balance'}
    />,
    <MenuItem
      icon="cascading-balance"
      label="Cascading balance"
      href={"/maintainer/cbalance"}
      isActive={activeMenuItem === 'cbalance'}
    />,
    <MenuItem
      icon="project-info"
      label="Project Info"
      badges={[
        {
          children: "2+",
          variant: "info",
          active: false,
          disableAnimation: true
        }
      ]}
      href={"/data/project"}
      isActive={activeMenuItem === 'project'}
    />,
  ]
}
const influencerMainItems = (activeMenuItem: MenuName): React.ReactNode[] => {
  return [
    <MenuItem
      icon="influencer-history"
      label="Transaction History"
      href="/influencer/history"
      isActive={activeMenuItem === 'ihistory'}
    />
  ]
}

const maintainerCollabItems = (activeMenuItem: MenuName, disableAnimation: boolean = false): React.ReactNode[] => {
  return [
    <MenuItem
      icon="marketing"
      label="Marketing"
      href="/maintainer/marketing"
      isActive={activeMenuItem === 'marketing'}
    />,
    <MenuItem
      icon="work"
      label="Work"
      badges={[
        {
          children: "3",
          variant: "success",
          active: activeMenuItem === 'work',
          disableAnimation: disableAnimation
        }
      ]}
      href="/maintainer/work"
      isActive={activeMenuItem === 'work'}
    />,
    <MenuItem
      icon="cascading-work"
      label="Cascading work"
      badges={[
        {
          children: "2",
          variant: "danger",
          active: activeMenuItem === 'cwork',
          disableAnimation: disableAnimation
        }
      ]}
      href="/maintainer/cwork"
      isActive={activeMenuItem === 'cwork'}
    />
  ]
}
const influencerCollabItems = (activeMenuItem: MenuName): React.ReactNode[] => {
  return [
    <MenuItem
      icon="influencer-work"
      label="Influencer Work"
      href="/influencer/work"
      isActive={activeMenuItem === 'iwork'}
    />
  ]
}

const isBadgedItemAnimated = (onlyCustomChildren: boolean, children: any, activeItem: MenuName): boolean => {
  if (onlyCustomChildren || children) {
    return false;
  }
  return activeItem === 'work' || activeItem === 'cwork';
}

const noChildren = <div className="text-center py-8 text-gray-500">
  <svg viewBox="0 0 24 24" className="w-12 h-12 mx-auto mb-4 text-gray-300" fill="currentColor">
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.58L19 8l-9 9z" />
  </svg>
  <p className="text-sm">No menu items available</p>
  <p className="text-xs text-gray-400 mt-1">Add some items to get started</p>
</div>

const Panel: React.FC<Props> = ({ activeMenuItem, title = 'Main Menu', onlyCustomChildren = false, children }) => {
  const titleC = <div className='text-sm font-medium text-gray-500'>{title}</div>
  const disableAnimation = isBadgedItemAnimated(onlyCustomChildren, children, activeMenuItem);

  return <PageLikePanel title={titleC} >
    {onlyCustomChildren && !children ? noChildren : children}
    {!onlyCustomChildren && (!isOnlyInfluencerMenu(activeMenuItem) ? maintainerMainItems(activeMenuItem) : influencerMainItems(activeMenuItem))}
    {!onlyCustomChildren &&
      (<>
        <h3 className="text-sm font-medium text-gray-500 mb-3 mt-3">Collaboration Menu</h3>
        <div className="space-y-1">
          {!isOnlyInfluencerMenu(activeMenuItem) ? maintainerCollabItems(activeMenuItem, disableAnimation) : influencerCollabItems(activeMenuItem)}
        </div>
      </>)}
  </PageLikePanel>
}


export default Panel
