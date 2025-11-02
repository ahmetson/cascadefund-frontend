'use client'
import React from 'react'
import Badge from '../../custom-ui/Badge'
import { Spinner } from '@/components/ui/shadcn-io/spinner'

interface Props {
  saving?: boolean
  label?: string
}

const YourProfileBadge: React.FC<Props> = ({ saving = false, label = 'profile' }) => {
  return <Badge variant={saving ? 'info' : 'gray'} active={true} static={!saving}>
    {saving ? <>
      <Spinner className='w-5 h-5' key={'ellipsis'}
        variant={'ellipsis'} /> saving</> :
      `Your ${label}`}
  </Badge>
}

export default YourProfileBadge
