import React from 'react'
import Link from "../v2/Link"
import LinkBtn from "../v2/LinkBtn"

interface Props {
  href?: string
}

const BackButton: React.FC<Props> = ({href = '/v2/issue/post'}) => {
  return (
    <>
      <LinkBtn href={href} label={"<"} variant='blue' className='p-0 mr-2' />
      <Link href={href} >Back</Link>
    </>
  )
}

export default BackButton
