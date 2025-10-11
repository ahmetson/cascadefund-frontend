import React from 'react'
import Link from './Link'

interface ButtonProps {
  children: React.ReactNode | string
  href: string
  className?: string
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  href,
  className,
}) => {

  return (<Link className={className} href={href}>
      {children}
      <svg className="ml-2 h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    </Link>
  )
}

export default Button
