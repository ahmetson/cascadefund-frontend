import type { Meta, StoryObj } from '@storybook/react'
import BalancePanel from './BalancePanel'

const meta: Meta<typeof BalancePanel> = {
    title: 'Components/Maintainer/Balance Panel',
    component: BalancePanel,
    parameters: {
        layout: 'padded',
    },
}

export default meta
type Story = StoryObj<typeof BalancePanel>

export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Default view of the Balance panel showing wallet info and current USDC balance.',
            },
        },
    },
}




