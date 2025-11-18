import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MessageCircle, Mail, Github, Youtube } from 'lucide-react'
import Button from '../custom-ui/Button'
import SuccessModal from './SuccessModal'
import { handleJoinWishlist } from '@/scripts/landing'
import { getIcon } from '../icon'
import SocialLink from './SocialLink'
import { socialLinks } from '@/scripts/data'
import Badge from '../badge/Badge'

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
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-gradient-to-br dark:from-primary-600 dark:to-accent-600 from-primary-600 to-accent-600 p-12 rounded-3xl text-gray-600 dark:text-gray-100">
            <h3 className="font-display text-3xl text-gray-600 dark:text-gray-400 font-bold mb-6">
              Join our beta join list
            </h3>
            <p className="text-xl leading-relaxed mb-8 text-gray-600/90 dark:text-gray-400/90">
              Subscribe with your email to help us gather feedback. Our early adopters will receive +20 voting power points on CascadeFund when we launch.
            </p>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <Badge variant="green" className="text-sm font-bold">+200</Badge>
                <span className="text-gray-600/90 dark:text-gray-400/90">Bonus voting power points</span>
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

      <SuccessModal
        isOpen={showSuccessModal}
        onClose={() => setShowSuccessModal(false)}
      />
    </section>
  )
}

export default JoinUs
