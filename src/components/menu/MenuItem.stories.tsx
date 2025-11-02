import type { Meta, StoryObj } from '@storybook/react'
import MenuItem from './MenuItem'
import { BadgeProps } from '../badge/Badge'

const meta: Meta<typeof MenuItem> = {
    title: 'Components/Menu/Menu Item',
    component: MenuItem,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A menu item component with icon, label, and optional badges. Supports active and focus states.'
            }
        }
    },
    argTypes: {
        icon: {
            control: 'select',
            options: ['influencer-history', 'influencer-work', 'balance', 'cascading-balance', 'project-info', 'marketing', 'work', 'cascading-work'],
            description: 'Icon to display'
        },
        label: {
            control: 'text',
            description: 'Text label for the menu item'
        },
        href: {
            control: 'text',
            description: 'Link destination'
        },
        active: {
            control: 'boolean',
            description: 'Whether the item is in active state'
        },
        focus: {
            control: 'boolean',
            description: 'Whether the item has focus (shows electric border effect)'
        },
        badges: {
            control: 'object',
            description: 'Array of badge props to display'
        }
    }
}

export default meta
type Story = StoryObj<typeof MenuItem>

// Sample badge data
const sampleBadges: BadgeProps[] = [
    { variant: 'default', children: 'New' },
    { variant: 'secondary', children: '3' }
]

const multipleBadges: BadgeProps[] = [
    { variant: 'destructive', children: 'Hot' },
    { variant: 'outline', children: 'Beta' }
]

// Default story
export const Default: Story = {
    args: {
        icon: 'work',
        label: 'Dashboard',
        href: '#',
        active: false,
        focus: false
    }
}

// Focus state stories
export const WithFocus: Story = {
    args: {
        icon: 'work',
        label: 'Dashboard',
        href: '#',
        active: false,
        focus: true
    }
}

export const FocusWithBadge: Story = {
    args: {
        icon: 'marketing',
        label: 'Marketing',
        href: '#',
        active: false,
        focus: true,
        badges: sampleBadges
    }
}

// Active state stories
export const Active: Story = {
    args: {
        icon: 'balance',
        label: 'Balance',
        href: '#',
        active: true,
        focus: false
    }
}

export const ActiveWithFocus: Story = {
    args: {
        icon: 'balance',
        label: 'Balance',
        href: '#',
        active: true,
        focus: true
    }
}

// Badge variations
export const WithSingleBadge: Story = {
    args: {
        icon: 'project-info',
        label: 'Projects',
        href: '#',
        active: false,
        focus: false,
        badges: [{ variant: 'default', children: '5' }]
    }
}

export const WithMultipleBadges: Story = {
    args: {
        icon: 'cascading-work',
        label: 'Cascading Work',
        href: '#',
        active: false,
        focus: false,
        badges: multipleBadges
    }
}

export const FocusWithMultipleBadges: Story = {
    args: {
        icon: 'cascading-work',
        label: 'Cascading Work',
        href: '#',
        active: false,
        focus: true,
        badges: multipleBadges
    }
}

// All states comparison
export const AllStates: Story = {
    render: () => (
        <div className="space-y-4 w-80">
            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Default State</h3>
                <MenuItem icon="work" label="Default Item" uri="#" />
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">With Focus</h3>
                <MenuItem icon="work" label="Focused Item" uri="#" focus={true} />
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Active State</h3>
                <MenuItem icon="balance" label="Active Item" uri="#" active={true} />
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Active with Focus</h3>
                <MenuItem icon="balance" label="Active Focused Item" uri="#" active={true} focus={true} />
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">With Badge</h3>
                <MenuItem icon="marketing" label="Item with Badge" uri="#" badges={[{ variant: 'default', children: 'New' }]} />
            </div>

            <div>
                <h3 className="text-sm font-medium text-gray-700 mb-2">Focus with Badge</h3>
                <MenuItem icon="marketing" label="Focused with Badge" uri="#" focus={true} badges={[{ variant: 'destructive', children: 'Hot' }]} />
            </div>
        </div>
    )
}

// Interactive playground
export const Playground: Story = {
    args: {
        icon: 'work',
        label: 'Interactive Menu Item',
        href: '#',
        active: false,
        focus: false,
        badges: []
    }
}
