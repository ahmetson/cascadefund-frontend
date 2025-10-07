import React from 'react'
import Link from './Link'

const Footer: React.FC = () => {
  return (
    <footer className="mt-24 text-center text-sm text-gray-500">
      <p>
        Need help?{' '}
        <Link href="mailto:support@cascadefund.com" className="text-blue-600 hover:text-blue-800 underline">
          Mail
        </Link>{' '}
        us or send message on{' '}
        <Link href="#" className="text-blue-600 hover:text-blue-800 underline">
          Telegram group
        </Link>
      </p>
    </footer>
  )
}

export default Footer
