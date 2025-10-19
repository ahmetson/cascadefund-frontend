import React from 'react'
import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'
import { PanelEvents } from '@/types/eventTypes'

export type BasePanelProps = PanelEvents & {
    children: React.ReactNode
    className?: string
    padding?: 'none' | 'sm' | 'md' | 'lg'
    bg?: string
    bgImgUrl?: string
    bgImgLabel?: string
    bgImgClassName?: string
}

const BasePanel: React.FC<BasePanelProps> = ({
    children,
    className = '',
    padding = 'md',
    bg = 'white',
    bgImgUrl,
    bgImgLabel,
    bgImgClassName
}) => {
    const getPaddingStyles = () => {
        switch (padding) {
            case 'none':
                return 'p-0'
            case 'sm':
                return 'p-3'
            case 'md':
                return 'p-4'
            case 'lg':
                return 'p-6'
            default:
                return 'p-4'
        }
    }

    const getBackgroundStyles = () => {
        if (bgImgUrl) {
            return 'backdrop-blur-sm bg-white/50 border-white/20'
        }
        return bg || ''
    }

    return (
        <div
            className={cn(
                'rounded-xs border-1 border-gray-300 shadow-md relative overflow-hidden',
                getBackgroundStyles(),
                getPaddingStyles(),
                className
            )}
        >
            {/* Background Image with Frosted Glass Effect */}
            {bgImgUrl && (
                <div className="absolute inset-0 -z-10 overflow-hidden">
                    <img
                        src={bgImgUrl}
                        alt={bgImgLabel || 'Background'}
                        referrerPolicy="no-referrer"
                        className={cn(
                            'w-full h-full object-cover blur-sm scale-110',
                            bgImgClassName
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
