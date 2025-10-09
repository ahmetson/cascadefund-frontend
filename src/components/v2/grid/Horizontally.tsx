import React from 'react'

interface Props {
  cols?: number
  gap?: number
  children: any
}

const Grid: React.FC<Props> = ({cols = 2, gap = 6, children}) => {
  return (
    <div className={`grid grid-cols-1 md:grid-cols-${cols} gap-${gap}`}>
      {children}
    </div>
  )
}

export default Grid
