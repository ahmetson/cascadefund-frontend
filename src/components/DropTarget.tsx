import type { FC } from 'react'
import { memo } from 'react'
import { useDrop } from 'react-dnd'
import ElectricBorder from './ElectricBorder'
import { getAnimationColors } from './custom-ui/Button'
import { cn } from '@/lib/utils'

export interface DropTargetProps {
    id: string
    accept: string[]
    onDrop: (item: any) => void
    children?: any
}

export const C: FC<DropTargetProps> = memo(function C({
    id,
    accept,
    onDrop,
    children,
}) {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept,
        drop: onDrop,
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    })

    const isActive = isOver && canDrop

    return (
        <div ref={drop as any} className={'flex items-center justify-center h-full ' + (isActive ? 'border-2 border-gray-green-600 rounded-sm' : canDrop ? 'border-2 border-blue-400 rounded-sm' : '')} data-testid={id}>
            <ElectricBorder
                color={getAnimationColors('primary').colorFrom}
                speed={1}
                chaos={0.5}
                thickness={2}
                style={{ borderRadius: 2 }}
                className={cn(
                    'mr-1 px-4 pr-3 py-2 text-sm w-full'
                )}
                disabled={!canDrop}
            >
                {children}
            </ElectricBorder>
        </div>
    )
})

export default C;