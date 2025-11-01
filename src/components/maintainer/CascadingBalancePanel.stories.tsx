import type { Meta, StoryObj } from '@storybook/react'
import CascadingBalance from './CascadingBalancePanel'

const meta: Meta<typeof CascadingBalance> = {
    title: 'Components/Maintainer/Cascading Balance Panel',
    component: CascadingBalance,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A panel component for displaying and managing cascading balance. Shows indirectly received funds from other projects with options to withdraw, transfer, or use funds. Includes wallet address management and balance display in USDC.',
            },
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CascadingBalance>

// Default story
export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Default view of the Cascading Balance panel showing wallet address input, balance information, and withdrawal options.',
            },
        },
    },
}

