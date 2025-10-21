import React from 'react'
import Link from "@/components/custom-ui/Link"
import LinkBtn from "@/components/LinkBtn"

interface Props {
  href?: string
}

const BackButton: React.FC<Props> = ({ href = '/issue/post' }) => {
  return (
    <>
      <LinkBtn href={href} label={"<"} variant='blue' className='p-0 mr-2' />
      <Link href={href} >Back</Link>
    </>
  )
}

export default BackButton
