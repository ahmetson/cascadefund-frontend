import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaYoutube, FaGithub, FaTwitter, FaTelegram } from 'react-icons/fa'; // Import the LinkedIn icon from Font Awesome

interface SuccessModalProps {
    isOpen: boolean
    onClose: () => void
}

const SuccessModal: React.FC<SuccessModalProps> = ({ isOpen, onClose }) => {
    const socialLinks = [
        {
            icon: <FaGithub color="white" className="w-6 h-6" />,
            label: 'GitHub',
            href: 'https://github.com/ara-foundation/cascade-fund',
            description: 'Source Code'
        },
        {
            icon: <FaTelegram color="white" className="w-6 h-6" />,
            label: 'Telegram',
            href: 'https://t.me/cascadefund',
            description: 'Community Chat'
        },
        {
            icon: <FaYoutube color="white" className="w-6 h-6" />,
            label: 'YouTube',
            href: 'https://www.youtube.com/@cascadefund',
            description: 'Videos and Tutorials'
        },
        {
            icon: <FaTwitter color="white" className="w-6 h-6" />,
            label: 'X.com',
            href: 'https://x.com/cascadefund',
            description: 'For updates'
        }
    ]

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
                    />

                    {/* Modal */}
                    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            className="bg-white dark:bg-neutral-800 rounded-2xl p-8 shadow-2xl max-w-md w-full pointer-events-auto relative"
                        >
                            {/* Close Button */}
                            <button
                                onClick={onClose}
                                className="absolute top-4 right-4 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors"
                                aria-label="Close modal"
                            >
                                <X className="w-5 h-5 text-gray-600 dark:text-gray-300" />
                            </button>

                            {/* Content */}
                            <div className="space-y-6">
                                <div className="text-center">
                                    <motion.div
                                        initial={{ scale: 0 }}
                                        animate={{ scale: 1 }}
                                        transition={{ delay: 0.2, type: 'spring' }}
                                        className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mx-auto mb-4"
                                    >
                                        <svg
                                            className="w-8 h-8 text-green-600 dark:text-green-400"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M5 13l4 4L19 7"
                                            />
                                        </svg>
                                    </motion.div>
                                    <h3 className="font-display text-2xl font-bold text-neutral-900 dark:text-white mb-2">
                                        Welcome to CascadeFund!
                                    </h3>
                                    <p className="text-neutral-600 dark:text-neutral-300">
                                        You've successfully joined our waitlist. Stay connected with us:
                                    </p>
                                </div>

                                {/* Stay Connected Panel */}
                                <div>
                                    <h4 className="font-display text-lg font-semibold text-neutral-900 dark:text-white mb-4">
                                        Stay Connected
                                    </h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                        {socialLinks.map((social, index) => (
                                            <motion.a
                                                key={social.label}
                                                href={social.href}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.3 + index * 0.1 }}
                                                className="flex items-center space-x-3 p-3 bg-gradient-to-r from-primary-50 to-accent-50 dark:from-primary-900/30 dark:to-accent-900/30 rounded-xl hover:from-primary-100 hover:to-accent-100 dark:hover:from-primary-800/50 dark:hover:to-accent-800/50 transition-all duration-300 group"
                                            >
                                                <div className="p-2 bg-white dark:bg-neutral-700 rounded-lg group-hover:scale-110 transition-transform">
                                                    {social.icon}
                                                </div>
                                                <div className="flex-1 min-w-0">
                                                    <div className="font-semibold text-sm text-neutral-900 dark:text-white truncate">
                                                        {social.label}
                                                    </div>
                                                    <div className="text-xs text-neutral-600 dark:text-neutral-300 truncate">
                                                        {social.description}
                                                    </div>
                                                </div>
                                            </motion.a>
                                        ))}
                                    </div>
                                </div>

                                {/* Benefits Reminder */}
                                <div className="bg-primary-50 dark:bg-primary-900/20 rounded-lg p-4">
                                    <p className="text-sm text-neutral-700 dark:text-neutral-300 text-center">
                                        <span className="font-semibold">+20 voting power points</span> will be added to your account when we launch!
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </>
            )}
        </AnimatePresence>
    )
}

export default SuccessModal

