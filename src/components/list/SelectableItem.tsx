import { RoundedSize, ShadowSize } from '@/types/eventTypes'
import React from 'react'
import { getIcon } from '../icon'

export interface SelectableItemProps {
  id?: string
  onClick: (id: string) => void
  ref?: any
  children: React.ReactNode
  iconClassName?: string
  selectedId?: string
}

const SelectableItem: React.FC<SelectableItemProps> = ({ ref, onClick: onClick, iconClassName, id, children, selectedId }) => {
  return (
    <div ref={ref} onClick={() => {
      onClick(id!)
    }} className={`flex items-center p-3 w-full ${RoundedSize.roundedXs} border hover:cursor-pointer ${ShadowSize.shadowLg} ${selectedId === id ? 'bg-green-100 border-green-600 hover:bg-green-200 dark:bg-green-900 dark:border-green-600 dark:hover:bg-green-800' : 'bg-white border-gray-300 hover:bg-gray-200 hover:border-green-400 dark:bg-gray-900 dark:border-gray-500 dark:hover:bg-gray-800 dark:hover:border-green-400'
      }`}>
      <div className="flex items-center space-x-3 mt-0.5">
        <div className={`w-4 h-4 rounded-full border-2 ${iconClassName}`}>
          {selectedId === id && getIcon('check')}
        </div>
      </div>
      <div className='ml-1 flex justify-between w-full items-center'>
        {children}
      </div>
    </div>
  )
}

export default SelectableItem
