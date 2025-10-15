import React from 'react'
import NotificationBanner from '@/components/NotificationBanner'
import Link from '@/components/Link'
import Card from '@/components/utilitified_decorations/PagePanel'

interface Props {
  className?: string
}

const RepositoryInfo: React.FC<Props> = ({ className }) => {
  return (
    <Card className={className} title={"Original Repository Information"}>
      <div className="w-4 h-4 bg-gray-200 rounded-md mr-3 flex items-center justify-center">
        <svg className="w-4 h-4 text-gray-600" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
        </svg>
      </div>
      <div>
        <h3 className="text-gray-900">blockchain-verification-tool</h3>
        <Link href="https://github.com/ara-foundation/blockchain-verification-tool" >
          ara-foundation/blockchain-verification-tool
        </Link>
      </div>

      <NotificationBanner
        type='warning' title={"Not registered on CascadeFund"} icon={<svg className="w-5 h-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor"
        >
          <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
        </svg>} actions={[{
          href: '#',
          variant: 'gray',
          children: 'Reach Out'
        }]}>
        <div className="ml-3">
          <p>The project you have forked doesn't exist on CascadeFund.</p>
          <p>Cascade should reach them first.</p>
        </div>
      </NotificationBanner>
    </Card>
  )
}

export default RepositoryInfo
