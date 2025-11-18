import { motion } from 'framer-motion'

import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'; // Import the LinkedIn icon from Font Awesome
import PreviewContainer from './PreviewContainer';



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
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-gray-900 dark:text-slate-400 mb-6">
            <span className="gradient-text"> CascadeFund</span> Maintainers
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="w-24 h-24 bg-gradient-to-br from-green-400 to-blue-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img src="https://api.backdropbuild.com/storage/v1/object/public/avatars/9nFM8HasgS.jpeg" alt="Medet" className="w-full h-full rounded-full" />
              </div>
              <h3 className="font-mono text-xl font-bold text-white text-center mb-1">
                Medet
              </h3>
              <p className="text-green-400 font-mono text-sm text-center">Co-Founder & Developer</p>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="space-y-4 text-gray-600 dark:text-gray-400 font-mono text-sm mt-6">
              <div className="dark:bg-gray-800/50 bg-gray-600/10 p-3 rounded border border-gray-700 dark:border-gray-700">
                <p className="leading-relaxed">
                  Medet taught himself programming and, as his first major project in 2015, created a full programming language from scratch in C.
                </p>
              </div>
              <div className="dark:bg-gray-800/50 bg-gray-600/10 p-3 rounded border border-gray-700 dark:border-gray-700">
                <p className="leading-relaxed text-gray-600 dark:text-gray-400  ">
                  He later became CTO and Chief of Blocklords, leading its technical development and bringing innovative solutions to the gaming industry.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <a
                target='_blank'
                href="https://github.com/ahmetson"
                className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors font-mono text-sm group"
              >
                <FaGithub color="gray" className="w-6 h-6 text-green-500 dark:text-green-400! hover:text-green-800! dark:hover:text-green-200!" />
              </a>
              <a
                target='_blank'
                href="https://www.linkedin.com/in/ahmetson/"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors group"
              >
                <FaLinkedin color="gray" className="w-6 h-6 text-blue-500 dark:text-blue-400! hover:text-teal-800! dark:hover:text-teal-200!" />
              </a>
              <a
                target='_blank'
                href="https://t.me/blocklord"
                className="inline-flex items-center space-x-2 text-slate-400 hover:text-slate-300 transition-colors font-mono text-sm group"
              >
                <FaTelegram color="gray" className="w-6 h-6 text-slate-500 dark:text-slate-400! hover:text-slate-800! dark:hover:text-slate-200!" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div>
              <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                <img src="/sergey.jpg" alt="Sergey" className="w-full h-full rounded-full" />
              </div>
              <h3 className="font-mono text-xl font-bold text-white text-center mb-1">
                Sergey
              </h3>
              <p className="text-blue-400 font-mono text-sm text-center">Co-Founder & Developer</p>
              <div className="flex items-center justify-center space-x-2 mt-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
              </div>
            </div>

            <div className="space-y-4 text-gray-400 font-mono text-sm mt-6">
              <div className="dark:bg-gray-800/50 bg-gray-600/10 p-3 rounded border border-gray-700 dark:border-gray-700">
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  <span className="text-gray-600/90 dark:text-gray-400/90">// </span>Sergey has been coding since the early internet. A veteran of the first dot-com era, he built CRMs and frameworks still in use today.
                </p>
              </div>
              <div className="dark:bg-gray-800/50 bg-gray-600/10 p-3 rounded border border-gray-700 dark:border-gray-700">
                <p className="leading-relaxed text-gray-600 dark:text-gray-400">
                  <span className="text-gray-600/90 dark:text-gray-400/90">// </span>He now serves as CTO at one of the largest data analytics companies, working with leading banks worldwide and bringing enterprise-level expertise to CascadeFund.
                </p>
              </div>
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              <a
                target='_blank'
                href="https://github.com/pak-git"
                className="inline-flex items-center space-x-2 text-green-400 hover:text-green-300 transition-colors font-mono text-sm group"
              >
                <FaGithub color="gray" className="w-6 h-6 text-green-500 dark:text-green-400! hover:text-green-800! dark:hover:text-green-200!" />
              </a>
              <a
                target='_blank'
                href="https://www.linkedin.com/in/sergei-pak/"
                className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors font-mono text-sm group"
              >
                <FaLinkedin color="gray" className="w-6 h-6 text-blue-500 dark:text-blue-400! hover:text-teal-800! dark:hover:text-teal-200!" />
              </a>
              <a
                target='_blank'
                href="https://t.me/paktelegram"
                className="inline-flex items-center space-x-2 text-slate-400 hover:text-slate-300 transition-colors font-mono text-sm group"
              >
                <FaTelegram color="gray" className="w-6 h-6 text-slate-500 dark:text-slate-400! hover:text-slate-800! dark:hover:text-slate-200!" />
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
          <PreviewContainer previewUrl="git log --oneline --graph">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-sm">
              <div className="text-center">
                <div className="text-2xl font-bold text-green-400 mb-2">30+ years</div>
                <div className="text-gray-400">Experience</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-400 mb-2">100k+</div>
                <div className="text-gray-400">Lines of Code Written</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-yellow-400 mb-2">5+</div>
                <div className="text-gray-400">Projects Launched</div>
              </div>
            </div>
          </PreviewContainer>
        </motion.div>
        <p className="text-gray-400 text-center mt-16">
          ~ End ~
        </p>
      </div>
    </section>
  )
}

export default Team
