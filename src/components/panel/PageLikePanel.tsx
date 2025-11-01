import React from 'react'
import InteractivePanel, { InteractivePanelProps } from './InteractivePanel'
import Button from '@/components/custom-ui/Button'
import Link from '@/components/custom-ui/Link'
import { getIcon, IconType } from '@/components/icon'
import { cn } from '@/lib/utils'
import type { ActionProps } from '@/types/eventTypes'
import BasePanel from './BasePanel'
import PanelAction from './PanelAction'

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
        const titleColor = 'text-gray-700';

        if (titleCenter) {
            return (
                <div className="mb-4 text-center">
                    <h2 className={`font-georgia flex items-center justify-center gap-2 ${titleColor}`}>
                        {icon && getIcon(icon)}
                        <span>{title}</span>
                    </h2>
                </div>
            )
        }

        return (
            <div className="mb-4">
                <h2 className={`font-georgia flex items-center gap-2 justify-between ${titleColor}`}>
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

            <PanelAction actions={actions} />
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

            <PanelAction actions={actions} />
        </BasePanel>
    )
}

export default PageLikePanel
