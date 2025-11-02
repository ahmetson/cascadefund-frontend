import type { Meta, StoryObj } from '@storybook/react'
import React from 'react'
import CworkPanel from './CworkPanel'
import IssueList from '@/components/issue/IssueListPanel'
import ProfileList from './ProfileListPanel'
import Tabs from '@/components/Tabs'
import ProjectListPanel from '../project/ProjectListPanel'
import { ProjectInfoProps } from '../project/ProjectLink'

const meta: Meta<typeof CworkPanel> = {
    title: 'Components/Maintainer/Cascading Work Panel',
    component: CworkPanel,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A tabbed interface for managing cascading work dependencies. Displays three tabs: Dependencies (project dependencies), Following Issues (tracked issues), and Following Rockstars (followed contributors). Allows maintainers to browse and manage project dependencies, track issues, and monitor influential contributors.',
            },
        },
    },
    tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof CworkPanel>

// Default story
export const Default: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Default view of the Cascading Work panel showing the Dependencies tab by default. Users can switch between tabs to view dependencies, followed issues, and followed contributors.',
            },
        },
    },
}

// Dependencies tab active
export const DependenciesTab: Story = {
    parameters: {
        docs: {
            description: {
                story: 'Shows the Dependencies tab, displaying project dependencies with filtering options (All, Not on platform, On platform, Following) and search functionality.',
            },
        },
    },
}

const mockProjects: ProjectInfoProps[] = [
    {
        title: 'React Dashboard',
        isInfluencer: true,
        rating: {
            rating: 8,
            pointsLeft: 200
        },
        forks: 124,
        likes: 89,
        isFollowing: true,
        followers: 45,
        originalProject: 'facebook/react',
        originalProjectUrl: 'https://github.com/facebook/react',
        issue: '#1234 - Dashboard Enhancement',
        description: 'A modern React dashboard with TypeScript, Tailwind CSS, and real-time data visualization capabilities.',
        license: '',
        balance: 0,
        cascadeBalance: 0,
        totalAmount: 0,
        duration: '',
        lastActivity: 0,
        totalCommits: 0,
        commitsPerDay: '',
        openIssues: 0,
        closedIssues: 0,
        avgResponseTime: '',
        collaborators: [],
        createdTime: 0,
        author: {
            uri: '/profile/john-doe',
            children: 'John Doe',
            icon: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
            rating: {
                ratingType: 'maintainer',
                lvl: 9,
                maxLvl: 10,
                top: 5
            }
        },
        influencers: [],
        actions: [
            {
                variant: 'secondary',
                uri: '/data/project/react-dashboard',
                children: 'View',
                icon: 'project'
            }
        ]
    }
]

// Following Issues tab active
export const FollowingIssuesTab: Story = {
    render: () => {
        const tabs = [
            {
                label: 'Dependencies',
                key: "dependencies",
                content: <ProjectListPanel projects={mockProjects} />
            },
            {
                label: 'Following Issues',
                key: "following-issues",
                content: <IssueList />
            },
            {
                label: 'Following Rockstars',
                key: "following-rockstars",
                content: <ProfileList />
            }
        ]

        return <Tabs id="cwork" activeTab='following-issues' tabs={tabs} />
    },
    parameters: {
        docs: {
            description: {
                story: 'Shows the Following Issues tab, displaying a list of issues that the user is tracking.',
            },
        },
    },
}

// Following Rockstars tab active
export const FollowingRockstarsTab: Story = {
    render: () => {
        const tabs = [
            {
                label: 'Dependencies',
                key: "dependencies",
                content: <ProjectListPanel projects={mockProjects} />
            },
            {
                label: 'Following Issues',
                key: "following-issues",
                content: <IssueList />
            },
            {
                label: 'Following Rockstars',
                key: "following-rockstars",
                content: <ProfileList />
            }
        ]

        return <Tabs id="cwork" activeTab='following-rockstars' tabs={tabs} />
    },
    parameters: {
        docs: {
            description: {
                story: 'Shows the Following Rockstars tab, displaying a list of influential contributors that the user is following.',
            },
        },
    },
}

