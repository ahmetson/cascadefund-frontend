import React from 'react'

interface Props {
  label: string
  href: string
  className?: string
  active?: boolean
}

const CollaborationSection: React.FC<Props> = ({ className: additionalNames, href, label }) => {
    const className = `text-blue-500 hover:text-blue-900 py-2 px-4 transition-colors` + additionalNames;

    return (
      <a href={href} className={className}>
        {label}
      </a>
    )
}

export default CollaborationSection
