import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import { RoadmapPanel } from './RoadmapPanel'
import { ActionProps } from '@/types/eventTypes'

interface VersionProps {
    version: string
    date: string
    status: 'completed' | 'active' | 'planned'
    features: string[]
    completedIssues?: number
    totalIssues?: number
    authors: string[]
}

const meta: Meta<typeof RoadmapPanel> = {
    title: 'Components/Maintainer/Roadmap Panel',
    component: RoadmapPanel,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A roadmap panel component that displays project versions with different statuses (active, planned, completed). Features version cards with progress tracking, feature lists, issue completion status, and action buttons. Supports drag-and-drop for active and planned versions.',
            },
        },
    },
    tags: ['autodocs'],
    argTypes: {
        actions: {
            control: { type: 'object' },
            description: 'Optional array of action buttons/links to display at the bottom of the panel',
        },
        versions: {
            control: { type: 'object' },
            description: 'Array of version objects to display, each with status, features, and metadata',
        },
    },
}

export default meta
type Story = StoryObj<typeof RoadmapPanel>

const mockActiveVersion: VersionProps = {
    version: "v2.5.0",
    authors: ["ahmetson"],
    date: "Oct 12, 2023",
    status: "active",
    features: [
        "Dark mode implementation",
        "Tablet responsive layout fixes",
        "Google Calendar integration"
    ],
    completedIssues: 1,
    totalIssues: 3
}

const mockPlannedVersion: VersionProps = {
    version: "v2.6.0",
    date: "Oct 12, 2023",
    authors: ["ahmetson"],
    status: "planned",
    features: [
        "Advanced filtering options",
        "API rate limit improvements"
    ],
    completedIssues: 0,
    totalIssues: 2
}

const mockCompletedVersion: VersionProps = {
    version: "v2.4.0",
    authors: ["ahmetson"],
    date: "Oct 13, 2023",
    status: "completed",
    features: [
        "Discovered authentication system",
        "New dashboard experience",
        "Performance optimizations"
    ],
    completedIssues: 3,
    totalIssues: 3
}

const mockActions: ActionProps[] = [
    {
        className: "border-2 border-dashed border-gray-300",
        children: "Add another version",
        uri: "#"
    }
]

// Default story with active and planned versions
export const Default: Story = {
    args: {
        versions: [mockActiveVersion, mockPlannedVersion],
        actions: mockActions,
    },
    parameters: {
        docs: {
            description: {
                story: 'Default roadmap view showing active and planned versions with action buttons. Active versions show progress bars and can accept drag-and-drop issues.',
            },
        },
    },
}

// Only active version
export const ActiveVersion: Story = {
    args: {
        versions: [mockActiveVersion],
        actions: mockActions,
    },
    parameters: {
        docs: {
            description: {
                story: 'Roadmap with a single active version showing progress (1/3 issues completed). Active versions display AvatarList and can accept dragged issues.',
            },
        },
    },
}

// Only planned version
export const PlannedVersion: Story = {
    args: {
        versions: [mockPlannedVersion],
        actions: mockActions,
    },
    parameters: {
        docs: {
            description: {
                story: 'Roadmap with a single planned version. Planned versions show features to be implemented and have a "Check" action button.',
            },
        },
    },
}

// Completed versions (archive)
export const CompletedVersions: Story = {
    args: {
        versions: [mockCompletedVersion],
    },
    parameters: {
        docs: {
            description: {
                story: 'Archive view showing completed versions. Completed versions display checkmarks for all features and show a star rating indicator instead of action buttons.',
            },
        },
    },
}

// Mixed statuses
export const MixedStatuses: Story = {
    args: {
        versions: [
            mockActiveVersion,
            mockPlannedVersion,
            {
                version: "v2.3.0",
                authors: ["developer1", "developer2"],
                date: "Sep 28, 2023",
                status: "completed",
                features: [
                    "Bug fixes",
                    "Security improvements"
                ],
                completedIssues: 5,
                totalIssues: 5
            }
        ],
        actions: mockActions,
    },
    parameters: {
        docs: {
            description: {
                story: 'Roadmap showing multiple versions with different statuses: active, planned, and completed. Demonstrates the visual differences between status types.',
            },
        },
    },
}

// Without actions
export const WithoutActions: Story = {
    args: {
        versions: [mockActiveVersion, mockPlannedVersion],
    },
    parameters: {
        docs: {
            description: {
                story: 'Roadmap without action buttons. The bottom action section is hidden when no actions are provided.',
            },
        },
    },
}

// Single version without progress
export const VersionWithoutProgress: Story = {
    args: {
        versions: [
            {
                version: "v2.7.0",
                authors: ["ahmetson"],
                date: "Nov 1, 2023",
                status: "planned",
                features: [
                    "New feature exploration",
                    "UI/UX improvements"
                ],
                // No completedIssues or totalIssues
            }
        ],
        actions: mockActions,
    },
    parameters: {
        docs: {
            description: {
                story: 'Planned version without progress tracking. When completedIssues and totalIssues are not provided, the progress bar is not displayed.',
            },
        },
    },
}

// Empty roadmap
export const Empty: Story = {
    args: {
        versions: [],
        actions: mockActions,
    },
    parameters: {
        docs: {
            description: {
                story: 'Empty roadmap with no versions. Only the action buttons are displayed.',
            },
        },
    },
}

