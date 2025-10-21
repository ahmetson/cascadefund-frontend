import React from 'react'
import PageLikePanel from '@/components/panel/PageLikePanel'
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
      icon="balance"
      label="Balance"
      url={"/maintainer/balance"}
      isActive={activeMenuItem === 'balance'}
    />,
    <MenuItem
      icon="cascading-balance"
      label="Cascading balance"
      url={"/maintainer/cbalance"}
      isActive={activeMenuItem === 'cbalance'}
    />,
    <MenuItem
      icon="project-info"
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
      icon="influencer-history"
      label="Transaction History"
      url="/influencer/history"
      isActive={activeMenuItem === 'ihistory'}
    />
  ]
}

const maintainerCollabItems = (activeMenuItem: MenuName): React.ReactNode[] => {
  return [
    <MenuItem
      icon="marketing"
      label="Marketing"
      badge={1}
      url="/maintainer/marketing"
      isActive={activeMenuItem === 'marketing'}
    />,
    <MenuItem
      icon="work"
      label="Work"
      badge={3}
      url="/maintainer/work"
      isActive={activeMenuItem === 'work'}
    />,
    <MenuItem
      icon="cascading-work"
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
      icon="influencer-work"
      label="Influencer Work"
      url="/influencer/work"
      isActive={activeMenuItem === 'iwork'}
    />
  ]
}

const Panel: React.FC<Props> = ({ hoverable, activeMenuItem, title = 'Main Menu', onlyCustomChildren = false, children }) => {
  const titleC = <div className='text-sm font-medium text-gray-500'>{title}</div>

  return <PageLikePanel title={titleC} >
    {children}
    {!onlyCustomChildren && (!isOnlyInfluencerMenu(activeMenuItem) ? maintainerMainItems(activeMenuItem) : influencerMainItems(activeMenuItem))}
    {!onlyCustomChildren &&
      (<>
        <h3 className="text-sm font-medium text-gray-500 mb-3 mt-3">Collaboration Menu</h3>
        <div className="space-y-1">
          {!isOnlyInfluencerMenu(activeMenuItem) ? maintainerCollabItems(activeMenuItem) : influencerCollabItems(activeMenuItem)}
        </div>
      </>)}
  </PageLikePanel>
}


export default Panel
