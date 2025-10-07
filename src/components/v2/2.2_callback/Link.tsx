import React from 'react'

interface LinkProps {
  href: string
  children: React.ReactNode
  className?: string
  target?: string
  rel?: string
}

const Link: React.FC<LinkProps> = ({ 
  href, 
  children, 
  className = '', 
  target,
  rel 
}) => {
  return (
    <a 
      href={href} 
      className={className}
      target={target}
      rel={rel}
    >
      {children}
    </a>
  )
}

export default Link
