import React from 'react'
import Link from "@/components/custom-ui/Link"

interface Props {
  href?: string
}

const BackButton: React.FC<Props> = ({ href = '/issue/post' }) => {
  return (
    <Link href={href} className="flex items-center transition-colors hover:text-sky-400!" >← Back</Link>
  )
}

export default BackButton
