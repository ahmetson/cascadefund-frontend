import React from 'react'
interface Props {
  cols?: number
  gap?: number
  className?: string
  children: any
}

const Importer: React.FC<Props> = ({children, className, cols, gap}) => {
  cols = cols === undefined ? 2 : cols;
  gap = gap === undefined ? 6 : gap;

  return (
    <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-${gap} ${className || ''}`}>
      {children}
    </div>
  )
}

export default Importer
