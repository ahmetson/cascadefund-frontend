import React from 'react'
import { motion } from 'framer-motion'
import { Check, ExternalLink } from 'lucide-react'

const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-to-br from-neutral-900 to-neutral-800 text-white">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            No Pricing?
          </h2>
          <p className="text-xl text-white/80 max-w-4xl mx-auto leading-relaxed">
            CascadeFund doesn't charge you anything. All earnings go directly to you and, through the Hyperpayment Protocol, 20% is automatically shared with the open-source libraries your project depends on.
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
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-6">
                What You Get
              </h3>
              <div className="space-y-4">
                {[
                  "80% of your earnings go directly to you",
                  "20% of your earnings is automatically shared with the open-source libraries your project depends on",
                  "Voting power that affects collaborative ratings",
                  "Gamified ecosystem strengthening",
                  "Open and fair platform built for creators"
                ].map((feature, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                    <span className="text-white/90">{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-r from-primary-600/20 to-accent-600/20 border border-primary-400/30 rounded-2xl p-8">
              <h3 className="font-display text-2xl font-bold mb-4">
                Hyperpayment Protocol
              </h3>
              <p className="text-white/80 mb-4">
                Learn more about our innovative approach to sustainable open-source funding through automated dependency sharing.
              </p>
              <a
                href="https://www.hyperpayment.org/specification/opensource-hyperpayment-specification"
                className="inline-flex items-center space-x-2 text-primary-300 hover:text-primary-200 transition-colors"
              >
                <span>Read Specification</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-600 to-accent-600 p-12 rounded-3xl">
              <div className="text-center mb-8">
                <div className="text-6xl font-bold mb-2">$0</div>
                <div className="text-xl text-white/80">Platform Fee</div>
              </div>

              <div className="space-y-6">
                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">80%</div>
                  <div className="text-white/80">Earnings to You</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">20%</div>
                  <div className="text-white/80">Auto-shared with Dependencies</div>
                </div>

                <div className="text-center">
                  <div className="text-3xl font-bold mb-2">∞</div>
                  <div className="text-white/80">Voting Power Potential</div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20 text-center">
                <p className="text-white/80 text-sm">
                  It's open, fair, and built to keep creators optimize their dependencies for their projects.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
