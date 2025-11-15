import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Github, Youtube } from 'lucide-react'
import Button from '../custom-ui/Button'
import SuccessModal from './SuccessModal'
import { handleJoinWishlist } from '@/scripts/landing'
import { getIcon } from '../icon'

const JoinUs = () => {
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleJoinWishlist('join-us', 'join-us-turnstile-container', email, setIsLoading, setError, setShowSuccessModal, setEmail)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br dark:from-primary-900/20 dark:to-accent-900/20 from-primary-50 to-accent-50">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-neutral-900 dark:text-white mb-6">
            Join Us
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto leading-relaxed">
            CascadeFund is currently in active development. We plan to launch by the end of this year. Follow our progress and be part of the revolution.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-lg">
              <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-6">
                Stay Connected
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Github className="w-6 h-6" />,
                    label: "GitHub",
                    href: "https://github.com/ara-foundation/cascadefund-frontend",
                    description: "Follow development progress"
                  },
                  {
                    icon: <MessageCircle className="w-6 h-6" />,
                    label: "Telegram",
                    href: "https://t.me/arasangha",
                    description: "Chat with the community"
                  },
                  {
                    icon: <Youtube className="w-6 h-6" />,
                    label: "YouTube",
                    href: "https://www.youtube.com/@medet-ahmetson",
                    description: "Watch updates and demos"
                  },
                  {
                    icon: <Mail className="w-6 h-6" />,
                    label: "ex-twitter.com",
                    href: "https://x.com/ara_foundation_",
                    description: "For updates"
                  },
                  {
                    icon: getIcon('bluesky'),
                    label: 'BlueSky',
                    href: 'https://bsky.app/profile/cascadefund.bsky.social',
                    description: 'For updates'
                  }
                ].map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4 p-4 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl hover:from-primary-100 hover:to-accent-100 dark:hover:from-primary-800/50 dark:hover:to-accent-800/50 transition-all duration-300 group"
                  >
                    <div className="p-2 bg-white dark:bg-neutral-700 rounded-lg group-hover:scale-110 transition-transform">
                      {social.icon}
                    </div>
                    <div>
                      <div className="font-semibold text-neutral-900 dark:text-white">{social.label}</div>
                      <div className="text-sm text-neutral-600 dark:text-neutral-300">{social.description}</div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br dark:from-primary-600 dark:to-accent-600 from-primary-600 to-accent-600 p-12 rounded-3xl text-gray-600 dark:text-gray-100">
              <h3 className="font-display text-3xl font-bold mb-6">
                Early Adopter Benefits
              </h3>
              <p className="text-xl leading-relaxed mb-8 text-gray-600/90 dark:text-gray-400/90">
                Subscribe with your email to help us gather feedback. Our early adopters will receive +20 voting power points on CascadeFund when we launch.
              </p>

              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">+20</span>
                  </div>
                  <span className="text-gray-600/90 dark:text-gray-400/90">Bonus voting power points</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">🚀</span>
                  </div>
                  <span className="text-gray-600/90 dark:text-gray-400/90">Priority access to beta features</span>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <span className="text-sm font-bold">📧</span>
                  </div>
                  <span className="text-gray-600/90 dark:text-gray-400/90">Exclusive development updates</span>
                </div>
              </div>

              <div className="mt-8 space-y-4">
                <div>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value)
                      setError(null)
                    }}
                    onKeyPress={handleKeyPress}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-gray-400 dark:border-white/30 rounded-xs text-gray-600 dark:text-white placeholder-gray-600/90 dark:placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all"
                    disabled={isLoading}
                  />
                  {error && (
                    <p className="mt-2 text-sm text-red-200 text-center">{error}</p>
                  )}
                </div>
                <div id="join-us-turnstile-container"></div>
                <Button
                  variant='secondary'
                  className="w-full h-12 font-semibold px-8 py-4 transition-colors"
                  onClick={() => handleJoinWishlist('join-us', 'join-us-turnstile-container', email, setIsLoading, setError, setShowSuccessModal, setEmail)}
                  disabled={isLoading}
                >
                  {isLoading ? 'Joining...' : 'Join to wish list'}
                </Button>
                <p className="text-gray-600/90 dark:text-gray-400/90 text-sm text-center">
                  Get notified when we launch + receive your bonus points
                </p>
              </div>
            </div>
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

export default JoinUs
