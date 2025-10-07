import React from 'react'

interface LinkProps {
  children: React.ReactNode
  href: string
  className?: string
  target?: string
}

const Link: React.FC<LinkProps> = ({ children, href, className = '', target }) => {
  return (
    <a
      href={href}
      className={`transition-colors duration-200 ${className}`}
      target={target}
      rel={target === '_blank' ? 'noopener noreferrer' : undefined}
    >
      {children}
    </a>
  )
}

export default Link
