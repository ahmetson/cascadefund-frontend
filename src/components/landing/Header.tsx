import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import { ThemeProvider } from '@/contexts/ThemeContext'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isLogoHovered, setIsLogoHovered] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { label: '~/how-it-works', href: '#how-it-works' },
    { label: '~/features', href: '#features' },
    { label: '~/team', href: '#team' },
    { label: '~/contact', href: '#contact' }
  ]

  return (
    <ThemeProvider>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-gray-900/95 dark:bg-gray-900/95 backdrop-blur-md shadow-lg border-b border-gray-700 dark:border-gray-600'
          : 'bg-transparent'
          }`}
      >
        <nav className="section-padding py-4">
          <div className="flex items-center justify-between">
            <motion.a
              href="/"
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="flex items-center space-x-2"
                onMouseEnter={() => setIsLogoHovered(true)}
                onMouseLeave={() => setIsLogoHovered(false)}
              >
                <div
                  className="w-8 h-8 bg-transparent rounded flex items-center justify-center"
                >
                  <img
                    src="/cascadefund_logo.png"
                    id="logoImg"
                    alt="CascadeFund Logo"
                    className="w-full h-full"
                    style={{ display: isLogoHovered ? 'none' : 'block' }}
                  />
                  <img
                    src="/cascadefund_logo_hover.png"
                    id="hoveredLogoImg"
                    alt="CascadeFund Logo"
                    className="w-full h-full"
                    style={{ display: isLogoHovered ? 'block' : 'none' }}
                  />
                </div>
                <span className="font-mono text-xl font-bold text-teal-400">
                  cascade<span className="text-blue-400">fund</span>
                  <span className="text-teal-400 animate-pulse">_</span>
                </span>
              </div>
            </motion.a>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <motion.a
                  key={item.label}
                  href={item.href}
                  className={`font-mono text-sm text-gray-300 dark:text-gray-300 hover:text-green-400 transition-colors duration-200 relative group ${isScrolled ? 'text-gray-300 dark:text-gray-300' : 'text-gray-600 dark:text-gray-300'}`}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ y: -2 }}
                >
                  {item.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-green-400 group-hover:w-full transition-all duration-300"></span>
                </motion.a>
              ))}

              {/* <motion.a
                href="https://www.cascadefund.org/login/"
                className="btn-primary flex items-center space-x-2"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <GitBranch className="w-4 h-4" />
                <span>git clone</span>
              </motion.a> */}
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2 rounded-lg transition-colors text-teal-400 hover:text-teal-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden mt-4 py-4 border-t border-gray-700 dark:border-gray-600 bg-gray-900/95 dark:bg-gray-900/95"
            >
              <div className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="font-mono text-sm text-gray-300 dark:text-gray-300 hover:text-teal-400 transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.label}
                  </a>
                ))}

                {/* <div className="flex items-center justify-between pt-2">
                  <span className="font-mono text-sm text-gray-400">Theme:</span>
                  <ThemeToggle />
                </div> */}

                {/* <a
                  href="https://www.cascadefund.org/login/"
                  className="btn-primary inline-block text-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <GitBranch className="w-4 h-4 inline mr-2" />
                  git clone
                </a> */}
              </div>
            </motion.div>
          )}
        </nav>
      </motion.header>
    </ThemeProvider>
  )
}

export default Header
