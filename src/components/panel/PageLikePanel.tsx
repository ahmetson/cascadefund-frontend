import React from 'react'
import InteractivePanel, { InteractivePanelProps } from './InteractivePanel'
import Button from '@/components/custom-ui/Button'
import Link from '@/components/custom-ui/Link'
import { getIcon, IconType } from '@/components/icon'
import { cn } from '@/lib/utils'
import type { ActionProps } from '@/types/eventTypes'
import BasePanel from './BasePanel'

export interface PageLikePanelProps extends Omit<InteractivePanelProps, 'children' | 'expandableTitle'> {
    icon?: IconType
    title: React.ReactNode
    subtitle?: React.ReactNode
    titleCenter?: boolean
    rightHeader?: React.ReactNode
    actions?: ActionProps[] | React.ReactNode
    children: React.ReactNode
    expandable?: boolean
    interactive?: boolean
}

const PageLikePanel: React.FC<PageLikePanelProps> = ({
    icon,
    title,
    subtitle,
    titleCenter = false,
    rightHeader,
    actions,
    children,
    expandable = false,
    className = '',
    interactive = true,
    ...interactiveProps
}) => {
    const renderHeader = () => {
        const titleColor = 'text-gray-900';

        if (titleCenter) {
            return (
                <div className="mb-4 text-center">
                    <h2 className={`font-georgia font-semibold flex items-center justify-center gap-2 ${titleColor}`}>
                        {icon && getIcon(icon)}
                        <span>{title}</span>
                    </h2>
                </div>
            )
        }

        return (
            <div className="mb-4">
                <h2 className={`font-georgia font-semibold flex items-center gap-2 justify-between ${titleColor}`}>
                    {icon && getIcon(icon)}
                    <span>{title}</span>
                    {rightHeader}
                </h2>
            </div>
        )
    }

    const renderContent = () => {
        return (
            <div
                className="font-noto-sans space-y-3 text-sm text-gray-600 overflow-y-auto"
            >
                {children}
            </div>
        )
    }

    const renderActions = () => {
        if (!actions || Array.isArray(actions) && actions.length === 0) return null
        if (!Array.isArray(actions)) {
            if (!React.isValidElement(actions)) return null
            return <div className="flex justify-center gap-3 mt-6">
                {actions}
            </div>
        }

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
                            disabled={action.disabled}
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

    return (
        interactive ? <InteractivePanel
            {...interactiveProps}
            expandableTitle={expandable ? title : undefined}
            className={cn('space-y-4', className)}
        >
            {renderHeader()}

            {subtitle && (
                <p className="text-sm text-gray-500 -mt-2 mb-4">
                    {subtitle}
                </p>
            )}

            {renderContent()}

            {renderActions()}
        </InteractivePanel> : <BasePanel
            {...interactiveProps}
            className={cn('space-y-4', className)}
        >
            {renderHeader()}

            {subtitle && (
                <p className="text-sm text-gray-500 -mt-2 mb-4">
                    {subtitle}
                </p>
            )}

            {renderContent()}

            {renderActions()}
        </BasePanel>
    )
}

export default PageLikePanel
