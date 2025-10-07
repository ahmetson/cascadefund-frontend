import React from 'react'
import Link from './Link'

const Footer: React.FC = () => {
  return (
    <footer className="bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Need help?{' '}
            <Link href="mailto:support@cascadefund.com" className="text-cascade-blue hover:underline">
              Mail
            </Link>
            {' '}us or send message on{' '}
            <Link href="#" className="text-cascade-blue hover:underline">
              Telegram group
            </Link>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
