import React from 'react'
import { motion } from 'framer-motion'
import { MessageSquare, Trophy, Zap, DollarSign } from 'lucide-react'

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Collaboration Platform",
      description: "CascadeFund is where your project's community comes together. Instead of scattered issues, docs, articles across GitHub, Discord, RSS, etc., all collaboration with developers, contributors, and users happens here.",
      color: "from-blue-500 to-cyan-500"
    },
    {
      number: "02",
      icon: <Trophy className="w-8 h-8" />,
      title: "Quest and Rating System",
      description: "All activities, such as message replies, roadmap planning, issue readings are turned into quest tasks. Each task contributes to the collaborative rating that reflects how you work with others.",
      color: "from-purple-500 to-pink-500"
    },
    {
      number: "03",
      icon: <Zap className="w-8 h-8" />,
      title: "Automation & Two-Click Tasks",
      description: "Managing your project shouldn't be a chore. CascadeFund turns messages, code reviews, and closing issues into two-click daily tasks, reducing project management to just 10 minutes daily.",
      color: "from-green-500 to-emerald-500"
    },
    {
      number: "04",
      icon: <DollarSign className="w-8 h-8" />,
      title: "Easy Monetization",
      description: "To keep your time focused, CascadeFund adds a gamified paywall to user requests. It filters out noise while making participation meaningful and financially rewarding.",
      color: "from-orange-500 to-red-500"
    }
  ]

  return (
    <section id="how-it-works" className="py-24 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-neutral-800 dark:to-neutral-900">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-neutral-900 dark:text-white mb-6">
            How Does
            <br />
            <span className="gradient-text">CascadeFund Work?</span>
          </h2>
          <p className="text-xl text-neutral-600 dark:text-neutral-300 max-w-3xl mx-auto">
            A comprehensive platform that transforms open-source development through collaboration, gamification, and sustainable monetization.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="h-60 bg-white dark:bg-neutral-800 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-neutral-200/50 dark:border-neutral-700/50">
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${step.color} text-white flex-shrink-0`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="font-mono text-sm font-semibold text-neutral-400 dark:text-neutral-500">
                        {step.number}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-neutral-600 dark:text-neutral-300 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-primary-600 to-accent-600 rounded-3xl p-12 text-white">
            <h3 className="font-display text-3xl font-bold mb-6">
              Interconnected for Maintainers
            </h3>
            <p className="text-xl leading-relaxed max-w-4xl mx-auto text-white/90">
              CascadeFund keeps your project moving even when your time is limited. If there's a task you'd rather not handle, you can let a contributor take it and earn the rating, while you simply guide and consult. It's a connected system that rewards collaboration, frees your time, and keeps every maintainer in control of their direction.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default HowItWorks
