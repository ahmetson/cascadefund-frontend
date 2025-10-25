import type { Meta, StoryObj } from '@storybook/react'
import VotePopover from './VotePopover'
import { useState } from 'react'

const meta: Meta<typeof VotePopover> = {
    title: 'Components/Issue/VotePopover',
    component: VotePopover,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A voting power allocation popover that allows users to allocate their voting power to an issue. Features a slider interface with real-time feedback, animated number transitions, and visual indicators for current, top, and minimum voting power requirements.',
            },
        },
    },
    argTypes: {
        vpAmount: {
            control: { type: 'number', min: 0, max: 10000, step: 10 },
            description: 'User\'s current/remaining voting power',
        },
        currentVP: {
            control: { type: 'number', min: 0, max: 1000, step: 5 },
            description: 'Current VP allocated to this issue',
        },
        topVP: {
            control: { type: 'number', min: 0, max: 1000, step: 5 },
            description: 'Top contributor\'s VP on this issue',
        },
        minVP: {
            control: { type: 'number', min: 0, max: 100, step: 1 },
            description: 'Minimum VP required to vote',
        },
        issueTitle: {
            control: { type: 'text' },
            description: 'Optional issue title for context',
        },
        onApply: {
            action: 'applied',
            description: 'Callback function triggered when Apply is clicked',
        },
    },
}

export default meta
type Story = StoryObj<typeof VotePopover>

// Interactive wrapper component for stories that need state management
const VotePopoverWithState = (args: any) => {
    const [currentVP, setCurrentVP] = useState(args.currentVP)

    const handleApply = (newVP: number) => {
        args.onApply(newVP)
        setCurrentVP(newVP)
    }

    return (
        <VotePopover
            {...args}
            currentVP={currentVP}
            onApply={handleApply}
        />
    )
}

// Default story - User with 100 VP, currently allocated 20 VP, top is 50 VP, min is 10 VP
export const Default: Story = {
    render: VotePopoverWithState,
    args: {
        vpAmount: 100,
        currentVP: 20,
        topVP: 50,
        minVP: 10,
        issueTitle: 'Fix critical bug in authentication system',
        onApply: (newVP: number) => console.log('Applied VP:', newVP),
    },
}

// No current vote - User with 200 VP, no current allocation (0 VP)
export const NoCurrentVote: Story = {
    render: VotePopoverWithState,
    args: {
        vpAmount: 200,
        currentVP: 0,
        topVP: 75,
        minVP: 15,
        issueTitle: 'Implement new feature request',
        onApply: (newVP: number) => console.log('Applied VP:', newVP),
    },
}

// Top voter - User is already the top voter
export const TopVoter: Story = {
    render: VotePopoverWithState,
    args: {
        vpAmount: 150,
        currentVP: 80,
        topVP: 60, // User is above the top
        minVP: 20,
        issueTitle: 'User is the top contributor',
        onApply: (newVP: number) => console.log('Applied VP:', newVP),
    },
}

// Low VP - User with only 15 VP available
export const LowVP: Story = {
    render: VotePopoverWithState,
    args: {
        vpAmount: 15,
        currentVP: 5,
        topVP: 100,
        minVP: 10,
        issueTitle: 'Limited voting power scenario',
        onApply: (newVP: number) => console.log('Applied VP:', newVP),
    },
}

// High numbers - Large VP values (10000+) to test number formatting
export const HighNumbers: Story = {
    render: VotePopoverWithState,
    args: {
        vpAmount: 50000,
        currentVP: 12000,
        topVP: 25000,
        minVP: 1000,
        issueTitle: 'High-value voting scenario',
        onApply: (newVP: number) => console.log('Applied VP:', newVP),
    },
}

// Zero current VP with high available
export const ZeroCurrentHighAvailable: Story = {
    render: VotePopoverWithState,
    args: {
        vpAmount: 1000,
        currentVP: 0,
        topVP: 500,
        minVP: 50,
        issueTitle: 'New voter with high available VP',
        onApply: (newVP: number) => console.log('Applied VP:', newVP),
    },
}

// Minimum VP scenario
export const MinimumVP: Story = {
    render: VotePopoverWithState,
    args: {
        vpAmount: 30,
        currentVP: 0,
        topVP: 100,
        minVP: 25, // Very close to available VP
        issueTitle: 'Minimum VP requirement scenario',
        onApply: (newVP: number) => console.log('Applied VP:', newVP),
    },
}

// Interactive playground
export const Playground: Story = {
    render: VotePopoverWithState,
    args: {
        vpAmount: 100,
        currentVP: 20,
        topVP: 50,
        minVP: 10,
        issueTitle: 'Interactive playground - adjust values above',
        onApply: (newVP: number) => console.log('Applied VP:', newVP),
    },
}
