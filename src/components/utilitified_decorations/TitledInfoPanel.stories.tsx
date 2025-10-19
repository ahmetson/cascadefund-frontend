import type { Meta, StoryObj } from '@storybook/react'
import TitledInfoPanel from './TitledInfoPanel'
import { getIcon } from '../icon'

const meta: Meta<typeof TitledInfoPanel> = {
    title: 'Components/TitledInfoPanel',
    component: TitledInfoPanel,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A feature card component that displays an icon, title, and optional background color for the icon.'
            }
        }
    },
    argTypes: {
        icon: {
            control: 'text',
            description: 'Icon or React node to display'
        },
        title: {
            control: 'text',
            description: 'Title text to display'
        },
        iconBgColor: {
            control: 'text',
            description: 'CSS class for icon background color'
        }
    },
    tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof TitledInfoPanel>

// Default story
export const Default: Story = {
    args: {
        icon: getIcon({ iconType: "info", width: "24", height: "24" }),
        title: 'Feature Card',
        iconBgColor: 'bg-blue-100 p-2 rounded-lg'
    }
}

// With different icons
export const WithAnalytics: Story = {
    args: {
        icon: getIcon({ iconType: "analytics", width: "24", height: "24" }),
        title: 'Analytics Dashboard',
        iconBgColor: 'bg-green-100 p-2 rounded-lg'
    }
}

export const WithEnergy: Story = {
    args: {
        icon: getIcon({ iconType: "energy", width: "24", height: "24" }),
        title: 'Energy Management',
        iconBgColor: 'bg-yellow-100 p-2 rounded-lg'
    }
}

export const WithProject: Story = {
    args: {
        icon: getIcon({ iconType: "project", width: "24", height: "24" }),
        title: 'Project Overview',
        iconBgColor: 'bg-purple-100 p-2 rounded-lg'
    }
}

export const WithSettings: Story = {
    args: {
        icon: getIcon({ iconType: "settings", width: "24", height: "24" }),
        title: 'Settings Panel',
        iconBgColor: 'bg-gray-100 p-2 rounded-lg'
    }
}

// With different background colors
export const RedBackground: Story = {
    args: {
        icon: getIcon({ iconType: "warning", width: "24", height: "24" }),
        title: 'Important Notice',
        iconBgColor: 'bg-red-100 p-2 rounded-lg'
    }
}

export const GreenBackground: Story = {
    args: {
        icon: getIcon({ iconType: "success", width: "24", height: "24" }),
        title: 'Success Message',
        iconBgColor: 'bg-green-100 p-2 rounded-lg'
    }
}

export const BlueBackground: Story = {
    args: {
        icon: getIcon({ iconType: "info", width: "24", height: "24" }),
        title: 'Information',
        iconBgColor: 'bg-blue-100 p-2 rounded-lg'
    }
}

// With emoji icons
export const WithEmoji: Story = {
    args: {
        icon: '🚀',
        title: 'Launch Feature',
        iconBgColor: 'bg-orange-100 p-2 rounded-lg'
    }
}

export const WithHeart: Story = {
    args: {
        icon: '❤️',
        title: 'Favorites',
        iconBgColor: 'bg-pink-100 p-2 rounded-lg'
    }
}

export const WithStar: Story = {
    args: {
        icon: '⭐',
        title: 'Featured',
        iconBgColor: 'bg-yellow-100 p-2 rounded-lg'
    }
}

// Long title
export const LongTitle: Story = {
    args: {
        icon: getIcon({ iconType: "description", width: "24", height: "24" }),
        title: 'This is a very long title that demonstrates how the component handles extended text content',
        iconBgColor: 'bg-indigo-100 p-2 rounded-lg'
    }
}

// Minimal styling
export const Minimal: Story = {
    args: {
        icon: getIcon({ iconType: "user", width: "20", height: "20" }),
        title: 'User Profile',
        iconBgColor: 'p-1'
    }
}

// Custom styling
export const CustomStyled: Story = {
    args: {
        icon: getIcon({ iconType: "fire", width: "28", height: "28" }),
        title: 'Hot Feature',
        iconBgColor: 'bg-gradient-to-r from-red-100 to-orange-100 p-3 rounded-full'
    }
}

// Multiple cards example
export const MultipleCards: Story = {
    render: () => (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <TitledInfoPanel
                icon={getIcon({ iconType: "analytics", width: "24", height: "24" })}
                title="Analytics"
                iconBgColor="bg-blue-100 p-2 rounded-lg"
            />
            <TitledInfoPanel
                icon={getIcon({ iconType: "energy", width: "24", height: "24" })}
                title="Energy"
                iconBgColor="bg-green-100 p-2 rounded-lg"
            />
            <TitledInfoPanel
                icon={getIcon({ iconType: "project", width: "24", height: "24" })}
                title="Projects"
                iconBgColor="bg-purple-100 p-2 rounded-lg"
            />
        </div>
    )
}
