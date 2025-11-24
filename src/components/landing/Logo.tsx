import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

const Logo = ({
  imgSize = 'w-20 h-20',
  enableBadges = false
}: {
  imgSize?: string
  enableBadges?: boolean
}) => {
  const [isLogoHovered, setIsLogoHovered] = useState(false)
  const [isLargeScreen, setIsLargeScreen] = useState(false)

  useEffect(() => {
    // Check if screen is large (>= 1024px, Tailwind's lg breakpoint)
    const checkScreenSize = () => {
      setIsLargeScreen(window.innerWidth >= 1024)
    }

    // Check on mount
    checkScreenSize()

    // Listen for resize events
    window.addEventListener('resize', checkScreenSize)

    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  const badges = [
    { text: 'Always Free' },
    { text: 'Non Profit' },
    { text: 'Open-Source' },
  ]

  return (
    <div className="relative flex items-center justify-center w-full">
      <motion.div
        className="flex items-center space-x-2 justify-center relative z-10"
        onMouseEnter={() => setIsLogoHovered(true)}
        onMouseLeave={() => setIsLogoHovered(false)}
        initial={isLargeScreen ? { opacity: 0, x: -20 } : { opacity: 1, x: 0 }}
        animate={isLargeScreen ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 }}
        transition={isLargeScreen ? { delay: 0 * 0.1 } : { duration: 0 }}
        whileHover={isLargeScreen ? { y: -2 } : {}}
      >
        <div className={`${imgSize} bg-transparent rounded flex items-center justify-center relative`}>
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
          {enableBadges && (
            <div className="absolute top-0 right-0 flex flex-row items-end gap-2 translate-x-full -translate-y-full">
              {badges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  className="px-3 py-1.5 rounded-full bg-teal-500/20 backdrop-blur-sm border border-teal-400/30 text-xs font-medium text-teal-300 whitespace-nowrap"
                  initial={isLargeScreen ? { opacity: 0, scale: 0.8 } : { opacity: 1, scale: 1 }}
                  animate={
                    isLargeScreen
                      ? {
                        opacity: 1,
                        scale: 1,
                        y: [0, -8, 0],
                      }
                      : {
                        opacity: 1,
                        scale: 1,
                      }
                  }
                  transition={
                    isLargeScreen
                      ? {
                        opacity: { delay: index * 0.1 },
                        scale: { delay: index * 0.1 },
                        y: {
                          duration: 1.5,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: index * 0.5, // Wave effect: each badge starts after the previous one
                        },
                      }
                      : { duration: 0 }
                  }
                >
                  {badge.text}
                </motion.div>
              ))}
            </div>
          )}
        </div>

        <span className="font-mono font-bold gradient-text">
          cascade<span className="">fund</span>
          <span className="text-teal-400 animate-pulse">_</span>
        </span>
      </motion.div>


    </div>
  )
}

export default Logo
