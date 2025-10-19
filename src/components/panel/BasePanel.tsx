import React from 'react'
import { cn } from '@/lib/utils'
import { PanelEvents } from '@/types/eventTypes'

export type Padding = 'p-0' | 'p-2' | 'p-4' | 'p-8' | string
export type Bg = string | {
    src: string
    label: string
    className: string
}
export type Border = {
    size: 'border-0' | 'border-1' | 'border-2' | 'border-4' | string
    color: string
    className: string
}

export type BasePanelProps = PanelEvents & {
    children: React.ReactNode
    className?: string
    padding?: Padding
    bg?: Bg
    border?: Border
}

const BasePanel: React.FC<BasePanelProps> = ({
    children,
    className = '',
    padding = 'p-4',
    bg = 'white',
    border = {
        size: 'border-1',
        color: 'border-gray-300',
        className: ''
    },
}) => {

    const getBackgroundStyles = () => {
        if (typeof bg === 'object' && bg.src) {
            return 'backdrop-blur-sm'
        }
        return bg || ''
    }

    return (
        <div
            className={cn(
                'rounded-xs shadow-md relative overflow-hidden',
                `${border.size} ${border.color} ${border.className}`,
                getBackgroundStyles(),
                padding,
                className
            )}
        >
            {/* Background Image with Frosted Glass Effect */}
            {typeof bg === 'object' && bg.src && (
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <img
                        src={bg.src}
                        alt={bg.label || 'Background'}
                        referrerPolicy="no-referrer"
                        className={cn(
                            `w-full h-full object-cover blur-xs scale-110 ${bg.className || ''}`,
                        )}
                    />
                </div>
            )}

            {/* Content */}
            <div className="relative z-10">
                {children}
            </div>
        </div>
    )
}

export default BasePanel
