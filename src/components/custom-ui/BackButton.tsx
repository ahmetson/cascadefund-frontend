import React from 'react'
import Link, { LinkComponentProps } from "@/components/custom-ui/Link"

const BackButton: React.FC<LinkComponentProps> = ({ uri = '/data/issue' }) => {
  return (
    <Link uri={uri} className="flex items-center transition-colors hover:text-sky-400!" >← Back</Link>
  )
}

export default BackButton
