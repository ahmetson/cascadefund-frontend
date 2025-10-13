import React from 'react'
import Link from '@/components/Link'

interface Props {
  subtitle?: any
}

const Logo: React.FC<Props> = ({subtitle}) => {
  return (
        <div className="flex items-center space-x-2">
          <div className="w-16 h-16 bg-transparent rounded flex items-center justify-center">
            <img src="/cascadefund_logo.png" alt="CascadeFund Logo" className="w-full h-full"/>
          </div>
          <div className='-ml-5'>
            <Link href="/"><h1 className="text-xl no-underline">CascadeFund</h1></Link>
            {subtitle && 
            (<p className="text-xs text-gray-500">{subtitle}</p>)}
          </div>
        </div>
  )
}

export default Logo
