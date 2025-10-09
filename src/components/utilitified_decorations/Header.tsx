import React from 'react'
import HeaderRight, { NavigationName, type Navigation } from './HeaderRight'
import CascadeFundLogo from './CascadeFundLogo'

interface Props {
  activeLink?: NavigationName;
  hideLinks?: NavigationName[];
  replacement?: Navigation;
  additional?: React.ReactNode[];
  cascadeLogoSubtitle?: any;  // header left
  landingPageTopMenu?: boolean; // header right
}

const Header: React.FC<Props> = ({additional, cascadeLogoSubtitle, activeLink, landingPageTopMenu = false, hideLinks, replacement}) => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between px-8">
        <CascadeFundLogo subtitle={cascadeLogoSubtitle} />
        <HeaderRight 
          landingPageMenu={landingPageTopMenu} 
          active={activeLink} 
          hideLinks={hideLinks} 
          replacement={replacement}
          additional={additional}
        />
      </div>
    </header>
  )
}

export default Header
