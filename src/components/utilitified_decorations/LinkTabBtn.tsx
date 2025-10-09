import React from 'react'
import Link from '@/components/v2/Link'

interface TabButtonProps {
  active: boolean
  href: string
  label: string
}

const TabButton: React.FC<TabButtonProps> = ({ active, href, label }) => {
  return (
    <Link className={active ? 
      'border-cascade-blue text-cascade-blue'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
    } href={href}>{label}</Link>
  )
}

export default TabButton
