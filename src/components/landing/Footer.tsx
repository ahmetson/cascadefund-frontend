import { motion } from 'framer-motion'
import Link from '../custom-ui/Link'

const Footer = () => {
  return (
    <footer className="bg-neutral-900 text-white pb-5 pt-0">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        viewport={{ once: true }}
        className=" pt-4 "
      >
        <p className="text-white/60 md:ml-20 ml-6">
          © 2025, <Link uri="https://ara.foundation">Ara Foundation</Link>
        </p>
      </motion.div>
    </footer>
  )
}

export default Footer
