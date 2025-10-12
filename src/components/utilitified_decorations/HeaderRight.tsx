import React from 'react'
import Badge from '@/components/Badge'
import MenuAvatar from '@/components/MenuAvatar'
import Link from '@/components/Link'
import LinkBtn from '@/components/LinkBtn'
import NavLabelElement from './NavigatingItem'

export enum NavigationName {
  // Signed
  ProjectName = 'ProjectName',
  ProjectList = 'ProjectList',
  //...

  // NonSigned
  ContributorLanding = "ContributorLanding",
  UserLanding = "UserLanding",
  MaintainerLanding = "MaintainerLanding",
  HowItWork = "HowItWork",
  Check = "Check",

  //...

  Avatar = 'Avatar',
}
export type Navigation = {[key in NavigationName]?: React.ReactNode}

export const SignedRightMenuExceptAvatar = [
  NavigationName.ProjectName,
  NavigationName.ProjectList,
]

export const LandingRightMenu = [
  NavigationName.MaintainerLanding,
  NavigationName.Check,
  NavigationName.UserLanding,
  NavigationName.ContributorLanding,
  NavigationName.HowItWork,
  NavigationName.Avatar,
]

interface Props {
  active?: NavigationName
  hideLinks?: NavigationName[];
  landingPageMenu?: boolean;
  replacement?: Navigation;
  additional?: React.ReactNode[];
}

const getNavigation = (landingPageMenu = false, active?: NavigationName, hideLinks?: NavigationName[]): Navigation => {
  let navigation: Navigation = {}
  if (!landingPageMenu) {
    if (hideLinks === undefined || hideLinks.findIndex(el => el === NavigationName.ProjectName) == -1) {
      navigation[NavigationName.ProjectName] = 
      <NavLabelElement href="/data/project" active={active === NavigationName.ProjectName}>
          Reflect
      </NavLabelElement>;
    }
    if (hideLinks === undefined || hideLinks.findIndex(el => el === NavigationName.ProjectList) == -1) {
      navigation[NavigationName.ProjectList] = 
      <NavLabelElement href="/data/projects" active={active === NavigationName.ProjectList}>
          Projects
          <Badge variant="blue">2</Badge>
          <Badge variant="red">2</Badge>
      </NavLabelElement>;
    }
    
    navigation[NavigationName.Avatar] = <MenuAvatar active={active === NavigationName.Avatar} />  
    return navigation;
  }

  //
  // NOTICE: In landing page menu, active page is hidden, except Avatar
  //
  if (active !== NavigationName.MaintainerLanding && (hideLinks === undefined || hideLinks.findIndex(el => el === NavigationName.MaintainerLanding) == -1)) {
    navigation[NavigationName.MaintainerLanding] =  <div className="text-sm text-gray-600">
      I'm an:<br />
      <Link href="/">Open Source Maintainer</Link>
    </div>;
  }
  if (active !== NavigationName.ContributorLanding && (hideLinks === undefined || hideLinks.findIndex(el => el === NavigationName.ContributorLanding) == -1)) {
    navigation[NavigationName.ContributorLanding] =  <div className="text-sm text-gray-600">
      I'm an:<br />
      <Link href="/meta/contributor">Open Source Contributor</Link>
    </div>;
  }
  if (active !== NavigationName.UserLanding && (hideLinks === undefined || hideLinks.findIndex(el => el === NavigationName.UserLanding) == -1)) {
    navigation[NavigationName.UserLanding] = <div className="text-sm text-gray-600">
            I'm an:<br />
            <Link href="/meta/influencer" >Open Source User</Link>
    </div>;
  }
  if (active !== NavigationName.HowItWork && (hideLinks === undefined || hideLinks.findIndex(el => el === NavigationName.HowItWork) == -1)) {
    navigation[NavigationName.HowItWork] = <Link href="/meta/work" >How it works?</Link>;
  }
  if (active !== NavigationName.Check && (hideLinks === undefined || hideLinks.findIndex(el => el === NavigationName.Check) == -1)) {
    navigation[NavigationName.Check] = <div>
          <Link href="/maintainer/check" >
            Check Balance?
          </Link>
          <span className="ml-1 w-4 h-4 bg-gray-300 rounded-full p-2 py-1 justify-center text-xs no-underline text-gray-600">?</span>
    </div>
  }

  if (hideLinks === undefined || hideLinks.findIndex(el => el === NavigationName.Avatar) == -1) {
    navigation[NavigationName.Avatar] = <LinkBtn href="/login" variant="purple" >Log In</LinkBtn>
  }
  return navigation;
}

const HeaderRight: React.FC<Props> = ({additional, landingPageMenu = true, active, hideLinks, replacement}) => {
  let visibleNavigation = getNavigation(landingPageMenu, active, hideLinks || []);
  if (replacement) {
    for (let key in replacement) {
      visibleNavigation[key as keyof typeof NavigationName] = replacement[key as keyof typeof NavigationName];
    }
  }
  const elements = [...(additional || []), ...Object.values(visibleNavigation)];
  
  return (
    <nav className="hidden md:flex items-center space-x-6">
      {elements.map((el) => el)}
    </nav>
  )
}

export default HeaderRight
