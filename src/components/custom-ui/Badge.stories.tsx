import type { Meta, StoryObj } from '@storybook/react'
import Badge from './Badge'

const meta: Meta<typeof Badge> = {
    title: 'Components/Badge',
    component: Badge,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A versatile badge component with multiple color variants, active states, and subtle shining ball animations. Features radial gradient shine effects with random timing for organic, non-distracting movement that adds life to the interface.',
            },
        },
    },
    argTypes: {
        variant: {
            control: 'select',
            options: ['gray', 'blue', 'green', 'red', 'yellow', 'purple', 'orange', 'default', 'success', 'warning', 'danger', 'info'],
            description: 'The color variant of the badge',
        },
        active: {
            control: 'boolean',
            description: 'Whether the badge is in an active state',
        },
        disableAnimation: {
            control: 'boolean',
            description: 'Whether to disable the subtle animation effects',
        },
        children: {
            control: 'text',
            description: 'The content inside the badge',
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

// Default story
export const Default: Story = {
    args: {
        children: 'Badge',
        variant: 'gray',
        active: false,
        disableAnimation: false,
    },
}

// All variants showcase
export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Badge variant="gray">Gray</Badge>
            <Badge variant="blue">Blue</Badge>
            <Badge variant="green">Green</Badge>
            <Badge variant="red">Red</Badge>
            <Badge variant="yellow">Yellow</Badge>
            <Badge variant="purple">Purple</Badge>
            <Badge variant="orange">Orange</Badge>
            <Badge variant="default">Default</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="info">Info</Badge>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'All available badge variants displayed together.',
            },
        },
    },
}

// Active states
export const ActiveStates: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Badge variant="gray" active>Active Gray</Badge>
            <Badge variant="blue" active>Active Blue</Badge>
            <Badge variant="green" active>Active Green</Badge>
            <Badge variant="red" active>Active Red</Badge>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Badge variants in their active states (only gray variant has a distinct active appearance).',
            },
        },
    },
}

// Semantic variants
export const SemanticVariants: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="info">Info</Badge>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Semantic badge variants for different states and messages.',
            },
        },
    },
}

// With different content
export const WithContent: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Badge variant="blue">New</Badge>
            <Badge variant="green">Completed</Badge>
            <Badge variant="red">Error</Badge>
            <Badge variant="yellow">Pending</Badge>
            <Badge variant="purple">Premium</Badge>
            <Badge variant="orange">Beta</Badge>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Badges with different content types commonly used in applications.',
            },
        },
    },
}

// Animated badges showcase
export const AnimatedBadges: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Badge variant="blue">New Feature</Badge>
            <Badge variant="green">Completed</Badge>
            <Badge variant="red">Error</Badge>
            <Badge variant="yellow">Pending</Badge>
            <Badge variant="purple">Premium</Badge>
            <Badge variant="orange">Beta</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="danger">Danger</Badge>
            <Badge variant="info">Info</Badge>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Multiple badges with subtle shining ball animations. Each badge has unique random timing with radial gradient shine effects for organic, non-distracting movement.',
            },
        },
    },
}

// Static badges (no animation)
export const StaticBadges: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <Badge variant="blue" disableAnimation>New Feature</Badge>
            <Badge variant="green" disableAnimation>Completed</Badge>
            <Badge variant="red" disableAnimation>Error</Badge>
            <Badge variant="yellow" disableAnimation>Pending</Badge>
            <Badge variant="purple" disableAnimation>Premium</Badge>
            <Badge variant="orange" disableAnimation>Beta</Badge>
        </div>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Badges with animations disabled for comparison.',
            },
        },
    },
}

// Interactive playground
export const Playground: Story = {
    args: {
        children: 'Custom Badge',
        variant: 'blue',
        active: false,
        disableAnimation: false,
    },
    parameters: {
        docs: {
            description: {
                story: 'Interactive playground to test different badge configurations including animation settings.',
            },
        },
    },
}
