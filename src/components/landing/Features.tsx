import { motion } from 'framer-motion'
import { Shield, Clock, Users, Target, Github, GitBranch, Code, Terminal } from 'lucide-react'

const Features = () => {
  return (
    <section id="features" className="py-24 relative">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-mono text-3xl sm:text-4xl font-bold text-white mb-6">
            <span className="text-gray-400">&gt;</span> Key Features &
            <br />
            <span className="gradient-text">Benefits</span>
          </h2>
          <p className="font-mono text-gray-400 text-sm">
            <span className="text-gray-600">// </span>Revolutionizing open source development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <Shield className="w-6 h-6" />,
              title: "Efficiency Through Paywalls",
              description: "Gamified paywall system filters out noise while making participation meaningful and rewarding.",
              platform: "github",
              status: "active"
            },
            {
              icon: <Clock className="w-6 h-6" />,
              title: "Time-Saved Management",
              description: "Reduce project management to just 10 minutes of daily guided task completion.",
              platform: "bitbucket",
              status: "pending"
            },
            {
              icon: <Users className="w-6 h-6" />,
              title: "Collaborative Rating",
              description: "Rating system that reflects how you work with others and on which types of projects.",
              platform: "gitlab",
              status: "review"
            },
            {
              icon: <Target className="w-6 h-6" />,
              title: "Quest System",
              description: "Turn all activities into quest tasks that contribute to your collaborative rating.",
              platform: "stackoverflow",
              status: "merged"
            }
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className={`github-card platform-${feature.platform} h-full`}>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <div className="text-green-400">
                      {feature.icon}
                    </div>
                    <div className={`w-2 h-2 rounded-full ${feature.status === 'active' ? 'bg-green-400' :
                        feature.status === 'pending' ? 'bg-yellow-400' :
                          feature.status === 'review' ? 'bg-blue-400' :
                            'bg-purple-400'
                      }`}></div>
                  </div>
                  <span className="font-mono text-xs text-gray-500">
                    #{index + 1}
                  </span>
                </div>
                <h3 className="font-mono text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 text-sm font-mono leading-relaxed mb-4">
                  <span className="text-gray-600">// </span>{feature.description}
                </p>
                <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                  <span>Status: {feature.status}</span>
                  <div className="flex items-center space-x-1">
                    <GitBranch className="w-3 h-3" />
                    <span>main</span>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-8"
        >
          <div className="lg:col-span-2">
            <div className="terminal-window">
              <div className="terminal-header">
                <div className="terminal-dot bg-red-500"></div>
                <div className="terminal-dot bg-yellow-500"></div>
                <div className="terminal-dot bg-green-500"></div>
                <span className="font-mono text-xs text-gray-400 ml-4">preview.cascadefund.dev</span>
              </div>
              <div className="p-6 bg-gray-900">
                <h3 className="font-mono text-xl font-bold text-white mb-4 flex items-center">
                  <Terminal className="w-5 h-5 mr-2 text-green-400" />
                  Screenshot Previews
                </h3>
                <p className="text-gray-400 mb-6 font-mono text-sm">
                  <span className="text-gray-600">// </span>Get a glimpse of the CascadeFund interface
                </p>
                <div className="space-y-3">
                  {[
                    { name: "Quest Panel", desc: "Streamlined task management interface", icon: <Code className="w-4 h-4" /> },
                    { name: "Chat Reply Flow", desc: "Efficient communication system", icon: <Users className="w-4 h-4" /> },
                    { name: "Code Review Flow", desc: "Simplified review process", icon: <GitBranch className="w-4 h-4" /> }
                  ].map((item, idx) => (
                    <div key={item.name} className="bg-gray-800/50 p-3 rounded border border-gray-700 hover:border-green-500/50 transition-colors">
                      <div className="flex items-center space-x-3">
                        <div className="text-green-400">{item.icon}</div>
                        <div>
                          <h4 className="font-mono font-semibold text-white text-sm">{item.name}</h4>
                          <p className="text-xs text-gray-400 font-mono">
                            <span className="text-gray-600">// </span>{item.desc}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="github-card">
            <div className="flex items-center space-x-2 mb-4">
              <Github className="w-5 h-5 text-green-400" />
              <span className="font-mono text-sm text-white">Coming Soon</span>
            </div>
            <p className="text-gray-400 mb-6 font-mono text-sm">
              <span className="text-gray-600">// </span>Interactive demos and detailed feature previews will be available as we approach our launch date.
            </p>
            <a
              href="https://www.cascadefund.org/login"
              className="inline-flex items-center text-green-400 font-mono text-sm hover:text-green-300 transition-colors group"
            >
              <span>git remote add origin</span>
              <GitBranch className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Features
