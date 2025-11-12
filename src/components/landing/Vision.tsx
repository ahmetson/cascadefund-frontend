import React from 'react'
import { motion } from 'framer-motion'
import { Star, TrendingUp, Heart } from 'lucide-react'

const Vision = () => {
  return (
    <section id="vision" className="py-24 bg-white dark:bg-neutral-900">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
            From Celebrity Culture to
            <br />
            <span className="gradient-text">Creator Culture</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-4xl mx-auto leading-relaxed">
            Open-source developers build the tools and ideas millions rely on — yet most remain unseen, underpaid, and disconnected from the public.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-primary-100 rounded-xl">
                  <Star className="w-6 h-6 text-primary-600 dark:text-slate-200" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-neutral-900 dark:text-slate-200">
                  Recognition & Visibility
                </h3>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                As CascadeFund grows, developers will become as recognizable as today's internet influencers. Your contributions will be seen, valued, and celebrated.
              </p>
            </div>

            <div className="bg-gradient-to-br from-accent-50 to-primary-50 dark:from-accent-900/20 dark:to-primary-900/20 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-accent-100 dark:bg-accent-800 rounded-xl">
                  <TrendingUp className="w-6 h-6 text-accent-600 dark:text-slate-200" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-neutral-900 dark:text-slate-200">
                  Financial Sustainability
                </h3>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                Transform your passion into a sustainable career. Get fairly compensated for the value you create in the open-source ecosystem.
              </p>
            </div>

            <div className="bg-gradient-to-br from-primary-50 to-accent-50 dark:from-primary-900/20 dark:to-accent-900/20 p-8 rounded-2xl">
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 bg-primary-100 dark:bg-primary-800 rounded-xl">
                  <Heart className="w-6 h-6 text-primary-600 dark:text--400" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-neutral-900 dark:text-white">
                  Positive Social Impact
                </h3>
              </div>
              <p className="text-neutral-700 dark:text-neutral-300 leading-relaxed">
                In a decade, when the world celebrates the creators behind what it uses every day, it will be thanks to the users of CascadeFund.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-600 to-accent-600 p-12 rounded-3xl text-gray-900 dark:text-gray-100">
              <h3 className="font-display text-3xl font-bold mb-6">
                The Platform Revolution
              </h3>
              <p className="text-xl leading-relaxed mb-8 text-gray-600/90 dark:text-gray-400/90">
                It's more than just a platform — it's a movement to transform how the world sees and supports open-source creators.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                  <span className="text-gray-600/90 dark:text-gray-400/90">Unified collaboration workspace</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                  <span className="text-gray-600/90 dark:text-gray-400/90">Gamified contribution system</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                  <span className="text-gray-600/90 dark:text-gray-400/90">Sustainable monetization model</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-gray-600 dark:bg-gray-400 rounded-full"></div>
                  <span className="text-gray-600/90 dark:text-gray-400/90">Community-driven growth</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Vision
