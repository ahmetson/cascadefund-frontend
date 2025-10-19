import React from 'react'
import BasePanel, { BasePanelProps } from './BasePanel'
import Button from '@/components/Button'
import LinkBtn from '@/components/LinkBtn'
import { getIcon, IconType, IconProps } from '@/components/icon'
import { cn } from '@/lib/utils'
import type { ActionProps } from '@/types/eventTypes'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../animate-ui/components/radix/accordion'

export interface InfoPanelProps extends Omit<BasePanelProps, 'children'> {
    icon?: IconType | IconProps  // Accepts both 'info' and { iconType: 'info', width: 'w-6' }
    title: React.ReactNode
    actions?: ActionProps[]
    children: React.ReactNode
    expandable?: boolean
    defaultExpanded?: boolean
}

const InfoPanel: React.FC<InfoPanelProps> = ({
    icon,
    title,
    actions,
    children,
    expandable = false,
    defaultExpanded = false,
    className = '',
    ...baseProps
}) => {
    const renderHeader = () => {
        return (
            <div className="mb-4 ">
                <h2 className="font-georgia font-semibold flex items-center gap-2">
                    {icon && getIcon({ iconType: icon, width: 'w-4', height: 'h-4', fill: 'gray-300', className: 'text-gray-100 ' })}
                    <span>{title}</span>
                </h2>
            </div>
        )
    }

    const renderContent = () => {
        return (
            <div className="font-noto-sans text-gray-600">
                {children}
            </div>
        )
    }

    const renderActions = () => {
        if (!actions || actions.length === 0) return null

        return (
            <div className="flex justify-center gap-3 mt-6">
                {actions.map((action, index) => (
                    action.href ? (
                        <LinkBtn
                            key={index}
                            variant={action.variant}
                            href={action.href}
                            className={cn("flex-1", action.className)}
                        >
                            {action.children}
                        </LinkBtn>
                    ) : (
                        <Button
                            key={index}
                            variant={action.variant}
                            onClick={action.onClick}
                            className={cn("flex-1", action.className)}
                        >
                            {action.children}
                        </Button>
                    )
                ))}
            </div>
        )
    }

    const panelID = 'infopanel-1'

    if (expandable) {
        return (
            <BasePanel
                {...baseProps}
                border={{ size: 'border-1', color: 'border-gray-100!' }}
                bg="bg-transparent"
                className={cn('shadow-none text-gray-500 ', className)}
            >
                <Accordion defaultValue={defaultExpanded ? panelID : undefined} type='single' collapsible={true}>
                    <AccordionItem value={panelID}>
                        <AccordionTrigger className='flex items-center justify-between h-auto no-underline! p-0 mb-4'>
                            <div className="font-georgia font-semibold text-base flex items-center gap-2">
                                {icon && getIcon(icon)}
                                <span>{title}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className='AccordionContent '>
                            {renderContent()}
                            {renderActions()}
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </BasePanel>
        )
    }

    return (
        <BasePanel
            {...baseProps}
            border={{ size: 'border-1' }}
            bg="bg-transparent"
            className={cn('shadow-none text-gray-500', className)}
        >
            {renderHeader()}
            {renderContent()}
            {renderActions()}
        </BasePanel>
    )
}

export default InfoPanel
