import { motion } from 'framer-motion'
import { useState } from 'react'

const Logo = ({
  imgSize = 'w-20 h-20',
  enableBadges = false
}: {
  imgSize?: string
  enableBadges?: boolean
}) => {
  const [isLogoHovered, setIsLogoHovered] = useState(false)

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
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0 * 0.1 }}
        whileHover={{ y: -2 }}
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
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{
                    opacity: 1,
                    scale: 1,
                    y: [0, -8, 0],
                  }}
                  transition={{
                    opacity: { delay: index * 0.1 },
                    scale: { delay: index * 0.1 },
                    y: {
                      duration: 1.5,
                      repeat: Infinity,
                      ease: 'easeInOut',
                      delay: index * 0.5, // Wave effect: each badge starts after the previous one
                    },
                  }}
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
