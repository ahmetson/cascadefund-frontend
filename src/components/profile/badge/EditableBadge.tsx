'use client'
import React from 'react'
import Badge from '../../custom-ui/Badge'
import Kbd from '../../custom-ui/Kbd'

interface EditableBadgeProps {
  showEditBar: boolean
  setShowEditBar: (showEditBar: boolean) => void
}

const EditableBadge: React.FC<EditableBadgeProps> = ({ showEditBar, setShowEditBar }) => {
  return <Badge variant='gray' active={true} static={true}>
    {showEditBar ? (<div className='flex items-center space-x-1'>
      <Kbd
        onPress={() => setShowEditBar(false)}
        overwrittenChildren='esc'
      >
        esc
      </Kbd> {' '}cancel
    </div>) : (<div className='flex items-center space-x-1 px-1'>
      <Kbd onPress={() => setShowEditBar(true)} overwrittenChildren='ctrl+space'>
        ctrl
      </Kbd> +
      <Kbd className='mx-1'>
        space
      </Kbd>{' '} show edit bar
    </div>)
    }</Badge>
}

export default EditableBadge
