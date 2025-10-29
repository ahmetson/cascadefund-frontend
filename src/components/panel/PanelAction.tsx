import React from 'react'
import Button from '@/components/custom-ui/Button'
import Link from '@/components/custom-ui/Link'
import { cn } from '@/lib/utils'
import type { ActionProps } from '@/types/eventTypes'

const PanelAction: React.FC<{ actions: ActionProps[] | React.ReactNode, className?: string }> = ({ actions, className = 'mt-6' }) => {
    if (!actions || Array.isArray(actions) && actions.length === 0) return null
    if (!Array.isArray(actions)) {
        if (!React.isValidElement(actions)) return null
        return <div className={cn("flex justify-center gap-3", className)}>
            {actions}
        </div>
    }

    return (
        <div className={cn("flex justify-center gap-3", className)}>
            {actions.map((action, index) => (
                action.uri ? (
                    <Link
                        key={index}
                        uri={action.uri}
                        className={cn("flex-1 inline-flex items-center font-bold py-1 px-4 rounded transition-colors", action.className)}
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

export default PanelAction
