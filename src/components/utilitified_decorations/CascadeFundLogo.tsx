import React from 'react'
import Link from '@/components/Link'

interface Props {
  subtitle?: any
}

const Logo: React.FC<Props> = ({subtitle}) => {
  return (
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </div>
          <div>
            <Link href="/"><h1 className="text-xl font-bold text-blue-600 no-underline">CascadeFund</h1></Link>
            {subtitle && 
            (<p className="text-xs text-gray-500">{subtitle}</p>)}
          </div>
        </div>
  )
}

export default Logo
