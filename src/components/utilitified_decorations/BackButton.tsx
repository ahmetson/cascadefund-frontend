import React from 'react'
import Link from "@/components/custom-ui/Link"

interface Props {
  href?: string
}

const BackButton: React.FC<Props> = ({ href = '/issue/post' }) => {
  return (
    <>
      <Link href={href} className="inline-flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition-colors p-0 mr-2" >{"<"}</Link>
      <Link href={href} >Back</Link>
    </>
  )
}

export default BackButton
