import React from 'react'
import { motion } from 'framer-motion'
import { Github, Linkedin, Terminal, Code, GitBranch } from 'lucide-react'

const Team = () => {
  return (
    <section id="team" className="py-24 relative">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white mb-6">
            <span className="text-gray-400">&gt;</span> Our Team
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono">
            <span className="text-gray-600">// </span>CascadeFund is built by two developers whose top achievements shaped their paths in tech.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="github-card platform-github"
          >
            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="font-mono text-xs text-gray-400 ml-4">medet.dev</span>
              </div>
              <div className="p-4 bg-gray-900 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-mono font-bold text-black">M</span>
                </div>
                <h3 className="font-mono text-xl font-bold text-white mb-1">
                  Medet
                </h3>
                <p className="text-green-400 font-mono text-sm">Co-Founder & Developer</p>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="font-mono text-xs text-gray-400">Online</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-400 font-mono text-sm">
              <div className="bg-gray-800/50 p-3 rounded border border-gray-700">
                <p className="leading-relaxed">
                  <span className="text-gray-600">// </span>Medet taught himself programming and, as his first major project in 2015, created a full programming language from scratch in C.
                </p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded border border-gray-700">
                <p className="leading-relaxed">
                  <span className="text-gray-600">// </span>He later became CTO and Chief of Blocklords, leading its technical development and bringing innovative solutions to the gaming industry.
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center space-x-4">
              <a
                href="#"
                className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors font-mono text-sm group"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-mono text-sm group"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="github-card platform-bitbucket"
          >
            <div className="terminal-window mb-6">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="font-mono text-xs text-gray-400 ml-4">sergey.dev</span>
              </div>
              <div className="p-4 bg-gray-900 text-center">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl font-mono font-bold text-white">S</span>
                </div>
                <h3 className="font-mono text-xl font-bold text-white mb-1">
                  Sergey
                </h3>
                <p className="text-blue-400 font-mono text-sm">Co-Founder & Developer</p>
                <div className="flex items-center justify-center space-x-2 mt-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                  <span className="font-mono text-xs text-gray-400">Online</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-4 text-gray-400 font-mono text-sm">
              <div className="bg-gray-800/50 p-3 rounded border border-gray-700">
                <p className="leading-relaxed">
                  <span className="text-gray-600">// </span>Sergey has been coding since the early internet. A veteran of the first dot-com era, he built CRMs and frameworks still in use today.
                </p>
              </div>
              <div className="bg-gray-800/50 p-3 rounded border border-gray-700">
                <p className="leading-relaxed">
                  <span className="text-gray-600">// </span>He now serves as CTO at one of the largest data analytics companies, working with leading banks worldwide and bringing enterprise-level expertise to CascadeFund.
                </p>
              </div>
            </div>
            
            <div className="mt-6 flex justify-center space-x-4">
              <a
                href="#"
                className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors font-mono text-sm group"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href="#"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-mono text-sm group"
              >
                <Linkedin className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </motion.div>
        </div>

        {/* Code Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <div className="terminal-window max-w-4xl mx-auto">
            <div className="terminal-header">
              <div className="terminal-dot bg-red-500"></div>
              <div className="terminal-dot bg-yellow-500"></div>
              <div className="terminal-dot bg-green-500"></div>
              <span className="font-mono text-xs text-gray-400 ml-4">git log --oneline --graph</span>
            </div>
            <div className="p-6 bg-gray-900">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-sm">
                <div className="text-center">
                  <div className="text-2xl font-bold text-green-400 mb-2">15+</div>
                  <div className="text-gray-400">Years Combined Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-400 mb-2">100k+</div>
                  <div className="text-gray-400">Lines of Code Written</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-yellow-400 mb-2">50+</div>
                  <div className="text-gray-400">Projects Deployed</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Team
