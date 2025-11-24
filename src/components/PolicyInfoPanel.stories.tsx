import type { Meta, StoryObj } from '@storybook/react'
import InfoPanel from './PolicyInfoPanel'

const meta: Meta<typeof InfoPanel> = {
    title: 'Components/PolicyInfoPanel',
    component: InfoPanel,
    parameters: {
        layout: 'centered',
        docs: {
            description: {
                component: 'A flexible information panel component that displays content sections with titles, subtitles, items, and optional footers.'
            }
        }
    },
    argTypes: {
        title: {
            control: 'text',
            description: 'Main title of the content section'
        },
        subtitle: {
            control: 'text',
            description: 'Optional subtitle text'
        },
        color: {
            control: 'text',
            description: 'CSS color class for the title'
        },
        icon: {
            control: 'text',
            description: 'Optional emoji or icon to display next to the title'
        },
        items: {
            control: 'object',
            description: 'Array of items to display, each with an icon and text'
        },
        footer: {
            control: 'text',
            description: 'Optional footer text'
        },
        footerIcon: {
            control: 'select',
            options: ['heart', undefined],
            description: 'Optional footer icon type'
        }
    },
    tags: ['autodocs']
}

export default meta
type Story = StoryObj<typeof InfoPanel>

// Default story
export const Default: Story = {
    args: {
        title: 'Getting Started',
        subtitle: 'Everything you need to know to begin your journey',
        color: 'text-blue-600',
        icon: '🚀',
        items: [
            {
                icon: 'G',
                text: 'Create your account and set up your profile'
            },
            {
                icon: 'R',
                text: 'Explore our features and discover what works for you'
            },
            {
                icon: 'E',
                text: 'Connect with other users and build your network'
            }
        ],
        footer: 'Welcome to our platform!',
        footerIcon: 'heart'
    }
}

// Minimal story
export const Minimal: Story = {
    args: {
        title: 'Quick Tips',
        color: 'text-gray-800',
        items: [
            {
                icon: 'A',
                text: 'Keep your profile updated'
            },
            {
                icon: 'P',
                text: 'Check notifications regularly'
            }
        ]
    }
}

// With different colors
export const Colorful: Story = {
    args: {
        title: 'Features',
        subtitle: 'Discover what makes us special',
        color: 'text-purple-600',
        icon: '✨',
        items: [
            {
                icon: 'G',
                text: 'Advanced analytics and reporting'
            },
            {
                icon: 'R',
                text: 'Real-time collaboration tools'
            },
            {
                icon: 'E',
                text: 'Secure data encryption'
            },
            {
                icon: 'P',
                text: 'Customizable dashboard'
            },
            {
                icon: 'A',
                text: 'Mobile app support'
            }
        ],
        footer: 'Start exploring today!'
    }
}

// Long content story
export const LongContent: Story = {
    args: {
        title: 'Comprehensive Guide',
        subtitle: 'A detailed walkthrough of all available features and capabilities',
        color: 'text-green-600',
        icon: '📚',
        items: [
            {
                icon: 'G',
                text: 'Set up your account with proper security settings and two-factor authentication enabled for maximum protection'
            },
            {
                icon: 'R',
                text: 'Configure your preferences and customize your dashboard to match your work cycle and productivity needs'
            },
            {
                icon: 'E',
                text: 'Explore the extensive library of templates and resources available to help you get started quickly'
            },
            {
                icon: 'P',
                text: 'Connect with team members and collaborators to share projects and work together effectively'
            },
            {
                icon: 'A',
                text: 'Learn about advanced features like automation, integrations, and API access for power users'
            },
            {
                icon: 'X',
                text: 'Understand the analytics and reporting capabilities to track your progress and measure success'
            }
        ],
        footer: 'Ready to dive deeper?',
        footerIcon: 'heart'
    }
}

// Without footer
export const NoFooter: Story = {
    args: {
        title: 'Quick Actions',
        color: 'text-orange-600',
        icon: '⚡',
        items: [
            {
                icon: 'H',
                text: 'Upload new files'
            },
            {
                icon: 'A',
                text: 'Share with team'
            },
            {
                icon: 'P',
                text: 'Export data'
            }
        ]
    }
}

// Single item
export const SingleItem: Story = {
    args: {
        title: 'Important Notice',
        color: 'text-red-600',
        icon: '⚠️',
        items: [
            {
                icon: 'X',
                text: 'System maintenance scheduled for tonight at 2 AM EST. Please save your work.'
            }
        ]
    }
}
