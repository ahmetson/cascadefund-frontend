import React, { useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import BasePanel, { BasePanelProps } from './BasePanel'
import BorderBeam from '@/components/ui/border-beam'
import { cn } from '@/lib/utils'
import type { PanelEvents } from '@/types/eventTypes'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../animate-ui/components/radix/accordion'

export interface InteractivePanelProps extends BasePanelProps, PanelEvents {
    expandableTitle?: string | React.ReactNode
    defaultExpanded?: boolean // if set and expandableTitle is provided, the panel will be expanded by default
    expandableAnchor?: 'center' | 'top' | 'bottom' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right'
    onHover?: (hovered: boolean) => void
}

const InteractivePanel: React.FC<InteractivePanelProps> = ({
    children,
    expandableTitle,
    defaultExpanded = false,
    expandableAnchor = 'center',
    onHover,
    onClick,
    onBackClick,
    onElementClick,
    onActionClick,
    className = '',
    ...baseProps
}) => {
    const [isExpanded, setIsExpanded] = useState(expandableTitle ? defaultExpanded : false)
    const [isHovered, setIsHovered] = useState(false)

    const handleHover = (hovered: boolean) => {
        setIsHovered(hovered)
        onHover?.(hovered)
    }

    const handleClick = () => {
        if (expandableTitle) {
            setIsExpanded(!isExpanded)
        }
        onClick?.(true)
    }

    const panelID = '1'

    const panelContent = (
        <BorderBeam>
            <BasePanel
                {...baseProps}
                className={cn(
                    'transition-all duration-300',
                    'hover:shadow-lg hyperlink',
                    className
                )}
                onClick={handleClick}
                onMouseEnter={() => handleHover(true)}
                onMouseLeave={() => handleHover(false)}
            >
                {/* Header with expand/collapse indicator */}
                {expandableTitle ? (
                    <Accordion defaultValue={defaultExpanded ? panelID : undefined} type='single' collapsible={true}>
                        <AccordionItem value={panelID} >
                            <AccordionTrigger onClick={handleClick} className='flex items-center justify-between h-4 no-underline!'>{expandableTitle}</AccordionTrigger>
                            <AccordionContent className='AccordionContent' expandableAnchor={expandableAnchor}>
                                {children}
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>
                ) : children}

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
