import React from 'react'
import { LinkComponentProps } from "@/components/custom-ui/Link"
import MenuItem from '../menu/MenuItem'

const BackButton: React.FC<LinkComponentProps> = ({ uri = '/data/issue' }) => {
  return (
    <MenuItem uri={uri} label={"Back"} icon={"arrow-left"} />
  )
}

export default BackButton
