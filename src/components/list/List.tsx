import { cn } from '@/lib/utils'
import React from 'react'

export interface ListProps {
    children: React.ReactNode
    contentHeight?: string
    className?: string
}
/**
 * List Component
 *
 * Purpose:
 * This React component serves as a generic container for rendering a vertical list of elements.
 * It provides consistent spacing, font styling, and optional scrollable content area via the `contentHeight` prop.
 *
 * Use Case:
 * - Use `<List>` when you need to display a collection of related items (e.g., cards, rows, or grouped content)
 *   with consistent spacing and styling. Common contexts include sidebars, settings panels, message threads, and item feeds.
 * - The `contentHeight` prop allows the list to be scrollable with a fixed height, useful for long lists in constrained spaces.
 * - The `className` prop lets you extend or override base styles as needed.
 *
 * When To Use:
 * - When you want to quickly create a vertically stacked list with sensible default spacing and typography.
 * - When you need a scrollable list by providing a height constraint for the content.
 * - For encapsulating list styling, rather than repeating similar className definitions on multiple lists.
 * - When you require complex list behaviors such as virtualization, drag-and-drop, or internal list item state management.
 *
 * When Not To Use:
 * - For unordered/basic HTML lists (`<ul>`, `<ol>`) when semantic HTML is required for accessibility.
 * - When you need highly customized grid or non-vertical/indented layouts.
 */

const List: React.FC<ListProps> = ({
    className,
    children,
    contentHeight,
}) => {
    const contentStyle = contentHeight
        ? `${contentHeight} overflow-y-auto` : ''

    return (
        <div
            className={cn(
                'font-noto-sans text-sm text-gray-600 dark:text-gray-500 space-y-3',
                contentStyle,
                className
            )}
        >
            {children}
        </div>
    )
}

export default List
