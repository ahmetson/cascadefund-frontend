import type { Meta, StoryObj } from '@storybook/react'
import InsightPanel from './InsightPanel'
import PageLikePanel from '@/components/panel/PageLikePanel'
import React from 'react'

const meta: Meta<typeof InsightPanel> = {
    title: 'Components/Maintainer/Insight Panel (Deprecated)',
    component: InsightPanel,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A panel displaying user behavior insights with actionable recommendations. Shows insights cards with icons, titles, descriptions, and recommendations for improving marketing and user engagement. Each insight card highlights a key finding and provides actionable advice.',
            },
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof InsightPanel>

// Default story showing the complete InsightPanel
export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Default view of the Insight Panel showing all user behavior insights including README impact analysis, video engagement metrics, and user feedback recommendations.',
            },
        },
    },
}

// Story showing a single insight card (README Impact)
export const ReadmeImpactInsight: Story = {
    render: () => (
        <PageLikePanel className="mt-6" title="User Behavior Insights">
            <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm">📖</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-800 mb-1">README Impact</h4>
                        <p className="text-xs text-gray-600 mb-2">Most sign-ups come from README links</p>
                        <p className="text-xs text-blue-600">Recommendation: Keep your README badges prominent and updated</p>
                    </div>
                </div>
            </div>
        </PageLikePanel>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Insight card showing README impact analysis. Demonstrates how README badges and links are a key source of user sign-ups.',
            },
        },
    },
}

// Story showing video engagement insight
export const VideoEngagementInsight: Story = {
    render: () => (
        <PageLikePanel className="mt-6" title="User Behavior Insights">
            <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm">📺</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-800 mb-1">Video Engagement</h4>
                        <p className="text-xs text-gray-600 mb-2">YouTube clicks turn into donors more often</p>
                        <p className="text-xs text-blue-600">Recommendation: Create more video content explaining your project's impact</p>
                    </div>
                </div>
            </div>
        </PageLikePanel>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Insight card showing video engagement metrics. Highlights the higher conversion rate from YouTube traffic to donors.',
            },
        },
    },
}

// Story showing user feedback insight
export const UserFeedbackInsight: Story = {
    render: () => (
        <PageLikePanel className="mt-6" title="User Behavior Insights">
            <div className="bg-white p-4 rounded-lg border border-gray-200 mb-4">
                <div className="flex items-start space-x-3">
                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 text-sm">💬</span>
                    </div>
                    <div className="flex-1">
                        <h4 className="text-sm font-medium text-gray-800 mb-1">User Feedback</h4>
                        <p className="text-xs text-gray-600 mb-2">Top comments: requests for better docs, more tutorials</p>
                        <p className="text-xs text-blue-600">Recommendation: Prioritize documentation improvements</p>
                    </div>
                </div>
            </div>
        </PageLikePanel>
    ),
    parameters: {
        docs: {
            description: {
                story: 'Insight card showing user feedback analysis. Summarizes common user requests and provides actionable recommendations for improving documentation.',
            },
        },
    },
}

