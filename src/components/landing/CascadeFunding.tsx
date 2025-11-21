import { motion } from 'framer-motion'
import { Check, ExternalLink } from 'lucide-react'

const Pricing = () => {
  return (
    <section className="py-24 bg-gradient-to-b dark:from-neutral-900 dark:to-neutral-900/80 text-gray-600 dark:text-gray-100">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="font-display text-4xl sm:text-5xl gradient-text font-bold mb-6">
            Cascade Funding
          </h3>
          <p className="text-xl text-gray-600/90 dark:text-gray-400/90 max-w-4xl mx-auto leading-relaxed ">
            CascadeFund is free and open-source.<br />
            <span className="text-gray-600/90 dark:text-gray-400/50 text-lg -mt-0.5 mb-2 flex justify-center">Except, some transaction fees charged by the payment processors.</span>
            User funds go directly to you, and to your dependencies.<br />
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-black/10 dark:bg-white/10 backdrop-blur-md border border-gray-200 dark:border-white/20 rounded-2xl p-8"
          >
            <h3 className="font-display text-2xl font-bold mb-6 text-gray-700/90 dark:text-slate-300/90">
              Asset Flow
            </h3>
            <div className="space-y-4">
              {[
                "+ Achievement coins for your project minted by a user",
                "+ 80% of user donations +",
                "~ 20% of user fund to be shared with open-source libraries your project depends on ~",
                "+ Achivement coins for your dependencies mintable by your portraits on them +",
              ].map((feature, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <Check className="w-5 h-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-600/90 dark:text-gray-400/90">{feature}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className=" bg-gradient-to-r dark:from-primary-600/20 dark:to-accent-600/20 from-primary-600 to-accent-600 border border-gray-500 dark:border-primary-400/30 rounded-2xl p-8 "
          >
            <h3 className="font-display text-2xl font-bold mb-4 text-gray-600/90 dark:text-slate-400/90">
              Hyperpayment Protocol
            </h3>
            <p className="text-gray-600/90 dark:text-gray-400/90 mb-4">
              The cascadefunding mechanism is implemented with the Hyperpayment Protocol and blockchain technology.
            </p>
            <a
              target='_blank'
              href="https://www.hyperpayment.org/"
              className="inline-flex items-center space-x-2 text-blue-500 hover:text-teal-300 transition-colors"
            >
              <span>Hyperpayment Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
            <motion.a
              target='_blank'
              href="https://www.hyperpayment.org/"
              className="ml-4 inline-flex items-center space-x-2 text-blue-500 hover:text-teal-300 transition-colors"
            >
              <span>Smartcontract implementation</span>
              <ExternalLink className="w-4 h-4" />
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
