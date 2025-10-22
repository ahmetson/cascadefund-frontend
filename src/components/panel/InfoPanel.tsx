import React from 'react'
import BasePanel, { BasePanelProps } from './BasePanel'
import Button from '@/components/custom-ui/Button'
import Link from '@/components/custom-ui/Link'
import { getIcon, IconType, IconProps } from '@/components/icon'
import { cn } from '@/lib/utils'
import { BorderSize, type ActionProps } from '@/types/eventTypes'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../animate-ui/components/radix/accordion'

export interface InfoPanelProps extends Omit<BasePanelProps, 'children'> {
    icon?: IconType | IconProps  // Accepts both 'info' and { iconType: 'info', width: 'w-6' }
    title: React.ReactNode
    actions?: ActionProps[]
    children?: React.ReactNode
    expandable?: boolean
    defaultExpanded?: boolean
    darkMode?: boolean
}

const InfoPanel: React.FC<InfoPanelProps> = ({
    darkMode = false,
    key,
    icon,
    title,
    actions,
    children,
    expandable = false,
    defaultExpanded = false,
    className = '',
    ...baseProps
}) => {
    const panelID = 'infopanel-1'
    const hasContent = children || (actions && actions.length > 0)
    const titleBottomMargin = hasContent ? 'mb-4' : undefined;
    const contentTopMargin = 'mt-4';
    const titleColor = darkMode ? 'text-gray-300' : 'text-gray-900';
    const textColor = darkMode ? 'text-gray-400' : 'text-gray-950';
    const borderColor = darkMode ? 'border-gray-200/50' : 'border-gray-300/50';
    const blurredBorder = 'border-blur-sm';

    const renderHeader = () => {
        const iconProps = typeof icon === 'string' || icon === undefined ? { iconType: icon || 'info', width: 'w-5', height: 'h-5', fill: 'currentColor', className: 'mt-0.5 text-gray-300' } : icon

        return (
            <div key={key} className={`${titleBottomMargin}`}>
                <h2 className={`font-georgia font-semibold flex items-center gap-2 ${titleColor}`}>
                    {iconProps && getIcon(iconProps)}
                    <span>{title}</span>
                </h2>
            </div>
        )
    }

    const renderContent = () => {
        return (
            <div className={`font-noto-sans ${textColor}`}>
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
                        <Link
                            key={index}
                            href={action.href}
                            className={cn("flex-1 inline-flex items-center font-bold py-2 px-4 rounded transition-colors", action.className)}
                        >
                            {action.children}
                        </Link>
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
    const transparentBg = `${darkMode ? 'bg-gray-900/20' : 'bg-blue-500/10'} backdrop-blur-xs border-none ${textColor}`;


    if (hasContent && expandable) {
        return (
            <BasePanel
                {...baseProps}
                border={{ size: BorderSize.border1, color: `${borderColor} ${blurredBorder}`, className: 'filter' }}
                bg="bg-transparent"
                className={cn(
                    'shadow-none',
                    transparentBg,
                    className
                )}
            >
                <Accordion defaultValue={defaultExpanded ? panelID : undefined} type='single' collapsible={true}>
                    <AccordionItem value={panelID}>
                        <AccordionTrigger className={`flex items-center justify-between h-auto no-underline! p-0`}>
                            <div className="font-georgia font-semibold text-base flex items-center gap-2">
                                {icon && getIcon({ iconType: (icon as IconProps).iconType || icon, fill: 'currentColor', className: textColor })}
                                <span>{title}</span>
                            </div>
                        </AccordionTrigger>
                        <AccordionContent className={`AccordionContent ${contentTopMargin}`}>
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
            border={{ size: BorderSize.border2, color: `${borderColor} ${blurredBorder}` }}
            bg="bg-transparent"
            className={cn(
                `shadow-none ${textColor}`,
                transparentBg,
                className)
            }
        >
            {renderHeader()}
            {children && renderContent()}
            {actions && renderActions()}
        </BasePanel>
    )
}

export default InfoPanel
