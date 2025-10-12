import React from 'react'

interface Props {
  children: any
  href: string
  className?: string
  active?: boolean
}

const CollaborationSection: React.FC<Props> = ({ className: additionalNames, href, children }) => {
    const className = `text-blue-500 hover:text-blue-900 py-2 underline transition-colors` + additionalNames;

    return (
      <a href={href} className={className}>
        {children}
      </a>
    )
}

export default CollaborationSection
