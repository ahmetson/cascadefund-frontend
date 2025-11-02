import type { Meta, StoryObj } from '@storybook/react'
import MarketingTabs from './MarketingTabs'

const meta: Meta<typeof MarketingTabs> = {
    title: 'Components/Maintainer/Marketing Tabs (Deprecated)',
    component: MarketingTabs,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A tabbed interface for marketing analytics and metrics. Displays three tabs: Analytics Overview (showing key metrics like total clicks, new users, donors, contributors, and influencers), Traffic Conversion (showing traffic sources and conversion funnel), and Contribution Analytics (showing detailed contributor statistics by type).',
            },
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof MarketingTabs>

// Default story showing the marketing tabs
export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Default view of the Marketing Tabs component showing the Analytics Overview tab active. Displays key marketing metrics including total clicks, new users, donors from clicks, contributor views, and influencers created.',
            },
        },
    },
}

// Traffic Conversion tab
export const TrafficConversionTab: Story = {
    parameters: {
        docs: {
            description: {
                story: 'The Traffic Conversion tab shows traffic source analytics and conversion funnel. Displays a pie chart of traffic sources (GitHub README, YouTube, Blog, Other) and a funnel visualization with conversion metrics (clicks, users, contributors, influencers).',
            },
        },
    },
}

// Contribution Analytics tab
export const ContributionAnalyticsTab: Story = {
    parameters: {
        docs: {
            description: {
                story: 'The Contribution Analytics tab displays detailed contributor statistics in a table format. Shows contributor types (Developers, Designers, Writers, Testers) with their percentages, favorite languages, interest areas, and retention rates.',
            },
        },
    },
}

