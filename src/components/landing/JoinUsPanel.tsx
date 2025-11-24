import { motion } from 'framer-motion'
import { socialLinks } from '@/scripts/data'
import SocialLink from './SocialLink'

interface JoinUsPanelProps {
  title?: string
}

const JoinUsPanel = ({ title = 'Do you like our goal?' }: JoinUsPanelProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className=" bg-gradient-to-r dark:from-primary-600/20 dark:to-accent-600/20 from-primary-600 to-accent-600 border border-gray-500 dark:border-primary-400/10 rounded-2xl p-4 mt-8 "
    >
      <h3 className="font-display text-2xl font-bold mb-4 text-gray-600/90 dark:text-slate-400/90 text-center">
        💬 {title}
      </h3>
      <p className="text-gray-600/90 dark:text-gray-400/90 mt-8 mx-auto leading-relaxed flex items-center justify-center gap-2">
        Join our community on <SocialLink link={socialLinks.telegram} />, where we discuss ideas and project plans.
      </p>
      <p className="text-gray-600/90 dark:text-gray-400/90 mb-4 mx-auto leading-relaxed flex items-center justify-center gap-2">
        or subscribe us on <SocialLink link={socialLinks.twitter} /> | <SocialLink link={socialLinks.bluesky} /> to keep updated with only short headlines.
      </p>
    </motion.div>
  )
}

export default JoinUsPanel
