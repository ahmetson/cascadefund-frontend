import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import BasePanel, { BasePanelProps } from './BasePanel'
import BorderBeam from '@/components/ui/border-beam'
import { cn } from '@/lib/utils'
import type { PanelEvents } from '@/types/eventTypes'

export interface InteractivePanelProps extends BasePanelProps, PanelEvents {
    expandable?: boolean
    defaultExpanded?: boolean
    onHover?: (hovered: boolean) => void
}

const InteractivePanel: React.FC<InteractivePanelProps> = ({
    children,
    expandable = false,
    defaultExpanded = true,
    onHover,
    onClick,
    onBackClick,
    onElementClick,
    onActionClick,
    className = '',
    ...baseProps
}) => {
    const [isExpanded, setIsExpanded] = useState(defaultExpanded)
    const [isHovered, setIsHovered] = useState(false)

    const handleHover = (hovered: boolean) => {
        setIsHovered(hovered)
        onHover?.(hovered)
    }

    const handleClick = () => {
        if (expandable) {
            setIsExpanded(!isExpanded)
        }
        onClick?.(true)
    }

    const panelContent = (
        <BorderBeam
            className="relative"
            size={48}
            duration={2}
            colorFrom="#60a5fa"
            colorTo="#a78bfa"
        >
            <BasePanel
                {...baseProps}
                className={cn(
                    'relative',
                    'transition-all duration-300 cursor-pointer',
                    'hover:shadow-lg hover:scale-[1.02]',
                    className
                )}
                onClick={handleClick}
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
            >
                {/* Header with expand/collapse indicator */}
                {expandable && (
                    <div className="flex items-center justify-between mb-4">
                        <motion.div
                            animate={{ rotate: isExpanded ? 180 : 0 }}
                            transition={{ duration: 0.2 }}
                            className="text-gray-500"
                        >
                            <svg
                                className="w-5 h-5"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M19 9l-7 7-7-7"
                                />
                            </svg>
                        </motion.div>
                    </div>
                )}

                {/* Content with animation */}
                <AnimatePresence>
                    {(!expandable || isExpanded) && (
                        <motion.div
                            initial={expandable ? { opacity: 0, height: 0 } : false}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3, ease: 'easeInOut' }}
                            className="overflow-hidden"
                        >
                            {children}
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Hover effect overlay */}
                {isHovered && (
                    <motion.div
                        className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 pointer-events-none"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2 }}
                    />
                )}
            </BasePanel>
        </BorderBeam>
    )

    return panelContent
}

export default InteractivePanel
