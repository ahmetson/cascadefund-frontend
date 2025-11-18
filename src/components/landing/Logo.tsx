import { useState } from 'react'

const Logo = ({ imgSize = 'w-20 h-20' }: { imgSize?: string }) => {
  const [isLogoHovered, setIsLogoHovered] = useState(false)

  return (
    <div className="flex items-center space-x-2 w-full justify-center"
      onMouseEnter={() => setIsLogoHovered(true)}
      onMouseLeave={() => setIsLogoHovered(false)}
    >
      <div className={`${imgSize} bg-transparent rounded flex items-center justify-center`}>
        <img
          src="/cascadefund_logo.png"
          id="logoImg"
          alt="CascadeFund Logo"
          className="w-full h-full"
          style={{ display: isLogoHovered ? 'none' : 'block' }}
        />
        <img
          src="/cascadefund_logo_hover.png"
          id="hoveredLogoImg"
          alt="CascadeFund Logo"
          className="w-full h-full"
          style={{ display: isLogoHovered ? 'block' : 'none' }}
        />
      </div>

      <span className="font-mono font-bold text-teal-500">
        cascade<span className="text-blue-400">fund</span>
        <span className="text-teal-400 animate-pulse">_</span>
      </span>
    </div>
  )
}

export default Logo
