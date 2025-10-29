import type { Meta, StoryObj } from '@storybook/react'
import ProjectCard from './ProjectLink'

const meta: Meta<typeof ProjectCard> = {
    title: 'Components/Project/Project Link',
    component: ProjectCard,
    parameters: {
        layout: 'padded',
        docs: {
            description: {
                component: 'A comprehensive project information panel displaying project details, statistics, and collaboration data.',
            },
        },
    },
    argTypes: {
        title: {
            control: 'text',
            description: 'The project title',
        },
        isInfluencer: {
            control: 'boolean',
            description: 'Whether the current user is an influencer for this project',
        },
        rating: {
            control: 'object',
            description: 'Project rating object with rating and pointsLeft',
        },
        forks: {
            control: { type: 'number', min: 0 },
            description: 'Number of forks',
        },
        likes: {
            control: { type: 'number', min: 0 },
            description: 'Number of likes',
        },
        isFollowing: {
            control: 'boolean',
            description: 'Whether the user is following this project',
        },
        followers: {
            control: { type: 'number', min: 0 },
            description: 'Number of followers',
        },
        originalProject: {
            control: 'text',
            description: 'Original project name',
        },
        originalProjectUrl: {
            control: 'text',
            description: 'URL to the original project',
        },
        issue: {
            control: 'text',
            description: 'Issue description',
        },
        description: {
            control: 'text',
            description: 'Project description',
        },
        license: {
            control: 'text',
            description: 'Project license',
        },
        balance: {
            control: { type: 'number', min: 0 },
            description: 'Project balance',
        },
        cascadeBalance: {
            control: { type: 'number', min: 0 },
            description: 'Cascade balance',
        },
        totalAmount: {
            control: { type: 'number', min: 0 },
            description: 'Total amount',
        },
        duration: {
            control: 'text',
            description: 'Project duration',
        },
        lastActivity: {
            control: { type: 'number', min: 0 },
            description: 'Last activity timestamp',
        },
        totalCommits: {
            control: { type: 'number', min: 0 },
            description: 'Total number of commits',
        },
        commitsPerDay: {
            control: 'text',
            description: 'Average commits per day',
        },
        openIssues: {
            control: { type: 'number', min: 0 },
            description: 'Number of open issues',
        },
        closedIssues: {
            control: { type: 'number', min: 0 },
            description: 'Number of closed issues',
        },
        avgResponseTime: {
            control: 'text',
            description: 'Average response time',
        },
        createdTime: {
            control: { type: 'number', min: 0 },
            description: 'Project creation timestamp',
        },
        author: {
            control: 'object',
            description: 'Project author information',
        },
        influencers: {
            control: 'object',
            description: 'List of project influencers',
        },
        actions: {
            control: 'object',
            description: 'Available actions for the project',
        },
    },
}

export default meta
type Story = StoryObj<typeof ProjectCard>

// Default story with realistic data
export const Default: Story = {
    args: {
        title: 'React TypeScript Starter',
        isInfluencer: false,
        rating: {
            rating: 6,
            pointsLeft: 650
        },
        forks: 128,
        likes: 342,
        isFollowing: false,
        followers: 45,
        originalProject: 'facebook/react',
        originalProjectUrl: 'https://github.com/facebook/react',
        issue: '#1234 - Add TypeScript support',
        description: 'A modern React starter template with TypeScript, Tailwind CSS, and Vite. Perfect for building scalable web applications with best practices built-in.',
        license: 'MIT License',
        balance: 2450,
        cascadeBalance: 1200,
        totalAmount: 3650,
        duration: '6 months',
        lastActivity: Date.now() - 2 * 24 * 60 * 60 * 1000, // 2 days ago
        totalCommits: 1247,
        commitsPerDay: '2.3',
        openIssues: 12,
        closedIssues: 89,
        avgResponseTime: '2.5 days',
        createdTime: Date.now() - 3 * 365 * 24 * 60 * 60 * 1000, // 3 years ago
        author: {
            uri: '/profile/john-doe',
            children: 'John Doe',
            icon: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
            rating: {
                ratingType: 'maintainer',
                lvl: 8,
                maxLvl: 10,
                top: 15
            }
        },
        influencers: [
            {
                uri: '/profile/jane-smith',
                children: 'Jane Smith',
                icon: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
                rating: {
                    ratingType: 'influencer',
                    lvl: 6,
                    maxLvl: 10,
                    top: 25
                }
            },
            {
                uri: '/profile/mike-johnson',
                children: 'Mike Johnson',
                icon: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
                rating: {
                    ratingType: 'contributor',
                    lvl: 4,
                    maxLvl: 10,
                    top: 50
                }
            },
        ],
        actions: [
            {
                variant: 'primary',
                uri: '/work/project-123',
                children: 'View Work',
                icon: 'work'
            },
            {
                variant: 'secondary',
                uri: '/cascade/project-123',
                children: 'Cascade Work',
                icon: 'cascade'
            }
        ]
    },
}

// Story with user as influencer
export const AsInfluencer: Story = {
    args: {
        ...Default.args,
        isInfluencer: true,
        isFollowing: true,
    },
}

