import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Terminal, GitBranch, Code2, Users, Zap } from 'lucide-react'
import Button from '../custom-ui/Button'

const Hero = () => {
  const [terminalText, setTerminalText] = useState('')
  const [showCursor, setShowCursor] = useState(true)

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

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="grid-bg absolute inset-0 opacity-20"></div>

      <div className="section-padding w-full max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-8 mt-8"
          >
            <h1 className="font-mono text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-gray-400">&gt;</span> The Future of
              <br />
              <span className="gradient-text">
                Open Source
              </span>
              <span className="text-green-400 animate-pulse">_</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-300 font-mono max-w-4xl mx-auto leading-relaxed">
              <span className="text-gray-500">// </span>The first platform for maintainers to grow PRs and support.
              <br />
              <span className="text-gray-500">// </span>Turning open-source development into a recognized, collaborative, and financially sustainable pursuit.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-2xl mx-auto mb-16"
          >
            {/* Terminal Window */}
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="font-mono text-xs text-gray-400 ml-4">cascadefund@terminal:~$</span>
              </div>
              <div className="p-6 bg-gray-900">
                <div className="font-mono text-green-400 mb-4">
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
                    <span className="text-yellow-400">⚡</span> Ready to revolutionize open source!
                  </div>
                </div>

                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                  <input
                    type="email"
                    placeholder="user@example.com"
                    className="flex-1 px-4 py-3 bg-gray-800 border border-gray-600 rounded-xs text-green-400 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent font-mono"
                  />
                  <Button className="h-12 btn-primary group flex items-center justify-center space-x-2">
                    <Terminal className="w-4 h-4" />
                    <span>Join Waitlist</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
                <p className="text-gray-500 text-xs mt-3 font-mono">
                  // Be the first to know when we launch
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-8"
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
                title: "Community Driven",
                description: "Gamified system that rewards meaningful contributions",
                platform: "bitbucket"
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Sustainable Growth",
                description: "Financial sustainability through innovative monetization",
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
                  <div className="text-green-400">
                    {feature.icon}
                  </div>
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                </div>
                <h3 className="font-mono text-lg font-semibold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm font-mono">
                  <span className="text-gray-600">// </span>{feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
