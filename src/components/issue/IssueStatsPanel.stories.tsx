import type { Meta, StoryObj } from '@storybook/react'
import IssueStatsPanel from './IssueStatsPanel'

const meta: Meta<typeof IssueStatsPanel> = {
    title: 'Components/Issue/Issue Stats Panel',
    component: IssueStatsPanel,
    argTypes: {
        editable: {
            control: { type: 'boolean' },
            description: 'Enables editing of tags via TokenInput and list/roadmap selection',
            table: { category: 'Props' },
        },
        tags: {
            control: { type: 'object' },
            description: 'List of tag strings shown in the TokenInput',
            table: { category: 'Props' },
        },
        list: {
            control: { type: 'text' },
            description: 'Current list or roadmap assignment',
            table: { category: 'Props' },
        },
        availableLists: {
            control: { type: 'object' },
            description: 'Available lists/roadmaps for selection in editable mode',
            table: { category: 'Props' },
        },
    },
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'Displays issue statistics and metadata including status, version, timestamps, contributor info, likes, and tags. Supports an editable mode to modify tags using TokenInput and select from available lists/roadmaps.',
            },
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof IssueStatsPanel>

// Default story showing the issue stats panel
export const Default: Story = {
    args: {
        editable: false,
        tags: ['bug', 'backend', 'priority:high'],
        list: 'v2.12.3',
    },
    parameters: {
        docs: {
            description: {
                story: 'Read-only view with tags displayed and TokenInput disabled. Shows list/roadmap as a badge.',
            },
        },
    },
}

export const Editable: Story = {
    args: {
        editable: true,
        tags: ['ux', 'good-first-issue'],
    },
    parameters: {
        docs: {
            description: {
                story: 'Editable mode with TokenInput enabled for adding/removing tags.',
            },
        },
    },
}

export const WithDroppableList: Story = {
    args: {
        editable: true,
        tags: ['feature', 'frontend'],
        list: 'Public Issues',
        availableLists: ['Public Issues', 'Funded Issues', 'Detailize', 'Heavy', 'Closed'],
    },
    parameters: {
        docs: {
            description: {
                story: 'Editable mode showing the droppable list selector. Users can select from available lists/roadmaps using the dropdown.',
            },
        },
    },
}

export const WithRoadmap: Story = {
    args: {
        editable: true,
        tags: ['enhancement', 'roadmap'],
        list: 'v2.13.0',
        availableLists: ['v2.12.3', 'v2.13.0', 'v2.14.0', 'v3.0.0', 'Backlog'],
    },
    parameters: {
        docs: {
            description: {
                story: 'Editable mode showing roadmap version selection. Users can assign issues to specific roadmap versions.',
            },
        },
    },
}

export const ReadOnlyWithList: Story = {
    args: {
        editable: false,
        tags: ['bug', 'critical'],
        list: 'v2.12.3',
    },
    parameters: {
        docs: {
            description: {
                story: 'Read-only view showing an issue assigned to a specific list/roadmap version.',
            },
        },
    },
}

