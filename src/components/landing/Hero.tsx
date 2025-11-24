import React, { useState, useEffect, Key } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Terminal } from 'lucide-react'
import Button from '../custom-ui/Button'
import SuccessModal from './SuccessModal'
import { handleJoinWishlist } from '@/scripts/landing'
import PreviewContainer from './PreviewContainer'
import { Accent, data, accentToUrl } from '@/scripts/data'
import Link from '../custom-ui/Link'
import BorderBeam from '../ui/border-beam'
import { getIcon, IconType } from '../icon'
import Logo from './Logo'

interface HeroProps {
  accent?: Accent | string
  homePage?: string
}

const Hero = ({ accent = Accent.monetizationPrimaryAccent, homePage = '/' }: HeroProps) => {
  const accentKey = (accent as Accent) || Accent.monetizationPrimaryAccent
  const accentData = data[accentKey]
  const [terminalText, setTerminalText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLogoHovered, setIsLogoHovered] = useState(false)

  const fullText = 'visit https://app.cascadefund.org/'

  useEffect(() => {
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setTerminalText(fullText.slice(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setShowCursor(prev => !prev)
    }, 500)

    return () => clearInterval(cursorTimer)
  }, [])


  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleJoinWishlist('hero', 'hero-turnstile-container', email, setIsLoading, setError, setShowSuccessModal, setEmail)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-8 sm:py-12 lg:py-16">
      <div className="grid-bg absolute inset-0 opacity-20"></div>

      <div className="mt-16 section-padding w-full max-w-8xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 sm:mb-8 text-center"
        >
          <h1 className="font-mono text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-3 sm:mb-4 leading-tight">
            <Logo enableBadges={true} imgSize="h-12 w-12 sm:h-16 sm:w-16 md:h-20 md:w-20" />
          </h1>
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-mono max-w-8xl mx-auto leading-relaxed px-2 sm:px-0">
            <strong>Gamified Collaboration Platform</strong> for
            open source maintainers.
          </p>

        </motion.div>

        <div className="text-center flex w-full flex-col sm:flex-col md:flex-row items-center justify-center gap-4 sm:gap-6">
          <motion.ul
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mx-auto mt-0 max-w-md sm:max-w-lg"
          >
            {Object.values(Accent).map((accent, index) => {
              const accentData = data[accent]
              const url = accentToUrl[accent]
              return (
                <motion.li
                  key={accent as Key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  className="mb-2 sm:mb-3"
                >
                  <Link className={`font-mono text-xs ml-1`} uri={accent === accentKey ? '#' : url}>
                    <div className="text-left flex gap-2 sm:gap-3 transition-colors cursor-pointer h-full items-center px-2 sm:px-0">
                      {getIcon({ iconType: accentData.icon as IconType, className: `w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 animate-pulse ${accent === accentKey ? 'text-slate-600' : 'text-teal-500'}` })}
                      <h3 className={`font-mono text-sm sm:text-base md:text-lg font-semibold mb-1 sm:mb-2 mt-1 sm:mt-2 justify-center items-center transition-colors ${accent === accentKey ? 'text-slate-600' : 'text-gray-600 dark:text-slate-500 hover:text-blue-400'}`}>
                        {accentData.title}
                      </h3>
                      {accent === accentKey && getIcon({ iconType: 'arrow-right', className: 'w-3 h-3 hidden md:block text-slate-600' })}
                      {accent === accentKey && getIcon({ iconType: 'arrow-right-down', className: 'w-4 h-4 block md:hidden text-slate-600' })}
                    </div>
                  </Link>
                </motion.li>
              )
            })}
          </motion.ul>


          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-md sm:max-w-lg md:max-w-2xl mx-auto px-2 sm:px-0"
          >
            {/* Terminal Window */}
            <BorderBeam
              className='relative p-3 sm:p-4 md:p-5'
              isHovered={true}
            >

              <PreviewContainer
                previewUrl='With CascadeFund'
                staticUrl={true}
                className='relative z-2'
                childrenClassName='flex flex-col items-center justify-center'>
                <div className="font-mono text-green-400 mt-2 sm:mt-4 text-base sm:text-lg md:text-xl">
                  {data[accentKey].title}
                </div>

                <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row gap-3 sm:gap-4 w-full">
                  <div className="flex-1 w-full">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setError(null)
                      }}
                      onKeyPress={handleKeyPress}
                      placeholder="user@example.com"
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-800 border border-gray-600 rounded-xs text-green-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono text-sm sm:text-base"
                      disabled={isLoading}
                    />
                    {error && (
                      <p className="mt-2 text-xs sm:text-sm text-red-400 font-mono">{error}</p>
                    )}
                  </div>
                  <div id="hero-turnstile-container" className="flex items-center justify-center">

                  </div>
                  <Button
                    variant="success"
                    focus={true}
                    className="h-11 sm:h-12 group w-full sm:w-auto md:w-60 flex items-center justify-center space-x-2 text-sm sm:text-base"
                    onClick={() => handleJoinWishlist('hero', 'hero-turnstile-container', email, setIsLoading, setError, setShowSuccessModal, setEmail)}
                    disabled={isLoading}
                  >
                    <Terminal className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                    <span className="whitespace-nowrap">{isLoading ? 'Joining...' : 'Join Beta Wishlist'}</span>
                    {!isLoading && (
                      <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Button>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs font-mono mt-2 sm:mt-3 px-2 sm:px-0 text-center">
                  Two emails only, one to notify our launch, one is surprise.
                </p>

              </PreviewContainer>
              <div
                className='z-1 absolute top-1 left-1 right-1 bottom-1 shadow-lg shadow-teal-400/40 animate-pulse border-none bg-transparent'
              >
              </div>
            </BorderBeam>
          </motion.div>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </section >
  )
}

export default Hero
