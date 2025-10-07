import React from 'react'
import Link from "../Link"

interface Props {
  href?: string
}

const BackButton: React.FC<Props> = ({href = '/v2/issue/post'}) => {
  return (
    <Link label="<- Back" href={href} />
  )
}

export default BackButton
