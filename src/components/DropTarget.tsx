import type { FC } from 'react'
import { memo } from 'react'
import { useDrop } from 'react-dnd'

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
            {children}
        </div>
    )
})

export default C;