// Story with high engagement
export const HighEngagement: Story = {
    args: {
        ...Default.args,
        title: 'Vue.js Ecosystem',
        rating: {
            rating: 8,
            pointsLeft: 150
        },
        forks: 1250,
        likes: 2100,
        followers: 1200,
        totalCommits: 5420,
        commitsPerDay: '8.7',
        openIssues: 3,
        closedIssues: 456,
        avgResponseTime: '4 hours',
        createdTime: Date.now() - 7 * 365 * 24 * 60 * 60 * 1000, // 7 years ago
        author: {
            uri: '/profile/evan-you',
            children: 'Evan You',
            icon: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
            rating: {
                ratingType: 'maintainer',
                lvl: 10,
                maxLvl: 10,
                top: 1
            }
        },
        influencers: [
            {
                uri: '/profile/vue-contributor-1',
                children: 'Vue Contributor 1',
                icon: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
                rating: {
                    ratingType: 'influencer',
                    lvl: 8,
                    maxLvl: 10,
                    top: 5
                }
            },
            {
                uri: '/profile/vue-contributor-2',
                children: 'Vue Contributor 2',
                icon: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
                rating: {
                    ratingType: 'influencer',
                    lvl: 7,
                    maxLvl: 10,
                    top: 10
                }
            },
            {
                uri: '/profile/vue-contributor-3',
                children: 'Vue Contributor 3',
                icon: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
                rating: {
                    ratingType: 'contributor',
                    lvl: 6,
                    maxLvl: 10,
                    top: 15
                }
            },
            {
                uri: '/profile/vue-contributor-4',
                children: 'Vue Contributor 4',
                icon: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
                rating: {
                    ratingType: 'contributor',
                    lvl: 5,
                    maxLvl: 10,
                    top: 25
                }
            },
            {
                uri: '/profile/vue-contributor-5',
                children: 'Vue Contributor 5',
                icon: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face',
                rating: {
                    ratingType: 'contributor',
                    lvl: 4,
                    maxLvl: 10,
                    top: 40
                }
            },
        ],
    },
}

// Story with low activity
export const LowActivity: Story = {
    args: {
        ...Default.args,
        title: 'Legacy PHP Library',
        rating: {
            rating: 2,
            pointsLeft: 800
        },
        forks: 5,
        likes: 12,
        followers: 3,
        totalCommits: 45,
        commitsPerDay: '0.1',
        openIssues: 23,
        closedIssues: 8,
        avgResponseTime: '2 weeks',
        createdTime: Date.now() - 1 * 365 * 24 * 60 * 60 * 1000, // 1 year ago
        author: {
            uri: '/profile/unknown',
            children: 'Unknown',
            icon: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
            rating: {
                ratingType: 'maintainer',
                lvl: 2,
                maxLvl: 10,
                top: 100
            }
        },
        influencers: [],
    },
}

// Story with many collaborators
export const ManyCollaborators: Story = {
    args: {
        ...Default.args,
        title: 'Open Source Database',
        rating: {
            rating: 7,
            pointsLeft: 300
        },
        forks: 500,
        likes: 1200,
        followers: 800,
        totalCommits: 3500,
        commitsPerDay: '5.2',
        openIssues: 15,
        closedIssues: 200,
        avgResponseTime: '1 day',
        author: {
            uri: '/profile/alice-johnson',
            children: 'Alice Johnson',
            icon: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
            rating: {
                ratingType: 'maintainer',
                lvl: 9,
                maxLvl: 10,
                top: 8
            }
        },
        influencers: [
            {
                uri: '/profile/bob-smith',
                children: 'Bob Smith',
                icon: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=32&h=32&fit=crop&crop=face',
                rating: {
                    ratingType: 'contributor',
                    lvl: 7,
                    maxLvl: 10,
                    top: 12
                }
            },
            {
                uri: '/profile/carol-davis',
                children: 'Carol Davis',
                icon: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=32&h=32&fit=crop&crop=face',
                rating: {
                    ratingType: 'contributor',
                    lvl: 6,
                    maxLvl: 10,
                    top: 18
                }
            },
            {
                uri: '/profile/david-wilson',
                children: 'David Wilson',
                icon: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face',
                rating: {
                    ratingType: 'contributor',
                    lvl: 5,
                    maxLvl: 10,
                    top: 25
                }
            },
            {
                uri: '/profile/eva-brown',
                children: 'Eva Brown',
                icon: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=32&h=32&fit=crop&crop=face',
                rating: {
                    ratingType: 'contributor',
                    lvl: 4,
                    maxLvl: 10,
                    top: 35
                }
            },
        ],
    },
}

// Story with minimal data
export const Minimal: Story = {
    args: {
        title: 'Simple Project',
        isInfluencer: false,
        rating: {
            rating: 0,
            pointsLeft: 1000
        },
        forks: 0,
        likes: 0,
        isFollowing: false,
        followers: 0,
        originalProject: 'original/repo',
        originalProjectUrl: 'https://github.com/original/repo',
        issue: '#1 - Initial issue',
        description: 'A simple project description.',
        license: 'MIT',
        balance: 0,
        cascadeBalance: 0,
        totalAmount: 0,
        duration: '1 month',
        lastActivity: Date.now() - 1 * 24 * 60 * 60 * 1000, // 1 day ago
        totalCommits: 1,
        commitsPerDay: '0.1',
        openIssues: 0,
        closedIssues: 0,
        avgResponseTime: 'N/A',
        createdTime: Date.now() - 30 * 24 * 60 * 60 * 1000, // 30 days ago
        author: {
            uri: '/profile/new-developer',
            children: 'New Developer',
            icon: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
            rating: {
                ratingType: 'maintainer',
                lvl: 1,
                maxLvl: 10,
                top: 500
            }
        },
        influencers: [],
        actions: [
            {
                variant: 'primary',
                uri: '/work/project-minimal',
                children: 'View Work',
                icon: 'work'
            }
        ]
    },
}
