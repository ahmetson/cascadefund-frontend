import { motion } from 'framer-motion'
import { MessageSquare, Trophy, Zap, DollarSign } from 'lucide-react'
import { GravityStarsBackground } from '../animate-ui/components/backgrounds/gravity-stars'
import { Accent, data } from '@/scripts/data'

const HowItWorks = ({ accent }: { accent: Accent }) => {
  const steps = [
    {
      number: "01",
      icon: <MessageSquare className="w-8 h-8" />,
      title: "Collaboration Platform",
      description: "CascadeFund is a new layer on top of an existing GitHub repository. It doesn't replace GitHub; instead, it adds a structured interface that helps users, contributors, and maintainers interact around issues and patches in a predictable way. With aim to run sustainable open-source projects.",
      color: "from-blue-500 to-cyan-500 dark:from-blue-500/50 dark:to-cyan-500/50"
    },
    {
      number: "02",
      icon: <Trophy className="w-8 h-8" />,
      title: "Standardized Work Cycle",
      description:
        "All projects on CascadeFund follow the same formal collaboration cycle: users open issues, contributors submit patches, maintainers review, merge, or release. Then, every participant receives achievement coins.",
      color: "from-purple-500 to-pink-500 dark:from-purple-500/50 dark:to-pink-500/50"
    },
    {
      number: "03",
      icon: <Zap className="w-8 h-8" />,
      title: "Self-checking todo list",
      description: "Additionally, due to standardized work cycle for projects, we added a self-checking todo list. On the web app, self-checking todo tasks are shown inside a mini-player. 'Play'ing it will auto-navigate, and optionally may suggest solutions from AI agents.",
      //  \"Play\", takes user to the required page, focuses the relevant input, and automatically checks off, once user completes it or selects an AI suggestion. Then, repeats the process for the next task, until all won't become checked off.",
      color: "from-green-500 to-emerald-500 dark:from-green-500/50 dark:to-emerald-500/50"
    },
    {
      "number": "04",
      "icon": <DollarSign className="w-8 h-8" />,
      "title": "Proof of Traction",
      "description": "What are the achievement coins? Achievement coins are project's proof of traction, and user's proof of contribution. We implemented them on blockchain as non-tradeable tokens attached to git commits, and cascadefund issues.",
      // That consists of proof of contributions. In blockchain, they are represented as non-tradeable tokens. Since, each token issue linked to git commits, and issues, it acts as proof of contribution/achievments. For a community to build trust, it must show the progress that cannot be altered by any single party. CascadeFund uses 'coins' stored on blockchain. Because only you or users of your project can create these coins. Each coin must be linked to the specific issue or patch. When its completed, the coin is distributed among all participants including to the minter.",
      "color": "from-orange-500 to-red-500 dark:from-orange-500/50 dark:to-red-500/50"
    },
    {
      "number": "05",
      "icon": <Zap className="w-8 h-8" />,
      "title": "Good Paywall",
      "description": "What makes achievment coins great? Users. Only users can assign achievement coins for the issues. But to get the assigning rights, user needs to pass a paywall: donate to the maintainer, and his libraries, and receive equaivalent issue-assigning right. Donation, doesn't guarantee maintainer to reply, instead, it opens up for a networking, and collaboration with the maintainer whom he directed. If both parties agreed the topic is closed, then achievement coins are distributed to everyone, including the user himself, acting as the proof of contribution.",
      "color": "from-purple-500 to-pink-500 dark:from-purple-500/50 dark:to-pink-500/50"
    }

  ]

  return (
    <section id="how-it-works" className="relative py-24 bg-gradient-to-br from-neutral-50 to-neutral-100 dark:from-gray-800 dark:to-slate-900">
      <GravityStarsBackground
        starsCount={100}
        starsSize={2}
        starsOpacity={0.75}
        glowIntensity={15}
        glowAnimation="ease"
        movementSpeed={0.3}
        mouseInfluence={100}
        mouseGravity="attract"
        gravityStrength={75}
        starsInteraction={true}
        starsInteractionType="bounce"
        className="absolute text-blue-600 dark:text-blue-400 left-0 top-0 w-full h-full" />
      <div className="section-padding max-w-7xl mx-auto relative ">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h3 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-900 dark:text-neutral-400 mb-6">
            What is <span className="gradient-text">CascadeFund</span>?
          </h3>
          <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-3xl mx-auto">
            Visual representations coming soon.
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
              <div className="h-60 bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-neutral-200/50 dark:border-neutral-700/50 min-h-55 h-auto">
                <div className="flex items-start space-x-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${step.color} text-slate-600 dark:text-slate-400 flex-shrink-0`}>
                    {step.icon}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center space-x-4 mb-4">
                      <span className="font-mono text-sm font-semibold text-slate-600 dark:text-slate-400">
                        {step.number}
                      </span>
                      <h3 className="font-display text-2xl font-bold text-slate-600 dark:text-slate-400">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="bg-gradient-to-br from-neutral-900  to-accent-600 rounded-3xl pl-10 pb-10 pt-6 text-gray-600 dark:text-gray-400">
              <h3 className="font-display text-2xl font-bold mb-6 mt-6">
                How to {data[accent].title.toLowerCase()}?
              </h3>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto text-gray-600/90 dark:text-gray-400/90">
                {data[accent].howTo}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks
