import React from 'react'
import Link from '../../Link'

interface TabButtonProps {
  active: boolean
  href: string
  label: string
}

// interface TabButtonProps {
//   children: React.ReactNode
//   active: boolean
//   onClick: () => void
// }

const TabButton: React.FC<TabButtonProps> = ({ active, href, label }) => {
  return (

    // <button
    //   onClick={onClick}
    //   className={`pb-2 border-b-2 font-medium text-sm transition-colors ${
    //     active
    //       ? 'border-cascade-blue text-cascade-blue'
    //       : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
    //   }`}
    // >
    //   {children}
    // </button>
    <Link className={active ? 
      'border-cascade-blue text-cascade-blue'
          : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
    } href={href} label={label} />
  )
}

export default TabButton
