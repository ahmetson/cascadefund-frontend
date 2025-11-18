import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Terminal } from 'lucide-react'
import Button from '../custom-ui/Button'
import SuccessModal from './SuccessModal'
import { handleJoinWishlist } from '@/scripts/landing'
import PreviewContainer from './PreviewContainer'
import { Accent, data, accentToUrl } from '@/scripts/data'
import Link from '../custom-ui/Link'
import BorderBeam from '../ui/border-beam'

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-20"></div>

      <div className="section-padding w-full max-w-8xl mx-auto relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 mt-14"
          >
            <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <div className="flex items-center space-x-2 w-full justify-center"
                onMouseEnter={() => setIsLogoHovered(true)}
                onMouseLeave={() => setIsLogoHovered(false)}
              >
                <div
                  className="w-20 h-20 bg-transparent rounded flex items-center justify-center"
                >
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
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-mono max-w-6xl mx-auto leading-relaxed">
              <strong>Social Media + Collaboration Platform</strong> for
              open source maintainers.
            </p>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 mt-4 font-mono max-w-4xl mx-auto leading-relaxed">
              <span className="text-gray-600 dark:text-gray-400">- </span>{accentData.title} -
              {/* <br /> */}
              {/* <span className="text-xl sm:text-lg lg:text-xl text-gray-600 dark:text-gray-400 mt-4 font-mono mx-auto leading-relaxed"> */}
              {/* {accentData.title2} */}
              {/* </span> */}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-16"
          >
            {/* Terminal Window */}
            <BorderBeam
              className='relative p-5'
            >

              <PreviewContainer
                previewUrl=''
                className='relative z-2'
                childrenClassName='flex flex-col items-center justify-center'>
                <div className="font-mono text-green-400 mb-4 ">
                  <span className="text-gray-500">$</span> {terminalText}
                </div>
                <div className="space-y-2 text-sm text-left ml-4 max-w-96">
                  <div className="text-gray-400">
                    <span className="text-blue-400">1</span> Add Your Repository...
                  </div>
                  <div className="text-gray-400 ">
                    <span className="text-blue-400">2</span> Reduce management to the notifications checks...
                  </div>
                  <div className="text-gray-400 ">
                    <span className="text-yellow-400">3</span> Ready to code, no burnout, no stress...
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <div className="flex-1">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value)
                        setError(null)
                      }}
                      onKeyPress={handleKeyPress}
                      placeholder="user@example.com"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-600 rounded-xs text-green-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono"
                      disabled={isLoading}
                    />
                    {error && (
                      <p className="mt-2 text-sm text-red-400 font-mono">{error}</p>
                    )}
                  </div>
                  <div id="hero-turnstile-container">

                  </div>
                  <Button
                    className="h-12 btn-primary group w-full md:w-60 flex items-center justify-center space-x-2 sm:w-full sm:mb-2"
                    onClick={() => handleJoinWishlist('hero', 'hero-turnstile-container', email, setIsLoading, setError, setShowSuccessModal, setEmail)}
                    disabled={isLoading}
                  >
                    <Terminal className="w-4 h-4" />
                    <span>{isLoading ? 'Joining...' : 'Join Waitlist'}</span>
                    {!isLoading && (
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    )}
                  </Button>
                </div>
                <p className="text-gray-600 dark:text-gray-400 text-xs font-mono my-1">
                  Join the Waitlist.
                  <br />
                  View Our Demo: <Link uri="https://app.cascadefund.org/" asNewTab={true} className='underline'>CascadeFund App (Demo) </Link>
                </p>
              </PreviewContainer>
              <div
                className='z-1 absolute top-1 left-1 right-1 bottom-1 shadow-lg shadow-teal-400/40 animate-pulse border-none bg-transparent'
              >
              </div>
            </BorderBeam>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="max-w-6xl mx-auto mb-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-8xl mx-auto">
              {Object.values(Accent).filter((accent_ => accent_ !== accent)).map((accent, index) => {
                const accentData = data[accent]
                const url = accentToUrl[accent]
                return (
                  <motion.a
                    href={url}
                    key={accent}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                  >
                    <div className="text-left flex gap-2 transition-colors cursor-pointer h-full">
                      <div className="flex items-center space-x-3 mb-4">
                        <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                      </div>
                      <h3 className="font-mono text-lg font-semibold text-gray-600 dark:text-slate-500 mb-2 hover:text-blue-400 transition-colors">
                        {accentData.title}
                      </h3>
                    </div>
                  </motion.a>
                )
              })}
            </div>
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
