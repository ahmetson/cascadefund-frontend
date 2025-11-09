import React from 'react'
import { motion } from 'framer-motion'
import { Github, MessageCircle, Youtube } from 'lucide-react'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white py-16">
      <div className="section-padding max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <img
                src="https://www.cascadefund.org/cascadefund_logo.png"
                alt="CascadeFund"
                className="h-10 w-auto"
              />
              <span className="font-display text-2xl font-semibold">
                CascadeFund
              </span>
            </div>
            <p className="text-white/70 leading-relaxed max-w-md">
              The first platform for maintainers to grow PRs and support. Turning open-source development into a recognized, collaborative, and financially sustainable pursuit.
            </p>
            <div className="flex space-x-4 mt-6">
              <a
                href="https://github.com/ara-foundation/cascadefund-frontend"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://t.me/arasangha"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/@medet-ahmetson"
                className="p-3 bg-white/10 rounded-lg hover:bg-white/20 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-lg font-semibold mb-6">Resources</h3>
            <div className="space-y-3">
              <a href="/meta/work" className="block text-white/70 hover:text-white transition-colors">
                How it Works?
              </a>
              <a href="/meta/quest" className="block text-white/70 hover:text-white transition-colors">
                Quest Task List
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="font-display text-lg font-semibold mb-6">Organization</h3>
            <div className="space-y-3">
              <a href="/meta/team" className="block text-white/70 hover:text-white transition-colors">
                Team
              </a>
              <a href="/meta/policy" className="block text-white/70 hover:text-white transition-colors">
                Privacy Policy (no-boring-lawyer-edition)
              </a>
              <a href="/meta/contact" className="block text-white/70 hover:text-white transition-colors">
                Contact/Follow
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/20 mt-12 pt-8 text-center"
        >
          <p className="text-white/60">
            © 2025 Ara Foundation
          </p>
        </motion.div>
      </div>
    </footer>
  )
}

export default Footer
