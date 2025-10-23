'use client'
import React from 'react'
import Badge from '../../custom-ui/Badge'
import { Spinner } from '@/components/ui/shadcn-io/spinner'

interface Props {
  saving?: boolean
}

const YourProfileBadge: React.FC<Props> = ({ saving = false }) => {
  return <Badge variant={saving ? 'info' : 'gray'} active={true} static={!saving}>
    {saving ? <>
      <Spinner className='w-5 h-5' key={'ellipsis'}
        variant={'ellipsis'} /> saving</> :
      'Your profile'}
  </Badge>
}

export default YourProfileBadge
