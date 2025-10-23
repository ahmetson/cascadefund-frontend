import React from 'react'
import { useHotkeys } from 'react-hotkeys-hook';
import { capitalizeFirstLetter } from '@/scripts'
import { cn } from '@/lib/utils';

interface Props {
  children: string
  overwrittenChildren?: string
  onPress?: (children?: string) => void
  className?: string
}

const Kbd: React.FC<Props> = ({ className, children, overwrittenChildren, onPress }) => {
  useHotkeys(overwrittenChildren || children, () => {
    onPress?.(overwrittenChildren || children);
  }, { enableOnFormTags: true });

  return (
    <kbd className={cn("kbd border border-gray-300 rounded-sm border-solid px-1 w-12 text-xs flex text-center items-center text-gray-600 h-4!", className)}>
      {capitalizeFirstLetter(children as string)}
    </kbd>
  )
}

export default Kbd
