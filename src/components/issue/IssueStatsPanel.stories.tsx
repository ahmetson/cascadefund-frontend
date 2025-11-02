import type { Meta, StoryObj } from '@storybook/react'
import IssueStatsPanel from './IssueStatsPanel'

const meta: Meta<typeof IssueStatsPanel> = {
    title: 'Components/Issue/Issue Stats Panel',
    component: IssueStatsPanel,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A panel component that displays issue statistics and metadata including status, creation date, update date, assignee information, likes count, and tags. Features an edit action button and organizes all issue-related statistics in a clean, readable format.',
            },
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof IssueStatsPanel>

// Default story showing the issue stats panel
export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Default view of the Issue Stats Panel showing all issue statistics including Open status, creation date (3 days ago), update date (Today), assignee with avatar, likes count (23), and tags (Suggested, Bug). Includes an Edit action button.',
            },
        },
    },
}

