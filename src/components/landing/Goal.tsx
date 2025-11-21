import { motion } from 'framer-motion'
import { TrendingUp, Heart } from 'lucide-react'
import { socialLinks } from '@/scripts/data'
import SocialLink from './SocialLink'
import Link from '../custom-ui/Link'
import JoinUsPanel from './JoinUsPanel'

const Vision = () => {
  return (
    <section id="vision" className="py-24 bg-white dark:bg-neutral-900">
      <div className="section-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-neutral-400 mb-6 flex items-center justify-center gap-4">
            <TrendingUp className="w-10 h-10 text-accent-600 dark:text-neutral-400" />
            {/* Goal */}
            <span className="gradient-text">Goal</span>
            <Heart className="w-10 h-10 text-primary-600 dark:text-rose-400" />
          </h2>
          {/* <p className="text-2xl text-neutral-600 dark:text-neutral-400 max-w-4xl mx-auto leading-relaxed">
            🌐 The web's popularity and accessibility to everybody, is largely because it was free and open-source.
            The web itself was released under public domain. And till today it become popular due to free or open source software.
          </p> */}

          <p className="text-2xl text-neutral-600 dark:text-neutral-400 max-w-4xl mt-8 mx-auto leading-relaxed">
            {/* This sparked 💡 the goal of <strong>CascadeFund</strong>, to make a new corner of the Internet, where open-source developers and users collaborate for public good 🌟. */}
            💡 <strong>The corner of the Internet</strong>, where open-source developers and users collaborate creatively 🌟.
          </p>

          <p className="text-2xl text-neutral-600 dark:text-neutral-400 max-w-4xl mt-8 mx-auto ">
            🚀 What can developers and users collaborate on? 💻✨
            Possibilities are endless. Few possible examples: <Link uri="/meta/goal" className="transition-colors">in our goal page</Link>.
          </p>
          {/* <p className="text-xl text-neutral-600 dark:text-neutral-400 max-w-4xl mt-2 mx-auto">
            Think about a game that a student wants to make.
            He uses CascadeFund, grows his rating, and gets more close with the developers.
            After three months, his rating is high enough, and he unlocks a feature
            to share his game idea, and attract developers who wants to help him.
          </p> */}

          {/*<p className="text-2xl text-neutral-600 dark:text-neutral-400 max-w-4xl mt-4 mx-auto leading-relaxed">
            💻✨ Show what developers do.<br />
            🔄🤝 Standardize the interaction cycle to make collaboration responsible and enjoyable.<br />
            👥💡 Open source should be as one, which means code interoprability, and helping each other.<br />
            🌍🚀 Create lasting connections between users and developers, shaping a collaborative world.
          </p> */}

          <JoinUsPanel title="Do you like our goal?" />

        </motion.div>
      </div>
    </section >
  )
}

export default Vision
