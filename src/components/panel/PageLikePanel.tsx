import React from 'react'
import InteractivePanel, { InteractivePanelProps } from './InteractivePanel'
import Button from '@/components/custom-ui/Button'
import LinkBtn from '@/components/LinkBtn'
import { getIcon, IconType } from '@/components/icon'
import { cn } from '@/lib/utils'
import type { ActionProps } from '@/types/eventTypes'

export interface PageLikePanelProps extends Omit<InteractivePanelProps, 'children' | 'expandableTitle'> {
    icon?: IconType
    title: React.ReactNode
    subtitle?: React.ReactNode
    titleCenter?: boolean
    rightHeader?: React.ReactNode
    actions?: ActionProps[]
    children: React.ReactNode
    contentHeight?: string
    expandable?: boolean
}

const PageLikePanel: React.FC<PageLikePanelProps> = ({
    icon,
    title,
    subtitle,
    titleCenter = false,
    rightHeader,
    actions,
    children,
    contentHeight,
    expandable = false,
    className = '',
    ...interactiveProps
}) => {
    const renderHeader = () => {
        if (titleCenter) {
            return (
                <div className="mb-4 text-center">
                    <h2 className="text-xl font-semibold flex items-center justify-center gap-2">
                        {icon && getIcon(icon)}
                        <span>{title}</span>
                    </h2>
                </div>
            )
        }

        return (
            <div className="mb-4">
                <h2 className="text-xl font-semibold flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        {icon && getIcon(icon)}
                        <span>{title}</span>
                    </div>
                    {rightHeader}
                </h2>
            </div>
        )
    }

    const renderContent = () => {
        const contentStyle = contentHeight
            ? { height: contentHeight, overflowY: 'auto' as const }
            : {}

        return (
            <div
                className="space-y-3 text-sm text-gray-600"
                style={contentStyle}
            >
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

    return (
        <InteractivePanel
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
        </InteractivePanel>
    )
}

export default PageLikePanel
