import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Terminal, Code2, Users, Zap } from 'lucide-react'
import Button from '../custom-ui/Button'
import SuccessModal from './SuccessModal'
import { recaptchaHandleJoinWishlist } from '@/scripts/landing'
import PreviewContainer from './PreviewContainer'

const Hero = () => {
  const [terminalText, setTerminalText] = useState('')
  const [showCursor, setShowCursor] = useState(true)
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const fullText = 'open https://cascadefund.org/'

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
      recaptchaHandleJoinWishlist('hero', 'hero-turnstile-container', email, setIsLoading, setError, setShowSuccessModal, setEmail)
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-20"></div>

      <div className="section-padding w-full max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 mt-14"
          >
            <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
              <span className="text-teal-400">&gt;</span> The Future of
              <br />
              <span className="gradient-text">
                Open Source
              </span>
              <span className="text-green-700 animate-pulse">_</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 dark:text-gray-400 font-mono max-w-4xl mx-auto leading-relaxed">
              <span className="text-gray-600 dark:text-gray-400">// </span>The first platform for maintainers to grow PRs and support.
              <br />
              <span className="text-gray-600 dark:text-gray-400">// </span>Turning open-source development into a recognized, collaborative, and financially sustainable pursuit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-16"
          >
            {/* Terminal Window */}
            <PreviewContainer previewUrl='cascadefund@terminal:~$'>
              <div className="font-mono text-green-400 mb-4 ">
                <span className="text-gray-500">$</span> {terminalText}
                {showCursor && <span className="text-green-400">|</span>}
              </div>
              <div className="space-y-2 text-sm">
                <div className="text-gray-400">
                  <span className="text-blue-400">✓</span> Add Your Repository...
                </div>
                <div className="text-gray-400">
                  <span className="text-blue-400">✓</span> Setting up project in the databases...
                </div>
                <div className="text-gray-400">
                  <span className="text-yellow-400">⚡</span> Ready to 10 minute work PR, and earning!
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
                  onClick={() => recaptchaHandleJoinWishlist('hero', 'hero-turnstile-container', email, setIsLoading, setError, setShowSuccessModal, setEmail)}
                  disabled={isLoading}
                >
                  <Terminal className="w-4 h-4" />
                  <span>{isLoading ? 'Joining...' : 'Join Waitlist'}</span>
                  {!isLoading && (
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  )}
                </Button>
              </div>
              <p className="text-gray-600 dark:text-gray-400 text-xs mt-3 font-mono">
                  // Be the first to know when we launch
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-xs mt-3 font-mono">
                  // Protected by CloudFlare Turnstile
              </p>
            </PreviewContainer>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-8"
          >
            {[
              {
                icon: <Code2 className="w-8 h-8" />,
                title: "Collaborative Platform",
                description: "Unified workspace for developers, contributors, and users",
                platform: "github"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Gamified System",
                description: "Collaboration is two click tasks. Project management = 10 minutes of daily guided tasks.",
                platform: "bitbucket"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Non-competitive Rating",
                description: "Rating represents how you work with others and on which types of projects.",
                platform: "github"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Sustainable Growth",
                description: "Financial sustainability through innovative gamified paywall.",
                platform: "gitlab"
              }
            ].map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 + index * 0.2 }}
                className={`card-terminal text-left platform-${feature.platform}`}
              >
                <div className="flex items-center space-x-3 mb-4">
                  <div className="text-teal-400">
                    {feature.icon}
                  </div>
                  <div className="w-2 h-2 bg-teal-400 rounded-full animate-pulse"></div>
                </div>
                <h3 className="font-mono text-lg font-semibold text-gray-600 dark:text-gray-100 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm font-mono">
                  <span className="text-gray-600">// </span>{feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </section>
  )
}

export default Hero
