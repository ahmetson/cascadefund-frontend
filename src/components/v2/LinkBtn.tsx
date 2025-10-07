import React from 'react'

interface Props {
  label: string
  href: string
  className?: string
  variant?: string
  textVariant?: string
  active?: boolean
}

const CollaborationSection: React.FC<Props> = ({ className: additionalNames, href, label, variant = 'gray', textVariant = 'white', active = false }) => {
    const className = `items-center bg-${variant}-400 hover:bg-${variant}-600 text-${textVariant} font-bold py-2 px-4 rounded transition-colors` + additionalNames;

    return (
      <a href={href} className={className}>
        {label}
      </a>
    )
}

export default CollaborationSection
