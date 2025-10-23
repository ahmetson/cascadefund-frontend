import type { Meta, StoryObj } from '@storybook/react'
import SidebarSection from './ListPanel'

const meta: Meta<typeof SidebarSection> = {
    title: 'Components/UtilitifiedDecorations/ListPanel',
    component: SidebarSection,
    parameters: {
        layout: 'padded',
    },
    argTypes: {
        title: {
            control: 'text',
            description: 'The title of the sidebar section',
        },
        showNumbers: {
            control: 'boolean',
            description: 'Whether to show numbers for items',
        },
        bg: {
            control: 'select',
            options: ['white', 'gray', 'blue', 'green', 'red', 'yellow'],
            description: 'Background color variant',
        },
        items: {
            control: 'object',
            description: 'Array of sidebar items to display',
        },
    },
}

export default meta
type Story = StoryObj<typeof SidebarSection>

// Sample data for different scenarios
const sampleItemsWithTitles = [
    {
        title: 'Getting Started',
        description: 'Learn the basics of our platform and how to navigate through the interface.',
    },
    {
        title: 'Advanced Features',
        description: 'Explore powerful tools and customization options for experienced users.',
    },
    {
        title: 'API Documentation',
        description: 'Complete reference for integrating with our REST and GraphQL APIs.',
    },
    {
        title: 'Troubleshooting',
        description: 'Common issues and their solutions to help you get back on track.',
    },
]

const sampleItemsWithNumbers = [
    {
        name: 'Dashboard Overview',
        number: '1,234',
    },
    {
        name: 'Active Projects',
        number: '56',
    },
    {
        name: 'Completed Tasks',
        number: '789',
    },
    {
        name: 'Pending Reviews',
        number: '12',
    },
]

const mixedItems = [
    {
        title: 'Project Alpha',
        description: 'Main development project with 15 contributors',
        number: '15',
    },
    {
        title: 'Project Beta',
        description: 'Secondary project focused on testing and QA',
        number: '8',
    },
    {
        title: 'Project Gamma',
        description: 'Research and development initiative',
        number: '3',
    },
]

export const Default: Story = {
    args: {
        title: 'Documentation',
        items: sampleItemsWithTitles,
        showNumbers: false,
        bg: 'white',
    },
}

export const WithNumbers: Story = {
    args: {
        title: 'Statistics',
        items: sampleItemsWithNumbers,
        showNumbers: true,
        bg: 'white',
    },
}

export const MixedContent: Story = {
    args: {
        title: 'Projects',
        items: mixedItems,
        showNumbers: false,
        bg: 'white',
    },
}

export const GrayBackground: Story = {
    args: {
        title: 'Resources',
        items: sampleItemsWithTitles,
        showNumbers: false,
        bg: 'gray',
    },
}

export const BlueBackground: Story = {
    args: {
        title: 'Analytics',
        items: sampleItemsWithNumbers,
        showNumbers: true,
        bg: 'blue',
    },
}

export const GreenBackground: Story = {
    args: {
        title: 'Success Stories',
        items: sampleItemsWithTitles,
        showNumbers: false,
        bg: 'green',
    },
}

export const RedBackground: Story = {
    args: {
        title: 'Alerts',
        items: [
            {
                title: 'Critical Issue',
                description: 'System performance degradation detected',
            },
            {
                title: 'Security Alert',
                description: 'Unauthorized access attempt blocked',
            },
        ],
        showNumbers: false,
        bg: 'red',
    },
}

export const YellowBackground: Story = {
    args: {
        title: 'Notifications',
        items: [
            {
                title: 'New Feature Available',
                description: 'Check out our latest dashboard improvements',
            },
            {
                title: 'Maintenance Window',
                description: 'Scheduled maintenance on Sunday 2-4 AM',
            },
        ],
        showNumbers: false,
        bg: 'yellow',
    },
}

export const EmptyState: Story = {
    args: {
        title: 'No Items',
        items: [],
        showNumbers: false,
        bg: 'white',
    },
}

export const SingleItem: Story = {
    args: {
        title: 'Quick Access',
        items: [
            {
                title: 'Main Dashboard',
                description: 'Your central hub for all activities and metrics',
            },
        ],
        showNumbers: false,
        bg: 'white',
    },
}

export const LongContent: Story = {
    args: {
        title: 'Comprehensive Guide',
        items: [
            {
                title: 'Introduction to Advanced Configuration',
                description: 'This is a longer description that demonstrates how the component handles content that might span multiple lines and provides more detailed information about the topic at hand.',
            },
            {
                title: 'Step-by-Step Implementation Process',
                description: 'Another lengthy description that shows how the component gracefully handles extended text content while maintaining proper spacing and readability.',
            },
            {
                title: 'Best Practices and Recommendations',
                description: 'A comprehensive overview of recommended approaches and methodologies that have been proven effective in similar scenarios.',
            },
        ],
        showNumbers: false,
        bg: 'white',
    },
}

export const Interactive: Story = {
    args: {
        title: 'Interactive Panel',
        items: sampleItemsWithTitles,
        showNumbers: false,
        bg: 'white',
        interactive: true,
    },
}

export const NonInteractive: Story = {
    args: {
        title: 'Static Panel',
        items: sampleItemsWithTitles,
        showNumbers: false,
        bg: 'white',
        interactive: false,
    },
}
