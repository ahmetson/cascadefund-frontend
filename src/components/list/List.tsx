import { cn } from '@/lib/utils'
import React from 'react'

export interface ListProps {
    children: React.ReactNode
    contentHeight?: string
    className?: string
}

const List: React.FC<ListProps> = ({
    className,
    children,
    contentHeight,
}) => {
    const contentStyle = contentHeight
        ? `${contentHeight} overflow-y-auto` : ''

    return (
        <div
            className={cn('font-noto-sans space-y-3 text-sm text-gray-600', contentStyle, className)}
        >
            {children}
        </div>
    )
}

export default List
